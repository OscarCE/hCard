import { createRoot } from 'react-dom/client';
import App from './App';
import '../public/index.css';
import Store, { StoreContext } from './Store';

const container = document.getElementById('root');
const root = createRoot(container!);


root.render(
  <StoreContext.Provider value={new Store()}>
    <App />
  </StoreContext.Provider>
);
