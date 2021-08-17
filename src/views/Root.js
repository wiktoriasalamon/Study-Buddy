import React from 'react';
import { ThemeProvider } from 'styled-components';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';

const Root = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
