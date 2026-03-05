let fator = 0.2

function brilho(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p = imageLab.image1.getPixel(x, y)
            p.r = p.r * fator
            if(p.r > 255) p.r = 255
            p.g = p.g * fator
            if(p.g > 255) p.g = 255
            p.b = p.b * fator
            if(p.b > 255) p.b = 255
            imageLab.image2.setPixel(x,y,p)
        }
    }
    imageLab.image2.refresh()
}

export default brilho