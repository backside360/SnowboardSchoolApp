import React, { useState, useEffect } from 'react';
import { match as IMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';

import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import TrainingStore from '../entities/training';

import { Training } from '../components/Molecules/Training';

import './styles.css';
import { toJS } from 'mobx';

interface TProps {
  component: React.ElementType<any>;
  match: IMatch<{ id: string }>;
}

type TState = {
  margin: number | null;
  high: number | null;
  low: number | null;
};

export const BookingInfo: React.FC<TProps> = observer((props) => {
  const [speciality, setSpeciality] = useState<string | undefined>('');
  const [places, setPlaces] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    setSpeciality(history.location.pathname.split('/').pop());

    setPlaces(
      //@ts-ignore
      Object.values(toJS(TrainingStore.trainings)).find(
        (elem: any) => elem.type === speciality
      )
    );
  }, [history, speciality]);

  const times = ['15-00', '17-00', '20-30'];

  const Card = () => (
    <Training times={times} places={places} speciality={speciality} />
  );

  return (
    <MainLayout
      header={() => <MenuContainer component={MainMenu} />}
      body={() => <Card />}
    />
  );
});

export default BookingInfo;
