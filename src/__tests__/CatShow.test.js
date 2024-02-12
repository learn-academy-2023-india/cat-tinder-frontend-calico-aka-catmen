import CatShow from "../pages/CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import mockCats from "../mockCats.js"

describe("<CatShow />", () => {
  it("renders one cat", async () => {
    // Find elements using async/await
    const cat = "1"
    render(
      <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )

    const catName = screen.getByText(`Meet ${mockCats[0].name}!`)
    expect(catName).toBeInTheDocument()

    // Match Age and Enjoys text with a function that checks for the text content and ensures that the children don't have the text
    const catAge = await screen.findByText((content, node) => {
      const hasText = (node) => node.textContent === `Age: ${mockCats[0].age}`
      const nodeHasText = hasText(node)
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      )
      return nodeHasText && childrenDontHaveText
    })
    expect(catAge).toBeInTheDocument()
  
    const catEnjoys = await screen.findByText((content, node) => {
      const hasText = (node) => node.textContent.includes(`Enjoys: ${mockCats[0].enjoys}`)
      const nodeHasText = hasText(node)
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      )
      return nodeHasText && childrenDontHaveText
    })
    expect(catEnjoys).toBeInTheDocument()
  })
})