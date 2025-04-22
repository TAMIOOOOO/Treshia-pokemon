let pokenamesHtml = '';

pokeNames.forEach((pokeNames) => {
    pokenamesHtml += `
    <div class="pokemon-sidebar-names-container">
        <div class="pokemon-sidebar-image-container">
          <img class="pokemonImage" src="${pokeNames.image}" alt="" />
        </div>

        <div class="pokemon-sidebar-name">${pokeNames.name}</div>
      </div>
    `;
});

document.querySelector('.pokemon-sidebar-container').innerHTML = pokenamesHtml;