import {  useState } from 'react'
import winner from './assets/winner.svg'
import loser from './assets/loser.svg'


function App() {

  const [stage, setStage] = useState<number>(0)
  const [select, setSelect] = useState('');
  const [saldo, setSaldo] = useState<number>(0)
  const [result, setResult] = useState(false)
  let [saldoTotal, setSaldoTotal] = useState('');


  const handleSelected = (event) => {

    setSelect(event.target.value)

  }

  const handleSubmit = () => {

    if (select === perguntas[stage].correct) {

      let newSaldo = saldo;

      switch (stage) {
        case 0:
          newSaldo += 50000;
          break;
        case 1: 
          newSaldo += 100000;
          break;
        case 2:
          newSaldo += 150000;
          break;
        case 3:
          newSaldo += 200000;
          break;
        case 4:
          newSaldo += 500000;
          break;  
        default:
          break;
      }
      
      
      setSaldo(newSaldo)

      const newStage = stage + 1;
      setStage(newStage)
      setSelect('')

    } else {

      
      setResult(true)

    }

  }

  const handleRestart = () => {
    
    setStage(0);
    setSaldo(0);
    setResult(false);
    setSelect('');

  }



  const perguntas = [
    {
      title: 'Qual a capital do Brasil?',
      a: 'Brasilia',
      b: 'Salvador',
      c: 'Belo Horizonte',
      d: 'Limeira',
      correct: 'a',
      stage: 1
    },
    {
      title: 'Qual a capital de MG?',
      a: 'Brasilia',
      b: 'Salvador',
      c: 'Belo Horizonte',
      d: 'Limeira',
      correct: 'c',
      stage: 2
    },
    {
      title: 'Qual a capital do Amapá?',
      a: 'Brasilia',
      b: 'Macapá',
      c: 'Belo Horizonte',
      d: 'Limeira',
      correct: 'b',
      stage: 3
    },
    {
      title: 'Qual a capital do Rio Grande do Sul?',
      a: 'Brasilia',
      b: 'Salvador',
      c: 'Belo Horizonte',
      d: 'Porto Alegre',
      correct: 'd',
      stage: 4
    },
    {
      title: 'Qual a capital de São Paulo?',
      a: 'Brasilia',
      b: 'Salvador',
      c: 'Belo Horizonte',
      d: 'São Paulo',
      correct: 'd',
      stage: 5
    },

  ]

  // bg-[url("https://upload.wikimedia.org/wikipedia/pt/6/60/Logotipo_do_Show_do_Milh%C3%A3o.jpg")]

  if(stage == 5){
    return (
      <div className="w-screen h-screen bg-secundary flex justify-center items-center ">
            <div className="w-1/2 h-3/5 bg-principal p-10 rounded-lg flex flex-col items-center">
                <h1 className="font-extrabold text-center text-3xl">Parabéns Você venceu!</h1>
                <p>Você levará para casa o saldo de: {saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                <img className='w-1/3 m-3' src={winner} alt="" />
                <button className='bg-principal border-2 border-zinc-900 rounded-lg w-32 text-base font-bold hover:scale-110 duration-100 p-2  m-10 ' 
              onClick={handleRestart}>Jogar novamente</button>
            </div>
        </div>
    )
  }else{

    return (
      <div className='w-screen h-screen flex flex-col justify-center items-center gap-6 bg-perguntas bg-no-repeat bg-fixed bg-right'>

        {
          result &&
          <div className='absolute border-2 flex-col border-red-400 rounded-lg bg-red-400 shadow-2xl w-1/2 h-1/2 flex items-center justify-center'>
            <h1 className='font-bold text-6xl'>Resposta incorreta</h1> 
            <p>Você levará pra casa apenas: {(saldo / 2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
            <img src={loser} className='w-1/2' alt="" />
        </div>  
      }
  
        <div className='flex flex-col w-full justify-start gap-4'>
  
          <div className="flex items-center gap-3 justify-between">
            <h2 className='bg-principal rounded-2xl w-1/2 p-6 m-3 font-bold text-lg'>
              {
                perguntas[stage].title
              }
            </h2>
            <h1 className="mx-28 font-bold uppercase bg-principal rounded-lg p-6">Seu saldo é de: {saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h1>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='mx-3 my-2 bg-principal w-1/4 rounded-xl p-6 flex justify-start gap-2 items-center hover:scale-105 duration-100' >
              <input checked = { select === 'a' } type="radio" name='Resposta' value='a' onChange={handleSelected} /> {perguntas[stage].a}
            </div>
            <div className='mx-3 my-2 bg-principal w-1/4 rounded-xl p-6 flex justify-start gap-2 items-center hover:scale-105 duration-100'>
              <input  checked = { select === 'b' } type="radio" name='Resposta' value='b' onChange={handleSelected} /> {perguntas[stage].b}
            </div>
            <div className='mx-3 my-2 bg-principal w-1/4 rounded-xl p-6 flex justify-start gap-2 items-center hover:scale-105 duration-100'>
              <input  checked = { select === 'c' } type="radio" name='Resposta' value='c' onChange={handleSelected} /> {perguntas[stage].c}
            </div>
            <div className='mx-3 my-2 bg-principal w-1/4 rounded-xl p-6 flex justify-start gap-2 items-center hover:scale-105 duration-100'>
              <input  checked = { select === 'd' } type="radio" name='Resposta' value='d' onChange={handleSelected} /> {perguntas[stage].d}
            </div>
            <div>
              <button disabled={result} className='bg-principal hover:disabled:bg-white  disabled:opacity-20  rounded-lg w-32 text-base font-bold hover:scale-110 duration-100 p-2  m-10' onClick={handleSubmit}>Confirmar resposta</button>
  
              <button className='bg-principal rounded-lg w-32 text-base font-bold hover:scale-110 duration-100 p-2  m-10 ' 
              onClick={handleRestart}>Reiniciar o Jogo</button>
  
            </div>
          </div>
        </div>
  
      </div>
    )

  }

  
}

export default App
