import { Header } from '@/layouts/header'
import { Main } from '@/layouts/main'
import { Sidebar } from '@/layouts/sidebar'

const Home = () => {
  return (
    <div className="flex h-screen justify-center bg-slate-900 pt-4">
      <Header />
      <Main />
      <Sidebar />
    </div>
  )
}

export default Home
