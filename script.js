document.addEventListener('DOMContentLoaded', function() {
    const cabine = document.getElementById('cabine');
    function moverElevador(andar) {
        let posicao = 0;
        switch (andar) {
            case 1:
                posicao = 0;
                break;
            case 2:
                posicao = 175;
                break;
            case 3:
                posicao = 350; 
                break;
        }
        cabine.style.bottom = posicao + 'px'; 
    }
    document.getElementById('primeiro').addEventListener('click', function() {
        moverElevador(1);
    });

    document.getElementById('segundo').addEventListener('click', function() {
        moverElevador(2);
    });

    document.getElementById('terceiro').addEventListener('click', function() {
        moverElevador(3);
    });
});