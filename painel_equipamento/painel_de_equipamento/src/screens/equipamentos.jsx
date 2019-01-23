import React, { Component } from 'react';
import {tracking_equipamentos} from '../Funcions'
 import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'


class Equipamento extends Component {
  constructor(){
    super() 
    this.state = { data: [] };
  }

  listar() {
    tracking_equipamentos().then(json => {
        this.setState({ data: json.data})
    })
  }

  componentDidMount(){
    this.listar()
  }

  render() {
    
   

    const { SearchBar } = Search;
    const columns = [{
                                      dataField: 'gateway',
                                      text: 'Gateway'
                                    },
                                    {
                                      dataField: 'setor',
                                      text: 'setor'
                                    },
                                    {
                                      dataField: 'rssi',
                                      text: 'rssi'
                                    },
                                    {
                                      dataField: 'nome',
                                      text: 'nome'
                                    },
                                    {
                                      dataField: 'marca',
                                      text: 'marca'
                                    },
                                    {
                                      dataField: 'serie',
                                      text: 'serie'
                                    },
                                    {
                                      dataField: 'patrimonio',
                                      text: 'patrimonio'
                                    },
                                    {
                                      dataField: 'minor',
                                      text: 'minor'
                                    },
                                    {
                                      dataField: 'minor',
                                      text: 'minor'
                                    },
                                    {
                                      dataField: 'checkin',
                                      text: 'checkin'
                                    },
                                    {
                                      dataField: 'checkout',
                                      text: 'checkout'
                                    },
                                    {
                                      dataField: 'tempo',
                                      text: 'tempo'
                                    },
  ];
    
    
  
  return (
    <div className='container-fluid p-5'>
          <ToolkitProvider keyField="id" data={  this.state.data } columns={ columns } search >

            {
              props => (
                <div>
                  <h3>Tracking_equipamentos</h3>
                  <SearchBar { ...props.searchProps } />
                  <hr />
                  <BootstrapTable rowStyle={ { backgroundColor: 'red' } }  { ...props.baseProps }  />
                </div>
              )
            }
          </ToolkitProvider>
    </div>
    );
  }
}

  

export default Equipamento;
