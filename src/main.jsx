
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { store } from './components/store.js'
import {Provider} from "react-redux";
import { Themecontextprovider } from './components/Themecontext.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

<Themecontextprovider>
       <Provider store={store}>
        <App />
    </Provider>
</Themecontextprovider>

  </BrowserRouter>

)

