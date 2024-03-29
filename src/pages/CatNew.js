import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

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
            id="name"
            value={newCat.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            id="age"
            value={newCat.age}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            id="enjoys"
            value={newCat.enjoys}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            id="image"
            value={newCat.image}
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="button" name="submit" >Submit New Cat</Button>
      </Form>
    </div>
  )
}

export default CatNew