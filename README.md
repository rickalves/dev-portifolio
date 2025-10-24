# 💻 DevPortfolio – Portfólio Colaborativo

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

# 🔄 Fluxo de Contribuição (Git/GitHub)

Um resumo simples do processo profissional de contribuição em equipe.

---

## 🧭 Estrutura de Branches

| Branch       | Função                                              |
| ------------ | --------------------------------------------------- |
| **main**     | Código em produção (sempre estável)                 |
| **develop**  | Código em desenvolvimento e integração              |
| **feature/** | Novas funcionalidades criadas a partir de `develop` |

---

## 🚀 Passo a Passo

### 1️⃣ Atualize sua base local

```bash
git checkout develop
git pull origin develop
```

### 2️⃣ Crie sua branch de feature

```bash
git checkout -b feature/seu-nome-da-feature
```

### 3️⃣ Faça as alterações e commits

```bash
git add .
git commit -m "feat(profiles): Adiciona card de seu-nome"
```

### 4️⃣ Envie sua branch para o repositório remoto

```bash
git push origin feature/seu-nome-da-feature
```

### 5️⃣ Abra um Pull Request (PR)

* Base: `develop`
* Compare: `feature/seu-nome-da-feature`
* Descreva o que foi feito 📝
* Marque colegas para revisão 👀

### 6️⃣ Após aprovação e merge

O **maintainer** faz o merge do PR → `develop`.

### 7️⃣ Sincronize sua base novamente

```bash
git checkout develop
git pull origin develop
git branch -d feature/seu-nome-da-feature
```

---

## 💡 Dicas Rápidas

* ❌ **Não trabalhe na branch main.**
* ✅ Sempre crie **branches de feature**.
* 💬 Faça commits pequenos e descritivos.
* 🧹 Atualize sua branch antes do PR (`git pull origin develop`).
* 🙌 Sempre use PR (sem push direto na main/develop).

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