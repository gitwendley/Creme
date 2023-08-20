import "./styles.css";
import Header from "./Component/Header";
import Content from "./Component/Content";
import Container from "./Component/Container";
import Touch from "./Component/Touch";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
     <h2>Start editing to see some magic happen!</h2> */}
      <Header />
      <Content />
      <Container />
      <Touch />
    </div>
  );
}
