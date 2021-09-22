import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const data = [];
  return (
    <>
    <Header/>
    <Form/>
    <List data = {data}/>
    </>
  );
}

export default App;
