import React , {Component}from 'react';
import jwt_decode from 'jwt-decode'
import Navbar from '../components/navbar';
import './scss/_Admin.scss'

class Profile extends Component {

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
      }

    render () {
        return (
            <div>
                 <h1>Dashboard</h1>
              
            </div>
        )
    }
}

export default Profile