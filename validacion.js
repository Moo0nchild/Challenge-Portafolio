//Haz tú validación en javascript acá

const nombreUsuario = document.getElementById('nombre')
const emailUsuario = document.getElementById('email')
const asuntoUsuario = document.getElementById('asunto')
const mensajeUsuario = document.getElementById('mensage')

const validarUsuario = () => {
  if (
    nombreUsuario.value === '' ||
    emailUsuario.value === '' ||
    asuntoUsuario.value === '' ||
    mensajeUsuario.value === ''
  ) {
    alert('Por favor, rellene todos los campos')
    return
  } else {
    alert('Datos enviados correctamente')
  }
}
