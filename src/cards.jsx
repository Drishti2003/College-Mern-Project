import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ title, description }) {
  return (
    <Card style={{ width: "18rem",backgroundColor:"#E5E4E2" }}>
      <Card.Img variant="top" src="src/cars.webp" width="100%"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
