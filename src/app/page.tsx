import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-black w-full h-full flex flex-col items-center justify-center'>
      <a href='https://github.com/marcos-venicius' target='_blank' rel='noopener noreferrer' title='Marcos Venicius'>
        <Image src='/m.png' width={512} height={512} alt='DevOne logo' quality={100} className='animate-pulse' />
      </a>
    </main>
  )
}
