import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-devone-background w-full h-full flex flex-col items-center justify-center'>
      <Image src='/logo.png' width={512} height={512} alt='DevOne logo' quality={100} />

      <a
        href='https://marcosvenicius.com.br'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:underline text-lg'>
        marcosvenicius.com.br
      </a>
    </main>
  )
}
