import { useRef, useEffect, useState } from 'react'
import { pieces } from '../pieces'

export const useMemotest = ({ initialTime }) => {
  const [disorderedPieces, setDisorderedPieces] = useState([])
  const [selectedPieces, setSelectedPieces] = useState([])
  const [guessedPieces, setGuessedPieces] = useState([])
  const [gameEnded, setGameEnded] = useState(false)
  const [result, setResult] = useState()
  const [time, setTime] = useState(initialTime)
  const timer = useRef()

  // Disorder Pieces
  useEffect(() => {
    setDisorderedPieces(pieces.sort(() => Math.random() - 0.5))
  }, [])

  // Start Timer
  useEffect(() => {
    timer.current = setInterval(() => setTime(time => time - 1), 1000)

    return () => clearInterval(timer.current)
  }, [])

  // Check if time is 0
  useEffect(() => {
    if (time === 0) {
      clearInterval(timer.current)
      setGameEnded(true)
      setResult('lose')
    }
  }, [time])

  // Check if player win
  useEffect(() => {
    if (guessedPieces.length === pieces.length) {
      clearInterval(timer.current)
      setGameEnded(true)
      setResult('win')
    }
  }, [guessedPieces])

  // Check if player guessed a pair of pieces
  useEffect(() => {
    if (selectedPieces.length !== 2) return

    if (selectedPieces[0].split('|')[1] === selectedPieces[1].split('|')[1]) {
      setGuessedPieces(guessedPieces => guessedPieces.concat(selectedPieces))
      setSelectedPieces([])
    } else {
      setTimeout(() => setSelectedPieces([]), 1000)
    }
  }, [selectedPieces])

  const handleSelect = (name) => {
    if (selectedPieces.length < 2) {
      setSelectedPieces(selectedPieces => selectedPieces.concat(name))
    }
  }

  return { pieces: disorderedPieces, selectedPieces, guessedPieces, handleSelect, time, gameEnded, result }
}
