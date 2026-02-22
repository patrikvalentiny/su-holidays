import { PDFDownloadLink } from '@react-pdf/renderer'
import type { HolidayRequestData } from '../types'
import { HolidayRequestPDF } from './HolidayRequestPDF'

interface PDFDownloadButtonProps {
    data: HolidayRequestData
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ data }) => (
    <PDFDownloadLink
        document={<HolidayRequestPDF data={data} />}
        fileName={`Holiday_Request_${data.employeeName.replace(/\s+/g, '_')}.pdf`}
        className="btn btn-primary flex-1 p-2"
    >
        {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
    </PDFDownloadLink>
)

export default PDFDownloadButton
