'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import { useState } from 'react'

export default function ProfileHome() {
  return (
		<div className={styles.mainContainer}>
			<TopIndex />
			<FunctionalAreaHome />
		</div>
	)
}

function TopIndex() {

  const [isOpen, setIsOpen] = useState(true)
  const [olho, setOlho] = useState('/EyeOpen.svg')
	const [amount, setAmount] = useState('13.500,00')

  function handleIsOpen() {
    if(isOpen === true) {
      setIsOpen(false)
      setOlho('/EyeClosed.svg')
			setAmount('********')
    } else {
			setIsOpen(true)
      setOlho('/EyeOpen.svg')
			setAmount('13.500,00')
    } 

  }

  return (
		<div className={styles.bloco}>
			<div className={styles.indexProfile}>
				<div className={styles.pImage}>
					<Image
						src={'/profilePic.png'}
						alt='Profile picture'
						height={56}
						width={56}
						priority
					/>
				</div>
				<p>Olá, Fulano</p>
			</div>
			<div className={styles.options}>
				<Image src={'/jogar.svg'} width={32} height={32} alt='jogar' priority />
				<Image
					src={olho}
					width={32}
					height={32}
					alt='mostrar saldo'
					priority
          onClick={handleIsOpen}
				/>
				<Image
					src={'/account.svg'}
					width={32}
					height={32}
					alt='profile'
					priority
				/>
			</div>

			<div className={styles.amount}>
				<h3>R$ {amount}</h3>
				<Image
					src={'/right.svg'}
					alt='seta'
					width={24}
					height={24}
					priority
				/>
			</div>

		</div>
	)
}

interface Item {
  img: string
  alt: string
  p1: string
  p2: string
  p3: string
  p4: string
}
interface Card {
  img: string
  alt: string
  p1: string
  p2: string
  p3: string
  p4: string
}

