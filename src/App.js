import React, { useState } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';


function App() {
  const [hidebutton, setHidebutton] = useState('hidden')
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ){
      setHidebutton('block');
    } else {
      setHidebutton('hidden');
    }
  }
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <div>
        <button
          onClick={topFunction}
          id="controlScroll"
          className={`fixed right-6 bottom-16 bg-lime-500 p-2 rounded text-white ${hidebutton}`}
          style={{ zIndex: 212 }}
        >
          <FaLongArrowAltUp></FaLongArrowAltUp>
        </button>
      </div>
    </div>
  );
}

export default App;
