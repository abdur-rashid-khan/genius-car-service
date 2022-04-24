import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Navbar/Navbar/Navbar';
import About from './components/page/About/About';
import AddPost from './components/page/AddPost/AddPost';
import CheckOut from './components/page/CheckOut/CheckOut/CheckOut';
import Details from './components/page/DetailsPage/Details';
import NoPage from './components/page/Error/NoPage/NoPage';
import Forget from './components/page/Forget/Forget';
import Login from './components/page/Form/Login/Login';
import RequireAuth from './components/page/Form/Login/RequireAuth';
import SignIn from './components/page/Form/SignIn/SignIn';
import Manage from './components/page/Manage/Manage';
import Update from './components/page/Update/Update';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/details/:detailsId' element={<Details></Details>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/logout' element={<Login></Login>}></Route> */}
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/add-post' element={<RequireAuth>
          <AddPost></AddPost>
        </RequireAuth>}></Route>
        <Route path='/add-post' element={<RequireAuth>
          <AddPost></AddPost>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Manage></Manage>
        </RequireAuth>}></Route>
        <Route path='/user/:id' element={<RequireAuth>
          <Update></Update>
        </RequireAuth>}></Route>
        <Route path='/register' element={<SignIn></SignIn>}></Route>
        <Route path='/forget' element={<Forget></Forget>}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
