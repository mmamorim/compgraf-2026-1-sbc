<img src="/assets/teste.svg" width="100%">

# Aula 9 - 22/04/2026

## Filtro Gaussiano (Blur)

O filtro Gaussiano é um algoritmo clássico de suavização (blur) em processamento de imagens. Ele funciona aplicando uma máscara (kernel) derivada da função Gaussiana em cada pixel, substituindo o valor do pixel por uma média ponderada dos seus vizinhos.


### Kernel Gaussiano

O **kernel Gaussiano** é uma matriz de pesos usada para suavizar imagens.  
Ele aplica a função Gaussiana bidimensional, dando **mais peso ao pixel central** e menos aos vizinhos, produzindo um efeito de **blur suave**.

---

#### 🔹 Kernel 3x3 (σ ≈ 1)

$$
\frac{1}{16}
\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 2 \\
1 & 2 & 1
\end{bmatrix}
$$

Pequeno, rápido de aplicar, usado para suavização leve.

---

#### 🔹 Kernel 4x4 (exemplo normalizado)

$$
\frac{1}{100}
\begin{bmatrix}
1 & 3 & 3 & 1 \\
3 & 9 & 9 & 3 \\
3 & 9 & 9 & 3 \\
1 & 3 & 3 & 1
\end{bmatrix}
$$

Mais vizinhos considerados, produz um **blur moderado**.

---

#### 🔹 Kernel 5x5 (σ ≈ 1.4)

$$
\frac{1}{273}
\begin{bmatrix}
1 & 4 & 7 & 4 & 1 \\
4 & 16 & 26 & 16 & 4 \\
7 & 26 & 41 & 26 & 7 \\
4 & 16 & 26 & 16 & 4 \\
1 & 4 & 7 & 4 & 1
\end{bmatrix}
$$

Mais amplo, gera **suavização forte** e redução de ruído, mas com maior custo computacional.


~~~js
function gaussianBlur(Image1, Image2, kernel, kSize) {
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
}
~~~