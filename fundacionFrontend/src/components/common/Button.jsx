import Link from 'next/link'

/**
 * Componente Button reutilizable
 * 
 * @param {string} variant - Estilo del botón: 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} size - Tamaño: 'sm' | 'md' | 'lg'
 * @param {string} href - Si se proporciona, renderiza como Link
 * @param {ReactNode} children - Contenido del botón
 * @param {string} className - Clases CSS adicionales
 * @param {boolean} disabled - Estado deshabilitado
 * @param {function} onClick - Función de clic
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    children,
    className = '',
    disabled = false,
    onClick,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg'

    const variants = {
        primary: 'bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-neutral-600 text-white shadow-sm hover:bg-neutral-700 focus:ring-neutral-500',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
        ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}