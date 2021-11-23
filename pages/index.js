
import Link from 'next/link'

import Container from '../components/Container'
import Accordion from '../components/Accordion/Accordion'


export default function Home() {
  return (
    <>
      <div className='h-screen bg-blue-900 text-white'>

        <Link href='/boton'>
          <a>Botones</a>
        </Link>

        <Container>

          <Accordion id='#986' titulo='Ejemplo' descripcion='Ejemplito'>
            hdskdsk
          </Accordion>
        </Container>
        <br />

        <input type='text' placeholder='Text' className='m-1 px-2 py-2 font-medium rounded-md border border-transparent bg-blue-800 focus:outline-none  focus:border-green-300 ' />
        <input type='number' placeholder='Number' className='m-1 px-2 py-2 font-medium rounded-md border border-transparent bg-blue-800 focus:outline-none  focus:border-green-300 ' />
        <input type='email' placeholder='Email' className='m-1 px-2 py-2 font-medium rounded-md border border-transparent bg-blue-800 focus:outline-none  focus:border-green-300 ' />
        <input type='password' placeholder='Password' className='m-1 px-2 py-2 font-medium rounded-md border border-transparent bg-blue-800 focus:outline-none  focus:border-green-300 ' />
        <select className='m-1 px-2 py-2 font-medium rounded-md border border-transparent bg-blue-800 focus:outline-none  focus:border-green-300'>
          <option>Opción 1</option>
          <option>Opción 2</option>
        </select>
        <br />

        <input type='text' placeholder='Text' className='m-1 px-2 py-1 font-medium  bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300' />
        <input type='number' placeholder='Number' className='m-1 px-2 py-1 font-medium  bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300' />
        <input type='email' placeholder='Email' className='m-1 px-2 py-1 font-medium  bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300' />
        <input type='password' placeholder='Password' className='m-1 px-2 py-1 font-medium  bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300' />
        <select className='m-1 px-2 py-1 font-medium bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300'>
          <option>Opción 1</option>
          <option>Opción 2</option>
        </select>

        <br />

        <div className='flex flex-col'>
          <label className='px-2 py-1 text-sm font-medium'>Nombre del campo:</label>
          <input type='text' placeholder='Texto' className='m-1 px-2 py-2 font-medium  bg-blue-800 border-b-2 border-blue-50 focus:outline-none focus:border-green-300' />
        </div>
        
      </div>



    </>
  )
}
