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
        <section className={`collapse collapse-arrow shadow-sm rounded-lg ${isValid === false ? 'bg-error/10' : 'bg-base-100'}`}>
            <input type="checkbox" defaultChecked name={title.toLowerCase().replace(/\s+/g, '-')} />
            <h2 className={`collapse-title text-xl font-medium ${titleClass}`}>
                {title}
            </h2>
            <div className="collapse-content">
                <div className="">{children}</div>
                {onReset && (
                    <div className="flex justify-end pt-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-ghost text-base-content/70 hover:text-base-content"
                            onClick={onReset}
                        >
                            Reset Section
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
