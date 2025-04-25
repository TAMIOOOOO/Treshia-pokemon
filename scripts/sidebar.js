let sidebarHTML = '';

pokeNames.forEach((pokeNames) => {
    sidebarHTML += `
    <button class="js-opening-button" onclick="clicked(this)" 
    data-pokeNames-id="${pokeNames.id}"> 
    <img src="${pokeNames.image}" alt="">
    ${pokeNames.name}
    </button>
    `;
});
document.querySelector('.contents').innerHTML = sidebarHTML;



function clicked(button) {
    const id = button.getAttribute('data-pokeNames-id');
    const found = pokeNames.find(pokeNames => pokeNames.id === id);

    if (found) {
        document.querySelector('.card-container').innerHTML = `
        <div class="card-inner">
            <div class="card-front"><img src="${found.image}" alt="" /></div>
            <div class="card-back">
              <img class="back-image" src="${found.image}" alt="">
              <div class="names-baliwRating">
                <h3>Name: ${found.name}</h3>
                <h3>Baliw Rating: ${found.baliwRating}</h3>
              </div>
              </div>
            </div>
          </div>
      `;
    } else {
        document.querySelector('.card-inner').innerHTML = `<p>Pokemon not found.</p>`;
    }
    
}
