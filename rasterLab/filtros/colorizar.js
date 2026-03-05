let fatorR = 1.5
let fatorG = 1.5
let fatorB = 0.25


function colorizar(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    //let p = { r: 255, g: 255, b: 255, a: 255 }

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p = imageLab.image1.getPixel(x, y)
            p.r = p.r * fatorR
            if(p.r > 255) p.r = 255
            p.g = p.g * fatorG
            if(p.g > 255) p.g = 255
            p.b = p.b * fatorB
            if(p.b > 255) p.b = 255
            imageLab.image2.setPixel(x,y,p)
        }
    }
    imageLab.image2.refresh()
}

export default colorizar