import './App.css'
import Movie from './components/Movie'

const App = () => {
  const fellowship = {
    title: 'The Fellowship of the Ring',
    hours: 2,
    minutes: 58,
    poster:
      'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
  }
  const twoTowers = {
    title: 'The Two Towers',
    hours: 2,
    minutes: 59,
    poster:
      'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg'
  }
  const returnKing = {
    title: 'The Return of the King',
    hours: 3,
    minutes: 21,
    poster:
      'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <Movie
          title={fellowship.title}
          hours={fellowship.hours}
          minutes={fellowship.minutes}
          poster={fellowship.poster}
        />

        <Movie
          title={twoTowers.title}
          hours={twoTowers.hours}
          minutes={twoTowers.minutes}
          poster={twoTowers.poster}
        />
        <Movie
          title={returnKing.title}
          hours={returnKing.hours}
          minutes={returnKing.minutes}
          poster={returnKing.poster}
        />
      </main>
    </div>
  )
}

export default App
