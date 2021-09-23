import React from 'react'
import ReactDOM from 'react-dom'
import Prueba from './Componentes/Prueba'

describe("Prueba general", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Prueba />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('prueba que falla', () => {
    expect(true).toBe(false)
  })
})

