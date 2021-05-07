import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import HeaderComponent from './HeaderComponent';


class ListUserComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            utilisateur:[]
        }
        this.addUser=this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount(){
        UserServices.getUser().then((res)=>{
            this.setState({utilisateur:res.data});
        });
       
    }
    deleteUser(id){
        UserServices.deleteUser(id).then( res => {
            this.setState({utilisateur: this.state.utilisateur.filter(user => user.idU !== id)});
        });
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }
    addUser(){
        this.props.history.push('/add-user/_add');
    }
   
    render() {
        return (
           
                
       
            
            <div>
              <HeaderComponent/>
             
               <h2 className='container-fluid  text-center'>user List</h2> 
            <div className='container-fluid'> <div className='row'>
                   <div className='col '>
                   <button className='btn btn-primary' onClick={this.addUser}>Add User</button></div>
                   <div className='col'> </div>
               </div> 
               <hr></hr>
               <div className='row container-fluid'>
                   <table className='table table-striped table-bordered'>
                       <thead>
                           <tr>
                               <th>User's first name</th>
                               <th>User's last name</th>
                               <th>User's email</th>
                               <th>------</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.utilisateur.map(
                                   user=>
                                   <tr key={user.idU}>
                                       <td>{user.prenom}</td>
                                       <td>{user.nom}</td>
                                       <td> {user.email}</td>
                                       <td>
                                                 <button onClick={ () => this.editUser(user.idU)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.idU)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
           </div>
            
        );
    }
}

export default ListUserComponent;
