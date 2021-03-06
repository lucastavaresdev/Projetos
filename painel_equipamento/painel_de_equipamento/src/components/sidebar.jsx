import React from 'react';
import { slide  as Menu } from 'react-burger-menu'

import Responsive from 'react-responsive';
import IconMenu from '../images/bars-solid.svg'
import './_sidebar.scss'
import BotoesGroup from '../components/BotoesGroup'

const Mobile = props => <Responsive {...props} maxWidth={991} />
const Desktop = props => <Responsive {...props} minWidth={992} />;


export default props => {
  return (
      <div>
       <Desktop>
           <Menu  isOpen={ false } customBurgerIcon={<img className='IconMenu' src={IconMenu} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>  }>
                     <BotoesGroup />
            </Menu>
       </Desktop>

       <Mobile>
                    <Menu  isOpen={ false }  customBurgerIcon={ <img className='IconMenu' src={IconMenu} /> }>
                            <BotoesGroup />
                    </Menu>
        </Mobile>
    </div>
  );
};
