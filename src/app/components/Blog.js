export default function Blog() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block'>
      <object
        className='w-full h-max-full lg:absolute bottom-0'
        type='image/svg+xml'
        data={`/images/blog.svg`}
        alt={""}
        width='100'
      />
      <div className='hover:scale-105 transition-all cursor-pointer lg:absolute bg-[#264653] w-fit px-5 py-2 m-3 border border-black'>
        <h2 className='font-neutral-900 text-3xl font-bold text-[#E9C46A]'>
          Blog
        </h2>
      </div>
    </div>
  )
}
