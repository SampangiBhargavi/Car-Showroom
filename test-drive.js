// ================= LOAD CARS =================

function loadTestDriveCars() {

    let cars = getCars();

    let select =
        document.getElementById("tdCar");

    if (!select) {
        return;
    }


    select.innerHTML = `

        <option value="">
            Select Car
        </option>

    `;


    cars.forEach(function(car) {

        select.innerHTML += `

            <option value="${car.name}">

                ${car.name} - ${car.brand}

            </option>

        `;

    });


    let selectedCar =
        new URLSearchParams(
            window.location.search
        ).get("car");


    if (selectedCar) {

        select.value =
            selectedCar;

    }

}


// ================= BOOK TEST DRIVE =================

function bookTestDrive(event) {

    event.preventDefault();


    let bookings =
        JSON.parse(
            localStorage.getItem("testDrives") || "[]"
        );


    let booking = {

        id: Date.now(),

        name:
            document.getElementById(
                "tdName"
            ).value,

        phone:
            document.getElementById(
                "tdPhone"
            ).value,

        email:
            document.getElementById(
                "tdEmail"
            ).value,

        car:
            document.getElementById(
                "tdCar"
            ).value,

        date:
            document.getElementById(
                "tdDate"
            ).value,

        time:
            document.getElementById(
                "tdTime"
            ).value,

        message:
            document.getElementById(
                "tdMessage"
            ).value,

        status:
            "Booked"

    };


    bookings.push(booking);


    localStorage.setItem(
        "testDrives",
        JSON.stringify(bookings)
    );


    alert(
        "Test drive booked successfully!"
    );


    document.getElementById(
        "testDriveForm"
    ).reset();

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadTestDriveCars();

    }
);