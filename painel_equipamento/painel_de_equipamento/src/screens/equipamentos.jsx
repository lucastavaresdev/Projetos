import React, { Component } from 'react';
import MaterialTable from 'material-table'


class Equipamento extends Component {
  render() {
    return (
      <div className='container-fluid p-5'>
        <MaterialTable
              columns={[
                { title: 'Antena', field: 'antena' },
                { title: 'Setor', field: 'setor' },
                { title: 'RSSI', field: 'rssi'},
                { title: 'Equipamento', field: 'equipamento'},
                { title: 'Fabricante', field: 'fabricante'},
                { title: 'Série e Patrimônio', field: 'serieepatrimonio'},
                { title: 'Checkin', field: 'checkin'},
                { title: 'Visto por Último	', field: 'vistoporultimo'},
                { title: 'Tempo', field: 'tempo'},
              ]}
              data={[{
                antena: 'Teste1',
                setor: 'ALAS',
                rssi: -22,
                equipamento: 'Geladeira', 
                fabricante: 'Fabricante 1',
                serieepatrimonio: 'Marca 05 xb258620' ,
                checkin: '2019-01-14 16:36:11',
                vistoporultimo: '2019-01-14 16:36:56' ,
                tempo: '00:00:45',
                
                },]}
              title="Tracking Equipamentos - Ativos"
              options={{
              
              }}
            />

      </div>
    );
  }
}

export default Equipamento;
