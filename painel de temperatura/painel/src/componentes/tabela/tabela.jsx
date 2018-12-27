import React,{Component} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';







class TablePage extends Component{

    state = { 
        rows: [
            {
                'name': '0',
                'graus': '0',
            }
        ]
        }

        componentDidMount () {
            axios.get(`http://localhost:3001/umdi/temperatura_media_hora/${this.props.macpage}`)
                    .then(res => {
                    this.setState({ rows : res.data });
            })
        }

render(){

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
        ]
    };



    return (
        
        <MDBTable responsive striped>
            <MDBTableHead columns={data.columns} />
           
                <MDBTableBody rows={this.state.rows} />

        </MDBTable>
    );

    }

};

export default TablePage;