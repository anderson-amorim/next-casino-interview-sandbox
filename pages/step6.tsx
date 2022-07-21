import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step6: NextPage = () => (
  <Layout
    step={6}
    nextStep="/step7"
    instruction={
      <div>
        Remove the <code>pokemonData</code> variable and fetch the data from the{' '}
        <code>/api/pokemon</code> local api endpoint instead.
      </div>
    }
  />
);

export default Step6;
