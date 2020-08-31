import React from 'react';
import { Card } from 'antd';

import './styles.css';

export type IProps = {
  name?: string;
  exchange?: string;
  marketCapitalization?: number;
  ticker: string;
  onClick?: (symbol: string) => void;
};

export const BookingCard: React.FC<any> = ({ name, training, onClick }) => (
  <Card
    title={name}
    style={{ width: '400px', height: '100%', borderRadius: '10px' }}
  >
    {training.map((workout: any) => (
      <div className="training_col">
        <a href={`/booking/${workout}`}>{workout}</a>
      </div>
    ))}
  </Card>
);
