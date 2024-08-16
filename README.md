# 📒 Documentação do Projeto

Durante o ByteLab, desenvolvi projetos indo de bibliotecas comuns e avançadas do Python, como GoogleAiAPI e Django, até o desenvolvimento de apps com React Native. Participar deste curso de férias foi uma oportunidade excelente para conhecer mais sobre estas tecnologias de extrema importância, realizar networkings e desenvolver novas habilidades. Tive a oportunidade de presenciar três workhops, sendo eles:

<br>

`🐍 Introdução ao Django: Construindo Aplicação Web` — Neste workshop tive a oportunidade de conhecer mais sobre o principal framework de aplicações python, o Django, e como utilizar deste framework para aplicações web, utilizados por empresas grandes como Spotify, Instagram, e até a própria CESAR.

`🤖 Implementando IA no seu projeto: Um Guia Rápido` — Puxando a corda do Python, desenvolvemos uma aplicação utilizando da API do Google para integração do Gemini com aplicações Python, recriado no console um chatGPT.

`📱 Desenvolva seu primeiro aplicativo com React Native` — Saindo um pouco da programação desktop, participei de um workshop introdutório na programação mobile, no qual tivemos o simples objetivo de criar um app de listas de afazeres, uma to-do list.

<br>

- Python
- Django
- GoogleAiAPI
- React Native
  
<div style="display: inline_block"><br>
  <img align="center" alt="Python" heigth="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg">
  <img align="center" alt="Django" heigth="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg">
  <img align="center" alt="React" heigth="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">
</div>
  
## 🌐 Autor
---
<br>

<a href="https://www.linkedin.com/in/victor-santos-01242007111203200607/">
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/114593367?s=400&u=35dad9c7030300514c27e765de70b83b4073c802&v=4" width="100px;" alt=""/>
</a>

Feito com ❤️ por Victor Barbosa 👋🏽 Entre em contato!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-santos-01242007111203200607/)
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/vituisdev/)
[![Gmail](https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red)](mailto:victorb.santos15@gmail.com)
<br>
<br>

# 🔗 Projetos desenvolvidos
---

Abaixo segue descrição dos projetos desenvolvidos durante os workshops.

<br>

