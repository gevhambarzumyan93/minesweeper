import { useEffect } from 'react';
import { StyledTableCell, StyledTableRow, SField } from '../styled';
import { FieldProps } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { selectSweeper, suspect, openField } from '../../../../app/mineSweeperSlice';
import get from 'lodash/get';

const Field = ({ isSuspected, xCordinate, yCordinate, fieldValue }: FieldProps) => {
  const { fieldMap } = useSelector(selectSweeper);
  const dispatch = useDispatch();

  const handleRightClick = (event: any) => {
    event.preventDefault();
    dispatch(suspect({ xCordinate, yCordinate }));
  };

  const handleClick = () => {
    const neighbourFields = [
      get(fieldMap, [xCordinate - 1, yCordinate - 1]),
      get(fieldMap, [xCordinate - 1, yCordinate]),
      get(fieldMap, [xCordinate - 1, yCordinate + 1]),

      get(fieldMap, [xCordinate, yCordinate - 1]),
      get(fieldMap, [xCordinate, yCordinate + 1]),

      get(fieldMap, [xCordinate + 1, yCordinate - 1]),
      get(fieldMap, [xCordinate + 1, yCordinate]),
      get(fieldMap, [xCordinate + 1, yCordinate + 1]),
    ];
    dispatch(openField({ xCordinate, yCordinate, neighbourFields }));
  };

  return (
    <SField onClick={handleClick} onContextMenu={handleRightClick}>
      {fieldValue || (isSuspected && 'A')}
    </SField>
  );
};

export default Field;
