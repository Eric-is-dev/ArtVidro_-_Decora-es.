// Exemplo simples de interação com o usuário
document.getElementById('btn-contact').addEventListener('click', function() {
    alert('Obrigado por entrar em contato conosco! Responderemos em breve.');
});
function initMap() {
    var loja = {lat: -33.867, lng: 151.195}; // Substitua com as coordenadas da sua loja

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: loja
    });

    var marker = new google.maps.Marker({
        position: loja,
        map: map,
        title: 'Localização da Loja'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});
