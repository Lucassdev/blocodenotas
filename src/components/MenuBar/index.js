import React from 'react';

import { Container, Header, AddIcon, Main, SearchIcon } from './styles';

function MenuBar() {
  return (
    <>
      <Container>
        <Header>
          <input type="text" name="" id="" />
          <button>
            <SearchIcon></SearchIcon>
          </button>
        </Header>
        <Main></Main>
        <button>
          <AddIcon></AddIcon>
        </button>
      </Container>
    </>
  );
}

export default MenuBar;
