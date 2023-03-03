import { FormEvent, useState } from 'react'

interface Props {
  storeEmot: Function
}

export const EmotForm = ({ storeEmot }: Props) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await storeEmot(content)
    console.log({ data })
    setContent('')
  }

  return (
    <div className="flex rounded-lg bg-slate-800 p-3">
      <div className="mr-4 h-12 w-12 rounded-full bg-pink-700"></div>
      <form className="grow text-center" onSubmit={handleSubmit}>
        <textarea
          className="w-full overflow-auto rounded-md bg-slate-700 p-2 text-slate-200 focus:outline-0"
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="mt-2 rounded bg-indigo-700 py-2 px-12 text-sm font-bold text-slate-200 hover:bg-indigo-800">
          Emot
        </button>
      </form>
    </div>
  )
}
