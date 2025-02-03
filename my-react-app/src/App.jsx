import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Button/>
      <Footer/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrickb" age={40} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
