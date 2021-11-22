import SignPage from '../components/SignPage/SignPage';
import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <div className={styles.app}>
      <SignPage></SignPage>
    </div>
  );
}

export default App;
