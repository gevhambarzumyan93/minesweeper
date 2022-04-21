import { SFooterWrapper } from '../styled';
import HelpButton from '../../../Buttons/HelpButton';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSweeper } from '../../../../app/mineSweeperSlice';

const Footer = () => {
  const { helpText } = useSelector(selectSweeper);

  return (
    <SFooterWrapper>
      <HelpButton />
      <Typography align='center'>{helpText}</Typography>
    </SFooterWrapper>
  );
};

export default Footer;
