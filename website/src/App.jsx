import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page imports


const Homepage = lazy(()=>import('./pages/Homepage'));
const Page404 = lazy(()=>import('./pages/Page404'));

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <main>
          <Suspense fallback={<>loading...</>}>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  )
};

export default App