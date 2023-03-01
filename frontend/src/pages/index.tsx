import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { NewEmot } from '@/components/new-emot'
import { Sidebar } from '@/components/sidebar'

const Home = () => {
  return (
    <div className="flex h-screen justify-center bg-slate-800 pt-4">
      <Header />
      <Main />
      <Sidebar />
    </div>
  )
  return <NewEmot />
}

export default Home
