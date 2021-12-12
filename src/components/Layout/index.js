import React from 'react';

import Note from '../Note';
import MenuBar from '../MenuBar';

import { Container } from './styles';

function Layout() {
  return (
    <>
      <Container>
        <MenuBar />
        <Note />
      </Container>
    </>
  );
}

export default Layout;
