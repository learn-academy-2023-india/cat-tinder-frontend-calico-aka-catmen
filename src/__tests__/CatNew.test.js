import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew"
import React from "react"

describe("<CatNew />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
        const nameInput = screen.getByRole("textbox", {
            name: /name/i
        })
        expect(nameInput).toBeInTheDocument()
        
        const ageInput = screen.getByRole("textbox", {
            name: /age/i
        })
        expect(ageInput).toBeInTheDocument()
        
        const enjoysInput = screen.getByRole("textbox", {
            name: /enjoys/i
        })
        expect(enjoysInput).toBeInTheDocument()
    
        const imageInput = screen.getByRole("textbox", {
            name: /image/i
        })
        expect(imageInput).toBeInTheDocument()
    })

    it("renders the button", () => {
        render(
            <BrowserRouter>
                <CatNew createCat={() => {}} />
            </BrowserRouter>
        )
        const submitNewCat = screen.getByRole("button", {
            name: /submit/i
        })
        expect(submitNewCat).toBeInTheDocument()
    })
})