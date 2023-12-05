import Image from 'next/image'
import Logo from '@/img/Logo.png'
import Logoroxo from '@/img/Logoroxo.png'


export default function Home() {
  return (
    <main className='bg-zinc-800 lg:bg-background h-screen flex flex-col font-sans'>
      <Image className='self-center mt-36 lg:invisible' src={Logo} width={218} height={33} alt='logo'/>
      <div className='flex flex-col self-center lg:rounded-3xl lg:bg-white lg:pr-20'>   
        <Image className='lg:self-center lg:ml-10 lg:mt-16 lg:visible invisible' src={Logoroxo} width={303} height={46} alt='logo'/>
        <div className='flex flex-col self-center mt-32'>
          <label className='text-white lg:text-black font-normal lg:mx-10' htmlFor="nome">Nome de usuário</label>
          <input className='bg-zinc-600 lg:bg-white lg:border-zinc-400 lg:text-black border rounded-lg w-80 h-16 lg:w-96 lg:min-w-full lg:mx-10 mt-2' type="text" />
    
          <label className='text-white lg:text-black font-normal lg:mx-10 mt-7' htmlFor="senha">Senha</label>
          <input className='bg-zinc-600 lg:bg-white lg:border-zinc-400 lg:text-black border rounded-lg w-80 h-16 lg:w-96 lg:min-w-full lg:mx-10 mt-2' type="password" />
        </div>
    
        <div className='flex flex-col self-center mt-9'>
          <button className='bg-fuchsia-700 text-white lg:font-semibold font-semibold text-2xl rounded-lg w-80 h-16 lg:w-96 lg:min-w-full lg:mx-10'>Entrar</button>
          <button className='bg-zinc-400 text-fuchsia-700 lg:font-semibold font-semibold lg:text-2xl text-2xl rounded-lg w-80 h-16 lg:h-10 lg:w-96 lg:min-w-full lg:mx-10 mt-2 lg:mb-10'>Esqueci minha senha</button>  
        </div>
      </div>  
    </main>
  )
}
