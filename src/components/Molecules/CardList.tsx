import React from 'react';
import { Row, Col } from 'antd';
import { observer } from 'mobx-react';

import { IQuote } from '../../entities/quotes/types';
import { BookingCard } from '../Atoms/Card';

interface IProps {
  quotes: IQuote[];
  onClick?: (symbol: string) => void;
}

const CardsList: React.FC<any> = ({ onClick }) => {
  const serviсes = [
    {
      name: 'Записаться на тренировку',
      training: ['Сноуборд', 'Батут', 'Скейтборд'],
    },
    {
      name: 'О нашей школе',
      training: ['Площадки для тренировок', 'Наши тренера'],
    },
  ];
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

const Observed = observer(CardsList);

export { Observed as CardsList };
