import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className,
    children,
    ...props
}) => {
    const variantStyles = {
        primary: 'btn-primary',
        secondary: 'btn-outline',
    }

    return (
        <button
            {...props}
            className={`btn ${variantStyles[variant]} ${className || ''}`}
        >
            {children}
        </button>
    )
}
