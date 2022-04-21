import { useEffect } from 'react';
import { SField } from '../styled';
import { FieldProps } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { selectSweeper, suspect, openField } from '../../../../app/mineSweeperSlice';
import get from 'lodash/get';

const Field = ({ isSuspected, xCordinate, yCordinate, fieldValue, isMine }: FieldProps) => {
  const { fieldMap, isGameOver } = useSelector(selectSweeper);
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

  const renderBody = () => {
    if (fieldValue) {
      return fieldValue;
    }
    if (isSuspected) {
      return 'A';
    }
    if (isGameOver && isMine) {
      return 'M';
    }
  };

  return (
    <SField onClick={handleClick} wrongSuspect={isGameOver && isSuspected && isMine} onContextMenu={handleRightClick}>
      {renderBody()}
    </SField>
  );
};

export default Field;
