import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './сomponents/Dialogs/Dialogs';
import Friends from './сomponents/Friends/Friends';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Photos from './сomponents/Photos/Photos';
import Settings from './сomponents/Settings/Settings';
import Users from './сomponents/Users/Users';

function App({ state, dispatch, ...props }) {
  return (
    <div className='App'>
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
          <Route path='/dialogs/*' element={<Dialogs 
            dialogsPage={state.dialogsPage}
            dispatch={dispatch}/>} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/photos' element={<Photos photosPage={state.photosPage} />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
