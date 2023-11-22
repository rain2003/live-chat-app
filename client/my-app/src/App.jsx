/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/singup';
import Signin from './components/siginin';
import Landing from './components/Landing';
import Socket from './components/socket'
import {RecoilRoot} from 'recoil';
function App() {
  return (
    <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/socket" element={<Socket/>} />

                </Routes>
            </Router>
        </RecoilRoot>
  );
}

export default App;