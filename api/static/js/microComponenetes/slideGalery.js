function slideGalery(id, eventosContenedor, clases, estilosGenerales, dicc){

    let arr = dicc['linkSlideGalery']
                let textArr = '', texto = ''
                for (let u = 0; u < arr.length; u++) {
                    textArr += arr[u][0] + '&'
                    texto += arr[u][1] + '&'
                }

    let estilosImagenes = dicc['styleImagenes'], textEstilosImagenes = ''
    for (let u = 0; u < (estilosImagenes.length - 1); u++) {
        for (let e = 1; e < estilosImagenes[u].length; e++) {
            textEstilosImagenes += estilosImagenes[u][e] + '; '
        }
    }
    
    estilosGenerales = buscarCaracterParaReemplazar(estilosGenerales, '`', `'`)
    
    return `<div style="display: block; position: relative; width: 100%;">
                ${retornarModalObjetos(id)}
                ${objetoSlideGalery(id, textArr, texto, eventosContenedor, estilosGenerales, clases, textEstilosImagenes, estilosImagenes[2][1], dicc['eventosImagenes'], dicc)}
            </div>`
}