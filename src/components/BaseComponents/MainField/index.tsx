import React, { useEffect } from 'react';
import { StyledTableCell, StyledTableRow, SField } from './styled';
import TableBody from '@mui/material/TableBody';
import { useSelector, useDispatch } from 'react-redux';
import { selectSweeper, startGame, setYouWin } from '../../../app/mineSweeperSlice';
import Field from './components/Field';

const MineField = () => {
  const { fieldMap, counter, mineCount, suspectedCounter } = useSelector(selectSweeper);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter == mineCount && suspectedCounter == mineCount) {
      dispatch(setYouWin());
    }
  }, [counter, mineCount]);

  useEffect(() => {
    dispatch(startGame());
  }, []);

  return (
    <TableBody>
      {fieldMap.map((row) => (
        <StyledTableRow>
          {row.map((item) => (
            <StyledTableCell component='th' scope='row'>
              <Field
                isMine={item.mine}
                isSuspected={item.suspected}
                xCordinate={item.x}
                yCordinate={item.y}
                fieldValue={item.value}
              />
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default MineField;
