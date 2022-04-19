import Grid, { gridClasses } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const SMainGrid = styled(Grid)(() => ({
  [`&.${gridClasses.container}`]: {
    height: '100%',
  },
}));

export const SBodyGrid = styled(Grid)(() => ({
  [`&.${gridClasses.item}`]: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px !important',
  },
}));
