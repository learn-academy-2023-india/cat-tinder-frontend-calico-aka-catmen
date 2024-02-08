import { render, screen } from '@testing-library/react';
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
    // Debugging 
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    // Act
    const image = screen.getByRole('img', {
      name: /cat tinder logo with outline of cat/i
    })
    // Assert
    expect(image).toHaveAttribute("src", logo)
  })

  it("renders an nav list", () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()
    const list = screen.getByRole('link', {
      name: /contact/i})
    expect(list).toBeInTheDocument()
  })
})