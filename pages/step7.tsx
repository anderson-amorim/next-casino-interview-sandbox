import type { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Step7: NextPage = () => (
  <Layout
    step={7}
    instruction={
      <div>
        Add the query parameters <code>limit</code> <code>name</code> and{' '}
        <code>isCaptured</code> to the api instead of filtering them directly on
        the component.
      </div>
    }
  />
);

export default Step7;
