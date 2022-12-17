import { useState, useContext } from 'react';


function Login() {

  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }


  async function loginForm(event) {
    event.preventDefault();
    console.log(formulario);
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"60vh"}}>
      <form onSubmit={loginForm} style={{width:"30rem"}}>
        <h3 className="mt-6 mb-4 display-5 text-center">Inicio de sesión</h3>
        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
      </form>
    </div>

  )
}

export default Login
