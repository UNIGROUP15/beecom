import Image from 'next/image';
import styles from './page.module.sass';

export default function Loading() {
	return (
		<div className={styles.main}>
			<Image
				src='/Logo.svg'
				alt='Logo'
				className={styles.Logo}
				width={300}
				height={200}
				priority
			/>
		</div>
	);
}
