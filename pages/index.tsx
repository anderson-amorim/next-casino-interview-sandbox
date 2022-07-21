import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step1: NextPage = () => (
  <Layout
    step={1}
    nextStep="/step2"
    instruction={
      <div>
        Filter all the captured pokemons from the <code>pokemonData</code> file
        and list them on the component.
      </div>
    }
  />
);

export default Step1;
