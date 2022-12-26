import styles from './index.module.css';
import { CodeBlock } from '@myorg/shared-components';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <CodeBlock />
            <h1>
              <span> Hello there, </span>
              Welcome nextapp 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
