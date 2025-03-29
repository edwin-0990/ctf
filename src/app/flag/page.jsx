export default function FlagPage() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-4'>CTF Flag</h1>
        <div className='p-4 bg-gray-200 rounded font-mono'>
          {process.env.FLAG}
        </div>
      </div>
    </main>
  )
}
