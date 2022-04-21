import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { getHelp, selectSweeper } from '../../app/mineSweeperSlice';

const HelpButton = () => {
  const { isConntected } = useSelector(selectSweeper);
  const dispatch = useDispatch();

  const handleGetHelp = () => dispatch(getHelp('getting'));

  return (
    <Badge color={isConntected ? 'primary' : 'secondary'} variant='dot'>
      <Button onClick={handleGetHelp} variant='outlined'>
        Help
      </Button>
    </Badge>
  );
};

export default HelpButton;
