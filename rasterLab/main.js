import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import clonar from "./filtros/clonar.js";
import colorizar from "./filtros/colorizar.js";
import brilho from "./filtros/brilho.js";
import monocromatico from "./filtros/monocromatico.js";
import sepia from "./filtros/sepia.js";

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'CLONAR', method: clonar },
    { label: 'BRILHO', method: brilho },
    { label: 'COLORIZAR', method: colorizar },
    { label: 'MONOCROMATICO', method: monocromatico },
    { label: 'SEPIA', method: sepia },
])

