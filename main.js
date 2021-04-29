function buscar(){
    var cep = document.getElementById("cep")
 
    $.ajax
    ({
        url: "https://viacep.com.br/ws/09580630/json/",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    })
}