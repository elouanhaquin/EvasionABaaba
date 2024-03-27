import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LandingDiv from '../app/LandingDiv'
 

describe('Landing', () => {
  it('Title is in Landing', () => {
    render(<LandingDiv />)
    const heading = screen.getByText('Découvrez la Nouvelle Calédonie Autrement ...')
    expect(heading).toBeInTheDocument()
  })
})

describe('Landing', () => {
  it('Button is in Header', () => {
    render(<LandingDiv />)
    const heading = screen.getByText('Réserver mon expérience')
    expect(heading).toBeInTheDocument()
  })
})
