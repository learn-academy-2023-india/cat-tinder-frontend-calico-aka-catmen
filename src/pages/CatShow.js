import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    const cat = cats.find(cat => cat.id.toString() === id)

    if (!cat) {
        return <>Cat not found!</>
    }
    
    return (
            <div className="cat-details">
            <h3>{cat.name}</h3>
                <img src={cat.image} alt={`The cat ${cat.name}`} className="cat-show-image" />
                <p className="cat-age"><strong>Age:</strong> {cat.age}</p>
                <p className="cat-enjoys"><strong>Enjoys:</strong> {cat.enjoys}</p>
            </div>
    )
}

export default CatShow