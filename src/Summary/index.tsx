import incomeImg from '../assets/entrada.svg'
import imgSaida from '../assets/saídas.svg'
import imgTotal from '../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    R$1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={imgSaida} alt="Saida" />
                </header>
                <strong>
                    R$-500,00
                </strong>
            </div>
            <div className="green-total">
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>
                    R$500,00
                </strong>
            </div>
        </Container>
    )
}