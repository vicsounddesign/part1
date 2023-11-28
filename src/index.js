import React from 'react'
import ReactDOM from 'react-dom'

const Header = (h) => {
  return (
    <div>
      <h1>{h.course}</h1>
    </div>
  )
}

const Content = (pe) => {
  return (
    <div>
      <p>{pe.part1} {pe.exercises1}</p>
      <p>{pe.part2} {pe.exercises2}</p>
      <p>{pe.part3} {pe.exercises3}</p>
    </div>
  )
}

const Total = (t) => {
  const sum = t.exercises1 + t.exercises2 + t.exercises3

  return(
    <p>Number of exercises {sum}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>


    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
