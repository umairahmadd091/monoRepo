import { CodeBlock } from '@myorg/shared-components';
export function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <CodeBlock />
          <h1>
            <span> Hello there, </span>
            Welcome reactapp 👋
          </h1>
        </div>
      </div>
    </div>
  );
}
export default App;
