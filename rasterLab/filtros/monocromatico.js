function monocromatico(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    for(let y=1; y <= h; y++) {
        for(let x=1; x <= w; x++) {
            let p = imageLab.image1.getPixel(x,y)
            let media = Math.floor((p.r + p.g + p.b) / 3); 
            let p2 = {
                r: media, g: media, b: media, a: 255
            }
            imageLab.image2.setPixel(x,y,p2)
        }
    }
    imageLab.image2.refresh()
}

export default monocromatico