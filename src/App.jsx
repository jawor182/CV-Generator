import './App.css'
import Education from './components/Education'
import General from './components/General'
import Experience from './components/Experience'
import Greeting from './Greeting'
import CVProcess from './components/CVProcess'
function App() {
 return(
  <>
    <Greeting/>
    <div className='contentForm'>
      <General />
      <Education/>
      <Experience/>
      </div>
      <CVProcess /> 
  </>
 )
}

export default App
