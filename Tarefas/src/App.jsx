import { useState } from 'react'
import './index.css'




function App() {
  const [count, setCount] = useState(0)


  return (
   
<>
  <div className="container">
    <h1>💰 Meu Financeiro</h1>
    <p>Controle seu dinheiro</p>

    <div className="saldo">
      <h3>Saldo disponível</h3>
      <h1>R$ 6.250,00</h1>
    </div>

    <div className="resumo">
      <div className="entrada">
        <h3>Entradas</h3>
        <h2>R$ 3.800,00</h2>
      </div>

      <div className="saida">
        <h3>Saídas</h3>
        <h2>R$ 800,00</h2>
      </div>
    </div>

    <div className="movimentacoes">
      <h2>Últimas movimentações</h2>

      <div className="item">
        <span>💵 Salário</span>
        <strong className="verde">+ R$ 1.800,00</strong>
      </div>
      <div className='item'>
        <strong className='verde'>+ 2.580,00</strong>

      </div>

      <div className="item">
        <span>🍔 Lanche</span>
        <strong className="vermelho">- R$ 50,00</strong>
      </div>

      <div className='item'>
        <span> Lanche</span>
        <strong className='vermelho'>- R$20,00</strong>

      </div>

      <div className="item">
        <span>🛒 Compras</span>
        <strong className="vermelho">- R$ 500,00</strong>
        <div className='item'>
          <span>Compras</span>
          <strong className='vermelho'>- R$250,00</strong>

          <div className='item'>
            <span> Compras</span>
            <strong className='vermelho'>- R$50,00</strong>

          </div>




        </div>
      </div>
    </div>
  </div>
</>



    
    
     
  )
}

export default App
