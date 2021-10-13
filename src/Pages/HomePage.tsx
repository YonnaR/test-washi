import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { IRootState } from '../Store';
import PageContainer from '../Utils/PageContainer.styles';
import Form from '../Components/Form';
import FormFilled from '../Components/FormFilled';

const SFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
`

export default function HomePage(){
  const result = useSelector((state: IRootState) => state.fizzbuzz).result;
  return <PageContainer>
    {result && <>
      <Typography sx={{textAlign: 'center', marginBottom: '16px', fontSize: '32px'}} variant="h1"> <b>Seem like you already filled the form </b></Typography>
      <FormFilled />
    </>}
    {!result && <>
      <Typography sx={{textAlign: 'center', marginBottom: '16px', fontSize: '32px'}} variant="h1"> <b>Welcome to the <br/> FIZZBUZZ </b></Typography>
      <Typography sx={{marginBottom: '16px'}}>Rules are simples, <br/> fill the form first!</Typography>
      <SFormContainer>
        <Form />
      </SFormContainer>
    </>}
  </PageContainer>;
};