import Grid, { gridClasses } from '@mui/material/Grid';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const SMainGrid = styled(Grid)(() => ({
  [`&.${gridClasses.container}`]: {
    maxHeight: '100%',
    width: '100%',
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
}));

export const SHeaderGrid = styled(Grid)(() => ({
  [`&.${gridClasses.item}`]: {
    padding: 10,
  },
}));

export const SFooterGrid = styled(Grid)(() => ({
  [`&.${gridClasses.item}`]: {
    padding: 10,
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

export const SNumberInput = styled(TextField)({
  [`&.${textFieldClasses.root}`]: {
    width: '5%',
  },
});

export const SHeaderWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
});

export const SFooterWrapper = styled('div')({
  display: 'block',
});

export const SContainer = styled('div')({
  width: '100%',
  height: '100%',
});
