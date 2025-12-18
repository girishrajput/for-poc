import './App.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import PageContainer from "./components/layout/PageContainer"
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/900.css"; 


function App() {

  return (
    <>
    <div className='min-h-screen xl:flex bg-gray-light'>
      <div className='flex-1 transition-all duration-300 ease-in-out'>
        <Sidebar />
      </div>
        <div className='w-full'>
          <Header />
          <PageContainer />
        </div>
      </div>      
    </>
  )
}

export default App
