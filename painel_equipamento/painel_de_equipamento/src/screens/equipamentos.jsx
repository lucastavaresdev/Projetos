import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {tracking_equipamentos} from '../Funcions'
import axios from 'axios'

class Equipamento extends Component {
  constructor(props) {
    super(props);
      this.state = {users:[]}
  }


  // componentDidMount() {
  //   tracking_equipamentos().then(res => {
  //         console.log(res)
  //     })
  //   }

  render() {
    //  const json = [   {zaq: 'Teste1', setor: 'ALAS', rssi: -22, equipamento: 'Geladeira', fabricante: 'Fabricante 1', serieepatrimonio: 'Marca 05 xb258620' , checkin: '2019-01-14 16:36:11',  vistoporultimo: '2019-01-14 16:36:56' , tempo: '00:00:45',},
    //                          {zaq: 'Teste1', setor: 'ALAS', rssi: -22, equipamento: 'Geladeira', fabricante: 'Fabricante 1', serieepatrimonio: 'Marca 05 xb258620' , checkin: '2019-01-14 16:36:11',  vistoporultimo: '2019-01-14 16:36:56' , tempo: '00:00:45',},]
    
    //  const json = [   {zaq: 'Teste1', setor: 'ALAS', rssi: -22, equipamento: 'Geladeira', fabricante: 'Fabricante 1', serieepatrimonio: 'Marca 05 xb258620' , checkin: '2019-01-14 16:36:11',  vistoporultimo: '2019-01-14 16:36:56' , tempo: '00:00:45',},
    //                          {zaq: 'Teste1', setor: 'ALAS', rssi: -22, equipamento: 'Geladeira', fabricante: 'Fabricante 1', serieepatrimonio: 'Marca 05 xb258620' , checkin: '2019-01-14 16:36:11',  vistoporultimo: '2019-01-14 16:36:56' , tempo: '00:00:45',},]
    
      

    return (
      <div className='container-fluid p-5'>
        <MaterialTable
              columns={[
                { title: 'Antena', field: 'id' },
                { title: 'Setor', field: 'setor' },
                { title: 'RSSI', field: 'rssi'},
                { title: 'Equipamento', field: 'equipamento'},
                { title: 'Fabricante', field: 'fabricante'},
                { title: 'Série e Patrimônio', field: 'serieepatrimonio'},
                { title: 'Checkin', field: 'checkin'},
                { title: 'Visto por Último	', field: 'vistoporultimo'},
                { title: 'Tempo', field: 'tempo'},
              ]}
              data={ json }
              title="Tracking Equipamentos - Ativos"
              options={{
              
              }}
            />
  
  </div>
    );
  }
}

{/* 
    
    
    componentDidMount () {
        
        //axios
        
        axios.get(`http://itechflow.cloudapp.net:3004/umdi/temperatura_media_hora/${this.props.mac}`)
        .then(res => {
            this.setState({ temperatura : res.data });
        })

        this.temperaturaAtual();
        this.temperaturaCidade();
        
        this.interval = setInterval(() => {
          this.temperaturaAtual();
        }, 5000);


      
          this.temperaturaCidade();
    } */}

  

export default Equipamento;
