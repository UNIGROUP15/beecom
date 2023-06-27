
import styles from '../page.module.sass'
import TopIndex from '../components/TopIndex'
import FunctionalAreaHome from '../components/FunctionalAreaHome'

export default function ProfileHome() {
  return (
		<div className={styles.mainContainer}>
			<TopIndex />
			<FunctionalAreaHome />
		</div>
	)
}
