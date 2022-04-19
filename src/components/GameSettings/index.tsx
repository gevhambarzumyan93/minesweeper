import { useState } from 'react';
import { SWrapper, SContainer, SFooter } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { selectSweeper, startGame, changeMineCount, changeFieldSize } from '../../app/mineSweeperSlice';
import Button from '@mui/material/Button';
import Footer from './components/Footer';
import { Typography } from '@mui/material';

const GameSettings = () => {
  const { fieldSize, mineCount, helpText } = useSelector(selectSweeper);
  const dispatch = useDispatch();
  const [stateFieldSize, setStateFieldSize] = useState(fieldSize);
  const [stateMineCount, setStateMineCount] = useState(mineCount);
  const [] = useState(mineCount);

  const handleSubmit = () => {
    dispatch(changeFieldSize(stateFieldSize));
    dispatch(changeMineCount(stateMineCount));
  };

  return (
    <SWrapper>
      <SContainer>
        <TextField
          id='outlined-multiline-flexible'
          label='Field Size'
          value={stateFieldSize}
          type='number'
          onBlur={handleSubmit}
          onChange={(event: any) => setStateFieldSize(event.target.value as number)}
        />
        <TextField
          id='outlined-multiline-flexible'
          label='Mine Count'
          value={stateMineCount}
          type='number'
          onBlur={handleSubmit}
          onChange={(event: any) => setStateMineCount(event.target.value as number)}
        />
      </SContainer>
      <Footer />
      <Typography align='center'>{helpText}</Typography>
    </SWrapper>
  );
};

export default GameSettings;
