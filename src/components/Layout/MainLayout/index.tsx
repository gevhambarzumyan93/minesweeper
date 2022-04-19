import Grid from '@mui/material/Grid';
import { MainLayoutProps } from './types';
import { SMainGrid, SBodyGrid } from './styled';

const MainLayut = ({ children, renderForm = () => <></> }: MainLayoutProps) => {
  return (
    <SMainGrid container spacing={2}>
      <SBodyGrid container item xs={8}>
        {children}
      </SBodyGrid>
      <Grid item xs={4}>
        {renderForm()}
      </Grid>
    </SMainGrid>
  );
};

export default MainLayut;
