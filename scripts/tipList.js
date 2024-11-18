import { database } from './aquariumData.js'; //imports the database data that was exported originally.

export const tipList = () => {
    //generate HTML representation of tips using .innerHTML
    
    let tipListHTML = `<ul class="tips">`;  //set the variable that the html formatted product of the tipList() can be saved and returned.

    for (const tip of database.tips) {  //access the database.tips to reference what you need specifically.
        tipListHTML += `
            <h2>${tip.topic}</h2>
            <li class="tis">${tip.text}</li>
        `

    };
    tipListHTML += `</ul>`
    return tipListHTML

    
}
