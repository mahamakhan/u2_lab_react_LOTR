import Reactfrom from 'react'

export default function Movie({ title, hours, minutes, poster }) {
  return (
    <div>
      <h1>Lord of the Rings:{title} </h1>
      <p>
        Runtime:{hours} :{minutes}{' '}
      </p>
      <img src={poster} />
    </div>
  )
}
