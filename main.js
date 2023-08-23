// const obj = {
//     name: "Aijana",
//     age: 19
// }

// const infoaboutMeJSON = JSON.stringify(obj)

// const infoaboutMEObject = JSON.parse(infoaboutMeJSON)
// console.log(infoaboutMEObject);

// const button = document.querySelector('.btn')


const wrapper = document.querySelector('.wrapper')

const request = new XMLHttpRequest()

request.open('GET', 'data.json')
request.setRequestHeader("Content-type", "application/json")
request.send()

request.addEventListener('load', () => {
    const data = JSON.parse(request.response)

    data.map((character) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const characterName = document.createElement('h2');
        const characterAge = document.createElement('p');
        const characterImg = document.createElement('img');
        const CharacterDescr = document.createElement("p")

        CharacterDescr.classList.add('description')

        characterName.textContent = character.name;
        characterAge.textContent = `Возраст: ${character.age}`;
        characterImg.src = character.img;
        CharacterDescr.textContent = character.description

        card.append(characterName, characterAge, characterImg, CharacterDescr);
        wrapper.appendChild(card);

        console.log(character);
    })

})


