import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TrollMan from '../../assets/yuno_meme.svg';

const SContainer = styled.div`
  margin-bottom: 24px;
`;

const SResultImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 65%;
    margin: 12px 0;
  }
`;

export default function FillTheForm(){
  const history = useHistory();
  const handleClick = () => history.push('/');

  return <SContainer>
    <SResultImage>
      <img src={TrollMan} alt="Yunno meme man" />
    </SResultImage>
    <Typography sx={{marginBottom: '16px'}}>If you want to try the app you need to fill the form first!</Typography>
    <Button onClick={handleClick} variant="contained" size="large" sx={{fontSize: '24px'}}>
      Come back to form
    </Button>
  </SContainer>
}