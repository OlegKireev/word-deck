import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Pages } from '@/pages';
import { useSw } from '@/shared/hooks/useSw';

const App = function App() {
  useSw();
  return (
    <Fragment>
      <CssBaseline />
      <Pages />
    </Fragment>
  );
};

export default App;
