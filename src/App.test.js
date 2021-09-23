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

  it('prueba que falla', () => {
    expect(false).toBe(true)
  })

  it('otra prueba que falla', () => {
    expect(1).toBe(2)
  })

  it('otra prueba que falla12312', () => {
    expect(3).toBe(1)
  })
})

