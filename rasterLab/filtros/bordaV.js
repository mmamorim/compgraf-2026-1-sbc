let limiar = 15

function bordaV(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p1 = imageLab.image1.getPixel(x, y)
            let mono1 = parseInt((p1.r + p1.g + p1.b) / 3)
            let p2 = imageLab.image1.getPixel(x, y + 1)
            let mono2 = parseInt((p2.r + p2.g + p2.b) / 3)
            let variacao = Math.abs(mono1 - mono2)
            if (variacao > limiar) {
                imageLab.image2.setPixel(x, y, { r: 255, g: 255, b: 255, a: 255 })
            } else {
                imageLab.image2.setPixel(x, y, { r: 0, g: 0, b: 0, a: 255 })
            }
        }
    }
    imageLab.image2.refresh()
}

export default bordaV