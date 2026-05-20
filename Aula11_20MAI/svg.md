
# O que é SVG?

SVG é um formato de imagem baseado em código XML.

Diferente de imagens tradicionais como JPG ou PNG, no SVG as formas são descritas matematicamente.

Isso significa que:

- a imagem pode ser ampliada sem perder qualidade;
- elementos podem ser modificados facilmente;
- SVG funciona muito bem para web;
- é possível gerar imagens dinamicamente usando programação.

---

# Estrutura Básica

Um SVG normalmente começa assim:

~~~html
<svg width="300" height="200">

</svg>
~~~

Tudo que estiver dentro da tag `<svg>` fará parte do desenho.

---

# Elementos Básicos

## Retângulo

~~~html
<rect x="10" y="10" width="100" height="50" fill="blue" />
~~~

### Experimente:
- mudar a cor;
- alterar largura;
- mover posição.

---

## Círculo

~~~html
<circle cx="100" cy="100" r="40" fill="red" />
~~~

### Experimente:
- alterar o raio;
- mudar posição;
- trocar a cor.

---

## Linha

~~~html
<line x1="0" y1="0" x2="200" y2="100" stroke="black" />
~~~

### Experimente:
- mudar tamanho;
- alterar espessura usando:
  
~~~html
stroke-width="5"
~~~

---

## Texto

~~~html
<text x="50" y="50" font-size="30">
Olá SVG
</text>
~~~

### Experimente:
- trocar o texto;
- mudar tamanho;
- alterar cor.

---

# Exemplo Completo

~~~html
<svg width="400" height="200">

  <rect x="10" y="10" width="120" height="80" fill="orange" />

  <circle cx="250" cy="80" r="40" fill="blue" />

  <text x="120" y="170" font-size="24">
    Meu Primeiro SVG
  </text>

</svg>
~~~

---


# Materiais Complementares

## Documentação MDN (recomendado)

A MDN possui uma excelente documentação sobre SVG:

- https://developer.mozilla.org/pt-BR/docs/Web/SVG
- https://developer.mozilla.org/pt-BR/docs/Web/SVG/Tutorial

---

## SVG Playground Online

Ferramentas para testar SVG diretamente no navegador:

- https://www.svgviewer.dev/
- https://svgeditoronline.com/

---
