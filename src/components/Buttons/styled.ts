import Button, { buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const SButton = styled(Button)({
  [`&.${buttonClasses.root}`]: {
    height: '60px',
    margin: '0px 10px',
  },
});
