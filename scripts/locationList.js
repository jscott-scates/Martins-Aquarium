import { database } from './aquariumData.js';

export const locationList = () => {
    let locationListHTML = ``;
    
    for (const location of database.locations) {
        locationListHTML += `
            <article class="location">
                <div class="location_details">
                    <h2 class="location_name">${location.name}</h2>
                    <p class="location_description"> Located near ${location.country}, ${location.description}</p>
                </div>
            </article>
        `
    }
    return locationListHTML
}
