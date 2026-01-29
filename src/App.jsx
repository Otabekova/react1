
import './App.css'
import rasm1 from './assets/img1.jpg'
import rasm2 from './assets/img2.jpg'
function App() {


  return (
    <>
     
     <div className="image-container">
      <h1>Aston Martin Valkyrie</h1>
       <img src={rasm1} width={200} alt="Image 1" />
        <h4>Aston Martin Valkyrie juda chiroyli mashina</h4>
        <h4>Aston Martin Valkyrie juda zo'r mashina</h4>
     </div>


     <div className="image-container">
      <h1>Rolls-Royse</h1>
       <img src={rasm2} width={200} alt="Image 2" />
         <h4>Rolls-Royse juda chiroyli mashina</h4>
        <h4>Rolls-Royse juda zo'r mashina</h4>
     </div>
    </>
  )


  
}

export default App
