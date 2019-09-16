import Main from './Main'
import Header from './Header'
import  '../estilos/router.css'
import React, { Component } from 'react'
import UsersAPI from '../api'
import usersAPI from '../api'

class App extends Component {

    constructor(){
        super()
        this.state= {
            guitars: usersAPI.all(),
            filteredGuitar:[],
          
        }   
    }
    mostrarGuitars = (modelo)=>{
        const filteredGuitar = this.state.guitars.filter(e=>e.tipo===modelo)
        this.setState({filteredGuitar})
    }
   
    render(){
        return (
            <div>
                <div className="borde">
                    <Header/>
                    <Main/>
                </div>
                <div>
                <button onClick={()=>this.mostrarGuitars("clasica")}>Clasicas</button>
                <button onClick={()=>this.mostrarGuitars("acustica")}>Acusticas</button>
                <button onClick={()=>this.mostrarGuitars("electrica")}>Electricas</button>
                </div>
                <ul className="lista2 borde">
                    
                    {this.state.filteredGuitar.map(e=><li>{e.modelo}</li>)}
                    
                    
                </ul>
                 
        

            </div>
        )
    }
}
  
  


export default App
