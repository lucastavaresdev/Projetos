import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import './login.scss'
import logo from '../../img/logo.png'

function SimpleCard(props) {
  return (
    <Card  className='container-card'>
        <div className='card-topo'><img src={logo} /></div>

      <CardContent>

    
      </CardContent>

      
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}



export default SimpleCard;