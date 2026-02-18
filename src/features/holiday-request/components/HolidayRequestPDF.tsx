import { Document, Page, Text, View } from '@react-pdf/renderer'
import type { HolidayRequestData } from '../types'
import { pdfStyles } from '../utils/pdfStyles'
import { formatDateForPDF } from '../utils/dateUtils'

interface HolidayRequestPDFProps {
    data: HolidayRequestData
}

export const HolidayRequestPDF: React.FC<HolidayRequestPDFProps> = ({ data }) => (
    <Document>
        <Page size="A4" style={pdfStyles.page}>
            <View style={pdfStyles.title}>
                <Text>HOLIDAY REQUEST FORM</Text>
            </View>

            <View style={pdfStyles.section}>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>EMPLOYEE NAME:</Text>
                    <Text style={pdfStyles.value}>{data.employeeName}</Text>
                </View>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>EMPLOYEE CPR NUMBER:</Text>
                    <Text style={pdfStyles.value}>{data.employeeCPR}</Text>
                </View>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>COMPANY NAME:</Text>
                    <Text style={pdfStyles.value}>{data.companyName}</Text>
                </View>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>COMPANY CVR:</Text>
                    <Text style={pdfStyles.value}>{data.companyCVR}</Text>
                </View>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>HOLIDAYS REQUESTED</Text>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>FROM:</Text>
                    <Text style={pdfStyles.value}>{formatDateForPDF(data.fromDate)}</Text>
                </View>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>TO:</Text>
                    <Text style={pdfStyles.value}>{formatDateForPDF(data.toDate)}</Text>
                </View>
                <View style={pdfStyles.row}>
                    <Text style={pdfStyles.label}>TOTAL NUMBER OF WORKING DAYS:</Text>
                    <Text style={pdfStyles.value}>{data.workingDays}</Text>
                </View>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>SIGNATURES</Text>
                <View style={pdfStyles.signatureRow}>
                    <View style={pdfStyles.signatureBox}>
                        <Text>EMPLOYEE SIGNATURE</Text>
                        <View style={pdfStyles.signatureLine} />
                    </View>
                    <View style={pdfStyles.signatureBox}>
                        <Text>EMPLOYER SIGNATURE</Text>
                        <View style={pdfStyles.signatureLine} />
                    </View>
                </View>
                <View style={[pdfStyles.row, { marginTop: 30 }]}>
                    <Text style={pdfStyles.label}>DATE OF SIGNATURE:</Text>
                    <Text style={pdfStyles.value}>{formatDateForPDF(data.employeeSignatureDate)}</Text>
                </View>
            </View>
        </Page>
    </Document>
)
