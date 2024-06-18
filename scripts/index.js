import * as events from "./events.js";
import * as routes from "./routes.js"


export function start() {
    events.toggleScreen()
    routes.handle()
    window.onpopstate = () => routes.handle()
}