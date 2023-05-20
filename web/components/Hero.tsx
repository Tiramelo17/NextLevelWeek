import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
    {/* Hero */}
          //space-y-5 coloca um espaço entre todos os elementos dentro da div de 20px (5*4)
    return (     
          <div className='space-y-5'>
          <Image src={nlwLogo} alt='NLW SpaceTime'/>
          
            <div className='max-w-[420px] space-y-4'>
              <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
              <p className='leading-relaxed text-lg'>
                Colecione momentos marcantes da sua jornada e compartilhe se quiser com o mundo! 
              </p>
            </div>

            <Link href="memories/new" className='inline-block bg-green-500 px-5 py-3 
            font-alt text-sm uppercase leading-none text-black hover:bg-green-700 rounded-full '>CADASTRAR LEMBANÇA</Link>
        </div>   
    )
}