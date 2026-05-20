# Curvas Bézier

Curvas Bézier são curvas matemáticas utilizadas para criar linhas suaves e formas complexas em computação gráfica.

Elas são amplamente utilizadas em:

- SVG;
- softwares de design;
- animações;
- modelagem;
- tipografia;
- interfaces gráficas;
- jogos;
- ilustrações vetoriais.

---

# Por Que Elas São Importantes?

Curvas Bézier permitem criar formas suaves utilizando poucos pontos de controle.

Em vez de desenhar milhares de pixels manualmente, o computador calcula a curva matematicamente.

Isso torna:

- desenhos mais leves;
- curvas mais suaves;
- imagens escaláveis;
- formas fáceis de editar.

---

# Conceito Básico

Uma curva Bézier possui:

- ponto inicial;
- ponto final;
- pontos de controle.

Os pontos de controle “puxam” a curva, definindo sua direção e suavidade.

---

# Curva Bézier Quadrática

Utiliza:

- 1 ponto de controle.

Exemplo SVG:

~~~html
<svg width="400" height="200">

  <path
    d="M 50 150
       Q 200 20, 350 150"
    stroke="blue"
    stroke-width="4"
    fill="none"
  />

</svg>
~~~

---

# Explicando os Comandos

## M

~~~text
M 50 150
~~~

Move o cursor para o ponto inicial.

---

## Q

~~~text
Q 200 20, 350 150
~~~

Cria uma curva quadrática.

Parâmetros:

- ponto de controle:
  
~~~text
200 20
~~~

- ponto final:
  
~~~text
350 150
~~~

---

# Curva Bézier Cúbica

A curva cúbica utiliza:

- 2 pontos de controle.

Isso permite curvas mais complexas e suaves.

Exemplo:

~~~html
<svg width="400" height="200">

  <path
    d="M 50 150
       C 120 20, 280 20, 350 150"
    stroke="red"
    stroke-width="4"
    fill="none"
  />

</svg>
~~~

---

# Estrutura do Comando C

~~~text
C controle1X controle1Y,
  controle2X controle2Y,
  finalX finalY
~~~

Exemplo:

~~~text
C 120 20, 280 20, 350 150
~~~

---

# Visualmente

A curva:

- começa no ponto inicial;
- é “puxada” pelos pontos de controle;
- termina no ponto final.

Os pontos de controle normalmente não ficam sobre a curva, mas influenciam sua direção e intensidade.

---

# Uso em SVG

Curvas Bézier são usadas para criar:

- logos;
- ondas;
- formas orgânicas;
- ícones;
- desenhos complexos;
- caminhos de animação;
- arte generativa.

---

# Exemplo com Múltiplas Curvas

~~~html
<svg width="500" height="250">

  <path
    d="M 50 150
       C 120 50, 180 50, 250 150
       C 320 250, 380 250, 450 150"
    stroke="black"
    stroke-width="4"
    fill="none"
  />

</svg>
~~~

---

# Curiosidade

Softwares como:

- Adobe Illustrator;
- Figma;
- Inkscape;
- CorelDRAW;

utilizam curvas Bézier internamente para praticamente todos os desenhos vetoriais.

---

# Conclusão

Curvas Bézier são uma das bases da computação gráfica moderna.

Elas permitem criar formas suaves e complexas utilizando matemática, tornando possível desenvolver imagens vetoriais leves, escaláveis e altamente editáveis.

```