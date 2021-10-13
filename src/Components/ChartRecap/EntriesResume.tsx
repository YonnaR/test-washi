
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../../Store';
import { reset } from '../../Store/FizzbuzzSlice';
import { DEFAULT_BUZZ_STRING, DEFAULT_FIZZ_STRING, DEFAULT_LIMIT, DEFAULT_NUMBER_ONE, DEFAULT_NUMBER_TWO } from '../../Store/FizzbuzzSlice/FizzBuzz';

const SBox = styled(Box)`
  min-width: 275px;
  width: 300px;
  font-size: 1.2em;
  h5 {
    text-align: center;
  }
`


export default function EntriesResume(){
  const data = useSelector((state: IRootState) => state.fizzbuzz).data;
  const result = useSelector((state: IRootState) => state.fizzbuzz).result;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleRetry = () => {
    dispatch(reset({}));
    history.push('/');
  }

  let fizzString = data.fizzString === "" ? DEFAULT_FIZZ_STRING : data.fizzString,
    buzzString = data.buzzString === "" ? DEFAULT_BUZZ_STRING : data.buzzString,
    number1 = data.number1 === 0 ? DEFAULT_NUMBER_ONE : data.number1,
    number2 = data.number2 === 0 ? DEFAULT_NUMBER_TWO : data.number2,
    limit = data.limit === 0 ? DEFAULT_LIMIT : data.limit;

  return <SBox>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Resume :
        </Typography>
        <Card variant="outlined" sx={{padding:'8px'}}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your inputs :
          </Typography>
          <Typography variant="body2"> your first number is <b>{number1}</b> </Typography>
          <Typography variant="body2"> your second number is <b>{number2}</b> </Typography>
          <Typography variant="body2"> your fizz word is <b>{fizzString}</b> </Typography>
          <Typography variant="body2"> your buzz word is <b>{buzzString}</b> </Typography>
          <Typography variant="body2"> your limit is <b>{limit}</b> </Typography>
        </Card>
        <Card variant="outlined" sx={{padding:'8px', marginTop: '12px'}}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Records:
          </Typography>
          <Typography variant="body2"> <b>{fizzString} Founded {result?.fizzCount}</b></Typography>
          <Typography variant="body2"> <b>{buzzString} Founded {result?.buzzCount}</b> </Typography>
          <Typography variant="body2"> <b>{fizzString + buzzString} founded {result?.fizzbuzzCount}</b> </Typography>
          <Typography variant="body2"> <b>{result?.normalCount} number founded </b> </Typography>
        </Card>
      </CardContent>
      <CardActions sx={{borderTop: 1, borderColor: 'divider' }}>
        <Button size="medium" onClick={handleRetry}>Retry</Button>
      </CardActions>
    </Card>
  </SBox>
}