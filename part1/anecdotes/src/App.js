import { useState } from 'react'

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const length = anecdotes.length

  // Next anecdote
  const handleNext = () => {
    const next = Math.floor(Math.random()*length)
    setSelected(next)
  }

  // Increase votes
  const [vote, setVote] = useState(Array(length).fill(0))
  
  const handleVote = () => {
    const nextV = [...vote]
    nextV[selected] += 1
    setVote(nextV)
  }

  // Most voted
  const most = Math.max(...vote)
  const index = vote.indexOf(most)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} vote={vote[selected]} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleNext} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[index]} vote={vote[index]} />
    </div>
  )
}

export default App
