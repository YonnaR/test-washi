import styled from '@emotion/styled';
import { Link } from 'react-router-dom'
import Logo from '../../assets/FizzBuzz.png';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';

const SLogo = styled.img`
  width: 150px;
  height: auto;
`;

const SToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  a {
    font-style: none;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
    height: 76px;
  }
`

export default function Navigation(){
  return <AppBar color="primary" position="static">
    <SToolbar variant="dense">
      <Link to="/">
        <SLogo src={Logo} alt='Fizzbuzz page branding'/>
      </Link>
      <Typography color="inherit" component="div">
        <Link to="/resume"> Results </Link>
      </Typography>
    </SToolbar>
  </AppBar>;
};