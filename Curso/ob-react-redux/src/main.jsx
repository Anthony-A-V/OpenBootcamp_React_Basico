import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redux imports
import { Provider } from 'react-redux';
// Import Config Function of App Store
import { createAppStore } from './store/config/storeConfig';

// We create the App Store
let appStore = createAppStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
