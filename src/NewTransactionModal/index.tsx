import Modal from 'react-modal';

import incomeImg from '../assets/entrada.svg'
import outcomeImg from '../assets/saídas.svg'
import closeImg from '../assets/close.svg'

import { api } from '../services/api'; //api

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    //criando estado p/ o botão
    const [type, setType] = useState('deposit')

    //Outro estado
    const [title, setTitle] = useState('')// useState('') é como vai começar o formato da aplicação
    const [value, setValue] = useState(0); // no caso elas estão vazias e o value começa com 0
    const [category, setCategory] = useState('');
    //

    function handleCreatNewTransaction(event: FormEvent){
        event.preventDefault() // Prevenir o funcionamento padrão do HTML.
        
        const data ={
            title,
            value,
            category,
            type,
        }

        api.post('/transactions', data)
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">

            <button type="button" onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" />
            </button>

                <Container onSubmit={handleCreatNewTransaction}>
                    
                    <h2>Cadastrar transação</h2>

                    <input 
                    placeholder="Título" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                    type="number" 
                    placeholder="Valor" 
                    value={value} 
                    onChange={event => setValue(Number(event.target.value))}
                    />

                        <TransactionTypeContainer>
                            <RadioBox type="button" onClick={() => {setType('deposit');}} isActive={type === 'deposit'} activeColor="green">
                                <img src={incomeImg} alt="Entrada" /><span>Entrada</span>
                            </RadioBox>

                            <RadioBox type="button" onClick={() => {setType('withdraw');}} isActive={type === 'withdraw'} activeColor='red'> 
                                <img src={outcomeImg} alt="Saída" /><span>Saída</span>
                            </RadioBox>
                        </TransactionTypeContainer>

                    <input 
                    placeholder="Categoria" 
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">Cadastrar</button>

                </Container>
        </Modal>
    )
}