import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../app/header'
 
describe('Header', () => {
  it('title is in Header', () => {
    render(<Header />)
    const heading = screen.getByRole('title')
    expect(heading).toBeInTheDocument()
  })
}) 

describe('Header', () => {
  it('Presentation is in Header', () => {
    render(<Header />)
    const heading = screen.getByText('Présentation')
    expect(heading).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('Informations is in Header', () => {
    render(<Header />)
    const heading = screen.getByText('Informations')
    expect(heading).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('Réserver is in Header', () => {
    render(<Header />)
    const heading = screen.getByText('Réserver')
    expect(heading).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('Contact is in Header', () => {
    render(<Header />)
    const heading = screen.getByText('Contact')
    expect(heading).toBeInTheDocument()
  })
})