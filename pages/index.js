import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name='keywords' content='ninjas' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Pariatur voluptate labore excepteur ea culpa culpa magna labore
					commodo dolor minim. Sunt consequat dolor ex ipsum fugiat
					aliquip. Qui ea cupidatat fugiat enim laboris voluptate magna
					pariatur qui laboris occaecat elit culpa incididunt.
				</p>

				<Link href='/ninjas' className={styles.btn}>
					See Ninja Listing
				</Link>
			</div>
		</>
	);
}
