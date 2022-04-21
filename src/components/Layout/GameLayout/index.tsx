import { SHeaderGrid, SFooterGrid, SMainGrid, SBodyGrid } from './styled';
import MainField from '../../BaseComponents/MainField/';
import Header from './components/Header';
import Footer from './components/Footer';

const GameLayout = () => {
  return (
    <SMainGrid alignItems='center' justifyContent='center' container spacing={4}>
      <SHeaderGrid item xs={12}>
        <Header />
      </SHeaderGrid>
      <SBodyGrid container item xs={12}>
        <MainField />
      </SBodyGrid>
      <SFooterGrid item xs={12}>
        <Footer />
      </SFooterGrid>
    </SMainGrid>
  );
};

export default GameLayout;
