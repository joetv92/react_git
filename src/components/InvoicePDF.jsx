import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#fff',
        fontFamily: 'Helvetica' // Standard PDF font
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '2px solid #333',
        paddingBottom: 10,
        marginBottom: 20
    },
    title: { fontSize: 24, color: '#1a5f7a', fontWeight: 'bold' },
    infoSection: { marginBottom: 30, fontSize: 12 },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eee'
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 30,
    },
    tableColHeader: {
        width: '25%',
        backgroundColor: '#f8f9fa',
        padding: 5
    },
    tableCol: { width: '25%', padding: 5 },
    tableCellHeader: { fontSize: 12, fontWeight: 'bold' },
    tableCell: { fontSize: 10 },
    total: {
        marginTop: 30,
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1a5f7a'
    }
});

const InvoicePDF = ({ data }) => (
    <Document title={`Invoice_${data.orderId}`}>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>INVOICE</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}># {data.orderId}</Text>
                </View>
                <Text style={{ fontSize: 10 }}>Date: {new Date().toLocaleDateString()}</Text>
            </View>

            {/* Customer Info */}
            <View style={styles.infoSection}>
                <Text style={{ fontWeight: 'bold' }}>Bill To:</Text>
                <Text>{data.customerName}</Text>
            </View>

            {/* Table */}
            <View style={styles.table}>
                <View style={[styles.tableRow, { backgroundColor: '#f0f0f0' }]}>
                    <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Item</Text></View>
                    <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Qty</Text></View>
                    <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Price</Text></View>
                    <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Total</Text></View>
                </View>

                {data.items.map((item, index) => (
                    <View style={styles.tableRow} key={index}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{item.name}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>{item.qty}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>${item.price}</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>${(item.price * item.qty).toFixed(2)}</Text></View>
                    </View>
                ))}
            </View>

            {/* Total */}
            <Text style={styles.total}>Total: ${data.total.toFixed(2)}</Text>
        </Page>
    </Document>
);

export default InvoicePDF;