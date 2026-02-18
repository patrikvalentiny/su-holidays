import { StyleSheet } from '@react-pdf/renderer'

export const pdfStyles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        width: '40%',
    },
    value: {
        width: '60%',
        borderBottomWidth: 1,
        paddingBottom: 2,
    },
    signatureRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    signatureBox: {
        width: '45%',
    },
    signatureLine: {
        borderTopWidth: 1,
        marginTop: 30,
        paddingTop: 5,
    },
})
