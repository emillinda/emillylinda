import Link from 'next/link';
import Titulo from '../components/Titulo';
import Rodape from '../components/Rodape';

export default function Filmes({filmes}){
    return (
        <div> <Titulo />
        {filmes.map((filme, index) =>(
            <Link href='/profile/[id]' as={`/profile/${index}`}>
                <div key={filme._id}>
                <p> {filme.nome} </p>
                </div>
            </Link>
        ))} <Rodape /> 
        </div> 
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme')
    const repo = await res.json();
    
    const filmes = await repo;
    return {        
        props: {filmes}
    }
})
