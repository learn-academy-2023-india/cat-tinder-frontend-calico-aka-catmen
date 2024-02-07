import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';




describe("<Header />", () => {
    
    it("renders a logo with a src and alt", () => {
      render (
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    //   screen.logTestingPlaygroundURL()
      const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "logo.png")
        expect(logo).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
    })
    it("has clickable links", () => {
      render (
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      const clickableLinkH = screen.getByRole('link', {
        name: /home/i
      })
      expect(clickableLinkH).toBeInTheDocument()
      const clickableLinkA = screen.getByRole('link', {
        name: /about/i
      })
      expect(clickableLinkA).toBeInTheDocument()
      const clickableLinkB = screen.getByRole('link', {
        name: /browse cats/i
      })
      expect(clickableLinkB).toBeInTheDocument()
      const clickableLinkAdd = screen.getByRole('link', {
        name: /add a cat/i
      })
      expect(clickableLinkAdd).toBeInTheDocument()
      const clickableLinkC = screen.getByRole('link', {
        name: /contact/i
      })
      expect(clickableLinkC).toBeInTheDocument()
    })
  })