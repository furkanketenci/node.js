import express from 'express';
import fs from "fs";

const router = express.Router();

// fs kütüphanesi build-in olarak gelir. Bu kütüphane ile "dosya işlemlerini" yapıyoruz.
// readdirSync : bir director vereceğim sana bu director'u senkronize(işlem bitmeden alt satıra geçme) bir şekilde oku demek.

let routes = fs.readdirSync("./routes") // routes içerisinde olduğu için bulunduğumuz klasörü oku diyoruz.


// for (let route of routes) {
//     if (route.includes(".js") && route != "index.js") {
//         router.use("/" + route.replace(".js", ""), require("./" + route))
//     }
// }

for (let route of routes) {
    if (route.includes(".js") && route !== "index.js") {
        import(`./${route}`)
            .then((module) => {
                router.use("/" + route.replace(".js", ""), module.default);
            })
            .catch((err) => console.error(`Error loading route ${route}:`, err));
    }
}




export default router;
