const pokemonPanel = document.querySelector('#pokemon-panel');
const apiStatus = document.querySelector('#api-status');
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const renderPokemon = (pokemon) => {
    const types = pokemon.types
        .map(({ type }) => `<span class="type-badge">${formatName(type.name)}</span>`)
        .join('');
    const abilities = pokemon.abilities
        .map(({ ability }) => formatName(ability.name))
        .join(', ');
    const stats = pokemon.stats
        .map(({ base_stat: value, stat }) => `
            <div class="stat-row">
                <span>${formatName(stat.name)}</span>
                <strong>${value}</strong>
                <div class="stat-bar"><span style="width: ${Math.min(value, 100)}%"></span></div>
            </div>
        `)
        .join('');

    pokemonPanel.innerHTML = `
        <div class="pokemon-visual">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Ilustração do ${formatName(pokemon.name)}">
            <span class="pokemon-number">#${String(pokemon.id).padStart(3, '0')}</span>
        </div>
        <div class="pokemon-details">
            <div class="pokemon-title">
                <h2>${formatName(pokemon.name)}</h2>
                <div class="type-list">${types}</div>
            </div>
            <div class="pokemon-info">
                <div><span>Altura</span><strong>${(pokemon.height / 10).toFixed(1)} m</strong></div>
                <div><span>Peso</span><strong>${(pokemon.weight / 10).toFixed(1)} kg</strong></div>
                <div><span>Habilidades</span><strong>${abilities}</strong></div>
            </div>
            <div class="stats-list">
                <h3>Estatísticas base</h3>
                ${stats}
            </div>
        </div>
    `;
    apiStatus.textContent = 'API conectada';
    apiStatus.classList.add('is-connected');
};

fetch(pokemonUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Não foi possível carregar os dados.');
        }
        return response.json();
    })
    .then(renderPokemon)
    .catch(() => {
        apiStatus.textContent = 'Falha na conexão';
        pokemonPanel.innerHTML = '<p class="error-message">Não foi possível carregar o Pokémon agora. Tente novamente mais tarde.</p>';
    });
