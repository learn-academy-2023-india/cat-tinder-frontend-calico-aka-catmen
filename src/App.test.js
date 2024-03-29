import { render, screen, image } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import logo from './assets/logo.png'


describe("<App />", () => {
  it("renders an image", () => {
    // Arrange
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    
    
    const image = screen.getByRole('img', {
      name: /cat logo/i
    })
    
    expect(image).toHaveAttribute("src", logo)
  })

  it("renders an nav list", () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const list = screen.getByRole('link', {
      name: /contact/i})
    expect(list).toBeInTheDocument()
  })
})