import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card border="secondary" style={{ width: '18rem', color:"white" }} bg='dark'>
        <Card.Img variant="top" src="https://www.w3schools.com/bootstrap5/img_avatar3.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" style={{ width: '18rem', color:"white" }} bg='dark'>
        <Card.Img variant="top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" style={{ width: '18rem', color:"white" }} bg='dark'>
        <Card.Img variant="top" src="https://www.w3schools.com/bootstrap5/img_avatar5.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;