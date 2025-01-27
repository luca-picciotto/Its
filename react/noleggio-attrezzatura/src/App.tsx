import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EquipmentsPage from './pages/equipmentsPage';
import BooksPage from './pages/booksPage';
import ProtectedPage from './pages/ProtectedPage';
import LoginPage from './pages/LoginPage';
import Account from './pages/IsLogPage';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedPage>
              <EquipmentsPage />
            </ProtectedPage>} />
          <Route path="/bookings" element={
            <ProtectedPage>
              <BooksPage />
            </ProtectedPage>
          } />
          <Route path="/profile" element={
            <ProtectedPage>
              <Account />
            </ProtectedPage>
          } />
          <Route path="/login" element={
              <LoginPage />
            } />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
