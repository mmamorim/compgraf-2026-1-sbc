<img src="/assets/teste.svg" width="100%">

# Imagens Vetoriais

Imagens vetoriais são imagens construídas a partir de formas matemáticas, como linhas, curvas, círculos e polígonos, em vez de pixels individuais.

Diferente de imagens rasterizadas, como JPG ou PNG, imagens vetoriais podem ser ampliadas ou reduzidas sem perda de qualidade, pois seus elementos são recalculados matematicamente pelo computador.

Esse tipo de imagem é muito utilizado em:

- logos;
- ícones;
- interfaces web;
- gráficos;
- ilustrações;
- mapas;
- animações;
- dashboards;
- elementos gráficos responsivos.

---

# Imagens Rasterizadas vs Vetoriais

## Rasterizadas (PNG, JPG, GIF)

São compostas por pixels.

Exemplo:

- fotografias;
- screenshots;
- imagens digitais tradicionais.

### Características

- perdem qualidade ao ampliar;
- dependem de resolução;
- ótimas para fotos;
- mais difíceis de editar estruturalmente.

---

## Vetoriais (SVG, AI, EPS, PDF)

São compostas por formas geométricas e instruções matemáticas.

### Características

- podem ser ampliadas infinitamente;
- mantêm nitidez;
- são leves para elementos gráficos simples;
- podem ser geradas por código;
- são facilmente editáveis.

---

# Formatos Vetoriais Mais Comuns

## SVG

* [svg.md](./svg.md)

Scalable Vector Graphics.

Formato vetorial mais utilizado na web atualmente.

Pode ser escrito diretamente em HTML/XML e manipulado com JavaScript e CSS.

Muito utilizado para:

- ícones;
- gráficos;
- animações;
- interfaces;
- arte generativa.

---

## AI

Formato do Adobe Illustrator.

Muito utilizado por designers gráficos para criação profissional de artes vetoriais.

---

## EPS 

* [eps.md](./eps.md)

Formato vetorial tradicional muito utilizado para impressão gráfica.

---

## PDF

* [pdf.md](./pdf.md)

Apesar de também suportar imagens rasterizadas, PDFs podem conter elementos vetoriais.

---

# Elementos SVG Mais Utilizados

## Rect

Cria retângulos.

~~~html
<rect x="10" y="10" width="100" height="50" />
~~~

---

## Circle

Cria círculos.

~~~html
<circle cx="50" cy="50" r="30" />
~~~

---

## Ellipse

Cria elipses.

~~~html
<ellipse cx="100" cy="50" rx="60" ry="30" />
~~~

---

## Line

Cria linhas.

~~~html
<line x1="0" y1="0" x2="100" y2="100" />
~~~

---

## Polygon

Cria polígonos.

~~~html
<polygon points="50,0 100,100 0,100" />
~~~

---

## Path

Elemento mais poderoso e flexível do SVG.

Permite criar curvas, desenhos complexos e formas personalizadas.

~~~html
<path d="M10 10 L100 100" />
~~~

---

## Text

Adiciona textos dentro do SVG.

~~~html
<text x="20" y="40">
Olá SVG
</text>
~~~

---

# Estilos Visuais

Os elementos SVG podem receber propriedades visuais como:

- fill → cor de preenchimento
- stroke → cor da borda
- stroke-width → espessura da borda
- opacity → transparência

Exemplo:

~~~html
<circle
  cx="50"
  cy="50"
  r="40"
  fill="blue"
  stroke="black"
  stroke-width="3"
  opacity="0.5"
/>
~~~

---

# SVG e Programação

Uma das maiores vantagens do SVG é que ele pode ser criado dinamicamente usando programação.

Isso permite:

- gerar gráficos automaticamente;
- criar animações;
- produzir arte generativa;
- desenvolver visualizações de dados;
- construir interfaces dinâmicas.

Com JavaScript, é possível modificar:

- posição;
- tamanho;
- cores;
- transparência;
- quantidade de elementos;
- animações.

---

# Conclusão

SVG combina matemática, design e programação.

Por isso, tornou-se uma das principais tecnologias gráficas da web moderna, sendo muito utilizado em aplicações interativas, interfaces responsivas e geração dinâmica de conteúdo visual.

