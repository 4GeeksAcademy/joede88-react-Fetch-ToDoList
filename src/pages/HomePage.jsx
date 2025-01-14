import Bienvenidos from "../components/HomePage/Bienvenidos";
import WelcomeAlert from "../components/HomePage/WelcomeAlert";
import ToDoList from "../components/HomePage/ToDoList";

const HomePage = () => {
  return (
    <>
      <Bienvenidos />
      <WelcomeAlert />
      <ToDoList></ToDoList>
    </>
  );
};

export default HomePage;
