import { TPaperProps } from './types';
import { SWrapper } from './styled';

const Paper = ({ children }: TPaperProps) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Paper;
