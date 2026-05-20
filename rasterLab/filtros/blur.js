let fator = 0.5

function getMonoPixelValue(image, x, y) {
    let p = image.getPixel(x, y)
    let media = Math.floor((p.r + p.g + p.b) / 3);
    return media
}

function mediaMatriz(imageLab, x, y) {
    let soma = 0
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    let imageSrc = imageLab.image2

    if (x - 1 > 0 && y - 1 > 0) {
        //let pixel = imageSrc.getPixel(x - 1, y - 1)
        //soma = soma + pixel.r
        soma = soma + getMonoPixelValue(imageSrc, x - 1, y - 1)
    }
    if (y - 1 > 0) {
        //let pixel = imageSrc.getPixel(x, y - 1)
        //soma = soma + 2 * pixel.r
        soma = soma + 2 * getMonoPixelValue(imageSrc, x, y - 1)
    }
    if (x + 1 <= w && y - 1 > 0) {
        //let pixel = imageSrc.getPixel(x + 1, y - 1)
        //soma = soma + pixel.r
        soma = soma + getMonoPixelValue(imageSrc, x + 1, y - 1)
    }
    if (x - 1 > 0) {
        //let pixel = imageSrc.getPixel(x - 1, y)
        //soma = soma + 2 * pixel.r
        soma = soma + 2 * getMonoPixelValue(imageSrc, x - 1, y)
    }
    //let pixel = imageSrc.getPixel(x, y)
    //soma = soma + 4 * pixel.r
    soma = soma + 4 * getMonoPixelValue(imageSrc, x, y)
    if (x + 1 <= w) {
        //let pixel = imageSrc.getPixel(x + 1, y)
        //soma = soma + 2 * pixel.r
        soma = soma + 2 * getMonoPixelValue(imageSrc, x + 1, y)
    }
    if (x - 1 > 0 && y + 1 <= h) {
        //let pixel = imageSrc.getPixel(x - 1, y + 1)
        //soma = soma + pixel.r
        soma = soma + getMonoPixelValue(imageSrc, x - 1, y + 1)
    }
    if (y + 1 <= h) {
        //let pixel = imageSrc.getPixel(x, y + 1)
        //soma = soma + 2 * pixel.r
        soma = soma +  2 * getMonoPixelValue(imageSrc, x, y + 1)
    }
    if (x + 1 <= w && y + 1 <= h) {
        //let pixel = imageSrc.getPixel(x + 1, y + 1)
        //soma = soma + pixel.r
        soma = soma + getMonoPixelValue(imageSrc, x + 1, y + 1)
    }
    return parseInt(soma / 16)
}


function blur(imageLab) {

    //    for (let y = 1; y <= imageLab.image1.height; y++) {
    //        for (let x = 1; x <= imageLab.image1.width; x++) {
    //            let pixel = imageLab.image1.getPixel(x, y)
    //
    //            let { r, g, b } = pixel
    //            let media = (r + g + b) / 3
    //            let pixel2 = {
    //                r: media,
    //                g: media,
    //                b: media,
    //                a: 255
    //            }
    //            imageLab.image2.setPixel(x, y, pixel2)
    //        }
    //    }
    //    imageLab.image2.refresh()

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image2.getPixel(x, y)
            let media = mediaMatriz(imageLab, x, y)
            let pixel2 = {
                r: media,
                g: media,
                b: media,
                a: 255
            }
            imageLab.image1.setPixel(x, y, pixel2)
        }
    }
    imageLab.image1.refresh()
}

export default blur