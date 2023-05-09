function hexToRgba(hex, transparencia) {
    //console.log(`llega transparencia: ${transparencia}`);
    transparencia = parseInt(transparencia)/10
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    //console.log(`sale: rgba(${r}, ${g}, ${b}, ${transparencia.toFixed(1)})`);
    return `rgba(${r}, ${g}, ${b}, ${transparencia.toFixed(1)})`;
}