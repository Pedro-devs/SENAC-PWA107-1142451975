import { Link } from "react-router-dom";
import { Style } from './stylesobrenos.css';
import Imge from "./fotoSobreNos.jpg";

function SobreNos(){



    return(
        <div id="sobrenos">

            <h1 align='center'>Sobre nós</h1>

            <img class="fotoSobreNos" src={Imge} aling="left"/>

            <br>
            </br>


            <br>
            </br>

            <p>
            Fundado em 12 de outubro de 1808, o Banco Celestial foi a primeira instituição bancária 
            a operar no país e,em mais de 200 anos de existência criada por um grupo de padres empreendedores, acumulou experiências e colecionou inovações,
            participando vivamente da história e da cultura nacionais.
            A marca "Bank Celestial" é uma das mais conhecidas e valorizadas pelos brasileiros, que reconhecem 
            na Instituição atributos como solidez, confiança, credibilidade, segurança e modernidade. Por meio de 
            atuação bastante competitiva nos mercados em que atua, Somos uma companhia lucrativa alinhada 
            a valores sociais.
            </p>
        </div>
    )
}

export default SobreNos;