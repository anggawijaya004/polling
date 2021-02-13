import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Router from 'next/router'

export default function Home() {
  const [options, setOptions] = useState([])
  const [flag, setFlag] = useState(false)
  const [pertanyaan, setPertanyaan] = useState('')
  const [pilihan, setPilihan] = useState([])

  function addOptions() {
    let temp = options
    temp.push(1)
    setOptions(temp)
    setFlag(!flag)
  }

  function deleteOption(i) {
    let temp = options
    temp.splice(i, 1)

    let pil = pilihan
    pil.splice(i + 2, 1)
    setPilihan(pil)
    setFlag(!flag)
  }

  function changePilihan(event) {
    let { name, value } = event.target
    let temp = pilihan
    temp[name] = value
    setPilihan(temp)
    setFlag(!flag)
  }

  function submit () {
    Router.push('/detail')
  }


  console.log(pilihan)

  return (
    <div className={styles.container}>
      <Head>
        <title>Polling Fakta Banten</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buat Polling Anda Sendiri
        </h1>
        <div className={styles.boxForm}>
          <label htmlFor="name">Pertanyaan</label><br />
          <input id="name" placeholder='Tulis Pertanyaan Anda' type="text" autoComplete="name" required style={{ height: '60px', fontSize: '18px' }} onChange={(e) => [setPertanyaan(e.target.value)]} /><br /><br />
          <label htmlFor="name">Pilihan</label><br />
          <input placeholder='Pilihan' id="name" type="text" autoComplete="name" required name={0} onChange={changePilihan} value={pilihan[0]} /><br />
          <input placeholder='Pilihan' id="name" type="text" autoComplete="name" required name={1} onChange={changePilihan} value={pilihan[1]} /><br />
          {
            options.map((item, i) => {
              return (
                <div style={{ display: 'flex' }}>
                  <input key={i} placeholder='Pilihan' name={i + 2} type="text" autoComplete="none" required onChange={changePilihan} value={pilihan[i + 2]} />
                  <button onClick={() => deleteOption(i)} className={styles.btnDel}>X</button><br />
                </div>
              )
            })
          }
          <button onClick={addOptions} className={styles.btn}>Tambah Pilihan</button><br />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button onClick={submit} className={styles.btn} style={{ width: '100%', fontSize: '18px', height: '60px' }}>Simpan</button>
          </div><br />
          <div>
            <p className={styles.alert}>Perhatian: Dilarang membuat Polling yang berbau Provokasi, Radikalisme dan SARA</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
