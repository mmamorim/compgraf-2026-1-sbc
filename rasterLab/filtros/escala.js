
function escala(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    let fatorW = 0.65
    let fatorH = 0.65
    let wDest = parseInt(w / fatorW)
    let hDest = parseInt(h / fatorH)
    if(wDest > w) wDest = w
    if(hDest > h) hDest = h

    // Para todo pixel da imagem
    for (let y = 1; y <= hDest; y++) {
        for (let x = 1; x <= wDest; x++) {
            let posX = parseInt(fatorW*x)
            let posY = parseInt(fatorH*y)
            let p = imageLab.image1.getPixel(posX, posY)
            imageLab.image2.setPixel(x,y,p)
        }
    }
    imageLab.image2.refresh()
}

export default escala