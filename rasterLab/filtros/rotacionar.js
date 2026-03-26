
function rotacionar(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            imageLab.image2.setPixel(x, y, { r: 255, g: 255, b: 255, a: 255 })
        }
    }

    let angle = Math.PI / 4
    let seno = Math.sin(-angle)
    let cosseno = Math.cos(-angle)
    let dx = w / 2
    let dy = h / 2

    for (let y = 1; y <= h; y++) {
        for (let x = 1; x <= w; x++) {
            let x1 = x + dx
            x1 = parseInt(x * cosseno - y * seno)
            x1 =  x1 - dx/2
            let y1 = y - dy
            y1 = parseInt(x * seno + y * cosseno)
            y1 = y1 + dy
            //console.log(x1,y1);
            if (x1 < 0 || x1 > w || y1 < 0 || y1 > h) {

            } else {
                let p = imageLab.image1.getPixel(x1, y1)
                imageLab.image2.setPixel(x, y, p)
            }
        }
    }
    imageLab.image2.refresh()
}

export default rotacionar