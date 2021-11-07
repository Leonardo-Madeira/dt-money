import { useEffect } from "react";
import { api } from "../services/api";

import { Container } from "./styles";

export function TransactionsTable(){
    //useEffect(() => {}, []); *ESTADO
    useEffect(() =>{
        api.get('transactions') 
        .then(response => console.log(response.data))
    },[]);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposito">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/01/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">R$ -1.200,00</td>
                        <td>Apartamento</td>
                        <td>01/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}