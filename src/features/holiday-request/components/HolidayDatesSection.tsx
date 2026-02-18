import { FormInput } from '../../../components/FormInput'
import { FormSection } from '../../../components/FormSection'
import type { HolidayRequestData } from '../types'

interface HolidayDatesSectionProps {
    data: HolidayRequestData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const HolidayDatesSection: React.FC<HolidayDatesSectionProps> = ({ data, onChange }) => {
    return (
        <FormSection title="Holiday Dates">
            <div className="grid grid-cols-2 gap-4">
                <FormInput
                    type="date"
                    name="fromDate"
                    value={data.fromDate}
                    onChange={onChange}
                    label="From Date"
                    required
                />
                <FormInput
                    type="date"
                    name="toDate"
                    value={data.toDate}
                    onChange={onChange}
                    label="To Date"
                    required
                />
            </div>
            <FormInput
                type="number"
                name="workingDays"
                value={data.workingDays}
                onChange={onChange}
                label="Total Working Days"
                required
                min="0"
                step="0.5"
            />
        </FormSection>
    )
}
