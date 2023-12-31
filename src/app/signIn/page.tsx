'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'


interface Payload {
	account: string
	password: string
}

export default function SignIn() {

  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const [payload, setPayload] = useState<Payload>({account: '', password: ''})

  function handleAccount(e: ChangeEvent<HTMLInputElement>) {
		setAccount(e.target.value)
	}
  
	function handlePwd(e: ChangeEvent<HTMLInputElement>) {
		setPwd(e.target.value)
	}
  
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setPayload({ account: account, password: pwd });
	}

  return (
		<div className={styles.mainContainer}>
			<div className={styles.loginContainer}>
				<form onSubmit={handleSubmit} id='form' className={styles.loginForm}>
					<label htmlFor='account'>Conta</label>
					<input
						id='account'
						autoComplete='true'
						value={account}
						onChange={handleAccount}
						type='text'
					/>

					<label htmlFor='password'>Senha</label>
					<input
						id='password'
						autoComplete='true'
						value={pwd}
						onChange={handlePwd}
						type='password'
					/>
					<Link href='/profilehome' className={styles.btnLog}>
						Logar
					</Link>
				</form>
			</div>
			<div className={styles.loginBottom}>
				<p>
					<Link href="/signup">ou crie sua conta na BeeCom</Link>
				</p>
				<Image src={'/Logo.svg'} alt='Logo' width={100} height={100} priority />
			</div>
		</div>
	);
}
