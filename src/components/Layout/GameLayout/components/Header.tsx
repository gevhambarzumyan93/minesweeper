import { useState } from 'react';
import { SHeaderGrid, SNumberInput } from '../styled';
import { selectSweeper, changeMineCount, changeFieldSize } from '../../../../app/mineSweeperSlice';
import { useSelector, useDispatch } from 'react-redux';
import StartButton from '../../../Buttons/StartButton';

const Header = () => {
  const { fieldSize, mineCount, helpText } = useSelector(selectSweeper);
  const dispatch = useDispatch();
  const [stateFieldSize, setStateFieldSize] = useState(fieldSize);
  const [stateMineCount, setStateMineCount] = useState(mineCount);

  const handleSubmit = () => {
    dispatch(changeFieldSize(stateFieldSize));
    dispatch(changeMineCount(stateMineCount));
  };

  return (
    <SHeaderGrid>
      <SNumberInput
        id='outlined-multiline-flexible'
        label='Field Size'
        value={stateFieldSize}
        type='number'
        onBlur={handleSubmit}
        onChange={(event: any) => setStateFieldSize(event.target.value as number)}
      />
      <StartButton />
      <SNumberInput
        id='outlined-multiline-flexible'
        label='Mine Count'
        value={stateMineCount}
        type='number'
        onBlur={handleSubmit}
        onChange={(event: any) => setStateMineCount(event.target.value as number)}
      />
    </SHeaderGrid>
  );
};

export default Header;
