export const NewEmot = () => {
  return (
    <div className="flex items-center rounded-lg bg-slate-700 p-3">
      <div className="mr-4 h-12 w-12 rounded-full bg-pink-700"></div>
      <form className="grow">
        <input
          className="w-full rounded-md  bg-slate-600 p-2 text-slate-100 focus:outline-0"
          type="text"
          placeholder="What's happening?"
        />
      </form>
    </div>
  )
}
