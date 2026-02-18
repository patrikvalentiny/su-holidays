import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    required?: boolean
    error?: string
}

export const FormInput: React.FC<FormInputProps> = ({
    label,
    required = false,
    error,
    className,
    ...props
}) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-medium">
                    {label}
                    {required && <span className="text-error ml-1">*</span>}
                </span>
            </div>
            <input
                {...props}
                className={`input input-bordered w-full ${error ? 'input-error' : ''} ${className || ''}`}
            />
            {error && (
                <div className="label">
                    <span className="label-text-alt text-error">{error}</span>
                </div>
            )}
        </label>
    )
}
