let sidebarHTML = '';

pokeNames.forEach((pokeNames) => {
    sidebarHTML += `
    <button> <img src="${pokeNames.image}" alt="">${pokeNames.name}</button>
    `;
});

document.querySelector('.contents').innerHTML = sidebarHTML;

let mainCard = '';

pokeNames.forEach((pokeNames) => {
    mainCard += `
    
    `;
});