import * as React from 'react';
import { Nav, Header, Footer } from './common/components';
import * as s from './app.styles';

const StyledNav = s.Nav.withComponent(Nav);
const StyledHeader = s.Header.withComponent(Header);
const StyledFooter = s.Footer.withComponent(Footer);

export const App: React.StatelessComponent = props => (
  <s.Layout>
    <h1>{process.env.BASE_API_URL}</h1>
    <StyledNav />
    <StyledHeader />
    <s.Main>{props.children}</s.Main>
    <StyledFooter />
  </s.Layout>
);
