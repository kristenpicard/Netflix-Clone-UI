import './App.css';
import Billboard from './components/Billboard';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Titles from './components/Titles';
import './normalize.css';

function App() {
    return (
        <div className="App">
            <Billboard />
            <Navigation />
            <Titles />
            <Footer />
        </div>
    );
}

export default App;
