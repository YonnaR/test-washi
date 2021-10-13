import { MouseEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../../Store';
import { validate, input } from '../../Store/FizzbuzzSlice';
import { IFormData } from '../../Store/FizzbuzzSlice/constant';
import { IInputPayload } from '../../Utils/StoreUtils';
import * as S from './styles';
import { Card } from '@mui/material';

export default function Form(){
  const {
    buzzString,
    fizzString,
    limit,
    number1,
    number2
  } = useSelector((state: IRootState) => state.fizzbuzz).data;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = (e :MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(validate({}));
    history.push('/resume');
  };

  const handleInputs = ( { currentTarget }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = currentTarget;
    dispatch(input({name, value} as IInputPayload<IFormData>));
  };

  return <Card sx={{ padding:"8px", maxWidth: "900px"}} variant="outlined">
    <S.Container>
      <S.Form>
        <TextField
          fullWidth
          type="text"
          name="fizzString"
          value={fizzString}
          onChange={handleInputs}
          label="Fizz string"
          variant="standard"
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          name="buzzString"
          value={buzzString}
          onChange={handleInputs}
          label="Buzz string"
          variant="standard"
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          name="limit"
          value={limit === 0 ? "" : limit}
          onChange={handleInputs}
          label="Limit"
          variant="standard"
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          name="number1"
          value={number1 === 0 ? "" : number1}
          onChange={handleInputs}
          label="Number one"
          variant="standard"
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          name="number2"
          value={number2 === 0 ? "" : number2}
          onChange={handleInputs}
          label="Number two"
          variant="standard"
        />
      </S.Form>
      <S.ButtonContainer>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          href=""
          onClick={handleSubmit}
        >
          Envoyer
        </Button>
      </S.ButtonContainer>
    </S.Container>
  </Card>;
}