'use client'

import Image from 'next/image'
import styles from './page.module.sass'
import SignIn from './signIn/page'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.mainContainer}>
        <SignIn />
      </div>
    </Suspense>
	)
}

