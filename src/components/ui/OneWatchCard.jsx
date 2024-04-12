import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OneWatchCard({ watch, user, clickHandler }) {
  return (
    <Col xs={12} md={4} className="mt-5">
      <Card>
        <Card.Img variant="top" src={`${watch.img}`} />
        <Card.Body>
          <Card.Title>{watch.title}</Card.Title>
          <Card.Text>
            {watch.description}
          </Card.Text>

          {user?.isAdmin && (
          <>
            <Button variant="primary" style={{ marginRight: '150px' }}>Редактировать</Button>
            <Button variant="primary" onClick={() => clickHandler(watch.id)}>Удалить</Button>
          </>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default OneWatchCard;
