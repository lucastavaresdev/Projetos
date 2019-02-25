import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import Workbook from "react-xlsx-workbook";
import "../screens/scss/_base.scss";
import "../components/_tabela.scss"

class Tabelas extends Component {
  constructor() {
    super();
    this.Workbook = this.Workbook.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  Workbook() {
    var arr = [];
    var arr2 = [];

    for (var i = 0; i < this.props.colunas.length; i++) {
      arr[i] = this.props.colunas[i].dataField;
      arr2[i] = `<Workbook.Column label=${
        this.props.colunas[i].dataField
      } value="id"/>`;
    }

    return arr2.map((answer, i) => {
      return <Workbook.Column label={arr[i]} value={arr[i]} />;
    });
  }

  render() {
    const { SearchBar } = Search;

    const pageButtonRenderer = ({
      page,
      active,
      disable,
      title,
      onPageChange
    }) => {
      const handleClick = e => {
        e.preventDefault();
        onPageChange(page);
      };
      const activeStyle = {
        padding: "9px",
        margin: "2px"
      };
      if (active) {
        activeStyle.backgroundColor = "#247597";
        activeStyle.color = "white";
      } else {
        activeStyle.backgroundColor = "#3EA2CC";
        activeStyle.color = "#FFFFFF";
      }
      if (typeof page === "string") {
        activeStyle.backgroundColor = "transparent";
        activeStyle.color = "#247597";
        activeStyle.textDecoration = "none";
      }
      return (
        <li className="page-item">
          <a href="#" onClick={handleClick} style={activeStyle}>
            {page}
          </a>
        </li>
      );
    };

    const expandRow = {
      renderer: row => (
        <div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <p>
                Marca: <span className="info_Table">{row.marca}</span>
              </p>
              <p>
                Minor: <span className="info_Table">{row.minor}</span>{" "}
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <p>
                Serie: <span className="info_Table">{row.serie}</span>
              </p>
              <p>
                Patrimonio <span className="info_Table">{row.patrimonio}</span>
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <p>
                Antena: <span className="info_Table">{row.gateway}</span>
              </p>
              <p>
                Checkin <span className="info_Table">{row.checkin}</span>
              </p>
            </div>
          </div>
        </div>
      ),
      showExpandColumn: true,
      expandColumnPosition: "right",
      expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
          return <b>-</b>;
        }
        return <b>+</b>;
      },
      expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
          return (
            <b>
              <i className="fas fa-chevron-up" />
            </b>
          );
        }
        return (
          <b>
            <i className="fas fa-chevron-down" />
          </b>
        );
      }
    };

    const rowStyle = {
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid #EBEFF2"
    };

    const options = {
      paginationSize: 5,
      pageStartIndex: 0,
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
      prePageText: "Voltar",
      nextPageText: "Próximo",
      showTotal: false,
      pageButtonRenderer,
      sizePerPageList: [
        {
          text: "10",
          value: 10
        },
        {
          text: "10",
          value: 10
        },
        {}
      ]
    };

    return (
      <div className="container-fluid espaco-top">
        <ToolkitProvider
          keyField="id"
          data={this.props.data}
          columns={this.props.colunas}
          search
        >
          {props => (
            <div>
              <h3 className="titulo_das_paginas">{this.props.titulo_pagina}</h3>
              <SearchBar {...props.searchProps} placeholder="Buscar" />
                 
                  <Workbook
                    filename={`${this.props.titulo_pagina}.xlsx`}
                    element={<div className={`btn  mt-2  btn_excel   col-1`}  >Excel</div>}
                  >
                    <Workbook.Sheet data={this.props.data} name='tabela' >
                      {this.Workbook()}
                    </Workbook.Sheet>
                  </Workbook>
              <hr />

            

                  <table className="table ">
                    <BootstrapTable
                      classes="tabela"
                      rowStyle={rowStyle}
                      pagination={paginationFactory(options)}
                      expandRow={this.props.dados_extras}
                      {...props.baseProps}
                    />
                  </table>
                </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Tabelas;
