import { useState } from "react";
import { Home } from "./pages/Home";
import { Modal } from "./components/Modal";

function App() {
  // User is saved in localStorage, so it's only necessary to enter username on initial screen once
  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <main className="App">
      {/* If there's a username, then load Home component */}
      {user ? <Home user={user} /> : <Modal type='user' setUser={setUser} />}
    </main>
  );
}

export default App;
