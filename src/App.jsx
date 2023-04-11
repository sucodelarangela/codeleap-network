import { Home } from "./pages/Home";
import { Modal } from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, setEdit } from "./redux/Modal";

function App() {
  // User is saved in localStorage, so it's only necessary to enter username on initial screen once
  const user = useSelector(state => state.user);
  // states for dealing with dialog's open and close actions
  const deleteIsOpen = useSelector(state => state.modal.delete);
  const editIsOpen = useSelector(state => state.modal.edit);

  return (
    <main className="App">
      {deleteIsOpen && (
        <Modal type='delete' />
      )}
      {editIsOpen && (
        <Modal type='edit' />
      )}
      {/* If there's a username, then load Home component */}
      {user ? <Home /> : <Modal type='user' />}
    </main>
  );
}

export default App;
