import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IRootState } from "../Store";
import PageContainer from "../Utils/PageContainer.styles";
import ChartRecap from "../Components/ChartRecap";
import FillTheForm from "../Components/FillTheForm";

const ChartRecapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function ResumePage(){
  const result = useSelector((state: IRootState) => state.fizzbuzz).result;
  if(!result) return <PageContainer>
    <Typography sx={{marginBottom: '16px', fontSize: '32px'}} variant="h1"> <b>Seem like you haven't to fill the form first!</b></Typography>
    <FillTheForm />
  </PageContainer>;

  return <PageContainer>
    <Typography sx={{marginBottom: '16px', fontSize: '32px'}} variant="h1"> <b>Thank's for your participation! </b></Typography>
    <Typography sx={{marginBottom: '8px'}}> You can check your results bellow:</Typography>
    <ChartRecapContainer>
      <ChartRecap/>
    </ChartRecapContainer>
  </PageContainer>;
};