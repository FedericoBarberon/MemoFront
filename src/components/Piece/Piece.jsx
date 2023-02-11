import './piece.css'
import memofront from '../../assets/memofront.svg'

export default function Piece ({ piece, disabled, handleSelect }) {
  const { img } = piece
  const name = piece.name.split('|')[1]

  const handleClick = () => {
    if (disabled) return
    handleSelect(piece.name)
  }

  return (
    <div className={`piece ${disabled ? 'flip-back' : ''}`} onClick={handleClick}>
      <div className='front'>
        <img src={memofront} alt='MemoFront' />
        <h2>MemoFront</h2>
      </div>
      <div className='back'>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
    </div>
  )
};
