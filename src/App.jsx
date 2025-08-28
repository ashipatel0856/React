import Movies from './MovieZone/Movies'
import UseEffect from './components/UseEffect'
import Fetch_Data_API from './components/Fetch_Data_API'
import Form from './components/Form'
import Multiple_Input_Handling from './components/Multiple_Input_Handling'
import Meal from './Food_Recipe/Meal'



import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Product from './pages/Product'
import Course_Detail from './pages/Course_Details'
import { Navbar } from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import IndianGov from './Home/IndianGov'

const App = () => {

  const money = 1000;
  const adharcard = 7087;
  return (
   <>
   {/* <Movies /> */}
  {/* <Fetch_Data_API /> */}
  {/* <Form /> */}
  {/* <Multiple_Input_Handling /> */}
  {/* <Meal /> */}


  <Router>
    < Navbar />
    <Routes>
        <Route path="/" element={<IndianGov money ={money} adharcard={adharcard} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/meal" element={<Meal />} />
        <Route path="/courses" element={<Product />}/>
       <Route path="/courses/:id" element={<Course_Detail />}/>
       <Route path ="/dashboard" element={<Dashboard />} />
       <Route path ="profile" element ={<Profile />} />

    </Routes>
  </Router>
   </>
  );
};

export default App;