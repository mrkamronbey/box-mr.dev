import { Footer } from "./components/footer";
import RouterComponent from "./router";
import { GlobalStyle } from "./style-app";
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterComponent />
      <Footer />
    </>
  );
}

export default App;
