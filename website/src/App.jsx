import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component imports
import Header from './components/Header';

const Homepage = lazy(()=>import('./components/Homepage'));
const Page404 = lazy(()=>import('./components/Page404'));
const LoginCard = lazy(()=>import('./components/LoginCard'));
const SignupCard = lazy(()=>import('./components/SignupCard'));

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
        <main>
          <Suspense fallback={<>loading...</>}>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/login" element={<LoginCard/>}/>
              <Route path="/signup" element={<SignupCard/>}/>
              <Route path="/*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  )
};

export default App