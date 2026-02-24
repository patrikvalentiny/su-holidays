import { useState, useCallback } from 'react'
import type { HolidayRequestData } from '../types'
import { validateCPR, validateCVR } from '../utils/validation'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

const STORAGE_KEY = 'holiday-request-form'

const INITIAL_STATE: HolidayRequestData = {
    employeeName: '',
    employeeCPR: '',
    companyName: '',
    companyCVR: '',
    fromDate: '',
    toDate: '',
    workingDays: '',
    employeeSignatureDate: '',
}

export const useHolidayRequestForm = () => {
    const [formData, setFormData] = useLocalStorage<HolidayRequestData>(STORAGE_KEY, INITIAL_STATE)
    const [errors, setErrors] = useState<Partial<Record<keyof HolidayRequestData, string>>>({})

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear error when user changes input
        if (errors[name as keyof HolidayRequestData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }

        // Validate specific fields on change
        if (name === 'employeeCPR') {
            if (value && !validateCPR(value)) {
                setErrors((prev) => ({ ...prev, employeeCPR: 'Invalid CPR format (DDMMYY-SSSS or DDMMYYSSSS)' }))
            } else {
                setErrors((prev) => ({ ...prev, employeeCPR: undefined }))
            }
        }

        if (name === 'companyCVR') {
            if (value && !validateCVR(value)) {
                setErrors((prev) => ({ ...prev, companyCVR: 'Invalid CVR format (8 digits)' }))
            } else {
                setErrors((prev) => ({ ...prev, companyCVR: undefined }))
            }
        }
    }, [errors, setFormData])


    const isFormValid = useCallback((): boolean => {
        const isValid = !!(
            formData.employeeName &&
            formData.employeeCPR &&
            formData.fromDate &&
            formData.toDate &&
            formData.workingDays &&
            validateCPR(formData.employeeCPR) &&
            validateCVR(formData.companyCVR) &&
            (!formData.fromDate || !formData.toDate || formData.fromDate <= formData.toDate) &&
            formData.companyName
        )
        return isValid
    }, [formData])

    const resetSection = useCallback((fields: (keyof HolidayRequestData)[]) => {
        setFormData((prev) => {
            const updated = { ...prev }
            fields.forEach((field) => {
                updated[field] = INITIAL_STATE[field]
            })
            return updated
        })
        setErrors((prev) => {
            const updated = { ...prev }
            fields.forEach((field) => {
                updated[field] = undefined
            })
            return updated
        })
    }, [setFormData])

    return {
        formData,
        errors,
        handleChange,
        isFormValid,
        resetSection,
    }
}
