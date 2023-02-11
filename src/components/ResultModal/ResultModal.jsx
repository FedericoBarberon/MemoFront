import { Link } from 'react-router-dom'
import LoseModalContent from './LoseModalContent'
import './resultModal.css'
import WinModalContent from './WinModalContent'

export default function ResultModal ({ result, time, piecesLeft }) {
  return (
    <div className='backdrop'>
      <div className='content'>
        {
          result === 'win'
            ? <WinModalContent time={time} />
            : <LoseModalContent piecesLeft={piecesLeft} />
        }
        <Link to='/' className='button-link'>Volver</Link>
      </div>
    </div>
  )
};