function FunctionalAreaHome() {

	const [animation, setAnimation] = useState([
		styles.functionBtnOff,
		styles.functionBtnIn,
		styles.functionBtnIn,
		styles.functionBtnIn,
		styles.functionBtnIn,
	])

	const market: Item[] = [ 
		{img: '/equinix.png', alt: 'Equinix', p1: 'EQIX34', p2: '13:42:28 | Equinix Inc Drm Ed', p3: '+2,56%', p4: 'R$ 42,90'}, 
		{img: '/microsoft.png', alt: 'Microsoft', p1: 'MSFT34', p2: '10:31:17 | Microsoft Drm Ed', p3: '+3,29%', p4: 'R$ 66,71'}, 
		{img: '/netflix.png', alt: 'Netflix', p1: 'NFLX34', p2: '16:50:01 | Netflix Drm', p3: '-0,96%', p4: 'R$ 36,00'}, 
		{img: '/bmg.png', alt: 'Banco BMG', p1: 'BMGB4', p2: '17:41:58 | Banco BMG Pn N1', p3: '+0,45%', p4: 'R$ 2,23'}
	]
	const gains: Item[] = [
		{
			img: '/btc.png',
			alt: 'BTC',
			p1: 'Total Investido:',
			p2: 'R$ 800,00',
			p3: 'Total Atual',
			p4: '10.518,45',
		},
		{
			img: '/eth.png',
			alt: 'Etherial',
			p1: 'Total Investido:',
			p2: 'R$300,00',
			p3: 'Total Atual',
			p4: 'R$ 818,45',
		},
	]
	const wallet: Item[] = [
		{
			img: '/btc.png',
			alt: 'BTC',
			p1: 'BTC/BRL',
			p2: '12/08/20021 | R$ 800,00',
			p3: 'R$ 10.518,45',
			p4: '+0,33%',
		},
		{
			img: '/eth.png',
			alt: 'Etherial',
			p1: 'ETH/BRL',
			p2: '12/08/20021 | R$ 300,00',
			p3: 'R$ 818,45',
			p4: '+103,22%',
		},
	]
	const investments: Item[] = [
		{
			img: '/equinix.png',
			alt: 'Equinix',
			p1: 'EQIX34',
			p2: '13:42:28 | Equinix Inc Drm Ed',
			p3: '+2,56%',
			p4: 'R$ 42,90',
		},
		{
			img: '/microsoft.png',
			alt: 'Microsoft',
			p1: 'EQIX34',
			p2: '13:42:28 | Equinix Inc Drm Ed',
			p3: '+2,56%',
			p4: 'R$ 42,90',
		},
		{
			img: '/netflix.png',
			alt: 'Netflix',
			p1: 'EQIX34',
			p2: '13:42:28 | Equinix Inc Drm Ed',
			p3: '+2,56%',
			p4: 'R$ 42,90',
		},
		{
			img: '/bmg.png',
			alt: 'Banco BMG',
			p1: 'EQIX34',
			p2: '13:42:28 | Equinix Inc Drm Ed',
			p3: '+2,56%',
			p4: 'R$ 42,90',
		},
	]
	const cripto: Item[] = [
		{
			img: '/btc.png',
			alt: 'BTC',
			p1: 'BTC/BRL',
			p2: '10:30:38 | Bitcoin',
			p3: '+0,68%',
			p4: 'R$ 131.518,45',
		},
		{
			img: '/eth.png',
			alt: 'Etherial',
			p1: 'ETH/BRL',
			p2: '15:22:08 | Ether',
			p3: '+0,76%',
			p4: 'R$ 8.997,79',
		},
		{
			img: '/doge.png',
			alt: 'Doge',
			p1: 'DOGE/BRM',
			p2: '19:02:28 | Dogecoin',
			p3: '-0,33%',
			p4: 'R$ 0,3515',
		},
		{
			img: '/ltc.png',
			alt: 'LTC',
			p1: 'LTC/BRL',
			p2: '08:20:00 | Litecoin',
			p3: '+0,42%',
			p4: 'R$ 423,58',
		},
	]

	const [pageAnimate, setPageAnimate] = useState(styles.cards)
	const [cards, setCards] = useState(market)
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const filteredCards = cards.filter((card: Card) =>
		card.p2.toLowerCase().includes(searchValue.toLowerCase())
	)

	function animate(nome: string) {
		if(nome == 'mercado') {
			setAnimation([styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn])
				setCards(market)
		}
		if(nome == 'ganhos') {
			setAnimation([styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn])
			setCards(gains)
		}
		if(nome == 'carteira') {
			setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn])
			setCards(wallet)
		}
		if(nome == 'investimentos') {
			setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn])
			setCards(investments)
		}
		if(nome == 'bitcoin') {
			setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff])
			setCards(cripto)
		}

		if(pageAnimate == styles.cards){
			setPageAnimate(styles.cardsAnimate)
		} else {
			setPageAnimate(styles.cards)
		}

	}

	return (
		<div className={styles.areaContainer}>
			<Image src={'/runner.svg'} alt='slide' width={24} height={24} priority />

			<div className={styles.blockArea}>
				<div className={styles.functions}>
					<div onClick={() => animate('mercado')} className={animation[0]}>
						<Image
							src={'/market.svg'}
							alt='mercado'
							width={32}
							height={32}
							priority
						/>
						<p>Mercado</p>
					</div>

					<div onClick={() => animate('ganhos')} className={animation[1]}>
						<Image
							src={'/gains.svg'}
							alt='ganhos'
							width={32}
							height={32}
							priority
						/>
						<p>Ganhos</p>
					</div>

					<div onClick={() => animate('carteira')} className={animation[2]}>
						<Image
							src={'/wallet.svg'}
							alt='carteira'
							width={32}
							height={32}
							priority
						/>
						<p>Carteira</p>
					</div>

					<div
						onClick={() => animate('investimentos')}
						className={animation[3]}
					>
						<Image
							src={'/investments.svg'}
							alt='investmentos'
							width={32}
							height={32}
							priority
						/>
						<p>Investimentos</p>
					</div>

					<div onClick={() => animate('bitcoin')} className={animation[4]}>
						<Image
							src={'/bitcoin.svg'}
							alt='bitcoin'
							width={32}
							height={32}
							priority
						/>
						<p>Bitcoin</p>
					</div>
				</div>

				<form className={styles.searchForm}>
					<label htmlFor='search'>Buscar:</label>
					<input
						id='search'
						autoComplete='true'
						placeholder='Nome da empresa'
						onChange={handleSearch}
						type='text'
					/>
				</form>

				<div className={pageAnimate}>

					{filteredCards.map((card: Card, index: number) => {
							return (
								<div className={styles.cardConteiner} key={index}>
									<Image
										src={card.img}
										alt={card.alt}
										width={40}
										height={40}
										priority
									/>
									<div>
										<p className={styles.company}>{card.p1}</p>
										<p>{card.p2}</p>
									</div>
									<div className={styles.color}>
										<p className={styles.percent}>{card.p3}</p>
										<p className={styles.percent}>{card.p4}</p>
									</div>
								</div>
							)
						}
					)}

				</div>

				<div className={styles.blurtop}></div>
				<div className={styles.blur}></div>
			</div>
		</div>
	)
}
