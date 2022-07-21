import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step3: NextPage = () => (
  <Layout
    step={3}
    nextStep="/step4"
    instruction={
      <div>
        Add a checkbox input to allow the user to switch between captured and
        not captured pokemons.
      </div>
    }
  />
);

export default Step3;
