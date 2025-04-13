import './App.css'
import image from "./assets/image.png"
import RSVPForm from './rsvpForm'

function App() {

  return (
    <>
      <h1>Johanna + Kevin = Sant</h1>
      <img src={image} className="w-60 mx-auto mt-10" alt='Wedding'></img>
      <RSVPForm/>
    </>
  )
}

export default App
