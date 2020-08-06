require('express')()
.get("/", (req, res) => {
    return res.send("HI from nlw")
})
.get("/study", (req,res) => {
    return res.send("Pagina study")
})
.listen(5500)
