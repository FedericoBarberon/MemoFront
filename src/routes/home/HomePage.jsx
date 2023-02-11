import { Link } from 'react-router-dom'
import MemoFront from '../../assets/memofront.svg'

export default function HomePage () {
  return (
    <>
      <img src={MemoFront} className='logo' />
      <p>¿Puedes encontrar todos los pares de tecnologías de Front-End antes que se acabe el tiempo?</p>
      <Link to='play' className='button-link'>Empezar</Link>
    </>
  )
};
