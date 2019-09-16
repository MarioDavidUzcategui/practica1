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
            classicGuitar:[],
            acusticGUitar:[],
            electricGuitar:[]
        }   
    }
    mostrarClasicas = ()=>{
        const classicGuitar = this.state.guitars.filter(e=>e.tipo==="clasica")
        this.setState({classicGuitar})
    }
    mostrarAcusticas = ()=> {
        const acusticGUitar = this.state.guitars.filter(e=>e.tipo==="acustica")
        this.setState({acusticGUitar})
    }
    mostrarElectricas = ()=>{
        const electricGuitar = this.state.guitars.filter(e=>e.tipo==="electrica")
        this.setState({electricGuitar}) 
    }

    render(){
        return (
            <div>
                <div className="borde">
                    <Header/>
                    <Main/>
                </div>
                <button onClick={this.mostrarClasicas}>Clasicas</button>
                <button onClick={this.mostrarAcusticas}>Acusticas</button>
                <button onClick={this.mostrarElectricas}>Electricas</button>
                <ul>
                    
                    {this.state.classicGuitar.map(e=><li>{e.modelo}</li>)}
                    
                    
                </ul>
                <ul>
                    
                    {this.state.acusticGUitar.map(e=><li>{e.modelo}</li>)}
                    
                </ul>
                <ul>
                    
                    {this.state.electricGuitar.map(e=><li>{e.modelo}</li>)}
                    
                </ul>

            </div>
        )
    }
}
  
  


export default App
