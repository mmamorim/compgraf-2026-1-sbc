# PDF — Portable Document Format

PDF (Portable Document Format) é um formato de documento desenvolvido pela Adobe com o objetivo de permitir que arquivos sejam visualizados da mesma forma em qualquer dispositivo ou sistema operacional.

O PDF pode armazenar:

- textos;
- imagens;
- gráficos;
- tabelas;
- fontes;
- elementos vetoriais;
- links;
- formulários;
- páginas completas formatadas.

---

# Características do PDF

- mantém a formatação original do documento;
- funciona em diferentes sistemas operacionais;
- suporta imagens rasterizadas e vetoriais;
- muito utilizado para impressão e compartilhamento;
- pode conter múltiplas páginas;
- suporta alta qualidade gráfica.

---

# PDF e Imagens Vetoriais

Uma das grandes vantagens do PDF é que ele pode armazenar elementos vetoriais.

Isso significa que:

- textos permanecem nítidos;
- gráficos podem ser ampliados sem perda de qualidade;
- diagramas e ilustrações mantêm precisão visual.

Por isso PDFs são muito utilizados em:

- artigos científicos;
- apostilas;
- livros;
- relatórios;
- impressão gráfica;
- documentos profissionais.

---

# PDF vs Imagens Rasterizadas

## PNG / JPG

- compostos por pixels;
- perdem qualidade ao ampliar;
- melhores para fotografias.

## PDF

- pode combinar pixels e vetores;
- suporta múltiplas páginas;
- mantém qualidade de impressão;
- ideal para documentos completos.

---

# Estrutura do PDF

Internamente, arquivos PDF armazenam:

- objetos;
- páginas;
- fontes;
- imagens;
- comandos gráficos;
- instruções de renderização.

Apesar de possuir partes textuais, PDFs são formatos estruturados e geralmente não são editados manualmente.

---

# Exemplo Simplificado de Estrutura PDF

Um PDF real é bastante complexo, mas internamente possui estruturas parecidas com:

~~~text
%PDF-1.4

1 0 obj
<< /Type /Catalog >>
endobj

2 0 obj
<< /Type /Page >>
endobj
~~~

Essas estruturas definem:

- páginas;
- objetos;
- fontes;
- gráficos;
- conteúdo do documento.

---

# Softwares Comuns

Arquivos PDF podem ser abertos em:

- Adobe Acrobat Reader;
- navegadores web;
- Foxit Reader;
- Preview (macOS);
- leitores de PDF em dispositivos móveis.

---

# Curiosidade

Muitos PDFs modernos misturam:

- texto vetorial;
- imagens rasterizadas;
- gráficos;
- elementos interativos.

Por isso o formato se tornou um dos padrões mais utilizados do mundo para distribuição de documentos digitais.


---

# Exemplo Mínimo de PDF em Texto

O conteúdo abaixo pode ser copiado para um arquivo chamado:

~~~text
exemplo.pdf
~~~

Apesar de simplificado, alguns leitores PDF conseguem abrir corretamente.

---

~~~text
%PDF-1.1

1 0 obj
<< /Type /Catalog
   /Pages 2 0 R
>>
endobj

2 0 obj
<< /Type /Pages
   /Kids [3 0 R]
   /Count 1
>>
endobj

3 0 obj
<< /Type /Page
   /Parent 2 0 R
   /MediaBox [0 0 300 144]
   /Contents 4 0 R
>>
endobj

4 0 obj
<< /Length 55 >>
stream
BT
/F1 24 Tf
100 100 Td
(Olá PDF!) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f
trailer
<< /Root 1 0 R
   /Size 5
>>
startxref
0
%%EOF
~~~

---

# O Que Esse PDF Faz?

Esse exemplo:

- cria uma página;
- escreve o texto:
  
~~~text
Olá PDF!
~~~

- utiliza comandos internos do formato PDF.

---

# Observação

PDFs reais normalmente possuem:

- compressão;
- fontes;
- imagens;
- tabelas;
- referências complexas;
- offsets corretos.

Por isso geralmente são gerados automaticamente por softwares e bibliotecas, e não escritos manualmente.

