import { useSelector, useDispatch } from 'react-redux';
import { startGame, selectSweeper } from '../../app/mineSweeperSlice';
import CheckIcon from '@mui/icons-material/Check';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import { SButton } from './styled';

const StartButton = () => {
  const { isWined, isGameOver } = useSelector(selectSweeper);
  const dispatch = useDispatch();

  const handleStartGame = () => dispatch(startGame());

  const renderBody = () => {
    if (isGameOver) {
      return <ReplayIcon />;
    }
    if (isWined) {
      return <CheckIcon />;
    }
    return <PlayArrowIcon />;
  };

  return (
    <SButton onClick={handleStartGame} variant='outlined'>
      {renderBody()}
    </SButton>
  );
};

export default StartButton;
