function mapa(){
    let alto = window.innerHeight, ancho = window.innerWidth;

    let cod = `
    <div style="display: block; position: relative;">
        ${retornarModalObjetos(id)}
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="${ancho}" height="${alto}" id="gmap_canvas" src="https://maps.google.com/maps?q=colombia,%20san%20gil,%20kr%2021%20n.%2011%20-%2005&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://fmovies-online.net">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:${alto}px;width:${ancho}px;}</style>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                <style>.gmap_canvas {overflow:hidden;background:none!important;height:${alto}px;width:${ancho}px;}</style>    
            </div>
        </div>
    </div>
    `
    console.log(`window.innerHeight: ${window.innerHeight}, window.innerWidth: ${window.innerWidth}`);
    return cod
}