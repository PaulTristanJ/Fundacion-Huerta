/**
 * Componente Card reutilizable
 * 
 * @param {ReactNode} children - Contenido de la tarjeta
 * @param {string} className - Clases CSS adicionales
 * @param {boolean} hover - Activa efecto hover
 * @param {function} onClick - Función de clic (convierte en clickeable)
 */
export default function Card({
    children,
    className = '',
    hover = false,
    onClick
}) {
    const baseStyles = 'rounded-xl bg-white p-6 shadow-md transition-shadow'
    const hoverStyles = hover ? 'hover:shadow-lg cursor-pointer' : ''
    const clickStyles = onClick ? 'cursor-pointer' : ''

    const cardClasses = `${baseStyles} ${hoverStyles} ${clickStyles} ${className}`

    return (
        <div className={cardClasses} onClick={onClick}>
            {children}
        </div>
    )
}