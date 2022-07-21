import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step2: NextPage = () => (
  <Layout
    step={2}
    nextStep="/step3"
    instruction={
      <div>
        Encapsulate the filtering logic into a function receiving a list of
        pokemons as an argument.
      </div>
    }
  />
);

export default Step2;
