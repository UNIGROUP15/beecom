'use client'

import styles from './page.module.sass'
import SignIn from './signIn/page'
import ProfileHome from './profilehome/page'
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

