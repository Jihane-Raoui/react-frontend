
import './App.css';
import {BrowserRouter as Router,Route,Switch}from  'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import FooterComponent from './components/FooterComponent';

import AddUserComponent from './components/AddUserComponent';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <Router>
      
           <div >
             <Switch>
             <Route path='/' exact component={LoginComponent}></Route>
               <Route path='/login' exact component={LoginComponent}></Route>
               
               <Route path='/dashboard' exact component={Dashboard}></Route>
               <AuthenticatedRoute path='/users' component={ListUserComponent}/>
               
               <AuthenticatedRoute path='/add-user/:id' component={AddUserComponent}/>
               <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
               
               </Switch>
            </div>
        <FooterComponent/>
        </Router>
       </div>
       

   
  );
}

export default App;
