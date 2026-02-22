import { lazy, Suspense } from 'react'
import type { HolidayRequestData } from '../types'
import { EmployeeSection } from './EmployeeSection'
import { CompanySection } from './CompanySection'
import { HolidayDatesSection } from './HolidayDatesSection'
import { SignatureSection } from './SignatureSection'

const PDFDownloadButton = lazy(() => import('./PDFDownloadButton'))

interface HolidayRequestFormProps {
    formData: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isFormValid: () => boolean
}

export const HolidayRequestForm: React.FC<HolidayRequestFormProps> = ({
    formData,
    errors,
    onFormChange,
    isFormValid,
}) => {
    const isValid = isFormValid()

    return (
        <form className="space-y-2">
            <EmployeeSection data={formData} errors={errors} onChange={onFormChange} />
            <CompanySection data={formData} errors={errors} onChange={onFormChange} />
            <HolidayDatesSection data={formData} onChange={onFormChange} />
            <SignatureSection data={formData} onChange={onFormChange} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                {isValid ? (
                    <Suspense fallback={<button disabled className="flex-1 btn btn-primary p-2">Loading...</button>}>
                        <PDFDownloadButton data={formData} />
                    </Suspense>
                ) : (
                    <button disabled className="flex-1 btn btn-primary btn-disabled p-2">
                        Fill All Fields to Generate PDF
                    </button>
                )}
            </div>


            {/* Helper Text */}
            {!isValid ? (
                <div role="alert" className="alert alert-info mt-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>Required fields must be filled to generate the PDF</span>
                </div>
            ) : (
                <div className="alert alert-success mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>All required fields are filled. You can now download the PDF.</span>
                </div>
            )}


        </form>
    )
}
