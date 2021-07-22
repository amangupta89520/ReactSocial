import { UserContextProvider } from "./contexts/user";
import Home from "./Home";

function App() {
  //wrapping with UserContextProvider so that we can access the user variable.
  return (
    <UserContextProvider> 
      <div className="App">
        <Home/>
      </div>
    </UserContextProvider>
  );
}

export default App;
