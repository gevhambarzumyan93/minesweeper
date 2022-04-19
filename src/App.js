import React from 'react';
import Page from './components/BaseComponents/Page';
import MainField from './components/BaseComponents/MainField';
import Layout from './components/Layout/MainLayout';
import GameSettings from './components/GameSettings';
import { useDispatch } from 'react-redux';
import setupSocket from '../sockets';
import { sagaMiddleware } from './app/store';

export default () => {
  return (
    <Page inner>
      <Layout renderForm={() => <GameSettings />}>
        <MainField />
      </Layout>
    </Page>
  );
};
