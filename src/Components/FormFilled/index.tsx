import styled from '@emotion/styled';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { reset } from "../../Store/FizzbuzzSlice";
import ComputerMan from "../../assets/Computer-Guy.svg";
import { useAppDispatch } from '../../Store';

const SContainer = styled.div`
  margin-bottom: 24px;
`
const SResultImage = styled.img`
  width: 100%;
  margin-bottom: 12px;
  height: auto;
`

export default function FormFilled(){
  const dispatch = useAppDispatch();
  const handleRetry = () => {
    dispatch(reset({}));
  }  
  return <SContainer>
    <SResultImage src={ComputerMan} alt="computer man meme"/>
    <Typography sx={{marginBottom: '16px'}} variant="h4">Do you want to try again?</Typography>
    <Button sx={{fontSize:'24px', marginBottom: '12px'}} size="large" variant="contained" onClick={handleRetry}> Retry</Button>
    <Typography sx={{marginBottom: '16px'}} variant="h4">you can also visit my {" "}
      <a rel="noreferrer" target="_blank" href="https://github.com/YonnaR" >github here</a>
    </Typography>
  </SContainer>
}