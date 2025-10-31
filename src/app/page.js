import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Story from './components/Story';
import Work from './components/Work';
import Projects from './components/Projects';
import WorkTime from './components/WorkTime';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <WorkTime />
      {/* <Story /> */}
      <Process />
      <Contact /> 
      <Footer />
    </>
  );
}
