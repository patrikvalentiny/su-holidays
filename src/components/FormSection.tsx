import React from 'react'

interface FormSectionProps {
    title: string
    children: React.ReactNode
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
    return (
        <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
                <h2 className="card-title text-xl mb-4 text-base-content border-b border-base-200 pb-2">
                    {title}
                </h2>
                <div className="space-y-4">{children}</div>
            </div>
        </div>
    )
}
