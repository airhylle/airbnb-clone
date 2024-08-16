import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"

export const fontAwesomeIcons: IconDefinition[] = [
    faAirbnb,
    faUser
]

// file to optimize which icon are going to be imported in the application
// too keep bundle size small as font awesome has lots of icons
// 