# 💻 DevPortfolio – Portfólio Colaborativo de Desenvolvedores Júnior

Um projeto simples e colaborativo para que cada integrante da equipe **adicione seu próprio card de perfil** em um site estático.
O objetivo é **praticar o uso do Git e GitHub** em um fluxo real de contribuição com **branch, pull request, issues e revisão de código**.

---

## 🚀 Objetivo do Projeto

Este repositório foi criado para treinar a colaboração em projetos GitHub.
Cada participante irá:

1. **Clonar o repositório**
2. **Criar uma nova branch** com seu nome
3. **Adicionar seu card de perfil** com HTML/CSS (ou JSON, se preferir)
4. **Abrir um Pull Request (PR)** para a branch principal
5. **Participar de revisões** e merges com os colegas

Ao final, teremos um **site com cards de todos os devs do grupo**. 😎

---

## 🧱 Estrutura do Projeto

```
dev-portfolio/
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── main.js (opcional)
├── assets/
│   └── images/
└── data/
    └── profiles.json
```

---

## 🧩 O que cada dev deve fazer

### 🅑 Editar o arquivo JSON

Você vai adicionar suas informações em `data/profiles.json`:

```json
{
  "name": "Henrique Raulino",
  "role": "Coordenador e Dev Júnior",
  "stack": "React, NestJS, PostgreSQL",
  "github": "https://github.com/henriqueraulino",
  "image": "assets/images/henrique.jpg"
}
```

---

## ⚙️ Como rodar localmente

1. Clone o repositório

   ```bash
   git clone https://github.com/seuuser/dev-portfolio.git
   ```
2. Entre na pasta

   ```bash
   cd dev-portfolio
   ```
3. Abra o arquivo `index.html` no navegador
   ou use o Live Server do VS Code.

---

## 🌿 Fluxo de Contribuição

1. **Crie uma branch nova**

   ```bash
   git checkout -b feature/seu-nome
   ```
2. **Adicione suas mudanças**

   ```bash
   git add .
   git commit -m "Adiciona card de [Seu Nome]"
   ```
3. **Envie para o repositório remoto**

   ```bash
   git push origin feature/seu-nome
   ```
4. **Abra um Pull Request (PR)** no GitHub
5. **Espere a revisão e o merge** ✨

---

## 💡 Sugestões de Melhoria (para os próximos passos)

* Adicionar **modo escuro** 🌙
* Permitir **busca de devs** via JavaScript
* Criar **ranking de linguagens** por número de citações
* Hospedar no **GitHub Pages**
* Implementar **API simulada (JSON Server)**

---

## 🧠 Habilidades Praticadas

* Clonagem de repositórios
* Criação de branch
* Commits sem conflito
* Pull Requests e Code Review
* Organização de pastas e versionamento

---

### 💙 Contribuidores

Agradecemos a todos os desenvolvedores que contribuíram para este projeto! 🙌  

<a href="https://github.com/ti-eeepdjmm/dev-portifolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ti-eeepdjmm/dev-portifolio" />
</a>


---

### 🌎 Demo (futuro)

Quando o projeto estiver concluído, poderá ser publicado via **GitHub Pages**:

> [https://seuuser.github.io/dev-portfolio](https://seuuser.github.io/dev-portfolio)

---
