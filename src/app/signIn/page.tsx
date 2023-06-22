
import Image from 'next/image'
import styles from '../page.module.sass'
import { useState } from 'react';


interface Payload {
	account: string;
	password: string;
}

export default function SignIn() {

  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const [payload, setPayload] = useState<Payload>({account: '', password: ''})

  function handleAccount(e: KeyboardEvent) {
		// setAccount(e.value);
		console.log(e);
	}
  function handlePwd(e: KeyboardEvent) {
		console.log(e);
	}
  function handleSubmit() {
    const newPayload = {
      account: account,
      password: pwd
    }
    setPayload(newPayload);
    console.log(payload)
  
  }

  return (
		<div className={styles.mainContainer}>
			<div className={styles.loginContainer}>
				<form id='form' className={styles.loginForm}>
					<label htmlFor='account'>Conta</label>
					<input
						id='account'
						autoComplete='true'
						onKeyUp={(e) => handleAccount}
						type='text'
					/>

					<label htmlFor='password'>Senha</label>
					<input
						id='password'
						autoComplete='true'
						onKeyUp={(e) => handlePwd}
						type='password'
					/>
					<button onClick={() => handleSubmit} className={styles.btn}>
						Logar
					</button>
				</form>
			</div>
			<div className={styles.loginBottom}>
				<p>
					<a href='/signup'>ou crie sua conta na BeeCom</a>
				</p>
				<Image src='/Logo.svg' alt='Logo' width={100} height={100} priority />
			</div>
		</div>
	);
}
