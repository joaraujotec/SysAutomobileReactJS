import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Voitures/Voiture/menu";
import { Container } from "react-bootstrap";
import Voitures from "./Voitures";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Voir from "./Voitures/voir";
import Card from "react-bootstrap/Card";

const Sur = () => {
  return (
    <div>
      <Card
        style={{
          width: "40%",
          textAlign: "center",
          maxWidth: "800px",
          margin: "3rem auto",
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/C4E03AQG52VX_-ZJpHg/profile-displayphoto-shrink_400_400/0/1651674278204?e=1677110400&v=beta&t=fnfyqSryQA4i7l0vns75lwn-rES4nklW6_VPoX3hRMA"
        />
        <Card.Body>
          <Card.Text>
            Bonjour à tous, je m'appelle José. J'ai 37 ans et je suis
            développeur web junior. Je suis brésilien et passionné par la langue
            française ! Je vous présente mon premier projet React JS réalisé
            dans le cours @programadorLifeStyle
            <hr />
            Fonctionnalités du système :
            <hr />
            <li>Effacer le dernier chariot inséré ;</li>
            <li>Afficher le nom du développeur ;</li>
            <li>Ajouter des voitures à la liste Parcourir les pages ; </li>
            <li> Afficher les voitures détaillant un à la fois via Routes.</li>
            <hr />
            Trouvez-moi sur LinkedIn
            <h2>https://www.linkedin.com/in/joseadamasceno </h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Voitures /> },
    { path: "sur", element: <Sur /> },
    { path: "voir/:id", element: <Voir /> },
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <Menu></Menu>
      <Container>
        <App />
      </Container>
    </Router>
  );
};

export default AppWrapper;
