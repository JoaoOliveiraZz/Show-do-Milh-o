import {Link} from 'react-router-dom'

export function HomePage(){

    return(
        <div className="w-screen h-screen bg-home bg-contain bg-no-repeat bg-right flex justify-start items-center">

            <div className="w-1/2 h-1/2 bg-principal rounded-lg m-10 flex flex-col items-center">
                <h1 className="font-extrabold text-center text-3xl m-10 ">Jogo do milhão</h1>
                <p className='text-medium font-medium'>Jogue agora e tenha a oportunidade de levar para casa <span className="border-2 p-3 m-2 rounded-2xl border-amber-300 shadow-lg font-bold"> 1 MILHÃO DE REAIS !! </span></p>
                <p className="m-10 text-medium font-medium"> Será que o seu conhecimento será capaz de te levar à glória?</p>
                <Link to='/jogar' className='border-2 border-amber-200 rounded-lg p-6 bg-amber-300 hover:scale-105 duration-150 uppercase font-medium text-base'>Comece a jogar agora</Link>
            </div>

        </div>
    )

}