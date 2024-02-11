
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

      
      <div className='row'>

        <p className='container p-8 texto_novios'>
        [16:34, 11/2/2024] Yari 🌞 Catalan: Los dejamos cordialmente invitados a nuestro matrimonio
El día 13/04/2024
La ceremonia inicia a las 19:00 hrs.
Te esperamos aqui ⬇️

Queremos que seas parte de nuestra bella historia y estamos felices de contar con tú presencia este día.
Tu regalo será parte de nuestra luna de miel, el cual te invitamos a depositar a la siguiente cuenta bancaria ____, desde ya te lo agradecemos.

Esperamos que disfrutes tanto como nosotros este momento.
[16:48, 11/2/2024] Yari 🌞 Catalan: Favor compartirnos tu asistencia y si tienes algún tipo de alergia o restricción alimentaria aqui ⬇️


Eres vegetariano o vegano?

        </p>

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
