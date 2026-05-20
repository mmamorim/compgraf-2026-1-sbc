
//const kernel = [
//    [ 1, 2, 1 ],
//    [ 2, 4, 2 ],
//    [ 1, 2, 1 ]
//]

const kernel = [
    [ 1, 4, 7, 4, 1 ],
    [ 4, 16, 26, 16, 4 ],
    [ 7, 26, 41, 26, 7 ],
    [ 4, 16, 26, 16, 4 ],
    [ 1, 4, 7, 4, 1 ]
]

const kSize = 5

function gaussianBlur(imageLab) {
    let Image1 = imageLab.image1
    let Image2 = imageLab.image2

    const width = Image1.width;
    const height = Image1.height;
    const k = Math.floor(kSize / 2);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let r = 0, g = 0, b = 0, a = 0;
            let weightSum = 0;

            for (let i = -k; i <= k; i++) {
                for (let j = -k; j <= k; j++) {
                    const px = x + i;
                    const py = y + j;

                    if (px >= 0 && px < width && py >= 0 && py < height) {
                        const pixel = Image1.getPixel(px, py);
                        const weight = kernel[i + k][j + k];
                        r += pixel.r * weight;
                        g += pixel.g * weight;
                        b += pixel.b * weight;
                        a += pixel.a * weight;
                        weightSum += weight;
                    }
                }
            }

            // Normaliza
            r /= weightSum;
            g /= weightSum;
            b /= weightSum;
            a /= weightSum;

            Image2.setPixel({r, g, b, a}, x, y);
        }
    }
    imageLab.image2.refresh()
}

export default gaussianBlur