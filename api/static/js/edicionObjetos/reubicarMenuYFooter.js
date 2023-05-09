function reubicarMenuYFooter(code, menu, footer){
    let arr = []
    arr.push(menu)
    for(u in code){
        for(e in code[u]){
            if(e != 'menu' && e != 'footer')
            arr.push(code[u])
        }
    }
    arr.splice((code.length - 2), 0, footer);
    //console.log(arr);
    return arr
}