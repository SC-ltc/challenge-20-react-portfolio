import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;