'use client'

import Image from 'next/image'
import styles from './page.module.sass'
import SignIn from './signIn/page'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.mainContainer}>
        <SignIn />
      </div>
    </Suspense>
	)
}

function Loading() {
  return (
		<main className={styles.main}>
			<Image
				src='/Logo.svg'
				alt='Logo'
				className={styles.Logo}
				width={300}
				height={200}
				priority
			/>
		</main>
	);
}