import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Addblogpage() {
  return (
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
        <ListGroup.Item>Name of author :</ListGroup.Item>
        <ListGroup.Item>Date :</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="success">POST</Button>{' '}
      <Button variant="success">EDIT</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default Addblogpage;