import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import './styles/variables.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero
          name="Ameraldo Hidri"
          title="Software Developer & Designer"
          description="Building beautiful digital experiences"
        />
        <Projects />
      </main>
    </>
  );
}

export default App;
