import { useState } from 'react';
import { registerService } from '../../services/Auth.service';
import Swal from 'sweetalert2';

function Signup() {

  const [formulario, setFormulario] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    edad: '',
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }


  async function signUpForm(event) {
    event.preventDefault();
    console.log(formulario);
    registerService(formulario)
    .then(response => {
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Mensaje',
            text: 'Usuario registrado correctamente',
        });
    })
    .catch(error => {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Mensaje',
            text: 'Error al registrar usuario',
        });
    })
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"60vh"}}>
      <form onSubmit={signUpForm} style={{width:"30rem"}}>
        <h3 className="mt-6 mb-4 display-5 text-center">Registro de usuarios</h3>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="inputNombre" name="nombre" value={formulario.nombre} onChange={handleInputChange} />
          <label htmlFor="inputNombre">Nombre</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="inputApellido" name="apellido" value={formulario.apellido} onChange={handleInputChange} />
          <label htmlFor="inputApellido">Apellido</label>
        </div>
        <div className="form-floating mb-4">
          <input type="number" className="form-control" id="inputEdad" name="edad" value={formulario.edad} onChange={handleInputChange} />
          <label htmlFor="inputEdad">Edad</label>
        </div>
        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" name="email" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
      </form>
    </div>

  )
}

export default Signup
