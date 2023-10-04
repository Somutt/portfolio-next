import * as Styled from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { links } from '../../data/links';
import { Toggler } from '../Toggler';

export type NavBarProps = {
  darkMode?: boolean;
  handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

export const NavBar = ({ darkMode = false, handleClick }: NavBarProps) => {
  const routerLocation = useRouter().pathname;
  const [active, setActive] = useState(
    routerLocation === '/'
      ? 'home'
      : routerLocation.slice(1, routerLocation.length),
  );

  return (
    <Styled.Wrapper>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className={link.active === active && !link.type ? 'active' : ''}
          >
            <Link
              href={link.to}
              onClick={() => setActive(link.active)}
              className='link'
            >
              {!link.type && <p>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </li>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </ul>
    </Styled.Wrapper>
  );
};
