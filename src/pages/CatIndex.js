import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <main className="cat-index-cards">
      {cats.map((cat) => (
        <Card className="cat-card" key={cat.id}>
          <img
            alt={`Profile of ${cat.name}`}
            src={cat.image}
            className="cat-image"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">{cat.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted card-subtitle" tag="h6">
              Age: {cat.age}
            </CardSubtitle>
            <NavLink to={`/catshow/${cat.id}`} className="nav-link">
              See More Details
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  )
}

export default CatIndex