import { Link } from "react-router-dom";
import style from './stylehome.css';
import Imgel from "./fund.png";

function Home(){



    return(
        <div>
            <h1 align='center'>Pagina Home</h1>
            <br></br>
            <h2>O Banco com mais de 100 milhões de clientes</h2>
            <img class="fund" src={Imgel} aling="center"/>
            
        </div>
    )
}

export default Home;