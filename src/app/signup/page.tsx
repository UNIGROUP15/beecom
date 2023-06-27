'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'


interface Payload {
	cpf: string
	password: string
	account: string
}

export default function SignUp() {

  const [cpf, setCpf] = useState('')
  const [pwd, setPwd] = useState('')
  const [repeatPwd, setRepeatPwd] = useState('')
	const [account, setAccount] = useState('')
  const [payload, setPayload] = useState<Payload>({cpf: '', password: '', account:''})

  function handleCpf(e: ChangeEvent<HTMLInputElement>) {
		setCpf(e.target.value)
	}
 
	function handlePwd(e: ChangeEvent<HTMLInputElement>) {
		setPwd(e.target.value)
	}

  function handleConfirmation(e: ChangeEvent<HTMLInputElement>) {
		setRepeatPwd(e.target.value)
	}

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
		
		const acc = String(Math.floor(Math.random() * 10000))
		setAccount(acc)
		
		if (pwd === repeatPwd) {
			setPayload({ cpf: cpf, password: pwd, account: account})
		} else {
			alert('Senhas diferentes')
		}
		console.log('CPF:', cpf)
		console.log('Password:', pwd)
		console.log(payload)
		e.preventDefault()	
	}

  return (
		<div className={styles.mainContainer}>
			<div className={styles.loginContainer}>
				<Link href="/">
					<Image 
						className='img'
						src={'/left.svg'}
						alt='voltar'
						height={32}
						width={32}
						priority
					/>
				</Link>
				<form onSubmit={handleSubmit} id='form2' className={styles.loginForm}>
				
					<label htmlFor='cpf'>CPF</label>
					<input
						id='cpf'
						value={cpf}
						autoComplete='true'
						onChange={handleCpf}
						type='text'
					/>

					<label htmlFor='password'>Senha</label>
					<input
						id='password'
						value={pwd}
						autoComplete='true'
						onChange={handlePwd}
						type='password'
					/>

					<label htmlFor='confirm'>Repita a senha</label>
					<input
						id='confirm'
						value={repeatPwd}
						autoComplete='true'
						onChange={handleConfirmation}
						type='password'
					/>
					
					<button type='submit' className={styles.btn}>
						Criar conta
					</button>

				</form>
			</div>
			<div className={styles.loginBottom}>
				<p>Você será levado à página de login</p>
				<Image src='/Logo.svg' alt='Logo' width={100} height={100} priority />
			</div>
		</div>
	)
}
