import Image from 'next/image'
import styles from '../page.module.sass'
import { useState } from 'react'

export default function ProfileHome() {
  return (
		<div className={styles.mainContainer}>
			<TopIndex />
			<FunctionalArea />
		</div>
	)
}


function TopIndex() {

  const [isOpen, setIsOpen] = useState(true)
  const [olho, setOlho] = useState('/EyeOpen.svg');

  function handleIsOpen() {
    if(isOpen === true) {
      setIsOpen(false)
      setOlho('/EyeClosed.svg');
    } else {
      setIsOpen(true);
      setOlho('/EyeOpen.svg');
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
		</div>
	);
}

function FunctionalArea() {

	function handleSearch() {
		console.log('fiz a busca')
	}

	return (
		<div className={styles.areaContainer}>
			<Image 
				src={'/runner.svg'}
				alt=''
				width={16}
				height={16}
				priority
			/>
			<div className={styles.blockArea}>
				<div className={styles.functions}>
					<Image
						src={'/market.svg'}
						alt='market'
						width={32}
						height={32}
						priority
					/>
					<Image
						src={'/gains.svg'}
						alt='gains'
						width={32}
						height={32}
						priority
					/>
					<Image
						src={'/wallet.svg'}
						alt='wallet'
						width={32}
						height={32}
						priority
					/>
					<Image
						src={'/investments.svg'}
						alt='investments'
						width={32}
						height={32}
						priority
					/>
					<Image
						src={'/bitcoin.svg'}
						alt='bitcoin'
						width={32}
						height={32}
						priority
					/>
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


			</div>
		</div>
	);
}
