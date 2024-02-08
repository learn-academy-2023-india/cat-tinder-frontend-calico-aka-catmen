import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("renders a footer", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    // Debugging
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    // Act
    const footer = screen.getByText(
        /© 2024 cat tinder\. all rights reserved\. made with by calico/i)
    expect(footer).toBeInTheDocument()
    const clickableLinkP = screen.getByRole('link', {
        name: /privacy policy/i
      })
      expect(clickableLinkP).toBeInTheDocument()
      const clickableLinkT = screen.getByRole('link', {
        name: /terms of use/i
      })
      expect(clickableLinkT).toBeInTheDocument()
      const clickableLinkC = screen.getByRole('link', {
        name: /contact/i
      })
      expect(clickableLinkC).toBeInTheDocument()
      const clickableLinkA = screen.getByRole('link', {
        name: /about/i
      })
      expect(clickableLinkA).toBeInTheDocument()
  })
})