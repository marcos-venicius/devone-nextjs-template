import Image from 'next/image'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <main className='w-full h-full bg-black flex flex-col items-center justify-center'>
      <a href='https://github.com/marcos-venicius' className='block' target='_blank' rel='noopener noreferrer'>
        <Image width={512} height={512} src='/m.png' className='animate-pulse rounded-full' alt='m' />
      </a>

      <Button asChild>
        <a href='https://ui.shadcn.com/docs' target='_blank' rel='noopener noreferrer'>
          View shadcn docs
        </a>
      </Button>
    </main>
  )
}
