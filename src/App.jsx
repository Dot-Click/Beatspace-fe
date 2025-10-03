import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="bottom-right" richColors closeButton />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
