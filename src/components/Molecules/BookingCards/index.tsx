import React from 'react';
import { Row, Col } from 'antd';
import { observer } from 'mobx-react';

import { BookingCard } from '../../Atoms/Card';

const BookingCards: React.FC<any> = ({ onClick, serviсes }) => {
  return (
    <Row justify="space-around">
      {serviсes.map((service: any) => (
        <Col className="card">
          <BookingCard
            name={service.name}
            training={service.training}
            onClick={onClick}
          />
        </Col>
      ))}
    </Row>
  );
};

const Observed = observer(BookingCards);

export { Observed as BookingCards };
