import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-Quicksand">
      <NavBar />
      <div
        className="max-w-[600px] my-5 
        mx-auto shadow-xls "
      >
        <Home />
      </div>
    </div>
  );
};

export default App;
