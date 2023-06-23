import Image from 'next/image'
import styles from '../page.module.sass'
import { useState } from 'react'

export default function ProfileHome() {
  return (
		<div className={styles.mainContainer}>
			<TopIndex />

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
