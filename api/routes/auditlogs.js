import express from "express";
const router = express.Router();

// Aşağıda bir tane endpoint oluşturalım
// req objesi --> Bize gönderilen isteğin içerisinde bulunan "body" ve "header" 'ı barındırır.
// res objesi --> request'e(isteğe) vereceğimiz cevapları barındırıyor.
// next objesi --> İşlemi bitir bir sonraki router'a git demek oluyor.
router.get("/", (req, res, next) => {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    })

})



export default router