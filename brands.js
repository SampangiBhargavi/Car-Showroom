function displayBrands() {

    let container =
        document.getElementById(
            "brandList"
        );

    if (!container) {
        return;
    }


    let cars = getCars();

    let brands = getBrands();


    container.innerHTML = "";


    brands.forEach(function(brand) {

        let brandCars =
            cars.filter(function(car) {

                return car.brand === brand;

            });


        let image = "";


        if (brand === "BMW") {

            image =
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80";

        } else if (brand === "Mercedes") {

            image =
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80";

        } else if (brand === "Audi") {

            image =
                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80";

        } else if (brand === "Toyota") {

            image =
                "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80";

        } else {

            image =
                "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80";

        }


        container.innerHTML += `

            <div class="col-md-4">

                <div class="brand-card">

                    <img
                        src="${image}"
                        class="brand-image"
                        alt="${brand}"
                    >


                    <div class="p-4 text-center">

                        <h3>
                            ${brand}
                        </h3>

                        <p class="text-muted">
                            ${brandCars.length}
                            Cars Available
                        </p>


                        <a
                            href="cars.html?brand=${encodeURIComponent(brand)}"
                            class="btn btn-warning"
                        >

                            <i class="bi bi-eye"></i>

                            View Cars

                        </a>

                    </div>

                </div>

            </div>

        `;

    });

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayBrands();

    }
);