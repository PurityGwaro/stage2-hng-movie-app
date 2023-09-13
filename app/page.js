import MovieList from '@/components/MovieList'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="container mx-auto">
      <NavBar />
      <MovieList />
    </main>
  )
}
