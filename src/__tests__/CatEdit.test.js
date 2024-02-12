import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import CatEdit from "../pages/CatEdit"
import mockCats from "../mockCats.js"

describe("<CatEdit />", () => {
  it("renders a form for editing a cat's information", () => {
    render(
      <BrowserRouter>
        <CatEdit cats={mockCats} updateCat={() => {}} />
      </BrowserRouter>
    )

    const catName = screen.getByTestId("name")
    expect(catName).toBeInTheDocument()
    const catAge = screen.getByTestId("age")
    expect(catAge).toBeInTheDocument()
    const catEnjoys = screen.getByTestId("enjoys")
    expect(catEnjoys).toBeInTheDocument()
    const catImage = screen.getByTestId("image")
    expect(catImage).toBeInTheDocument()
    const submitButton = screen.getByRole("button", { name: /Submit Modification/i })
    expect(submitButton).toBeInTheDocument()
  })
})