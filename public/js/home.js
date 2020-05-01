$(document).ready(function () {

    checkToken();

    var result = httpGet('/igrejas/api');
    activateButtonsCarousel(result.igrejas.length);

    result.igrejas.forEach(igreja => {
        createChurch(igreja);
    });
});

function createChurch(igreja) {

    // var pastor = httpGet(`/pessoas/api/${igreja.pastor}`).pessoas[0].nome;
    var pastor = httpGet(`/pessoas/api/${igreja.pastor}`);
    console.log(pastor);
    $("#resumeMultiCarousel-inner").append($(`

    <div class="item">
    <div class="pad15">
        <p class="lead"><b>${igreja.nome}</b></p>
        <p class="lead">${pastor}</p>
        <div class="row">

            <div class="col">

                <h2 class="h6 font-weight-bold text-center mb-4">Categoria</h2>
                <!-- Progress bar 1 -->
                <div class="progress mx-auto" data-value='60'>
                    <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
                    </span>
                    <div
                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5 font-weight-bold">CAT.<sup class="small">A</sup>
                        </div>
                    </div>
                </div>
                <!-- END -->

            </div>

            <div class="col">
                <h2 class="h6 font-weight-bold text-center mb-4">Finanças</h2>

                <!-- Progress bar 2 -->
                <div class="progress mx-auto" data-value='25'>
                    <span class="progress-left">
                        <span class="progress-bar border-danger"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar border-danger"></span>
                    </span>
                    <div
                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5 font-weight-bold"><sup class="small">R$</sup>200,10
                        </div>
                    </div>
                </div>
                <!-- END -->

            </div>

        </div>
        <div class="row">

            <div class="col">
                <h2 class="h6 font-weight-bold text-center mb-4">Server time</h2>

                <!-- Progress bar 3 -->
                <div class="progress mx-auto" data-value='76'>
                    <span class="progress-left">
                        <span class="progress-bar border-success"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar border-success"></span>
                    </span>
                    <div
                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5 font-weight-bold">76<sup class="small">%</sup>
                        </div>
                    </div>
                </div>
                <!-- END -->
            </div>

            <div class="col">
                <h2 class="h6 font-weight-bold text-center mb-4">Total overdue</h2>

                <!-- Progress bar 4 -->
                <div class="progress mx-auto" data-value='12'>
                    <span class="progress-left">
                        <span class="progress-bar border-warning"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar border-warning"></span>
                    </span>
                    <div
                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5 font-weight-bold">12<sup class="small">%</sup>
                        </div>
                    </div>
                </div>
                <!-- END -->
            </div>

        </div>

    </div>
</div>

`));

}

function activateButtonsCarousel(qtd) {

    var bodyWidth = $('body').width();
    var dataCarousel = $('.MultiCarousel')[0];
    var data = dataCarousel.getAttribute('data-items');

    if ((bodyWidth >= 1200 && qtd < data[6]) ||
        (bodyWidth >= 992 && qtd < data[4]) ||
        (bodyWidth >= 768 && qtd < data[2]) ||
        (qtd < data[0])) {
        $('.leftLst').addClass('hidden');
        $('.rightLst').addClass('hidden');
    } else {
        $('.leftLst').removeClass('hidden');
        $('.rightLst').removeClass('hidden');
    }

}