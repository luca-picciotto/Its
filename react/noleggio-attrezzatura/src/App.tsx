import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EquipmentsPage from './pages/equipmentsPage';
import BooksPage from './pages/booksPage';
import HomePage from './pages/homePage';

function App() {
 

  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/equipments" element={<EquipmentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
