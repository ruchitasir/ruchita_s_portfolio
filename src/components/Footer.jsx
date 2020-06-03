import React from 'react'
import {Typography} from '@material-ui/core'
import Link from '@material-ui/core/Link';
import '../Footer.css';

function Copyright() {
  return (
    <Typography variant="body1" color="primary" align="center">
    {'Copyright © '}
    <p className="footerLogo">
      <Link color="inherit" href="">
        <strong> My Portfolio  </strong>
      </Link>{' '}
      </p>
          {new Date().getFullYear()}
          {'.'}
    </Typography>
  );
}

const Footer  = () =>{
  return (
    <footer>
      <Typography variant="body1"> <Copyright />Made by Ruchita Sirkanungo </Typography>
    </footer>
  )
}

export default Footer