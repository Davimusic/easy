function video(aa, link, dicc){
    //console.log(`entrada video, aa: ${aa}, link: ${link}`);
    let cod = "";
    cod = `
    <div style="display: block; position: relative;">
        ${retornarModalObjetos(dicc['id'][0])}
        <video ${aa} controls>
            <source src="${link}" type="video/mp4">
        </video>
    </div>
    `
    return cod;
}