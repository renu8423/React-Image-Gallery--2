
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  //npm insttal browser route{npm i react-router-dom}and import main.jsx file <App/> ko kai uppar warap kar dengay

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />
</BrowserRouter>

   

)
