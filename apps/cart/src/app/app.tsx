import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';
import CartOrder from '../pages/CartOrder';
import CartValue from '../pages/CartValue';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path='/' element={<CartOrder />} />
        <Route path='/cartvalue' element={<CartValue />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
