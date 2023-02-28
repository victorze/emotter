import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/ping')
      .then((res) => res.json())
      .then((data) => console.log(data))
  })

  return (
    <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      Button
    </button>
  )
}

export default Home
