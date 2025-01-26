import React from 'react';
import styled from 'styled-components';

// Contêiner do Cartão
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  width: 300px;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
  }
`;

// Imagem do Cartão
const Avatar = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Nome do Usuário
const Name = styled.h2`
  font-size: 1.5em;
  margin: 15px 0;
`;

// Descrição do Usuário
const Description = styled.p`
  font-size: 1em;
  color: #777;
  padding: 0 15px;
  margin-bottom: 15px;
`;

// Botão de Ação
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileCard = ({ image, name, description }) => {
  return (
    <Card>
      <Avatar src={image} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Button>Seguir</Button>
    </Card>
  );
};

export default ProfileCard;
