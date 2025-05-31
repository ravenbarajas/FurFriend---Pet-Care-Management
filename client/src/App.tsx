import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Modal from "./components/UI/Modal";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";
import NotFound from "./pages/not-found";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsLoginModalOpen(false);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    setIsRegisterModalOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header 
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onRegisterClick={() => setIsRegisterModalOpen(true)}
          onLogout={handleLogout}
        />
        
        <main className="main">
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/dashboard">
              {isAuthenticated ? <Dashboard /> : <Landing />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>

        {!isAuthenticated && <Footer />}
        
        {/* Login Modal */}
        <Modal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)}
          title="Sign In to PetCarePro"
        >
          <LoginForm 
            onLogin={handleLogin}
            onSwitchToRegister={() => {
              setIsLoginModalOpen(false);
              setIsRegisterModalOpen(true);
            }}
          />
        </Modal>

        {/* Register Modal */}
        <Modal 
          isOpen={isRegisterModalOpen} 
          onClose={() => setIsRegisterModalOpen(false)}
          title="Start Your Free Trial"
        >
          <RegisterForm 
            onRegister={handleRegister}
            onSwitchToLogin={() => {
              setIsRegisterModalOpen(false);
              setIsLoginModalOpen(true);
            }}
          />
        </Modal>
      </div>
    </QueryClientProvider>
  );
}

export default App;
