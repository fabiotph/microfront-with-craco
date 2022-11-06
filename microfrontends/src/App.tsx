import "./App.css";

interface IButton {
  backgroundColor?: string;
  callback?: () => void | (() => {}),
}

function App(props: IButton) {
  const { backgroundColor, callback } = props;
  return <button style={{ backgroundColor }} onClick={callback} >Botão Microfrontend</button>;
}

export default App;
