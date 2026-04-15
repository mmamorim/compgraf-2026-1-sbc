<img src="/assets/teste.svg" width="100%">

# Aula 8 - 15/04/2026

## 📘 Detecção de Bordas — Computação Gráfica

## 🧠 O que são bordas?

Bordas são regiões de uma imagem onde ocorre uma **mudança abrupta de intensidade (cor ou brilho)**.  
Elas representam os **contornos dos objetos** e são fundamentais para interpretação visual.

> Bordas indicam onde um objeto começa ou termina na imagem.

---

## 🎯 Por que detectar bordas?

A detecção de bordas é uma etapa essencial em diversas aplicações:

- Reconhecimento de objetos  
- Visão computacional  
- Segmentação de imagens  
- Rastreamento de movimento  
- Processamento de imagens médicas  

---

## ⚙️ Conceito Matemático

A ideia principal é identificar **variações bruscas de intensidade** utilizando o conceito de gradiente.

### 📌 Gradiente da imagem

O gradiente mede a taxa de variação da intensidade:

∇f = (∂f/∂x, ∂f/∂y)


- **Direção:** indica a orientação da borda  
- **Magnitude:** indica a intensidade (força) da borda  

---

## 🧪 Principais Operadores de Detecção de Bordas

### 🔹 Operador de Sobel

Utiliza máscaras de convolução para detectar variações horizontais e verticais.

~~~txt
Gx = [-1 0 1
      -2 0 2
      -1 0 1]

Gy = [-1 -2 -1
      0 0 0
      1 2 1]
~~~


✔ Mais robusto a ruídos  
✔ Amplamente utilizado  

---

### 🔹 Operador de Prewitt

Semelhante ao Sobel, porém mais simples:

✔ Menor custo computacional  
✔ Menor precisão em detalhes finos  

---

### 🔹 Operador de Roberts

Baseado em diferenças diagonais:

✔ Simples e rápido  
⚠ Mais sensível a ruídos  

---

### 🔹 Detector de Canny

Um dos métodos mais eficientes para detecção de bordas.

#### Etapas:

1. Suavização (filtro Gaussiano)  
2. Cálculo do gradiente  
3. Supressão de não-máximos  
4. Limiarização com histerese  

✔ Bordas finas e bem definidas  
✔ Redução de ruído  

---

## 🔄 Processo Geral de Detecção

1. Converter a imagem para tons de cinza  
2. Aplicar filtro de detecção (Sobel, Canny, etc.)  
3. Calcular intensidade das bordas  
4. Aplicar limiar (threshold)  
5. Gerar imagem final com bordas destacadas  

---

## ⚠️ Desafios

- Sensibilidade a ruídos  
- Escolha do limiar adequado  
- Detecção de bordas falsas  
- Influência da iluminação  

---

## 💡 Observação Importante

Nem toda variação de intensidade representa uma borda relevante.  
Por isso, métodos mais avançados (como o Canny) buscam:

- Reduzir ruído  
- Detectar apenas bordas significativas  
- Evitar duplicidade de contornos  

---

## 🧩 Exemplos de Aplicação

- Detecção de objetos  
- Reconhecimento facial  
- Leitura de placas  
- Análise de imagens médicas  

---

## 📌 Resumo Final

A detecção de bordas é uma técnica fundamental em computação gráfica e visão computacional que permite identificar contornos de objetos por meio da análise de variações de intensidade na imagem. Ela é frequentemente utilizada como etapa inicial para tarefas mais complexas de processamento e interpretação de imagens.