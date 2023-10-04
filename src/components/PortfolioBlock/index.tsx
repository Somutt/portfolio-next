import { IconLink } from '../IconLink';
import Image, { StaticImageData } from 'next/image';
import * as Styled from './styles';

export type PortfolioBlockProps = {
  image: StaticImageData;
  live: string;
  source: string;
  title: string;
};

export const PortfolioBlock = ({
  image,
  live,
  source,
  title,
}: PortfolioBlockProps) => {
  return (
    <Styled.Wrapper>
      <Image src={image} alt='mockup' />
      <h2>{title}</h2>
      <div className='portfolio'>
        <IconLink link={live} title='Live Demo' icon='fa fa-safari' />
        <IconLink link={source} title='Source Code' icon='fa fa-code' />
      </div>
    </Styled.Wrapper>
  );
};
