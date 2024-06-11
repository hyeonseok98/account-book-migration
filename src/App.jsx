import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/configStore";
import router from "./routes/router";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
