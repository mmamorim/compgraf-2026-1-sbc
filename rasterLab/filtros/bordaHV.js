let limiar = 15

function bordaHV(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p1 = imageLab.image1.getPixel(x, y)
            let mono1 = parseInt((p1.r + p1.g + p1.b) / 3)
            let p2 = imageLab.image1.getPixel(x + 1, y)
            let mono2 = parseInt((p2.r + p2.g + p2.b) / 3)
            let p3 = imageLab.image1.getPixel(x, y + 1)
            let mono3 = parseInt((p3.r + p3.g + p3.b) / 3)
            let variacao1 = Math.abs(mono1 - mono2)
            let variacao2 = Math.abs(mono1 - mono3)
            if (variacao1 > limiar || variacao2 > limiar) {
                imageLab.image2.setPixel(x, y, { r: 255, g: 255, b: 255, a: 255 })
            } else {
                imageLab.image2.setPixel(x, y, { r: 0, g: 0, b: 0, a: 255 })
            }
        }
    }
    imageLab.image2.refresh()
}

export default bordaHV