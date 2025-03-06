import './App.css'
import{ BrowserRouter,Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header'
import Footer from './Components/Footer';

import Home from './Pages/Home'

import People from './Pages/SolutionPages/People';
import Machine from './Pages/SolutionPages/Machine';
import Security from './Pages/SolutionPages/Security';
import Quality from './Pages/SolutionPages/Quality';


import SmartWorker from './Pages/ProductsPages/SmartWorker';
import SmartVision from './Pages/ProductsPages/SmartVision';
import SmartSecurity from './Pages/ProductsPages/SmartSecurity';
import SmartMachine from './Pages/ProductsPages/SmartMachine';

import SmartFactory from './Pages/SmartFactory';

import Industries from './Pages/Industries';
import Manufacturing from './Components/IndustriesPages/Manufacturing';
import FoodBeverages from './Components/IndustriesPages/FoodBeverages';
import WarehouseLogistics from './Components/IndustriesPages/WarehouseLogistics';
import Steel from './Components/IndustriesPages/Steel';

import Capabilities from './Pages/Capabilities';
import Contact from './Pages/Contact'


function App() {
  
  return (
    <BrowserRouter>
     <Header/>
       <Routes>
            <Route path="" element={<Home/>}  />
            <Route path='people' element={<People/>} />
            <Route path='facial-recognition' element={<People/>} />

            <Route path='machine' element={<Machine/>} />
            <Route path='machine-monitoring' element={<Machine/>} />

            <Route path='security' element={<Security/>} />
            <Route path='smartgatesecurity' element={<Security/>} />

            <Route path='quality' element={<Quality/>} />

            <Route path='smartfactory' element={<SmartFactory/>} />
            <Route path="capabilities" element={<Capabilities/>} />

            <Route path="contact" element={<Contact/>} />

            <Route path="automotive" element={<Industries/>} />
            <Route path='manufacturing' element={<Manufacturing/>} />
            <Route path='foodbeverages' element={<FoodBeverages/>} />
            <Route path='warehouselogistics' element={<WarehouseLogistics/>} />
            <Route path='steel' element={<Steel/>} />

            <Route path='smartworker' element={<SmartWorker/>} />
            <Route path='smartvision' element={<SmartVision/>} />
            <Route path='smartsecurity' element={<SmartSecurity/>} />
            <Route path='smartmachine' element={<SmartMachine/>} />

       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App
