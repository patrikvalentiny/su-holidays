import { FormInput } from '../../../components/FormInput'
import { FormSection } from '../../../components/FormSection'
import type { HolidayRequestData } from '../types'

interface SignatureSectionProps {
    data: HolidayRequestData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean
    onReset?: () => void
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ data, onChange, isValid, onReset }) => {
    return (
        <FormSection title="Signature" isValid={isValid} onReset={onReset}>
            <FormInput
                type="date"
                name="employeeSignatureDate"
                value={data.employeeSignatureDate}
                onChange={onChange}
                label="Date of Signature"
            />
        </FormSection>
    )
}
