import './style/theme.css'; //tema
import './style/global.css'; //css global
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon } from 'lucide-react';
import {DefaultButton} from './components/DefaultButton'
//componente
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task:'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>
          <p className='formRow'>Lorem ipsum dolor!</p>
          <div className='formRow'>
            <Cycles/>
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>} />
          </div>
        </form>
      </Container>
    </>
  );
}
