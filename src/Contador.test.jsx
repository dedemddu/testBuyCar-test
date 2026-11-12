
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contador from './Contador'
describe('Pruebas del componente Contador', () => {
  it('Debe mostrar inicialmente cero productos', () => {
    render(<Contador />)
    expect(
      screen.getByText('Productos: 0')
    ).toBeInTheDocument()

  })
  it('Debe incrementar la cantidad al presionar el botón', () => {
    render(<Contador />)
    const boton = screen.getByRole('button', {
      name: 'Incrementar'
    })
    fireEvent.click(boton)
    expect(
      screen.getByText('Productos: 1')
    ).toBeInTheDocument()

  })
  it('Debe incrementar dos veces correctamente', () => {
    render(<Contador />)
    const boton = screen.getByRole('button', {
      name: 'Incrementar'
    })
    fireEvent.click(boton)
    fireEvent.click(boton)
    expect(
      screen.getByText('Productos: 2')
    ).toBeInTheDocument()
  })
})
