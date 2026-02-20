"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const LOGOS = [
    { src: "/images/logos/Agape.png", alt: "Ágape" },
    { src: "/images/logos/Cafe-balam.png", alt: "Café Balam" },
    { src: "/images/logos/Caritas-Aguascalientes.png", alt: "Cáritas Aguascalientes" },
    { src: "/images/logos/cedros-kinder.jpg", alt: "Cedros Kinder" },
    { src: "/images/logos/descubre.png", alt: "Descubre" },
    { src: "/images/logos/dif.jpg", alt: "DIF" },
    { src: "/images/logos/FM4.png", alt: "FM4" },
    { src: "/images/logos/GOBIERNO-DEL-ESTADO.jpg", alt: "Gobierno del Estado" },
    { src: "/images/logos/grupo-cava.jpg", alt: "Grupo Cava" },
    { src: "/images/logos/incytea.webp", alt: "INCYTEA" },
    { src: "/images/logos/INJUVA.jpg", alt: "INJUVA" },
    { src: "/images/logos/instituto-tepeyac.webp", alt: "Instituto Tepeyac" },
    { src: "/images/logos/Logo-LETSA.webp", alt: "LETSA" },
    { src: "/images/logos/Tableros-Bonaterra.jpg", alt: "Tableros Bonaterra" },
    { src: "/images/logos/tmm.png", alt: "TMM" },
    { src: "/images/logos/UP.png", alt: "UP" },
    { src: "/images/logos/Vifac.png", alt: "VIFAC" },
];

export default function LogoCarousel({ logos = LOGOS, speed = 60, height = 96 }) {
    const trackRef = useRef(null);
    const animRef = useRef(null);
    const posRef = useRef(0);
    const [ready, setReady] = useState(false);

    // Duplicamos para loop infinito
    const items = [...logos, ...logos];

    useEffect(() => {
        // Pequeño delay para que el DOM esté completamente pintado
        const timeout = setTimeout(() => setReady(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!ready) return;
        const track = trackRef.current;
        if (!track) return;

        let last = null;

        const tick = (ts) => {
            if (last === null) last = ts;
            const dt = (ts - last) / 1000;
            last = ts;

            const halfWidth = track.scrollWidth / 2;
            if (halfWidth === 0) {
                animRef.current = requestAnimationFrame(tick);
                return;
            }

            posRef.current += speed * dt;
            if (posRef.current >= halfWidth) posRef.current -= halfWidth;

            track.style.transform = `translateX(-${posRef.current}px)`;
            animRef.current = requestAnimationFrame(tick);
        };

        animRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animRef.current);
    }, [ready, speed]);

    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => {
        const track = trackRef.current;
        if (!track) return;
        let last = null;
        const tick = (ts) => {
            if (last === null) last = ts;
            const dt = (ts - last) / 1000;
            last = ts;
            const halfWidth = track.scrollWidth / 2;
            posRef.current += speed * dt;
            if (posRef.current >= halfWidth) posRef.current -= halfWidth;
            track.style.transform = `translateX(-${posRef.current}px)`;
            animRef.current = requestAnimationFrame(tick);
        };
        animRef.current = requestAnimationFrame(tick);
    };

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: `${height}px`,
                minHeight: `${height}px`,
                background: "#F9F9F8",
                borderTop: "1px solid #E8E8E6",
                borderBottom: "1px solid #E8E8E6",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Degradados laterales */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
                    background: "linear-gradient(to right, #F9F9F8, transparent)",
                    zIndex: 2, pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
                    background: "linear-gradient(to left, #F9F9F8, transparent)",
                    zIndex: 2, pointerEvents: "none",
                }}
            />

            {/* Pista animada */}
            <div
                style={{ width: "100%", overflow: "hidden", display: "flex", alignItems: "center" }}
                onMouseEnter={pause}
                onMouseLeave={resume}
            >
                <div
                    ref={trackRef}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        willChange: "transform",
                        // Sin width fijo — el flex calcula el ancho real
                    }}
                >
                    {items.map((logo, i) => (
                        <div
                            key={i}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0 36px",
                                height: `${height}px`,
                                flexShrink: 0,
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    maxHeight: "54px",
                                    maxWidth: "130px",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain",
                                    filter: "grayscale(100%)",
                                    opacity: 0.65,
                                    transition: "filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                                    display: "block",
                                    userSelect: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = "grayscale(0%)";
                                    e.currentTarget.style.opacity = "1";
                                    e.currentTarget.style.transform = "scale(1.08)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = "grayscale(100%)";
                                    e.currentTarget.style.opacity = "0.65";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}





