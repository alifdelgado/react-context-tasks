import Header from "./components/Header";
import Router from "./Router";

const App = () => {
  return (
    <>
      <div className="h-screen text-center">
        <Header />
        <div className="container h-full mx-auto">
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;
