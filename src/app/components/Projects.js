export default function Projects() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block'>
      <object
        className='w-full lg:absolute bottom-0'
        type='image/svg+xml'
        data={`/images/projects.svg`}
        alt={""}
        width='100'
      />
      <div className='cursor-pointer hover:scale-105 transition-all lg:absolute bottom-3 bg-[#264653] w-fit px-5 py-2 m-3 border border-black'>
        <h2 className='font-neutral-900 text-3xl font-bold text-[#E9C46A]'>
          Projects
        </h2>
      </div>
    </div>
  )
}
