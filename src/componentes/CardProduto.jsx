import React from 'react';
import styled from 'styled-components';
import camisaImage from '../assets/juras-que-park.jpg';

// estilização do card

const Card = styled.div`
    border: 0.063rem solid #ccc;
    padding: 1rem;
    border-radius: 0.75rem;
    width: 15.625rem;
    box-shadow: 0.125rem 0.125rem 0.5rem rgba(0,0,0,0.1);
`;

// titulo do produto

const Nome = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

// preço do produto

const Preco = styled.p`
    font-size: 1rem;
    margin-bottom: 0.75rem;
`;

// botão estilizado

const Botao = styled.button`
    background-color: ${props => props.adicionado ? '#198754' : '#6c757d'};
    color: white;
    border: none;
    padding: 0.625rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
    opacity: 0.9;
    }
`;

// estilização da imagem

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
`;

// componente do card

const CardProduto = ({ nome, preco, adicionado, onClick }) => {
    return (
        <Card>
            <Image src={camisaImage} alt={nome} />
            <Nome>{nome}</Nome>
            <Preco>R$ {preco.toFixed(2)}</Preco>
            <Botao adicionado={adicionado} onClick={onClick}>
                {adicionado ? 'adicionado!' : 'adicionar ao carrinho'}
            </Botao>
        </Card>
    );
};

export default CardProduto;