import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = " ";

    for (const fish of database.fish) { //original issue was due to not passing in database and using "fishes or fish"
        fishHTML += `
            <article class ="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image"/>
                <div class="fish_details">
                    <h2 class="fish_species">${fish.species}</h2>
                    <p class="fish_description">${fish.name} is a ${fish.species} native to ${fish.location}. ${fish.species} have a(n) ${fish.diet} diet.</p>
                </div>
            </article>
        `
    };
    return fishHTML
};

//Return an array of fish species that are multiples of 3 in length

export const mostHolyFish = () => {
    let holyFish = ''
    for (const fish of database.fish) {
        if(fish.length % 3 === 0){
            holyFish += `
            <article class ="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image"/>
                <div class="fish_details">
                    <h2 class="fish_species">${fish.species}</h2>
                    <p class="fish_description">${fish.name} is a ${fish.species} native to ${fish.location}. ${fish.species} have a(n) ${fish.diet} diet.</p>
                </div>
            </article>
            `
        }
    } return holyFish
}

//console.log(mostHolyFish()) //test to make sure the correct fish were being passed through.

//Return an array of fish species that are multiples of 5 in length
export const soldierFish = () => {
    let soldiers = ''
    for (const fish of database.fish) {
        if(fish.length % 5 === 0){
            soldiers += `
            <article class ="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image"/>
                <div class="fish_details">
                    <h2 class="fish_species">${fish.species}</h2>
                    <p class="fish_description">${fish.name} is a ${fish.species} native to ${fish.location}. ${fish.species} have a(n) ${fish.diet} diet.</p>
                </div>
            </article>
        `
        }
    } return soldiers
}
//console.log(soldierFish()) test to make suer the correct fish were being passed through as an array


//Return an array of all other fish that do not meet the 3 or 5 multiples
export const regularFish = () => {
    let plainJaneFish = ''
    for (const fish of database.fish) {
        if(fish.length % 5 !== 0 && fish.length % 3 !== 0){
            plainJaneFish +=`
            <article class ="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image"/>
                <div class="fish_details">
                    <h2 class="fish_species">${fish.species}</h2>
                    <p class="fish_description">${fish.name} is a ${fish.species} native to ${fish.location}. ${fish.species} have a(n) ${fish.diet} diet.</p>
                </div>
            </article>
            `
        }
    } return plainJaneFish
}
//console.log(regularFish()) test to make sure that the remaining fish are listed. 