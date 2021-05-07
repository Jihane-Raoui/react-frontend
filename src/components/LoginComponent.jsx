import React, { Component } from 'react'
import AuthenticationService from '../services/AuthenticationService'
class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
       
     
     if(this.state.username==='test' && this.state.password==='test'){
          AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
      this.props.history.push(`/users`)
           this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
           this.setState({hasLoginFailed:true})
         }
    }

    render() {
        return (


            
            
    <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
                ADMIN PANEL
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                      {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                      {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    <form>
                        <div class="form-group">
                            <label class="form-control-label">USERNAME</label>
                           
                          <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                  
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                
                            </div>
                            <div class="col-lg-6 login-btm login-button">
                                <button className="btn btn-outline-primary" onClick={this.loginClicked}>LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
    </div>


        )
    }
}

export default LoginComponent