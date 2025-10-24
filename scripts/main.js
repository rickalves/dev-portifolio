// Carrega os perfis do arquivo JSON e exibe no HTML
fetch("data/profiles.json")
  .then((response) => response.json())
  .then((profiles) => {
    const container = document.getElementById("profiles");

    profiles.forEach((dev) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${dev.image}" alt="${dev.name}">
        <h3>${dev.name}</h3>
        <p>💼 ${dev.role}</p>
        <p>⚙️ ${dev.stack}</p>
        <a href="${dev.github}" target="_blank">GitHub</a>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Erro ao carregar perfis:", err);
  });
