import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';
import Category from '../pages/Category';
import Items from '../pages/Items';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='/shopItem' element={<Items />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
