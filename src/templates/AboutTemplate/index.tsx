import * as Styled from './styles';
import { Terminal } from '../../components/Terminal';
import { info } from '../../data/info';

export const AboutTemplate = () => {
  const aboutMeText = () => {
    return (
      <>
        <p>
          <span>samuelmoura $ </span>cat sobresamuel
        </p>
        <p>
          <span>
            sobresamuel <span>(main)</span> ${' '}
          </span>
          {info.bio}
        </p>
      </>
    );
  };

  const skillsText = () => {
    return (
      <>
        <p>
          <span>samuelmoura $ </span> cd habilidades/ferramentas
        </p>
        <p>
          <span>
            habilidades/ferramentas <span>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p>
          <span>Proficiências</span>
        </p>
        <ul className='skills'>
          {info.proficiencies.map((profi, index) => (
            <li key={index}>{profi.toLowerCase()}</li>
          ))}
        </ul>
      </>
    );
  };

  const hobbiesText = () => {
    return (
      <>
        <p>
          <span>samuelmoura $</span> cd hobbies/interesses
        </p>
        <p>
          <span>
            hobbies/interesses <span>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <span>{hobby.emoji}</span>
              {hobby.description}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <Styled.Wrapper>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={hobbiesText()} />
    </Styled.Wrapper>
  );
};
