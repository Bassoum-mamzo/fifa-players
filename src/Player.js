import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  width: "18rem",
  margin: "1rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  borderRadius: "10px"
};

const Player = ({
  name = "Nom inconnu",
  team = "Équipe inconnue",
  nationality = "Nationalité inconnue",
  number = 0,
  age = 0,
  image = "https://via.placeholder.com/150"
}) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {number} <br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
