import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Wrapper>
      <h2>
        A página que procura não foi encontrada |{' '}
        <a href='/'>Clique aqui para retornar</a>
      </h2>
    </Styled.Wrapper>
  );
};
