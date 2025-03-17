import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-950 min-h-screen text-white">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
