import React, { useState } from "react"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import mockCats from "./mockCats.js"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  const [cats] = useState(mockCats)

  const createCat = (newCat) => {
    console.log(newCat)
  }

  const updateCat = (cat, id) => {
    console.log(cat)
    console.log(id)
  }

  const deleteCat = (id) => {
    console.log(id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route
          path="/catedit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route
          path="/catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App