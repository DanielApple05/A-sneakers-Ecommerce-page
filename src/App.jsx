import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import SignUp from './assets/components/signUp/signIn'


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route>
        <Route path="/index" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

