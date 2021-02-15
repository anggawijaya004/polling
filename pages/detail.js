import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Pie } from 'react-chartjs-2';
import Router from 'next/router'

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export default function Detail() {
    const [pilihan, setPilihan] = useState([1, 2, 3])
    const [result, setResult] = useState(false)

    function buat () {
        Router.push('/')
    }

    function pilih (i) {
        setResult(true)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <div className={styles.boxForm}>
                    <h1 className={styles.title}>
                        PERTANYAAN ?
                    </h1>
                    <h3>
                        Klik Tombol Pilihan Anda
                    </h3>
                    {
                        pilihan.map((item, i) => {
                            return (
                                <div key={i}><button className={styles.btn} style={{ width: '100%', height: '50px' }} onClick={() => pilih(i)}>Pilihan {i + 1}</button><br /></div>
                            )
                        })
                    }

                </div>
                <div className={styles.boxLihat}>
                    <button className={styles.btnLihat}>Lihat Hasil Polling</button>
                    <button className={styles.btnLihat}>Bagikan Polling</button>
                </div>

                {
                    result &&
                    <div className={styles.boxForm}>
                            <h2 className={styles.title}>Hasil Polling</h2>
                            <div style={{ marginTop: '20px' }}>
                                <Pie data={data} />
                            </div>

                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                            <button className={styles.btnBuat} onClick={buat}>Buat Polling Anda Sendiri</button>
                        </div>

                    </div>
                }
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by FaktabantenITSupport
                </a>
            </footer>
        </div>
    )
}