<details>
  <summary><h2>🐍 To-Do List Django</h2></summary>
  
  Durante este workshop, desenvolvemos um simples site de listas de tarefas, um "to-do list", utilizando de Django, o principal framework para Python atualmente. Percorremos uma trilha simples e linear, indo desde a inicialização de uma venv (ambiente virtual), até a criação de uma conta admin no site para atualização das listas manualmente. Abaixo está um passo a passo de como instalar o projeto e rodar:
  
  ---
  ### Requisitos: 
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - Python 3.11+
  - Pip 21+
  - Django 5.1
  
  ---
  ### Passo a passo:
  1. Instalar o projeto dentro da pasta [Workshop - Django](https://github.com/victorb-s/CESAR-ByteLab-2024/tree/7d246a96cd7e9223b1670227b9728f35d2171589/Workshop%20-%20Django).
  2. Inicie o ambiente virtual utilizando o seguinte comando no prompt "CMD"
  
  - No Windows:
  ```bash
  .\Django\Scripts\activate
  ```
  - No MacOS/Linux:
  ```bash
  source Django\bin\activate
  ```
  <br>
  
  3. Caso o pip não esteja instalado, utilize o seguinte comando
  
  - No windows:
  ```bash
  py -m ensurepip --default-pip
  ```
  - No MacOS/Linux:
  ```bash
  python3 -m ensurepip --default-pip
  ```
  <br>
  
  4. Entre na página "projetinho" com o comando `cd projetinho` e instale os requisitos, abra o terminal e digite:
  ```
  pip install -r requirements.txt
  ```
  5. Após instalar, inicialize o projeto utilizando
  ```
  python manage.py runserver
  ```
  6. Acesse o projeto utilizando este link no navegador `http://127.0.0.1:8000`
  7. Caso queira adicionar alguma tarefa, utilize o link `http://127.0.0.1:8000/admin/` com a seguinte conta: <br>
  `Usuário:` admin <br>
  `Senha:` admin123 <br>
  
  <br>
  
  8. Para finalizar o projeto, abra o terminal e pressione CTRL + C
  9. Para finalizar o ambiente virtual digite simplesmente `deactivate` no terminal. Caso não funcione, volte para o diretório original utilizando `cd ..` e digite `.\Django\Scripts\deactivate`
</details>

<details>
  <summary><h2>🤖 GoogleAiAPI com Python e Gemini</h2></summary>

  Durante este workshop, tivemos uma leve experiência do que seria criar seu próprio GPT, um chatBot funcional que roda no seu próprio computador local, através de Python. Tive a oportunidade de conhecer mais sobre APIs, desenvolvimento com elas e integração de chatBots em projetos reais.

  ---
  ### Requisitos: 
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - Python 3.11+
  - Pip 21+
  - GoogleAiApi v1
  
  ---
  ### Passo a passo:
  1. Instalar o projeto dentro da pasta [Workshop -GoogleAiAPI](https://github.com/victorb-s/CESAR-ByteLab-2024/tree/87e411613ad1bc53ccb5b170b15f5cc0c3a3017d/Workshop%20-%20GoogleAiAPI).
  2. Inicie o ambiente virtual utilizando o seguinte comando no prompt "CMD"
  
  - No Windows:
  ```bash
  .\venv\Scripts\activate
  ```
  - No MacOS/Linux:
  ```bash
  source venv\bin\activate
  ```
  <br>
  
  3. Caso o pip não esteja instalado, utilize o seguinte comando
  
  - No windows:
  ```bash
  py -m ensurepip --default-pip
  ```
  - No MacOS/Linux:
  ```bash
  python3 -m ensurepip --default-pip
  ```

  4. Você precisará entrar no site [Google AI Studio](https://aistudio.google.com/), obs: *Entre com um email pessoal, não institucional*
  ![Captura de tela 2024-08-16 173413](https://github.com/user-attachments/assets/707c3b70-0493-4819-a405-cf198b9694b5)

  <br>
  
  6. Gere uma nova chave, selecionando `Criar chave de API` -> `Criar uma chave de API em um novo projeto`
  7. Copie a chave e guarde em algum lugar, você precisará dela para acessar o chat
  8. No arquivo `.env`, altere a variável `suaChave` para a chave que você copiou no AI Studio
  9. Execute o código em `chat.py` e utilize de seu próprio Gemini!

</details>

<details>
  <summary><h2>📱 App To-Do List com React Native</h2></summary>
  No workshop focado em desenvolvimento mobile, tivemos uma leve experiência de criação de um simples app To-do, através da plataforma Expo Go. Trabalhamos com estilização em react, utilização do react native para programar a tela, entre outros.

  ---
  ### Requisitos: 
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - Expo Go (App Mobile)
  
  ---
  ### Passo a passo:
  
  1. Instale as dependências
  
     ```bash
     npm install
     ```
  
  2. Inicialize o app
  
     ```bash
      npx expo start
     ```
  
  No console, você encontrará as seguintes opções para rodar o app:
  
  - [Desenvolvedor](https://docs.expo.dev/develop/development-builds/introduction/)
  - [Emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
  - [Emulador IOs](https://docs.expo.dev/workflow/ios-simulator/)
  - [Expo Go](https://expo.dev/go), um ambiente limitado para testar o desenvolvimento do app com o Expo
  
  ## Tutoriais do Expo

  - [Documentação do Expo](https://docs.expo.dev/): Aprender os fundamentos ou entrar em tópicos avançados com o [guia](https://docs.expo.dev/guides).
  - [Tutorial para aprender Expo](https://docs.expo.dev/tutorial/introduction/)

</details>
