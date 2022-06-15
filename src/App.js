import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './сomponents/Dialogs/Dialogs';
import Friends from './сomponents/Friends/Friends';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Users from './сomponents/Users/Users';

function App({ state, dispatch, ...props }) {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div>
        <Navbar navData={state.navData} />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile
            profilePage={state.profilePage}
            dispatch={dispatch} />} />
          <Route path='/dialogs*' element={<Dialogs 
            dialogsPage={state.dialogsPage}/>} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
