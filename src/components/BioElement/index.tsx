import * as Styled from './styles';

export type BioElementProps = {
  emoji: string;
  text: string;
  label: string;
  link?: string;
};

export const BioElement = ({
  emoji,
  text,
  label,
  link = '',
}: BioElementProps) => {
  return (
    <Styled.Wrapper>
      <span aria-label={label} role='img'>
        {emoji}
      </span>
      {link ? (
        <a target='_blank' rel='noreferrer' href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </Styled.Wrapper>
  );
};
