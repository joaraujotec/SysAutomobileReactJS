import React, { useState, useEffect } from "react";
import Voiture from "./Voiture";
import { Fragment } from "react";
import Formulaire from "./form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const montreMessage = () => {
  alert("Système développé par: José");
};

async function getVoitures() {
  let reponse = await fetch("http://localhost:3000/api/voitures.json");
  let donees = await reponse.json();
  return donees;
}

const Voitures = () => {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    getVoitures().then((donees) => {
      setVoitures(donees["voitures"]);
    });
  }, []);

  const addVoiture = (nouveau_voitures) => {
    setVoitures([...voitures, nouveau_voitures]);
  };
  /* componentDidMount() {
    getVoitures().then((donees) => {
      this.setState((state) => ({
        voitures: donees["voitures"],
      }));
    });
  }
*/
  const enleverDernier = () => {
    let nouveau_voitures = [...voitures];
    nouveau_voitures.pop(); //enlever le dernier element du array

    setVoitures(nouveau_voitures);
  };

  return (
    <Fragment>
    <h3 style={{ width: '100%', fontSize: "2rem", fontWeight: 'bold', padding: "5", margin: "8px auto", textAlign: 'right'}}>
        SysAutomobile</h3>
      <h2>Voitures</h2>

      <ButtonGroup aria-label="Basic example">
        <Button onClick={montreMessage} variant="secondary">
          Montrer Développeurs
        </Button>
        <Button onClick={enleverDernier} variant="danger">
          Enlever Dernier
        </Button>
      </ButtonGroup>

      <hr />

      <Formulaire addVoiture={addVoiture}></Formulaire>

      {voitures.map((voiture) => (
        <Voiture
          id={voiture.id}
          titre={voiture.titre}
          description={voiture.description}
          img={voiture.img}
        ></Voiture>
      ))}
    </Fragment>
  );
};

export default Voitures;
