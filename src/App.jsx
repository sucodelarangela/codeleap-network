import { Home } from "./pages/Home";
import { Modal } from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  // User is saved in localStorage, so it's only necessary to enter username on initial screen once
  const user = useSelector(state => state.user);

  return (
    <main className="App">
      {/* If there's a username, then load Home component */}
      {user ? <Home /> : <Modal type='user' />}
    </main>
  );
}

export default App;
