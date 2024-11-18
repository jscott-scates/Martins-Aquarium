//import { fishList } from './fishList.js';
import { mostHolyFish } from './fishList.js';
import { soldierFish } from './fishList.js';
import { regularFish } from './fishList.js';
import { tipList } from './tipList.js';
import { locationList } from './locationList.js';


// Generate the fish list, commented out due to holyFish requirements.
//const fishHTML = fishList()
//let fishListInner = document.getElementById("fishList")
//fishListInner.innerHTML = fishHTML

// Generate the care tips
const tipHTML = tipList()
let tipListInner = document.getElementById("tipList")
tipListInner.innerHTML = tipHTML

// Generate the location list
const locationHTML = locationList()
let locationListInner = document.getElementById("locationList")
locationListInner.innerHTML = locationHTML

// Render each HTML string to the correct DOM element

// Generate mostHolyFish list 
const thyHolyOnesHTML = mostHolyFish()
const thySoldierHTML = soldierFish()
const thyRegularHTML = regularFish()

let fishOrderInner = document.getElementById("fishList")
fishOrderInner.innerHTML = thyHolyOnesHTML + thySoldierHTML + thyRegularHTML