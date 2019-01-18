import React , {Component}from 'react';
import jwt_decode from 'jwt-decode'
import Navbar from '../components/navbar';
import './scss/_Admin.scss'
import Modal2 from '../components/Modal'

class Admin extends Component {

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
      }

    render () {
        return (
            <div className='Container'>
                <div className="row">
                    <div className="col-md-4">
                        <Modal2 />
                    </div>
                    <div className="col-md-4">
                        <p>2</p>
                    </div>
                    <div className="col-md-4">
                        <p>3</p>
                    </div>
              


                </div>
            </div>
        )
    }
}

export default Admin