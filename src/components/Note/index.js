import React from 'react';

import { Container, Header, IconBack, Content } from './styles';

function Note() {
  return (
    <>
      <Container>
        <Header>
          <button>
            <IconBack></IconBack>
          </button>
          <h1>Titulos</h1>
        </Header>

        <Content></Content>
      </Container>
    </>
  );
}

export default Note;
