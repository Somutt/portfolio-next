import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';

type BaseProps = {
  children?: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', `${!darkMode}`);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const detectDarkMode = !!localStorage.getItem('darkMode');

    if (detectDarkMode) {
      setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  return (
    <Styled.Wrapper>
      <div className={darkMode ? 'dark' : 'light'}>
        <NavBar darkMode={darkMode} handleClick={toggleDarkMode} />
        {children}
      </div>
    </Styled.Wrapper>
  );
};
