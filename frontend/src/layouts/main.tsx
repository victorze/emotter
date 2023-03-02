import { storeEmot } from '@/api'
import { EmotForm } from '../features/emot-form'

export const Main = () => {
  return (
    <div className="mx-4 rounded-lg" style={{ width: '37rem' }}>
      <EmotForm storeEmot={storeEmot} />
    </div>
  )
}
