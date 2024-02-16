import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import About from "./pages/About"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Privacy from "./pages/Privacy"
import ScrollToTop from "./components/ScrollToTop"
import Terms from "./pages/Terms"
import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    readCats()
  }, [])

  const readCats = () => {
    fetch("https://cat-tinder-7gqo.onrender.com/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((errors) => console.log("Cat read errors:", errors))
  }

  const createCat = (newCat) => {
    fetch("https://cat-tinder-7gqo.onrender.com/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateCat = (cat, id) => {
    fetch(`https://cat-tinder-7gqo.onrender.com/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat),
    })
      .then((response) => response.json())
      .then(() => {
        readCats()
        navigate(`/catshow/${id}`)
      })
      .catch((errors) => console.log("Cat update errors:", errors))
  }

  const deleteCat = (id) => {
    fetch(`https://cat-tinder-7gqo.onrender.com/cats/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then(() => {
        readCats()
        navigate("/catindex")
      })
      .catch((errors) => console.log("Cat delete errors:", errors))
  }

  return (
    <>
      <Header />
      <div className="main-container">
      <ScrollToTop />
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App