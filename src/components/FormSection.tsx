import React from 'react'

interface FormSectionProps {
    title: string
    children: React.ReactNode
    isValid?: boolean
    onReset?: () => void
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children, isValid, onReset }) => {
    const titleClass =
        isValid === true
            ? 'text-success'
            : isValid === false
                ? 'text-error'
                : 'text-base-content'

    return (
        <div className={`collapse collapse-arrow shadow-sm rounded-lg ${isValid === false ? 'bg-error/10' : 'bg-base-100'}`}>
            <input type="checkbox" defaultChecked />
            <div className={`collapse-title text-xl font-medium ${titleClass}`}>
                {title}
            </div>
            <div className="collapse-content">
                <div className="space-y-4 pt-2">{children}</div>
                {onReset && (
                    <div className="flex justify-end pt-3">
                        <button
                            type="button"
                            className="btn btn-xs btn-ghost opacity-60 hover:opacity-100"
                            onClick={onReset}
                        >
                            Reset
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
