"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
    "/images/programs/collage/1.jpeg",
    "/images/programs/collage/2.jpeg",
    "/images/programs/collage/3.jpeg",
    "/images/programs/collage/4.jpeg",
    "/images/programs/collage/5.jpeg",
    "/images/programs/collage/6.jpeg",
    "/images/programs/collage/7.jpeg",
    "/images/programs/collage/8.jpeg",
    "/images/programs/collage/9.jpeg",
    "/images/programs/collage/10.jpeg",
    "/images/programs/collage/11.jpeg",
    "/images/programs/collage/12.jpeg",
    "/images/programs/collage/13.jpeg",
    "/images/programs/collage/14.jpeg",
    "/images/programs/collage/23.jpeg",
];

export default function CollageCarousel({ photos = PHOTOS }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const cols = 5;
        const rows = 3;

        const usedPositions = new Set();

        const generated = photos.slice(0, cols * rows).map((photo, i) => {
            let col, row, key;

            do {
                col = Math.floor(Math.random() * cols);
                row = Math.floor(Math.random() * rows);
                key = `${col}-${row}`;
            } while (usedPositions.has(key));

            usedPositions.add(key);

            return {
                src: photo,
                id: i,
                col,
                row,
                rotate: Math.random() * 18 - 9, // más rotación
                scale: 0.85 + Math.random() * 0.35, // tamaños más variados
                offsetX: Math.random() * 40 - 20, // desplazamiento horizontal
                offsetY: Math.random() * 40 - 20, // desplazamiento vertical
            };
        });

        setItems(generated);
    }, [photos]);

    return (
        <section className="relative w-full h-[420px] bg-neutral-50 overflow-hidden">

            <div className="grid grid-cols-5 grid-rows-3 w-full h-full place-items-center">

                {items.map((item) => (
                    <div
                        key={item.id}
                        className="relative w-[180px] h-[130px] rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110"
                        style={{
                            gridColumn: item.col + 1,
                            gridRow: item.row + 1,
                            transform: `
                translate(${item.offsetX}px, ${item.offsetY}px)
                rotate(${item.rotate}deg)
                scale(${item.scale})
              `,
                        }}
                    >
                        <Image
                            src={item.src}
                            alt="Foto fundación"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}

            </div>

        </section>
    );
}