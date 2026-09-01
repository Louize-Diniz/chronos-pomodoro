import './style/theme.css'; //tema
import './style/global.css'; //css global
import { Heading } from './components/Heading';

//componente
export function App() {
  console.log('oi');

  return (
    <>
      <Heading> olá mundo!</Heading>
      <Heading> oi feia</Heading>
      <Heading> oi linda</Heading>
      <Heading> oi horrorosa</Heading>
      <Heading> oi cara de cu</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        distinctio animi sint esse molestias quidem perspiciatis quisquam ex, id
        neque ab cupiditate et explicabo fuga recusandae aliquid ipsa accusamus
        voluptatum.
      </p>
    </>
  );
}
