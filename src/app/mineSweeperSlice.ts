import { formLabelClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { sweeperProps, fieldProps } from './types';

const initialState: sweeperProps = {
  fieldSize: 5,
  mineCount: 10,
  counter: 0,
  suspectedCounter: 0,
  isConntected: false,
  helpText: '',
  fieldMap: [],
};

const validateField = (fieldSize: number, mineCount: number) => {
  if (mineCount < Math.pow(fieldSize, 2)) {
    return true;
  }
  alert('Field is too small');
  return false;
};

export const sweeperSlice = createSlice({
  name: 'sweeper',
  initialState,
  reducers: {
    startConnection: (state) => {
      state.isConntected = true;
      console.log('startConnecting');
    },
    getHelp: (state, action) => {
      state.helpText = action.payload;
    },
    setHelp: (state, action) => {
      state.helpText = action.payload;
    },
    endConnection: (state) => {
      state.isConntected = false;
      console.log('endConnection');
    },
    startGame: (state) => {
      state.counter = 0;
      state.suspectedCounter = 0;
      let mineCount = state.mineCount;
      const fieldMap: fieldProps[][] = [];

      for (let i = 0; i < state.fieldSize; i++) {
        fieldMap[i] = [];
        for (let j = 0; j < state.fieldSize; j++) {
          fieldMap[i][j] = { x: i, y: j, suspected: false, mine: false };
        }
      }
      while (mineCount !== 0) {
        const xIndex = Math.floor(Math.random() * state.fieldSize);
        const yIndex = Math.floor(Math.random() * state.fieldSize);

        const field = fieldMap[xIndex][yIndex];

        if (field.mine) {
          continue;
        }
        fieldMap[xIndex][yIndex] = { ...field, mine: true };
        mineCount--;
      }
      state.fieldMap = fieldMap;
    },
    changeMineCount: (state, action) => {
      if (!validateField(state.fieldSize, action.payload)) {
        return;
      }
      state.mineCount = action.payload;
    },
    changeFieldSize: (state, action) => {
      if (!validateField(action.payload, state.mineCount)) {
        return;
      }
      state.fieldSize = action.payload;
    },
    suspect: (state, action) => {
      const { xCordinate, yCordinate } = action.payload;
      const field = state.fieldMap[xCordinate][yCordinate];

      if (field.value) {
        return;
      }

      state.fieldMap[xCordinate][yCordinate] = { ...field, suspected: !field.suspected };

      if (field.mine) {
        state.counter = !field.suspected ? state.counter + 1 : state.counter - 1;
      }
      state.suspectedCounter = !field.suspected ? state.suspectedCounter + 1 : state.suspectedCounter - 1;
    },
    openField: (state, action) => {
      const { xCordinate, yCordinate, neighbourFields } = action.payload;
      const field = state.fieldMap[xCordinate][yCordinate];
      if (field.mine) {
        alert('Game Over');
        return;
      }
      const count = neighbourFields.filter((item: fieldProps) => item?.mine).length;
      state.fieldMap[xCordinate][yCordinate] = { ...field, value: `${count}` };
    },
  },
});

export const {
  startGame,
  suspect,
  openField,
  changeMineCount,
  changeFieldSize,
  startConnection,
  endConnection,
  // this is just an experiment i was tring middlewares
  getHelp,
  setHelp,
} = sweeperSlice.actions;

export const selectSweeper = (state: { sweeper: sweeperProps }) => state.sweeper;

export default sweeperSlice.reducer;
