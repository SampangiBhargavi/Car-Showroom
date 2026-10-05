document.addEventListener(
    "DOMContentLoaded",
    function() {

        let container =
            document.getElementById("offerList");

        if (!container) {
            return;
        }


        let offers =
            JSON.parse(
                localStorage.getItem("offers") || "[]"
            );


        container.innerHTML =
            offers.map(function(offer) {

                return `

                <div class="col-md-4">

                    <div class="card offer-card shadow-sm p-4">

                        <i class="bi bi-gift fs-1 text-warning"></i>

                        <h3>
                            ${offer.title}
                        </h3>

                        <p>
                            ${offer.text}
                        </p>

                        <a href="contact.html"
                           class="btn btn-dark">

                            Enquire Now

                        </a>

                    </div>

                </div>

                `;

            }).join("");

    }
);