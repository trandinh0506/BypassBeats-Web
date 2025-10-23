import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
