import Head from 'next/head';
import Titulo from '../components/Titulo';
import Rodape from '../components/Rodape';
import styles from '../styles/Pages.module.css';

export default function Home() 
{
  return (
  <div>
    <Head> <title>  </title>
    </Head>
    <Titulo/>
      <div className={styles.home}>
        <main>
          <h2> <a href='/filmes'> Clique aqui para acessar as listas de pintura </a> </h2>
        </main>
      </div>
    <Rodape/>
  </div>)
}