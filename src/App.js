import  "./App.css"
import TodoApp from "./components/TodoApp";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <h1>todo list</h1>
      <TodoApp/>
      <ToastContainer closeButton={false} position="top-right" transition={Slide}/>
      
    </div>
  );
};

export default App;
