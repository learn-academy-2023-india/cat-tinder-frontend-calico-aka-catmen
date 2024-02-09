import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'




describe("<Header />", () => {
    
    it("renders a logo with a src and alt", () => {
      render (
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      // screen.logTestingPlaygroundURL()
      const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "logo.png")
        expect(logo).toHaveAttribute("alt", "Cat Logo")
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
      
      const clickableLinkB = screen.getByRole('link', {
        name: /meet all the cats/i
      })
      expect(clickableLinkB).toBeInTheDocument()
      const clickableLinkAdd = screen.getByRole('link', {
        name: /add your cat/i
      })
      expect(clickableLinkAdd).toBeInTheDocument()
      
    })
  })