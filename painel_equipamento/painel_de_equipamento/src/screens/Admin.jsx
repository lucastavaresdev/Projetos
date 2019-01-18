import React , {Component}from 'react';
import './scss/_Admin.scss'
import Modal2 from '../components/Modal'

class Admin extends Component {

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
      }

    render () {
        return (
                <div>   
                        <Modal2/>
                </div>
        )
    }
}

export default Admin