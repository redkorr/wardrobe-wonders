import { Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import { ROUTES } from './routes';
import './App.css';
import { AuthenticateWithRedirectCallback, ClerkProvider } from '@clerk/clerk-react';

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route
            path="checkout/login/sso-callback"
            element={<AuthenticateWithRedirectCallback />}
          />
        </Routes>
      </ClerkProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <ClerkProviderWithRoutes />
    </Router>
  );
}

export default App;
