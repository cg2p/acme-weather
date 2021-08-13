import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '../components/Link';

import { useStyles } from '../components/Styles';

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <AppBar position="relative" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link href="/">Weather API
          </Link>
          
        </Typography>
      </Toolbar>
    </AppBar>     
    </React.Fragment>
  );
}  