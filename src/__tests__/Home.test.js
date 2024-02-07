import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from 'react-router-dom';


describe("<Home />", () => {
  it("renders without crashing", () => {
  const div = document.createElement("div")
  render(<Home />, div)
  const homeImage = screen.getByRole("img")
        expect(homeImage).toHaveAttribute("src", "home.png")
        expect(homeImage).toHaveAttribute("alt", "Home")
})
})