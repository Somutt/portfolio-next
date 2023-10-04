import * as Styled from './styles';
import Image from 'next/image';
import avatar from '../../img/ava-no-bg-crop.png';
import { Footer } from '../../components/Footer';
import { BioElement } from '../../components/BioElement';
import { SocialIcon } from '../../components/SocialIcon';
import { bio } from '../../data/bio';
import { socials } from '../../data/socials';

export const Home = () => {
  return (
    <>
      <Styled.Wrapper>
        <div className='shadowed'>
          <Image className='avatar' src={avatar} alt='Photo of the author' />
        </div>
        <div>
          <h1>
            Olá, eu sou <span className='devName'>Samuel</span>
            <span className='hand'>🤚</span>
          </h1>
          <h2>Desenvolvedor Full Stack.</h2>
          <ul>
            {bio.map((element, index) => (
              <BioElement
                key={index}
                emoji={element.emoji}
                text={element.description}
                label={element.emojiDescription}
                link={element.link}
              />
            ))}
          </ul>
          <div className='socials'>
            {socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </Styled.Wrapper>
      <Footer />
    </>
  );
};
