import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <Toaster position="bottom-right" richColors closeButton />
          <Router />
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
