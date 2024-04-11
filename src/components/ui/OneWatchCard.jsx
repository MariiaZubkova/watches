import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OneWatchCard({ watch }) {
  return (
    <Col xs={12} md={4} className="mt-5">
      <Card>
        <Card.Img variant="top" src={`${watch.img}`} />
        <Card.Body>
          <Card.Title>{watch.title}</Card.Title>
          <Card.Text>
            {watch.description}
          </Card.Text>
          <Button variant="primary">Редактировать</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default OneWatchCard;

{ /* {user.name === 'Admin'
          && <Button variant="primary">Удалить</Button>} */ }
