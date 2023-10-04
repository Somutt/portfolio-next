import * as Styled from './styles';

export type SocialIconProps = {
  link: string;
  icon: string;
  label: string;
};

export const SocialIcon = ({ link, icon, label }: SocialIconProps) => {
  return (
    <Styled.Wrapper
      target='_blank'
      aria-label={label}
      rel='noopener'
      href={link}
    >
      <i className={icon} aria-hidden='true' />
    </Styled.Wrapper>
  );
};
