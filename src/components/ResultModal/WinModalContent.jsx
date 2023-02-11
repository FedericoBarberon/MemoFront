import Confetti from 'react-confetti'

export default function WinModalContent ({ time }) {
  return (
    <>
      <Confetti width={window.screen.width} height={window.screen.height} numberOfPieces={500} gravity={0.3} recycle={false} />
      <h1>Ganaste!</h1>
      <p>Tiempo empleado: {time} segundos</p>
    </>
  )
};
