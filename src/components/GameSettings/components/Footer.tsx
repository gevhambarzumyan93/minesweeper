import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { getHelp, startGame, selectSweeper } from '../../../app/mineSweeperSlice';
import { SFooter } from '../styled';

const Footer = () => {
  const { isConntected } = useSelector(selectSweeper);
  const dispatch = useDispatch();

  const handleStartGame = () => dispatch(startGame());
  const handleGetHelp = () => dispatch(getHelp('getting'));

  return (
    <SFooter>
      <Button onClick={handleStartGame} variant='outlined'>
        Start
      </Button>
      <Badge color={isConntected ? 'primary' : 'secondary'} variant='dot'>
        <Button onClick={handleGetHelp} variant='outlined'>
          Help
        </Button>
      </Badge>
    </SFooter>
  );
};

export default Footer;
