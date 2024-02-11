
import './App.css'

function App() {


  return (
    <div className='container'>

      <div className='row'>
        <div className='col'>
          <h1 className='titulo_eapacial'>Patricio y Yaritza</h1>
        </div>
        <div className='col'> 
          <p>esto es un parrafo</p>
          </div>
      </div>

      <footer className="fixed-bottom w-100 p-3">
          <div className='d-flex row'>
            <div className='col'>
              <div className='container'>
                <h1 className='d-flex name_espacial'>Link lista de novios</h1>
              </div>
            </div>
            <div className='col'>
              <div className='container'>
                <div className='d-flex name_espacial text-end'>Link formulario 
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTTLzOFITJpoONTLCDFHHlUTu2pu1L6NXikIKrxa9qfkMh-A/viewform?usp=sf_link">aqui</a>
                </div>
              </div>
            </div> 
          </div>
      </footer>
    </div>
  )
}

export default App
