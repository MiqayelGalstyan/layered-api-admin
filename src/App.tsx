import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@app/routes/AppRoutes';
import ThemeProvider from '@app/theme/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <Router>
            <ToastContainer />
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
