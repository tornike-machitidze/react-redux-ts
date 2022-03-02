import { Provider } from "react-redux";
import PackagesList from "./components/PackagesList";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <PackagesList />
    </Provider>
  );
}

export default App;
