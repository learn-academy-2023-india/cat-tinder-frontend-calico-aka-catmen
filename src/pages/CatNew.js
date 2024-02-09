import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <div className="form-container">
      <h5>Add a New Cat</h5>
      <Form onSubmit={handleSubmit} className="form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={newCat.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            value={newCat.age}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            value={newCat.enjoys}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            value={newCat.image}
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="button" type="submit" >Submit New Cat</Button>
      </Form>
    </div>
  )
}

export default CatNew