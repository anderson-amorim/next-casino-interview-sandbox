import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step5: NextPage = () => (
  <Layout
    step={5}
    nextStep="/step6"
    instruction={
      <div>
        Add a number input to allow the user to limit the number of pokemons
        listed on the screen
      </div>
    }
  />
);

export default Step5;
