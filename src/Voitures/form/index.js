import React, { useState } from "react";
import { Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Formulaire = (props) => {
  const [champs, setChamps] = useState({
    titule: "",
    description: "",
    img: "",
  });

  const handleChange = (event) =>
    setChamps({
      ...champs,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addVoiture(champs);
    event.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className='titleColor'>Titre de la voiture</Form.Label>
          <Form.Control
            id="titre"
            name="titre"
            type="text"
            value={champs.titre}
            onChange={handleChange}
            placeholder="Informer le nom"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='titleColor'>Description de la voiture</Form.Label>
          <Form.Control
            id="description"
            name="description"
            type="text"
            value={champs.description}
            onChange={handleChange}
            placeholder="Informer la description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='titleColor'>URL de l'image</Form.Label>
          <Form.Control
            id="img"
            name="img"
            type="img"
            value={champs.img}
            onChange={handleChange}
            placeholder="Informer URL de l'image"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </form>
    </Fragment>
  );
};
export default Formulaire;
