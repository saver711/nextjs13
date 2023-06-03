import styles from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "home",
  description: "the home page",
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Home</h1>
        <Link href="/employees" className='text-red-200'>Go To Employees</Link>
        <Link href="/small_project" className='text-red-200'>Go To Small_project</Link>
      </main>
    </>
  )
}
