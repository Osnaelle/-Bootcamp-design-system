import './styles/global.css';
import {Logo } from './logo'
import { Heading } from './components/Heading';
import {Text} from './components/Text'
import { TextInput } from './components/TextInput';
import { Envelope , Lock} from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
export function App() {
 

  return (
    <div className='w-screen h-screen bg-gray-bg flex items-center flex-col justify-center text-gray-tx'>
      <header className='flex flex-col items-center'>
       <Logo />
       <Heading size='lg' asChild={false} className='mt-0'>
          Bootcamp
        </Heading>
        <Text size="sm" className='text-gray-tx mt-1'>
                 Faça login para começar
        </Text>
        </header>
        <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-18' >
          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold  '>
              E-mail:
            </Text>
            <TextInput.Root>
               <TextInput.Icon>
                <Envelope />
               </TextInput.Icon>
               <TextInput.Input id="email" type="email"placeholder='Digite o seu email'>

               </TextInput.Input>
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className='font-semibold  '>
              Senha:
            </Text>
            <TextInput.Root>
               <TextInput.Icon>
                <Lock />
               </TextInput.Icon>
               <TextInput.Input id="password" type='password' placeholder='*******'>

               </TextInput.Input>
            </TextInput.Root>
          </label>
          <label htmlFor='remeber' className='flex items-center- gap-2 '>
            <Checkbox id='remember'/>
            <Text size='sm'>
                    Lembrar 
            </Text>
          </label>
          <Button type='submit' className='mt-3'>
              Entrar 
          </Button>
        </form>
        <footer className='flex flex-col items-center gap-4 mt-8 '>
          <Text asChild size='sm'>
          <a href='' className=' text-gray-tx underline hover:text-gray-bgInput'>Esqueceu sua senha?</a>
          </Text>
         <Text asChild size='sm'>
          <a href='' className=' text-gray-tx underline  hover:text-gray-bgInput'>Cadastre-se agora</a>
          </Text>
        </footer>
    </div>
   
  )
}
