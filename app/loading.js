import Image from 'next/image'

function Loading() {
  return (
    <div className="h-screen cotainer flex justify-center items-center">
        <div className="animate-bounce w-[6rem]">
          <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={'navlogo.svg'} />
        </div>
    </div>
  )
}

export default Loading