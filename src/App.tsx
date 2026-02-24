import { HolidayRequestForm, useHolidayRequestForm } from './features/holiday-request'
import './App.css'

export default function App() {
  const { formData, errors, handleChange, isFormValid, resetSection } = useHolidayRequestForm()

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
        <div className="navbar-start">
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">SU Holidays Request Form</a>
        </div>
        <div className="navbar-end">

        </div>
      </div>
      <div className="py-8 px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Form */}
          <HolidayRequestForm
            formData={formData}
            errors={errors}
            onFormChange={handleChange}
            isFormValid={isFormValid}
            onResetSection={resetSection}
          />

          {/* Footer */}
          <footer className="footer footer-center p-4 text-base-content/50">
            <aside>
              <p>Your data is stored locally in your browser and is never sent to any server.</p>
              <p>Made with 🧡 by @patrikvalentiny { }</p>
              <p>All rights reserved @{new Date().getFullYear()}</p>
            </aside>
          </footer>
        </div>
      </div>
    </div>
  )
}
