import { useState } from "react";

interface IButton {
  backgroundColor?: string;
  callback?: () => void | (() => {}),
}

function App(props: IButton) {
  const { backgroundColor, callback } = props;
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const disableButtonTemporality = () => {
    setIsDisable(true);
    setTimeout(() => setIsDisable(false), 2000);
  }

  return <button style={{ backgroundColor, padding: '5px' }} disabled={isDisable} onClick={() => { disableButtonTemporality(); callback?.(); }} >Botão Microfrontend</button>;
}

export default App;
