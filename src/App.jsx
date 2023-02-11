import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/home/HomePage'
import PlayPage from './routes/play/PlayPage'

export default function App () {
  return (
    <main>
      <div>
        <h1 className='title'>MemoFront</h1>
        <p className='subtitle'>Memotest edición Front-End</p>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/play' element={<PlayPage />} />
      </Routes>
    </main>
  )
};
