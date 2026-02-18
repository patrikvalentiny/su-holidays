import { FormInput } from '../../../components/FormInput'
import { FormSection } from '../../../components/FormSection'
import type { HolidayRequestData } from '../types'

interface SignatureSectionProps {
    data: HolidayRequestData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ data, onChange }) => {
    return (
        <FormSection title="Signature">
            <FormInput
                type="date"
                name="employeeSignatureDate"
                value={data.employeeSignatureDate}
                onChange={onChange}
                label="Date of Signature"
                required
            />
        </FormSection>
    )
}
