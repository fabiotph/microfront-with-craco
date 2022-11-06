import React from 'react';
const CustomButton: any = React.lazy(() => import('CustomButton/Button'));

function App() {

  const onClick = () => {
    alert('Container passou o callback e microfrontend executou')
  }

  return (
    <div className="App">
      <h1>Container Frontend</h1>
      <CustomButton backgroundColor={'yellow'} callback={onClick} />
    </div>
  );
}

export default App;
