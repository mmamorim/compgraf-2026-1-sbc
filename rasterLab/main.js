import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'


console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'label', method: func },
])

