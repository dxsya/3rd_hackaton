import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthPage from './pages/AuthPage';
import MainRoutes from './routes/MainRoutes';

function App() {
    return (
        <div>
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
