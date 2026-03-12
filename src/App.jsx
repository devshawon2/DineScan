import React from 'react'
import { Suspense } from 'react'
import './App.css'
import Categories from './components/Main/Categories/Categories'
import Header from './components/Header/Header'

const menuPromise = fetch('../src/data/menu.json').then(res => res.json());
function App() {

  return (
    <>

      {/* Website Header Section Starts*/}
      <Header>

      </Header>
      {/* Website Header Section Ends */}


      {/* Website Main Section Starts */}

      {/* Categories Section */}
      <Suspense fallback=
        {
          <div className='flex justify-center'>
            <span className="loading loading-bars loading-lg DineScan-primary w-20"></span>
          </div>
        }>
        <Categories menuPromise={menuPromise}>

        </Categories>
      </Suspense>
      {/* Website Main Section Ends */}
    </>
  )
}

export default App
