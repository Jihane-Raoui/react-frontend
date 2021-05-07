import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';


class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
      
        return (
           
            <div>
                <header>
                    <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark" >
                              <div ><a href="/login" className='navbar-brand' >  User management</a></div>
                              <div ><a href="/dashboard" className='navbar-brand' > Dashboard</a></div>
                       <ul className="navbar-nav navbar-collapse justify-content-end">
                       <li><a className="nav-link " href="/logout" onClick={AuthenticationService.logout}>Logout</a></li>
                              </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;