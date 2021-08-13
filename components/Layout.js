import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';

const Layout = props => (
  <div>
    <CssBaseline />
    <Header />
        {props.children}
  </div>
);

export default Layout;
