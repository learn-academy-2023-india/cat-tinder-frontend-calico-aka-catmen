import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: cat?.name,
    age: cat?.age,
    enjoys: cat?.enjoys,
    image: cat?.image
  })

  const handleSubmit = () => {
    updateCat(newCat, cat.id)
    navigate(`/catshow/${cat.id}`)
  }

  return (
    <div className="form-container">
      <h5>Modify Your Cat's Information</h5>
      <Form onSubmit={handleSubmit} className="form">
        <FormGroup>
          <Label htmlFor="name">Enter Your Cat's Name</Label>
          <Input
            data-testid="name"
            name="name"
            type="text"
            value={newCat.name}
            onChange={(e) =>
              setNewCat({ ...newCat, name: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Enter Your Cat's Age</Label>
          <Input
            data-testid="age"
            name="age"
            type="number"
            value={newCat.age}
            onChange={(e) =>
              setNewCat({ ...newCat, age: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys">Enter What Your Cat Likes To Do</Label>
          <Input
            id="enjoys"
            data-testid="enjoys"
            name="enjoys"
            type="textarea"
            value={newCat.enjoys}
            onChange={(e) =>
              setNewCat({ ...newCat, enjoys: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="url">Enter the URL of Your Cat's Image</Label>
          <Input
            data-testid="image"
            name="image"
            type="text"
            value={newCat.image}
            onChange={(e) =>
              setNewCat({ ...newCat, image: e.target.value })
            }
          />
        </FormGroup>
        <Button className="button" name="submit">Submit Modification</Button>
      </Form>
    </div>
  )
}

export default CatEdit