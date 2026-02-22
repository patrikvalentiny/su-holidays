import { HolidayRequestForm, useHolidayRequestForm } from './features/holiday-request'
import './App.css'

export default function App() {
  const { formData, errors, handleChange, handleReset, isFormValid } = useHolidayRequestForm()

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-base-content">SU Holiday Request Form</h1>
        </div>

        {/* Form */}
        <HolidayRequestForm
          formData={formData}
          errors={errors}
          onFormChange={handleChange}
          onReset={handleReset}
          isFormValid={isFormValid}
        />

        {/* Footer */}
        <footer className="footer footer-center p-4 text-base-content/50">
          <aside>
            <p>SU Holiday Request Form Generator</p>
            <p>Made with 💙 by @patrikvalentiny</p>
          </aside>
        </footer>
      </div>
    </div>
  )
}
