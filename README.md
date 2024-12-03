# **App de Cadastro de Usuários**

> Um aplicativo React Native desenvolvido com Expo e a API Firebase, containerizado com Docker.

<div align="center">
  <img src="https://img.shields.io/badge/React%20Native-Expo-blue" alt="React Native Expo Badge">
  <img src="https://img.shields.io/badge/Firebase-Authentication-orange" alt="Firebase Badge">
  <img src="https://img.shields.io/badge/Docker-Containerized-blue" alt="Docker Badge">
</div>

---

## **Índice**
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Execução com Docker](#execução-com-docker)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Desenvolvido Por](#desenvolvido-por)

---

## **Sobre o Projeto**
Este aplicativo permite que os usuários se cadastrem, acessem páginas iniciais e de perfil, além de incluir a funcionalidade de redefinição de senha. Ele utiliza **Expo** para a interface, **Firebase** para autenticação e gerenciamento de dados, e **Docker** para containerização do ambiente de desenvolvimento.


---

## **Funcionalidades**
- ✅ **Cadastro de novos usuários**  
  Os usuários podem se cadastrar fornecendo email e senha.  
- ✅ **Login com autenticação via Firebase**  
  Permite que usuários façam login seguro.  
- ✅ **Página inicial**  
  Após o login, os usuários são direcionados para a página inicial do aplicativo.  
- ✅ **Página de perfil**  
  Os usuários podem visualizar a página do perfil.  
- ✅ **Redefinição de senha**  
  Um botão dedicado para solicitar a redefinição de senha, enviado via email.

---

## **Pré-requisitos**
Certifique-se de que você possui os seguintes itens instalados na sua máquina:  

- [Docker](https://www.docker.com/) (para rodar o ambiente containerizado)  
- [Node.js](https://nodejs.org/) v16+ (caso queira rodar o projeto localmente)  
- Conta no [Firebase](https://firebase.google.com/) com um projeto configurado.  

---

## **Instalação**
### Configurando o Firebase:
1. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um projeto.  
2. Habilite:  
   - **Autenticação por email/senha**.  
   - **Redefinição de senha** (no mesmo painel de autenticação).  
3. Configure o Firebase Realtime Database ou Firestore (opcional).  
4. Adicione o arquivo de configuração do Firebase (`firebaseConfig`) ao seu código.

---

## **Uso**
### Rodando localmente (sem Docker):  
1. Clone o repositório:  
    ```bash
    git clone https://github.com/usuario/app-cadastro-usuarios.git
    ```
2. Entre na pasta do projeto:  
    ```bash
    cd app-cadastro-usuarios
    ```
3. Instale as dependências:  
    ```bash
    npm install
    ```
4. Execute o comando para iniciar o servidor web:  
    ```bash
    npx expo start --web
    ```
5. Abra o navegador no endereço indicado (geralmente `http://localhost:19006`).

---

## **Execução com Docker**
Se preferir usar o ambiente containerizado:  

1. **Construir a imagem Docker**:  
    ```bash
    docker build -t app-cadastro-usuarios .
    ```
2. **Rodar o contêiner**:  
    ```bash
    docker run -p 19006:19006 app-cadastro-usuarios
    ```
3. Abra o navegador e acesse o aplicativo em `http://localhost:19006`.

---

## **Tecnologias Utilizadas**
<div align="center">
  <img src="https://img.shields.io/badge/React%20Native-Expo-blue" alt="React Native Expo Badge">
  <img src="https://img.shields.io/badge/Firebase-orange" alt="Firebase Badge">
  <img src="https://img.shields.io/badge/Docker-blue" alt="Docker Badge">
</div>

---


## **Desenvolvido por**

- **Nome**: Gabriel Nunes dos Santos 
 
- **GitHub**: [Clique aqui](https://github.com/Gabrielnunesds)

- **Nome**: Diego Moura Araújo
 
- **GitHub**: [Clique aqui](https://github.com/DMAraujo)

- **Nome**: Ítalo Ricardo Amorim Nunes Filho
 
- **GitHub**: [Clique aqui](https://github.com/Kerplunky)

- **Nome**: Roberto Figueiredo Guimarãoes Maia
 
- **GitHub**: [Clique aqui](https://github.com/Dianapep)

- **Nome**: Ryan Honório Urtiga
 
- **GitHub**: [Clique aqui](https://github.com/urtiga)

