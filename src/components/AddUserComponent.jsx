import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import HeaderComponent from './HeaderComponent';

class AddUserComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            UserServices.getUserById(this.state.id).then((res) =>{
                let user = res.data;
                this.setState({firstName: user.nom,
                    lastName: user.prenom,
                    emailId : user.email
                });
            });
        }        
    }
    
    cancel(){
        this.props.history.push('/users');
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {nom: this.state.firstName, prenom: this.state.lastName, email: this.state.emailId};
        console.log('user => ' + JSON.stringify(user));
        if(this.state.id === '_add'){
        UserServices.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserServices.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <HeaderComponent/>
               <div className='container'><br/><br/>
                   <div className='row'>
                     <div className = "card col-md-6 offset-md-3 offset-md-3">
                     {
                                    this.getTitle()
                                }
                        <div className = "card-body">
                        <form>
                                 <div className = "form-group">
                                      <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email : </label>
                                            <input placeholder="Email Address" name="emailId" type="email" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                        </div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddUserComponent;