
import countries from "./countries.json";


export function getFlag(country=""){
    
    const filteredCountry = countries.find(nation=> nation.name.toLowerCase() === country.toLowerCase())
    // console.log(filteredCountry)
    return filteredCountry?.emoji || "🇮🇳"
}

