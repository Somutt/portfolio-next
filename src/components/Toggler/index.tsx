import * as Styled from './styles';

type TogglerProps = {
  darkMode: boolean;
  handleClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

export const Toggler = ({ darkMode, handleClick }: TogglerProps) => {
  return (
    <Styled.Wrapper
      onClick={handleClick}
      role='img'
      aria-label={
        darkMode
          ? 'Full Moon, click to disable dark mode'
          : 'New Moon, click to enable dark mode'
      }
    >
      {darkMode ? '🌕' : '🌑'}
    </Styled.Wrapper>
  );
};
