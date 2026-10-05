// ===============================
// DEFAULT CARS
// ===============================

let defaultCars = [

    {
        id: 1,
        name: "BMW X5",
        brand: "BMW",
        category: "SUV",
        price: 8500000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Mercedes C-Class",
        brand: "Mercedes",
        category: "Sedan",
        price: 6500000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Audi Q7",
        brand: "Audi",
        category: "SUV",
        price: 9000000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Toyota Fortuner",
        brand: "Toyota",
        category: "SUV",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Hyundai Creta",
        brand: "Hyundai",
        category: "SUV",
        price: 2200000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Mahindra XUV700",
        brand: "Mahindra",
        category: "SUV",
        price: 2800000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
    }

];


// ===============================
// DEFAULT OFFERS
// ===============================

let defaultOffers = [

    {
        id: 1,
        title: "Festive Season Offer",
        description: "Get exciting discounts on selected cars.",
        discount: "Up to ₹2 Lakh Off"
    },

    {
        id: 2,
        title: "Exchange Bonus",
        description: "Exchange your old car and get extra benefits.",
        discount: "Up to ₹1 Lakh Bonus"
    },

    {
        id: 3,
        title: "Finance Offer",
        description: "Special financing options available.",
        discount: "Low Interest Rates"
    }

];


// ===============================
// LOCAL STORAGE
// ===============================

if (!localStorage.getItem("cars")) {

    localStorage.setItem(
        "cars",
        JSON.stringify(defaultCars)
    );

}


if (!localStorage.getItem("offers")) {

    localStorage.setItem(
        "offers",
        JSON.stringify(defaultOffers)
    );

}


// ===============================
// GET CARS
// ===============================

function getCars() {

    return JSON.parse(
        localStorage.getItem("cars") || "[]"
    );

}


// ===============================
// GET BRANDS
// ===============================

function getBrands() {

    let cars = getCars();

    let brands = [];

    cars.forEach(function(car) {

        if (!brands.includes(car.brand)) {

            brands.push(car.brand);

        }

    });

    return brands;

}


// ===============================
// MONEY
// ===============================

function money(price) {

    return "₹" +
        Number(price).toLocaleString("en-IN");

}


// ===============================
// CAR CARD
// ===============================

function carCard(car) {

    return `

        <div class="col-md-4">

            <div class="card car-card h-100 shadow-sm">

                <img
                    src="${car.image}"
                    class="card-img-top"
                    alt="${car.name}"
                >

                <div class="card-body">

                    <span class="badge bg-dark">
                        ${car.brand}
                    </span>

                    <h5 class="mt-3">
                        ${car.name}
                    </h5>

                    <p class="text-muted">
                        ${car.category}
                    </p>

                    <h5 class="price">
                        ${money(car.price)}
                    </h5>

                    <a
                        href="test-drive.html?car=${encodeURIComponent(car.name)}"
                        class="btn btn-warning w-100"
                    >

                        <i class="bi bi-calendar-check"></i>

                        Book Test Drive

                    </a>

                </div>

            </div>

        </div>

    `;

}


// ===============================
// NAVBAR
// ===============================

function loadNavbar() {

    let navbar =
        document.getElementById("navbar");

    if (!navbar) {
        return;
    }

    navbar.innerHTML = `

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="container">

                <a
                    class="navbar-brand fw-bold"
                    href="index.html"
                >
                    <i class="bi bi-car-front-fill"></i>
                    DriveX Motors
                </a>


                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >

                    <span class="navbar-toggler-icon"></span>

                </button>


                <div
                    class="collapse navbar-collapse"
                    id="mainNavbar"
                >

                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="index.html"
                            >
                                Home
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="cars.html"
                            >
                                Cars
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="brands.html"
                            >
                                Brands
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="offers.html"
                            >
                                Offers
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="services.html"
                            >
                                Services
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="gallery.html"
                            >
                                Gallery
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="about.html"
                            >
                                About
                            </a>
                        </li>


                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="contact.html"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    `;

}


// ===============================
// FOOTER
// ===============================

function loadFooter() {

    let footer =
        document.getElementById("footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `

        <footer class="bg-dark text-white py-4 mt-5">

            <div class="container text-center">

                <h5>
                    DriveX Motors
                </h5>

                <p>
                    Find your perfect car with confidence.
                </p>

                <p class="mb-0">
                    © 2026 DriveX Motors. All Rights Reserved.
                </p>

            </div>

        </footer>

    `;

}


// ===============================
// CUSTOMER LOGIN
// ===============================

function customerLogin(event) {

    event.preventDefault();

    localStorage.setItem(
        "customerLoggedIn",
        "true"
    );

    alert("Login successful!");

    window.location.href = "index.html";

}


// ===============================
// ADMIN LOGIN
// ===============================

function adminLogin(event) {

    event.preventDefault();

    let username =
        document.getElementById("adminUser").value;

    let password =
        document.getElementById("adminPass").value;


    if (
        username === "admin" &&
        password === "admin123"
    ) {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        window.location.href =
            "admin.html";

    } else {

        alert(
            "Invalid username or password."
        );

    }

}


// ===============================
// ADMIN LOGOUT
// ===============================

function logoutAdmin() {

    localStorage.removeItem(
        "adminLoggedIn"
    );

    window.location.href =
        "admin-login.html";

}


// ===============================
// CONTACT
// ===============================

function submitContact(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been submitted."
    );

    event.target.reset();

}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadNavbar();

        loadFooter();

    }
);