import { SocketContext, socket } from "./contexts/SocketContext";
import Feed from "./components/Feed";
import NewPostForm from "./components/NewPostForm";
import './assets/styles.css';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="container">
        <h1>🔥 Social Feed</h1>
        <NewPostForm />
        <Feed />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
