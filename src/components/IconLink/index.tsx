import * as Styled from './styles';

export type IconLinkProps = {
  link: string;
  title: string;
  icon: string;
};

export const IconLink = ({ link, title, icon }: IconLinkProps) => {
  return (
    <Styled.Wrapper>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <i className={icon} /> {title}
      </a>
    </Styled.Wrapper>
  );
};
