// ================= ADMIN SECURITY =================

if (
    localStorage.getItem("adminLoggedIn")
    !== "true"
) {

    window.location.href =
        "admin-login.html";

}


// ================= DASHBOARD =================

function renderAdmin() {

    let cars =
        getCars();


    let offers =
        JSON.parse(
            localStorage.getItem("offers") || "[]"
        );


    let bookings =
        JSON.parse(
            localStorage.getItem("testDrives") || "[]"
        );


    document.getElementById(
        "carCount"
    ).innerText =
        cars.length;


    document.getElementById(
        "brandCount"
    ).innerText =
        getBrands().length;


    document.getElementById(
        "offerCount"
    ).innerText =
        offers.length;


    document.getElementById(
        "bookingCount"
    ).innerText =
        bookings.length;


    displayAdminCars();

    displayBookings();

}


// ================= DISPLAY CARS =================

function displayAdminCars() {

    let cars =
        getCars();


    let container =
        document.getElementById(
            "adminCars"
        );


    if (cars.length === 0) {

        container.innerHTML = `

            <div class="alert alert-info">

                No vehicles available.

            </div>

        `;

        return;

    }


    container.innerHTML =
        cars.map(function(car) {

            return `

                <div class="border-bottom py-3">

                    <div class="row align-items-center">

                        <div class="col-md-8">

                            <h5>
                                ${car.name}
                            </h5>

                            <p class="mb-0 text-muted">

                                Brand:
                                ${car.brand}

                                |

                                Category:
                                ${car.category}

                                |

                                Price:
                                ${money(car.price)}

                            </p>

                        </div>


                        <div class="col-md-4 text-md-end">

                            <button
                                class="btn btn-danger btn-sm"
                                onclick="deleteVehicle(${car.id})">

                                <i class="bi bi-trash"></i>

                                Delete

                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


// ================= ADD VEHICLE =================

function addVehicle() {

    let name =
        document.getElementById(
            "newName"
        ).value.trim();


    let brand =
        document.getElementById(
            "newBrand"
        ).value.trim();


    let category =
        document.getElementById(
            "newCategory"
        ).value.trim();


    let price =
        document.getElementById(
            "newPrice"
        ).value;


    let image =
        document.getElementById(
            "newImage"
        ).value.trim();


    if (
        name === "" ||
        brand === "" ||
        category === "" ||
        price === ""
    ) {

        alert(
            "Please fill all required fields."
        );

        return;

    }


    let cars =
        getCars();


    let newCar = {

        id: Date.now(),

        name: name,

        brand: brand,

        category: category,

        price: Number(price),

        image:
            image ||
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"

    };


    cars.push(newCar);


    localStorage.setItem(
        "cars",
        JSON.stringify(cars)
    );


    alert(
        "Vehicle added successfully!"
    );


    document.getElementById(
        "newName"
    ).value = "";

    document.getElementById(
        "newBrand"
    ).value = "";

    document.getElementById(
        "newCategory"
    ).value = "";

    document.getElementById(
        "newPrice"
    ).value = "";

    document.getElementById(
        "newImage"
    ).value = "";


    renderAdmin();

}


// ================= DELETE VEHICLE =================

function deleteVehicle(id) {

    if (
        !confirm(
            "Do you want to delete this vehicle?"
        )
    ) {

        return;

    }


    let cars =
        getCars();


    cars =
        cars.filter(function(car) {

            return car.id !== id;

        });


    localStorage.setItem(
        "cars",
        JSON.stringify(cars)
    );


    renderAdmin();

}


// ================= BOOKINGS =================

function displayBookings() {

    let bookings =
        JSON.parse(
            localStorage.getItem("testDrives") || "[]"
        );


    let container =
        document.getElementById(
            "adminBookings"
        );


    if (bookings.length === 0) {

        container.innerHTML = `

            <div class="alert alert-info">

                No test-drive bookings yet.

            </div>

        `;

        return;

    }


    container.innerHTML =
        bookings.map(function(booking) {

            return `

                <div class="card mb-3">

                    <div class="card-body">

                        <div class="row">

                            <div class="col-md-6">

                                <h5>
                                    ${booking.name}
                                </h5>

                                <p>
                                    <strong>Car:</strong>
                                    ${booking.car}
                                </p>

                                <p>
                                    <strong>Phone:</strong>
                                    ${booking.phone}
                                </p>

                                <p>
                                    <strong>Email:</strong>
                                    ${booking.email}
                                </p>

                            </div>


                            <div class="col-md-6">

                                <p>
                                    <strong>Date:</strong>
                                    ${booking.date}
                                </p>

                                <p>
                                    <strong>Time:</strong>
                                    ${booking.time}
                                </p>

                                <span class="badge bg-success">

                                    ${booking.status}

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderAdmin();

    }
);