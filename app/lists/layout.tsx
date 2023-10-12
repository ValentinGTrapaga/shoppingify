export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex flex-col py-10 px-6 min-h-screen min-w-full gap-6'>
      <h1 className='text-2xl md:text-4xl w-full text-center font-bold'>Shopping lists</h1>
      {children}
    </section>
  )
}
