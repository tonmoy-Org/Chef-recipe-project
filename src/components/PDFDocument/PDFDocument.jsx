import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { PDFGenerator } from '../PDFGenerator/PDFGenerator';

const PDFDocument = () => {
    return (
        <div>
            <PDFDownloadLink document={<PDFGenerator></PDFGenerator>} fileName="my-document.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : <button className='brn btn bg-success'>Download PDF</button>
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PDFDocument;