import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TastList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <TaskInput/>
        <div>
          <TaskList text="Clean up bedroom"/>
          <TaskList text="Buy some milk"/>
          <TaskList text="Jogging"/>
          <TaskList text="Learn React"/>
          <TaskList text="Doing Exercises"/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
