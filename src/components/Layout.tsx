import Image from 'next/image';
import Link from 'next/link';
import App from '../coding/App';
import styles from '../../styles/Home.module.css';

type Props = { nextStep?: string; instruction: JSX.Element; step: number };

const Layout: React.FC<Props> = ({ nextStep, instruction, step }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to{' '}
        <a href="https://yolo.com">
          <Image
            alt="yolo.group"
            src="https://yolo.com/wp-content/themes/coingaming/img/coingaming.svg"
            height={90}
            width={200}
          />
        </a>
      </h1>

      <div className={styles.description}>
        <h3>Step {step}</h3>
        <div className={styles.instruction}>{instruction}</div>
      </div>

      <div className={styles.result}>
        <App />
      </div>
    </main>

    <footer className={styles.footer}>
      {nextStep && (
        <Link href={nextStep}>Click here to go to the next step</Link>
      )}
    </footer>
  </div>
);

export default Layout;
