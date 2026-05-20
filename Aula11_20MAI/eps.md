# EPS — Encapsulated PostScript

EPS (Encapsulated PostScript) é um formato de imagem vetorial baseado na linguagem PostScript, desenvolvido pela Adobe.

Diferente de imagens tradicionais compostas por pixels, arquivos EPS descrevem matematicamente os elementos gráficos utilizando comandos textuais.

Esse formato foi muito utilizado em:

- impressão gráfica;
- editoras;
- design profissional;
- logotipos;
- ilustrações vetoriais;
- gráficas e sistemas de publicação.

---

# Características do EPS

- baseado em texto;
- utiliza comandos de desenho;
- suporta imagens vetoriais;
- pode ser ampliado sem perda de qualidade;
- muito utilizado em impressão profissional.

---

# EPS vs SVG

## EPS

- focado em impressão;
- utiliza linguagem PostScript;
- mais antigo;
- menos utilizado na web.

## SVG

- focado em aplicações web;
- utiliza XML;
- pode ser manipulado com JavaScript e CSS;
- mais utilizado atualmente em interfaces e páginas web.

---

# Exemplo Simples de Arquivo EPS

O exemplo abaixo desenha:

- um quadrado azul;
- um círculo vermelho.

Copie o conteúdo abaixo para um arquivo chamado:

~~~text
exemplo.eps
~~~

---

~~~postscript
%!PS-Adobe-3.0 EPSF-3.0
%%BoundingBox: 0 0 300 300

% Fundo branco
1 1 1 setrgbcolor
0 0 300 300 rectfill

% Quadrado azul
0 0 1 setrgbcolor
50 50 100 100 rectfill

% Circulo vermelho
1 0 0 setrgbcolor
newpath
200 200 40 0 360 arc
fill

showpage
~~~

---

# Explicando Alguns Comandos

## Cor RGB

~~~postscript
0 0 1 setrgbcolor
~~~

Define a cor azul.

---

## Retângulo

~~~postscript
50 50 100 100 rectfill
~~~

Desenha um retângulo preenchido.

Parâmetros:

- posição x;
- posição y;
- largura;
- altura.

---

## Círculo

~~~postscript
200 200 40 0 360 arc
~~~

Cria um círculo.

Parâmetros:

- posição x;
- posição y;
- raio;
- ângulo inicial;
- ângulo final.

---

# Observação

Arquivos EPS normalmente são visualizados em:

- Adobe Illustrator;
- Ghostscript;
- Inkscape;
- softwares gráficos e de impressão.

Hoje, SVG é mais comum para aplicações web, mas EPS continua importante em fluxos gráficos profissionais e impressão de alta qualidade.

```