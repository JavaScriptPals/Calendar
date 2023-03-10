import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Calendar from './components/Calendar';


const App = () => {

  const array = ['hello', 'world', 'nice', 'to', 'meet', 'you']

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
      <Nav />
      <Calendar prop={array} />
    </>
  );
};

export default App;
