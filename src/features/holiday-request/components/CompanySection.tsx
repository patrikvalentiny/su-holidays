import { FormInput } from '../../../components/FormInput'
import { FormSection } from '../../../components/FormSection'
import type { HolidayRequestData } from '../types'

interface CompanySectionProps {
    data: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CompanySection: React.FC<CompanySectionProps> = ({ data, errors, onChange }) => {
    return (
        <FormSection title="Company Information">
            <FormInput
                type="text"
                name="companyName"
                value={data.companyName}
                onChange={onChange}
                label="Company Name"
                required
                placeholder="Enter company name"
            />
            <FormInput
                type="text"
                name="companyCVR"
                value={data.companyCVR}
                onChange={onChange}
                label="Company CVR"
                placeholder="8 digits"
                required
                error={errors.companyCVR}
            />
        </FormSection>
    )
}
