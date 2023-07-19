import Container from 'react-bootstrap/Container';
import './App.css';
import AboutMe from './components/AboutMe';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Intro />
                <AboutMe />
                <Projects />
            </Container>
        </>
    );
}

export default App;
