'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Banco {
	pergunta: string
	resposta1: string
	resposta2: string
	resposta3: string
	resposta4: string
	resposta_correta: string
}

export default function Game() {
	const [points, setPoints] = useState(0)
	const [pergunta, setPergunta] = useState<string>('')
	const [correct, setCorrect] = useState<string>('')
	const [respostas, setRespostas] = useState<string[]>([])
	const [n, setN] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState('')

  

	function handlePergunta() {

    const banco: Banco[] = [
      {
        pergunta: 'Qual é a definição de juros compostos?',
        resposta1: 'Juros calculados apenas sobre o valor principal',
        resposta2:
          'Juros calculados sobre o valor principal e os juros acumulados',
        resposta3: 'Juros calculados somente sobre os juros acumulados',
        resposta4: 'Juros calculados com uma taxa fixa',
        resposta_correta: 'b',
      },
      {
        pergunta: 'O que é um orçamento?',
        resposta1:
          'Um documento contábil que registra todas as transações financeiras de uma pessoa ou empresa',
        resposta2:
          'Um plano que estabelece metas de receitas e despesas para um determinado período',
        resposta3: 'Um investimento de baixo risco',
        resposta4: 'Uma conta bancária específica para poupança',
        resposta_correta: 'b',
      },
      {
        pergunta: 'O que é diversificação de investimentos?',
        resposta1: 'Concentrar todos os investimentos em uma única opção',
        resposta2: 'Investir apenas em ações de uma determinada empresa',
        resposta3:
          'Distribuir os investimentos em diferentes tipos de ativos e setores',
        resposta4: 'Investir apenas em títulos do governo',
        resposta_correta: 'c',
      },
      {
        pergunta:
          'Qual é a diferença entre uma ação e um título de renda fixa?',
        resposta1:
          'Ações oferecem rendimentos fixos, enquanto títulos de renda fixa oferecem rendimentos variáveis',
        resposta2:
          'Ações são investimentos de alto risco, enquanto títulos de renda fixa são de baixo risco',
        resposta3:
          'Ações representam a propriedade parcial de uma empresa, enquanto títulos de renda fixa são empréstimos para uma entidade',
        resposta4:
          'Ações são emitidas pelo governo, enquanto títulos de renda fixa são emitidos por empresas',
        resposta_correta: 'c',
      },
      {
        pergunta: 'O que é uma taxa de juros?',
        resposta1:
          'A quantidade de dinheiro que uma pessoa ou empresa deve pagar mensalmente',
        resposta2: 'O percentual de impostos sobre uma transação financeira',
        resposta3: 'O valor que um banco cobra para abrir uma conta',
        resposta4:
          'O custo do empréstimo de dinheiro, expresso como uma porcentagem',
        resposta_correta: 'd',
      },
      {
        pergunta: 'O que é o índice de inflação?',
        resposta1: 'Uma medida do crescimento econômico de um país',
        resposta2: 'A taxa de juros cobrada pelos bancos centrais',
        resposta3:
          'A variação média dos preços de bens e serviços em um determinado período',
        resposta4: 'A taxa de câmbio entre duas moedas',
        resposta_correta: 'c',
      },
      {
        pergunta: 'O que é um fundo de investimento?',
        resposta1:
          'Uma instituição financeira que empresta dinheiro para empresas',
        resposta2:
          'Uma conta bancária especial para guardar dinheiro a longo prazo',
        resposta3:
          'Uma forma de investimento coletivo, onde o dinheiro de diversos investidores é aplicado em conjunto',
        resposta4: 'Um tipo de título de renda fixa emitido pelo governo',
        resposta_correta: 'c',
      },
      {
        pergunta: 'O que é um patrimônio líquido?',
        resposta1: 'O valor total das despesas de uma pessoa ou empresa',
        resposta2: 'O valor total das receitas de uma pessoa ou empresa',
        resposta3:
          'A diferença entre os ativos e os passivos de uma pessoa ou empresa',
        resposta4: 'O valor total de dinheiro em uma conta bancária',
        resposta_correta: 'c',
      },
      {
        pergunta: 'O que é um CDB?',
        resposta1:
          'Um documento contábil que registra todas as transações financeiras de uma pessoa ou empresa',
        resposta2: 'Uma forma de financiamento para compra de imóveis',
        resposta3:
          'Um tipo de título de renda fixa emitido por instituições financeiras',
        resposta4:
          'Um índice que mede o desempenho das ações na bolsa de valores',
        resposta_correta: 'c',
      },
      {
        pergunta: 'Qual é a importância de ter uma reserva de emergência?',
        resposta1: 'Não é necessário ter uma reserva de emergência',
        resposta2:
          'Uma reserva de emergência oferece segurança financeira em caso de imprevistos',
        resposta3:
          'Uma reserva de emergência é importante para comprar itens de luxo',
        resposta4:
          'Uma reserva de emergência é usada apenas para investimentos arriscados',
        resposta_correta: 'b',
      },
    ]

    const res: string[] = [
      banco[n].resposta1,
      banco[n].resposta2,
      banco[n].resposta3,
      banco[n].resposta4,
    ];

    setPergunta(banco[n].pergunta);
    setCorrect(banco[n].resposta_correta);
    setRespostas(res);

    if(selectedOption === correct) {
      setPoints(points + 100)
    }
    
    if (n < 9) {
      setN(n + 1)
    }
	} 

	useEffect(() => {
		handlePergunta()
	},[])

	return (
		<div className={styles.mainContainer}>
			<div className={styles.blocoOpened}>
				<div className={styles.gameProfile}>
					<h3>Pontos: {points}</h3>

					<div className={styles.gameContainer}>
						<div className={styles.question}>{pergunta}</div>
						<div className={styles.respostas}>
							<select
								name='answers'
								id={correct}
								onChange={(e) => setSelectedOption(e.target.value)}
							>
								<option value='a'>{respostas[0]}</option>
								<option value='b'>{respostas[1]}</option>
								<option value='c'>{respostas[2]}</option>
								<option value='d'>{respostas[3]}</option>
							</select>
						</div>

						<button onClick={handlePergunta} className={styles.btn}>
							Próxima
						</button>
					</div>
					<Link href='/profilehome' className={styles.btn}>
						Sair do jogo
					</Link>
				</div>
			</div>
		</div>
	);
}
