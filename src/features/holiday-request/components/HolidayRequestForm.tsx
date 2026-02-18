import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button } from '../../../components/Button'
import { useDebounce } from '../../../hooks/useDebounce'
import type { HolidayRequestData } from '../types'
import { HolidayRequestPDF } from './HolidayRequestPDF'
import { EmployeeSection } from './EmployeeSection'
import { CompanySection } from './CompanySection'
import { HolidayDatesSection } from './HolidayDatesSection'
import { SignatureSection } from './SignatureSection'

interface HolidayRequestFormProps {
    formData: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onReset: () => void
    isFormValid: () => boolean
}

export const HolidayRequestForm: React.FC<HolidayRequestFormProps> = ({
    formData,
    errors,
    onFormChange,
    onReset,
    isFormValid,
}) => {
    const debouncedFormData = useDebounce(formData, 1000)
    const isValid = isFormValid()

    return (
        <form className="space-y-6">
            <EmployeeSection data={formData} errors={errors} onChange={onFormChange} />
            <CompanySection data={formData} errors={errors} onChange={onFormChange} />
            <HolidayDatesSection data={formData} onChange={onFormChange} />
            <SignatureSection data={formData} onChange={onFormChange} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="secondary" onClick={onReset} className="flex-1 btn-outline">
                    Reset Form
                </Button>
                {isValid ? (
                    <PDFDownloadLink
                        document={<HolidayRequestPDF data={debouncedFormData} />}
                        fileName={`Holiday_Request_${debouncedFormData.employeeName.replace(/\s+/g, '_')}.pdf`}
                        className="flex-1"
                    >
                        {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
                    </PDFDownloadLink>
                ) : (
                    <Button variant="primary" disabled className="flex-1 btn-disabled">
                        Fill All Fields to Generate PDF
                    </Button>
                )}
            </div>

            {/* Helper Text */}
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
        </form>
    )
}
