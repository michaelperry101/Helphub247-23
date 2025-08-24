export default function Home() {
  return (
    <main className="p-6 text-center">
      <img src="/logo.png" alt="Helphub247 Logo" className="mx-auto w-24 h-24" />
      <h1 className="text-3xl font-bold mt-4">Welcome to Helphub247</h1>
      <p className="mt-2 text-gray-600">Your support hub, available 24/7</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 shadow rounded-lg bg-white">FAQ Section</div>
        <div className="p-4 shadow rounded-lg bg-white">Live Chat</div>
        <div className="p-4 shadow rounded-lg bg-white">Contact Support</div>
      </div>
    </main>
  )
}
