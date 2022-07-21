import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step4: NextPage = () => (
  <Layout
    step={4}
    nextStep="/step5"
    instruction={
      <div>Add a text input to allow the user to filter pokemons by name.</div>
    }
  />
);

export default Step4;
