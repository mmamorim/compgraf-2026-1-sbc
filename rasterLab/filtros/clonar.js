
function clonar(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let p = imageLab.image2.getPixel(x, y)
            imageLab.image1.setPixel(x,y,p)
        }
    }
    imageLab.image1.refresh()
}

export default clonar