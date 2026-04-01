import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import clonar from "./filtros/clonar.js";
import colorizar from "./filtros/colorizar.js";
import brilho from "./filtros/brilho.js";
import monocromatico from "./filtros/monocromatico.js";
import sepia from "./filtros/sepia.js";
import flipV from "./filtros/flipV.js";
import flipH from "./filtros/flipH.js";
import flipVH from "./filtros/flipVH.js";
import rotaciona90 from "./filtros/rotaciona90.js";
import escala from "./filtros/escala.js";
import rotacionar from "./filtros/rotacionar.js";
import histograma from "./filtros/histograma.js";
import histogramaNorm from "./filtros/histogramaNorm.js";

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'CLONAR', method: clonar },
    { label: 'BRILHO', method: brilho },
    { label: 'COLORIZAR', method: colorizar },
    { label: 'MONOCROMATICO', method: monocromatico },
    { label: 'SEPIA', method: sepia },
    { label: 'FLIP-V', method: flipV },
    { label: 'FLIP-H', method: flipH },
    { label: 'FLIP-VH', method: flipVH },
    { label: 'ROTACIONA90', method: rotaciona90 },
    { label: 'ESCALA', method: escala },
    { label: 'ROTAÇÃO', method: rotacionar },
    { label: 'HISTOGRAMA', method: histograma },
    { label: 'HISTOGRAMA NORMALIZADO', method: histogramaNorm },
])

