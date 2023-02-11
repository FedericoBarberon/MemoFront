import { Link } from 'react-router-dom'
import './resultModal.css'

export default function ResultModal ({ result, time, piecesLeft }) {
  return (
    <div className='backdrop'>
      <div className='content'>
        {
          result === 'win'
            ? (
              <>
                <h1>Ganaste!</h1>
                <p>Tiempo empleado: {time} segundos</p>
              </>)
            : (
              <>
                <h1>Perdiste!</h1>
                <p>Pares restantes: {piecesLeft}</p>
              </>)
        }
        <Link to='/' className='button-link'>Volver</Link>
      </div>
    </div>
  )
};
