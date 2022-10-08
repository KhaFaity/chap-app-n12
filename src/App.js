import './App.css';
import Login from './page/Login';
import Register from './page/Regiter';
import Home from './page/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {AuthContext} from "./context/AuthContext"
import {useContext} from "react"
function App() {
  const {currenUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currenUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
             <Home/>
          </ProtectedRoute>}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
