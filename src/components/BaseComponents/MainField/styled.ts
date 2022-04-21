import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableRow = styled(TableRow)();

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    border: `1px solid red`,
    height: '60px',
    width: '60px',
    padding: '0px !important',
  },
}));

export const SField = styled('div')(({ wrongSuspect }: { wrongSuspect: boolean }) => ({
  cursor: 'pointer',
  height: '100%',
  width: '100%',
  border: `1px solid red`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: wrongSuspect ? 'red' : 'white',
}));
