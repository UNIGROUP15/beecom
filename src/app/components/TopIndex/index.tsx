'use client'

import Image from 'next/image';
import styles from '../../page.module.sass';
import { useState } from 'react';

export default function TopIndex() {
	const [eyeIsOpen, setEyeIsOpen] = useState(true);
	const [olho, setOlho] = useState('/EyeOpen.svg');
	const [amountOpen, setAmountOpen] = useState(styles.amountClose);
	const [amount, setAmount] = useState('13.500,00');
	const [profileIsOpen, setProfileIsOpen] = useState(false)
	const [animateProfile, setAnimateProfile] = useState(styles.blocoClosed)

	const handleProfileIsOpen = () => {
		if(profileIsOpen === false) {
			setProfileIsOpen(true)
			setAnimateProfile(styles.blocoOpened)
			setAmountOpen(styles.amountOpen)
		} else {
			setProfileIsOpen(false)
			setAnimateProfile(styles.blocoClosed)
			setAmountOpen(styles.amountClose)
		} 
	}

	function handleEyeIsOpen() {
		if (eyeIsOpen === true) {
			setEyeIsOpen(false);
			setOlho('/EyeClosed.svg');
			setAmount('********');
		} else {
			setEyeIsOpen(true);
			setOlho('/EyeOpen.svg');
			setAmount('13.500,00');
		}
	}

	return (
		<div className={animateProfile}>
			<div className={styles.indexProfile}>
				<div className={styles.pImage}>
					<div>
						<Image
							src={'/profilePic.png'}
							alt='Profile picture'
							height={56}
							width={56}
							priority
						/>
						<p>Olá, Fulano</p>
					</div>
				</div>
				<div className={styles.options}>
					<a href="/game">
						<Image
							src={'/jogar.svg'}
							width={32}
							height={32}
							alt='jogar'
							priority
						/>
					</a>
					<Image
						src={olho}
						width={32}
						height={32}
						alt='mostrar saldo'
						priority
						onClick={handleEyeIsOpen}
					/>
					<Image
						src={'/account.svg'}
						width={32}
						height={32}
						alt='profile'
						onClick={handleProfileIsOpen}
						priority
					/>

					<div className={amountOpen}>
						<h3>R${amount}</h3>
						<Image
							src={'/right.svg'}
							alt='seta'
							width={24}
							height={24}
							priority
						/>
					</div>
					
					<div className={styles.lilcard1}>
						<div className={styles.lilcontainer}>
							<h5>Cartões</h5>
							<Image
								src={'/right.svg'}
								height={24}
								width={24}
								alt='seta'
								priority
							/>
						</div>
					</div>
					<div className={styles.lilcard2}>
						<div className={styles.lilcontainer}>
							<h5>Empréstimos</h5>
							<Image
								src={'/right.svg'}
								height={24}
								width={24}
								alt='seta'
								priority
							/>
						</div>
					</div>
					<div className={styles.lilcard3}>
						<div className={styles.lilcontainer}>
							<h5>Pagamentos</h5>
							<Image
								src={'/right.svg'}
								height={24}
								width={24}
								alt='seta'
								priority
							/>
						</div>
					</div>
					<div className={styles.lilcard4}>
						<div className={styles.lilcontainer}>
							<h5>Transferência</h5>
							<Image
								src={'/right.svg'}
								height={24}
								width={24}
								alt='seta'
								priority
							/>
						</div>
					</div>
					<div className={styles.lilcard5}>
						<div className={styles.lilcontainer}>
							<h5>Configurações</h5>
							<Image
								src={'/right.svg'}
								height={24}
								width={24}
								alt='seta'
								priority
							/>
						</div>
					</div>

					<a href='/' className={styles.lilcard6}>Sair do app</a>
				</div>
			</div>
		</div>
	);
}
