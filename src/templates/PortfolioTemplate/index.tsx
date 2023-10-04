import * as Styled from './styles';
import { PortfolioBlock } from '../../components/PortfolioBlock';
import { portfolio } from '../../data/portfolio';

export const PortfolioTemplate = () => {
  return (
    <Styled.Wrapper>
      {portfolio.map((el, index) => (
        <PortfolioBlock
          key={index}
          image={el.image}
          live={el.live}
          source={el.source}
          title={el.title}
        />
      ))}
    </Styled.Wrapper>
  );
};
