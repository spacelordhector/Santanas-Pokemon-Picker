document.querySelector('button').addEventListener('click', getPoke)
function getPoke() {
    let pokeChoice = document.querySelector('input').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeChoice}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.sprites.front_shiny
        })
        .catch(error => console.log(error))
}