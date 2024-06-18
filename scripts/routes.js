export const routes = {
    "/": "../pages/home.html",
    "/ouniverso": "../pages/universo.html",
    "/explorar": "../pages/explorar.html",
    404: "../pages/404.html"
}

export function handle() {
    const {pathname} = window.location
    const route = routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector("#app").innerHTML = html
    })
}

