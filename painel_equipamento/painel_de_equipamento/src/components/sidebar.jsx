import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Desktop = props => <Responsive {...props} minWidth={992} />;

export default props => {
  return (
      <div>
       <Desktop>
           <Menu isOpen = { true }  >
                <a className="menu-item" href="/">
                    Home
                </a>
            </Menu>
       </Desktop>
       <Mobile>
                    <Menu >
                         <a className="menu-item" href="/">
                                    Home
                                </a>
                                <a className="menu-item" href="/laravel">
                                </a>
                    </Menu>
        </Mobile>
    </div>
  );
};