import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
    const data = {
        columns: [
            {
                label: 'Hora',
                field: 'hora',
                sort: 'asc'
            },
            {
                label: 'Temperatura',
                field: 'temperatura',
                sort: 'asc'
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc'
            },
        ],
        rows: [
            {
                'hora': '7h',
                'temperatura': '23',
                'status': '2',
            },
            {
                'hora': '8h',
                'temperatura': '23',
                'status': '1',
            },
            {
                'hora': '9h',
                'temperatura': '23,5',
                'status': '1',
            }
        ]
    };

    return (
        <MDBTable responsive striped>
            <MDBTableHead columns={data.columns} />
            <MDBTableBody rows={data.rows} />
        </MDBTable>
    );
};

export default TablePage;