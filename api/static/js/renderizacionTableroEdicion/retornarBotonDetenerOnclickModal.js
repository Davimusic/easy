function retornarBotonDetenerOnclickModal(){
    let color = 'red'
    if(detenerOnclickModal == 'no'){
        color = 'green'
    }
    return `<button type="button" id='cambiarEditar' onclick="eventoUnico(this.id, 'DetenerOnclickModal()')" style='border-radius: 50%; color: white; background: ${color}; width: 25px; height: 25px; border: none;'><img style="width: 25px; height: 25px;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1671157067/mias/esa_besl3z.png" alt="editar pagina web"></button>`
}