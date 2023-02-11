import { Link } from 'react-router-dom'
import Piece from '../../components/Piece/Piece'
import ResultModal from '../../components/ResultModal/ResultModal'
import { useMemotest } from '../../hooks/useMemotest'
import './play.css'

const initialTime = 30

export default function PlayPage () {
  const { pieces, selectedPieces, guessedPieces, handleSelect, time, gameEnded, result } = useMemotest({ initialTime })

  const totalGuessed = guessedPieces.length / 2
  const totalPieces = pieces.length / 2

  return (
    <>
      {gameEnded && <ResultModal result={result} time={initialTime - time} piecesLeft={totalPieces - totalGuessed} />}
      <Link to='/' className='button-link'>Detener</Link>
      <div className='info'>
        <p>Adivinadas: {totalGuessed}/{totalPieces}</p>
        <p>Tiempo: {time} segundos</p>
      </div>

      <div className='pieces'>
        {pieces.map(piece => {
          const disabled = selectedPieces.includes(piece.name) || guessedPieces.includes(piece.name)

          return <Piece key={piece.name} piece={piece} disabled={disabled} handleSelect={handleSelect} />
        }
        )}
      </div>
    </>
  )
};
