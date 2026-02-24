import { FormInput } from '../../../components/FormInput'
import { FormSection } from '../../../components/FormSection'
import type { HolidayRequestData } from '../types'

interface HolidayDatesSectionProps {
    data: HolidayRequestData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean
    onReset?: () => void
}

export const HolidayDatesSection: React.FC<HolidayDatesSectionProps> = ({ data, onChange, isValid, onReset }) => {
    const dateRangeError =
        data.fromDate && data.toDate && data.toDate < data.fromDate
            ? 'End date cannot be before start date'
            : undefined

    return (
        <FormSection title="Holiday Dates" isValid={isValid} onReset={onReset}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0">
                <FormInput
                    type="date"
                    name="fromDate"
                    value={data.fromDate}
                    onChange={onChange}
                    label="From Date"
                    required
                    error={dateRangeError}
                />
                <FormInput
                    type="date"
                    name="toDate"
                    value={data.toDate}
                    onChange={onChange}
                    label="To Date"
                    required
                    error={dateRangeError}
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
                step="1"
                hint="Expected number of working days during holidays"
            />
        </FormSection>
    )
}
