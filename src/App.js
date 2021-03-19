import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component{
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return(
      <div>
        <GoogleLogin
          clientId="475875740182-7jjbughgudfc06g7p3mnms34f5t9ddsn.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}
export default App