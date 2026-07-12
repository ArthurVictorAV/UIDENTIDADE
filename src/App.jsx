import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;