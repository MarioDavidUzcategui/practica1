'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter ,Link } from 'react-router-dom';





// These are just demo components which render different text.
class  DashboardPage extends React.Component {
constructor(props){
    super(props);
    this.state = {}
}

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
        .then(response =>  response.json())
        .then(resData => {
           //console.log(JSON.stringify(resData))
           //do your logic here       
           //let person = resData.results
           this.setState({ person: resData.results }); //this is an asynchronous function
        })
        }
            
    
    render (){
        console.log(this.state.person)
        return (
            <div>
 <h1>Welcome User</h1>
 <p>This is your dashboard and I am an example of a stateless functional component.</p>
 <Link to="/settings">Goto Settings Page</Link>
 <br></br>
 <Link to="/login">Login</Link>
 <br></br>
 <Link to="/auth/login">Back to login page</Link>
 <div> {this.state.person && this.state.person.map(e =><div> {e.name.first}</div>)}</div>
 </div>
 

        )
        
    }
} 
 

let SettingsPage = () => (
 <div>
 <h1>Manage your settings</h1>
 <p>display the settings form fields here...or whatever you want</p>
 <Link to="/">Back to Dashboard Page</Link>
 </div>
)
let AuthLoginPage = () => (
 <div>
 <h1>Login Now</h1>
 <div>
 <form action="">
 <input type="text" name="email" placeholder="email address" />

 <input type="password" name="password" placeholder="contraseña" />
 <button type="submit">Login</button>
 </form>
 
 </div>
 </div>
)
let AuthLogoutPage = () => (
 <div>
 <h1>You have been successfully logged out.</h1>
 <div style={{ marginTop: 30 }}>
 <Link to="/auth/login">Back to login page</Link>
 </div>
 </div>
)
let ArticlePage = ({ params }) => (
 <h3>Article {params.id}</h3>
)
let PageNotFound = () => (
 <div>
 <h1>The page you're looking for doesn't exist.</h1>
 </div>
)
// Here we pass Router to the render function.
const App = () => ( 
 <BrowserRouter >
 <Route path="/" component={ DashboardPage } />
 <Route path="/settings" component={ SettingsPage } />
 <Route path="/auth">
 <Route path="/login" component={ AuthLoginPage } />
 <Route path="/auth/login" component={ AuthLogoutPage } />
 </Route>
 <Route path="articles/:id" component={ ArticlePage } />
 <Route path="*" component={ PageNotFound } />
 </BrowserRouter>
)
export default App




