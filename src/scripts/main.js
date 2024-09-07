import "../css/reset.css"
import "../css/style.css"

import { formCard } from "./formCard.js"
import { renderer } from "./renderer.js"
import { parallaxFX } from "./parallaxFx.js"

renderer(formCard());
parallaxFX();
