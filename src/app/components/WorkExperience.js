export default function WorkExperience() {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:block'>
      <object
        className='w-full lg:absolute bottom-0'
        type='image/svg+xml'
        data={`/images/work-experience.svg`}
        alt={""}
        width='100'
      />
      <div className='hover:scale-105 transition-all cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-center bg-[#264653] border border-black font-bold w-fit px-5 py-2 m-3'>
        <h2 className='font-neutral-900 text-4xl lg:text-5xl text-[#E9C46A]'>
          Work Experience
        </h2>
      </div>
    </div>
  )
}
