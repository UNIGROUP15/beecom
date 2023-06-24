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
	const [amount, setAmount] = useState('3500,00')

  function handleIsOpen() {
    if(isOpen === true) {
      setIsOpen(false)
      setOlho('/EyeClosed.svg')
			setAmount('********')
    } else {
			setIsOpen(true);
      setOlho('/EyeOpen.svg')
			setAmount('3500,00');
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
	);
}

function FunctionalAreaHome() {

	function handleSearch() {
		console.log('fiz a busca')
	}

	const [animation, setAnimation] = useState([
		styles.functionBtnOff,
		styles.functionBtnIn,
		styles.functionBtnIn,
		styles.functionBtnIn,
		styles.functionBtnIn,
	])

	const [pageAnimate, setPageAnimate] = useState(styles.cards)

	function animate(nome: string) {
		nome == 'mercado' ? setAnimation([styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn])
		: nome == 'ganhos' ? setAnimation([styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn])
		: nome == 'carteira' ? setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn, styles.functionBtnIn])
		: nome == 'investimentos' ? setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff, styles.functionBtnIn])
		: nome == 'bitcoin' ? setAnimation([styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnIn, styles.functionBtnOff])
		: console.log('erro')

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
		
					<div className={styles.cardConteiner}>
						<Image
							src={'/Equinix.png'}
							alt='Equinix'
							width={40}
							height={40}
							priority
						/>
						<div>
							<p className={styles.company}>EQIX34</p>
							<p>13:42:28 | Equinix Inc Drm Ed</p>
						</div>
						<div className={styles.color}>
							<p className={styles.percent}>+2,56%</p>
							<p className={styles.percent}>R$ 42,90</p>
						</div>
					</div>

					<div className={styles.cardConteiner}>
						<Image
							src={'/microsoft.png'}
							alt='microsoft'
							width={40}
							height={40}
							priority
						/>
						<div>
							<p className={styles.company}>MSFT34</p>
							<p>18:25:10 | Microsoft Drm Ed</p>
						</div>
						<div className={styles.color}>
							<p className={styles.percent}>+3,29%</p>
							<p className={styles.percent}>R$ 66,72</p>
						</div>
					</div>

					<div className={styles.cardConteiner}>
						<Image
							src={'/netflix.png'}
							alt='Netflix'
							width={40}
							height={40}
							priority
						/>
						<div>
							<p className={styles.company}>NFLX34</p>
							<p>09:31:58 | Netflix Drm</p>
						</div>
						<div className={styles.color}>
							<p className={styles.percentNeg}>-0,96%</p>
							<p className={styles.percentNeg}>R$ 36,80</p>
						</div>
					</div>

					<div className={styles.cardConteiner}>
						<Image src={'/bmg.png'} alt='bmg' width={40} height={40} priority />
						<div>
							<p className={styles.company}>BMGB4</p>
							<p>18:22:07 | Banco BMG Pn N1</p>
						</div>
						<div className={styles.color}>
							<p className={styles.percent}>+0,45%</p>
							<p className={styles.percent}>R$ 2,23</p>
						</div>
					</div>
				</div>

				<div className={styles.blurtop}></div>
				<div className={styles.blur}></div>
			</div>
		</div>
	);
}
