import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function blogfeed() {
  return (
    <ListGroup>
         <ListGroup.Item>
    <Card style={{ width: '80rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Blog Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>author :</ListGroup.Item>
        <ListGroup.Item>Date :</ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
      <Button variant="success">Like</Button>{' '}
      </Card.Body>
    </Card>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card style={{ width: '80rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Blog Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>author :</ListGroup.Item>
        <ListGroup.Item>Date :</ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
      <Button variant="success">Like</Button>{' '}
      </Card.Body>
    </Card>
    </ListGroup.Item>
    </ListGroup>
  );
}

export default blogfeed;