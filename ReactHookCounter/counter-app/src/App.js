import logo from './logo.svg';
import './App.css';
import Welcome from './Component/Welcome';
import './Component/ButtonCss.css';
import Message from './Component/Msg';
import Counter from './Component/Counter';
import LogInForm from './Component/LogIn';
import './Component/ButtonCss.css';

function App() {
  return (
    <div className="App">
      <Welcome name="Magic Digit Game" actorName="MDG"/> 
      {/* <LogInForm/> */}
       {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
