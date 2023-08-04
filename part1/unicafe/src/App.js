import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  const {good, neutral, bad} = props

  const total = good + neutral + bad

  if (total === 0){
    return <h3>No feedbackgiven</h3>
  }

  const avg = ((good*1 + neutral*0 + bad*-1) / total).toFixed(1)
  const pos = ((good / total)*100).toFixed(1)

  return (
    <table>
      <tbody>
        <StatisticLine value={good} text='good'/>
        <StatisticLine value={neutral} text='neutral'/>
        <StatisticLine value={bad} text='bad'/>
        <StatisticLine value={total} text='all'/>
        <StatisticLine value={avg} text='average'/>
        <StatisticLine value={pos} text='positive' text2='%'/>
      </tbody>
    </table>
  )
} 

const StatisticLine = (props) => {
  const {value, text, text2} = props

  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text2}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App