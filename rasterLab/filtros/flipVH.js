
function flipVH(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    // Para todo pixel da imagem
    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p = imageLab.image1.getPixel(x, y)
            imageLab.image2.setPixel(w-x,h-y,p)
        }
    }
    imageLab.image2.refresh()
}

export default flipVH