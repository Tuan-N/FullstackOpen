
const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ parts }) => 
  <div>
    <Part parts={parts[0]} />
    <Part parts={parts[1]} />
    <Part parts={parts[2]} />
  </div>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>


const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Number of exercises {total}</p>
}


const App = () => { 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}


export default App
