//Procurar o botão
  document.querySelector("#add_time").addEventListener('click',cloneField)
//Executar uma açao
    function cloneField(){
    //Duplicar os campos
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
        const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
        fields.forEach(function (field) {
            field.value = ""
        });

    //Colocar na página
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

