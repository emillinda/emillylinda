import Titulo from '../../components/Titulo';
import Rodape from '../../components/Rodape';

function Filmes({ filme = {} }) {
    return (
        <div> <Titulo/>
                <p>{filme.nome}</p>
                <p>{filme.usuario}</p>
                <p>{filme.descricao}</p>
            <Rodape/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme')
    const repo = await res.json()
    const filme = await repo[context.params.id];

    return {
        props: { filme }
    }
})
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
        ],
        fallback: true,
    };
}
export default Filmes;
