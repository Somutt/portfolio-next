import * as Styled from './styles';

export type TerminalProps = {
  text?: React.ReactNode;
};

export const Terminal = ({ text = 'oi' }: TerminalProps) => {
  const icon = 'fa fa-circle';

  return (
    <Styled.Wrapper className='shadowed'>
      <div className='topBorder'>
        <i className={icon} />
        <i className={icon} />
        <i className={icon} />
      </div>
      <div className='terminal'>{text}</div>
    </Styled.Wrapper>
  );
};
