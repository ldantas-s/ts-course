import { Child } from './Child';

const Parent = () => (
  <Child name="Natsu" onClick={() => console.log('Natsu')}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, obcaecati.
  </Child>
);

export default Parent;
