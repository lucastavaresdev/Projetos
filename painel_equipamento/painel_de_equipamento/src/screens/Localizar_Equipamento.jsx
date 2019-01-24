import React, { Component } from 'react';
import {tracking_equipamentos} from '../Funcions'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './scss/_base.scss'
import './scss/_variaveis.scss'


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
    const columns = [
                                    {
                                      dataField: 'nome',
                                      text: 'Equipamento',
                                      sort: true
                                    },
                                    {
                                      dataField: 'setor',
                                      text: 'Localizacao',
                                      sort: true
                                    },
                                    {
                                      dataField: 'checkout',
                                      text: 'checkout',
                                      sort: true
                                    },
                                    {
                                      dataField: 'tempo',
                                      text: 'tempo',
                                      sort: true
                                    },
  ];
    
  const pageButtonRenderer = ({
        page,
        active,
        disable,
        title,
        onPageChange
      }) => {
        const handleClick = (e) => {
          e.preventDefault();
          onPageChange(page);
        };
        const activeStyle = {
          padding: '9px',
          margin: '2px',
        };
        if (active) {
          activeStyle.backgroundColor = '#247597';
          activeStyle.color = 'white';
        } else {
          activeStyle.backgroundColor = '#3EA2CC';
          activeStyle.color = '#FFFFFF';
        }
        if (typeof page === 'string') {
          activeStyle.backgroundColor = 'transparent';
          activeStyle.color = '#247597';
          activeStyle.textDecoration = 'none';
        }
        return (
          <li className="page-item">
            <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
          </li>
        );
      };


  const expandRow = {
    renderer: row => (
      <div>
        <p>  {row.marca}</p>
        <p>serie:  {row.serie}</p>
        <p>patrimonio  {row.patrimonio}</p>
        <p>Minor  {row.minor}</p>
        <p>Minor  {row.checkin}</p>
        <p>Minor  {row.gateway}</p>
    
      </div>
    ),
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <b><i class="fas fa-chevron-up"></i></b>
        );
      }
      return (
        <b><i class="fas fa-chevron-down"></i></b>
      );
    }
  };  

  const rowStyle = { 
            backgroundColor: '#FFFFFF',
            borderBottom : '1px solid #EBEFF2' };



    const options = {
      paginationSize: 5,
      pageStartIndex: 0,
      alwaysShowAllBtns: true, // Always show next and previous button
      withFirstAndLast: false, // Hide the going to First and Last page button
      hideSizePerPage: true, // Hide the sizePerPage dropdown always
      hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      prePageText: 'Voltar',
      nextPageText: 'Próximo',
      showTotal: false,
      pageButtonRenderer,
      sizePerPageList: [{
        text: '10', value: 10
      }, {
        text: '10', value: 10
      }, {
      
      }] 
      
    };
  
  return (
    
    <div className='container-fluid p-5 espaco-top'>
          <ToolkitProvider keyField="id" data={  this.state.data } columns={ columns } search >
            {
              props => (
                <div>
                   <h3 className='titulo_das_paginas'>Localizar Equipamento</h3>
                    <SearchBar { ...props.searchProps } placeholder="Buscar"/>
                  <hr />
                      <div className="table-responsive-sm table-responsive-md  tabela">
                          <table className="table ">
                                        <BootstrapTable 
                                          classes="tabela"
                                          rowStyle={ rowStyle }
                                          pagination={ paginationFactory(options) }
                                          expandRow={ expandRow }
                                          { ...props.baseProps }  />
                      </table>
                  </div>
                </div>
              )
            }
          </ToolkitProvider>
    </div>
    );
  }
}

  

export default Equipamento;
