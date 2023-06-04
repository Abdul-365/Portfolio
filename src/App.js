import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe'
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
