import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew"
import { BrowserRouter } from "react-router-dom"
import React from "react"

describe("<CatNew />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <CatNew createCat={() => {}} />
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

    it("navigates to CatIndex onSubmit/onClick", () => {
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