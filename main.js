$(document).ready(function(){
    //alert("ola mundo")
    $("header button").click(function(){
        $("form").slideDown();
    
        $("#btn_cancel").click(function(){
            $("form").slideUp();
        })
    })
    $("form").on("submit", function(e){
        e.preventDefault();
        const urlNovaImagem = $("#urlNovaImagem").val();
        const novoItem = $('<li style ="display:none;"></li>');
        $(`<img src="${urlNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay_imagem_link">
                <a href="${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real" >
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn();
        $("#urlNovaImagem").val("");
    })
})
