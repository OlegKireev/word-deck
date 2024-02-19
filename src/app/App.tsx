import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSw } from '@/shared/hooks/useSw';
import { Route as RootRouter } from './AppRouter';

const App = function App() {
  useSw();
  return (
    <Fragment>
      <CssBaseline />
      <RootRouter />
    </Fragment>
  );
};

export default App;
