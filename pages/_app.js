import { Provider } from "react-redux";
import { wrapper, store } from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
