import React, { useState, useEffect } from "react";
import Voiture from "./Voiture";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

async function getVoitures() {
  let reponse = await fetch("http://localhost:3000/api/voitures.json");
  let donees = await reponse.json();
  return donees;
}

const Voir = () => {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    getVoitures().then((donees) => {
      setVoitures(donees["voitures"]);
    });
  }, []);

  /* componentDidMount() {
    getVoitures().then((donees) => {
      this.setState((state) => ({
        voitures: donees["voitures"],
      }));
    });
  }
*/
  const { id } = useParams();

  return (
    <Fragment>
        <Link to={"../"}><Button variant="primary">
         Retourner
        </Button></Link>
      

      {voitures
        .filter((voiture) => voiture.id === Number(id))
        .map((voitureFiltre) => (
          <Voiture
            titre={voitureFiltre.titre}
            description={voitureFiltre.description}
            img={voitureFiltre.img}
          ></Voiture>
        ))}
    </Fragment>
  );
};

export default Voir;
