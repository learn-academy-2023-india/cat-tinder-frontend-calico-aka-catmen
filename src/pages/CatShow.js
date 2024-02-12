import React from "react"
import { NavLink, useParams } from "react-router-dom"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)

  if (!cat) {
    return <>Cat not found!</>
  }

  return (
    <div className="cat-details">
      <h5>Meet {cat?.name}!</h5>
      <img
        src={cat?.image}
        alt={`The cat ${cat.name}`}
        className="cat-show-image"
      />
      <p>
        <strong>Age:</strong> {cat.age}
      </p>
      <p>
        <strong>Enjoys:</strong> {cat.enjoys}
      </p>
      <div className="footer-links">
        <NavLink to={`/catedit/${cat?.id}`} className="nav-link">
          <p>Edit {cat?.name}</p>
        </NavLink>
        <NavLink to={"/catindex/"} className="nav-link">
          <p onClick={() => deleteCat(cat.id)}>Delete {cat?.name}</p>
        </NavLink>
      </div>
    </div>
  )
}

export default CatShow