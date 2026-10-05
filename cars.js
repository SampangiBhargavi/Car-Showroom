function fillFilters() {

    let cars = getCars();

    let brandFilter =
        document.getElementById("brandFilter");

    let categoryFilter =
        document.getElementById("categoryFilter");


    if (brandFilter) {

        let brands = getBrands();

        brandFilter.innerHTML = `
            <option value="">
                All Brands
            </option>
        `;

        brands.forEach(function(brand) {

            brandFilter.innerHTML += `

                <option value="${brand}">
                    ${brand}
                </option>

            `;

        });

    }


    if (categoryFilter) {

        let categories = [];

        cars.forEach(function(car) {

            if (
                !categories.includes(
                    car.category
                )
            ) {

                categories.push(
                    car.category
                );

            }

        });


        categoryFilter.innerHTML = `
            <option value="">
                All Categories
            </option>
        `;


        categories.forEach(function(category) {

            categoryFilter.innerHTML += `

                <option value="${category}">
                    ${category}
                </option>

            `;

        });

    }

}


function displayCars() {

    let container =
        document.getElementById("carList");

    if (!container) {
        return;
    }


    let cars = getCars();


    let search =
        document.getElementById("searchCar")
        ?.value
        .toLowerCase()
        .trim() || "";


    let brand =
        document.getElementById("brandFilter")
        ?.value || "";


    let category =
        document.getElementById("categoryFilter")
        ?.value || "";


    let filteredCars =
        cars.filter(function(car) {

            let searchMatch =
                car.name
                .toLowerCase()
                .includes(search);


            let brandMatch =
                brand === "" ||
                car.brand === brand;


            let categoryMatch =
                category === "" ||
                car.category === category;


            return (
                searchMatch &&
                brandMatch &&
                categoryMatch
            );

        });


    if (filteredCars.length === 0) {

        container.innerHTML = `

            <div class="col-12">

                <div class="alert alert-warning">
                    No cars found.
                </div>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filteredCars.map(function(car) {

            return carCard(car);

        }).join("");

}


function displayPopularCars() {

    let container =
        document.getElementById(
            "popularCars"
        );

    if (!container) {
        return;
    }


    let cars =
        getCars().slice(0, 6);


    container.innerHTML =
        cars.map(function(car) {

            return carCard(car);

        }).join("");

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        fillFilters();


        let selectedBrand =
            new URLSearchParams(
                window.location.search
            ).get("brand");


        if (selectedBrand) {

            let brandFilter =
                document.getElementById(
                    "brandFilter"
                );

            if (brandFilter) {

                brandFilter.value =
                    selectedBrand;

            }

        }


        displayCars();

        displayPopularCars();

    }
);