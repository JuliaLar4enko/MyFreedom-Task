export function getDirectionByDegree(deg) {
    if (deg >= 22 && deg < 78) {
        return "North-West";
    } else if (deg >= 78 && deg < 112) {
        return "West";
    } else if (deg >= 112 && deg < 157) {
        return "South-West";
    } else if (deg >= 157 && deg < 202) {
        return "South";
    } else if (deg >= 202 && deg < 247) {
        return "South-East";
    } else if (deg >= 247 && deg < 292) {
        return "East";
    } else if (deg >= 292 && deg < 337) {
        return "North-East";
    } else {
        return "North";
    }
}

export function calculateKelvinInCelsius(temp) {
    return Math.round(temp - 273.15);
}