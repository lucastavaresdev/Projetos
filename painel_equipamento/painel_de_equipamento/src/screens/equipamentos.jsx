import React, { Component } from 'react';
import {tracking_equipamentos} from '../Funcions'
 import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


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


  render() {
    
    this.listar()

    const { SearchBar } = Search;
    const columns = [{
      dataField: 'marca',
      text: 'marca'
    },];
    
    
  return (
    <div className='container-fluid p-5'>
          <ToolkitProvider keyField="id" data={  this.state.data } columns={ columns } search >

            {
              props => (
                <div>
                  <h3>Tracking_equipamentos</h3>
                  <SearchBar { ...props.searchProps } />
                  <hr />
                  <BootstrapTable
                    { ...props.baseProps }
                  />
                </div>
              )
            }
          </ToolkitProvider>
    </div>
    );
  }
}

  

export default Equipamento;
