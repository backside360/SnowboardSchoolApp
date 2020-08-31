/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useCallback } from 'react';

import { Button } from 'antd';

import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import BookingContainer from '../containers/BookingContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import { CardsList } from '../components/Molecules/CardList';

const Mainpage: React.FC = () => (
  <MainLayout
    header={() => <MenuContainer component={MainMenu} />}
    body={() => (
      <>
        <BookingContainer component={CardsList} />
      </>
    )}
  />
);

export default Mainpage;
