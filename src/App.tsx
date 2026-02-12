import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-6">
      <div className="flex gap-10 mb-10">
        <a
          href="https://vite.dev"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 w-24"
          />
        </a>

        <a
          href="https://react.dev"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 w-24"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">
        Vite + React
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center shadow-lg">
        <button
          onClick={() => setCount(count + 1)}
          className="mb-4 px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition font-medium"
        >
          count is {count}
        </button>

        <p className="text-slate-400">
          Edit <code className="bg-slate-800 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
