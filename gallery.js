let galleryImages = [

    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=900&q=80"

];


function displayGallery() {

    let container =
        document.getElementById("galleryList");

    if (!container) {
        return;
    }


    container.innerHTML =
        galleryImages.map(function(image) {

            return `

                <div class="col-md-4">

                    <img
                        src="${image}"
                        class="gallery-img"
                        alt="Car"
                    >

                </div>

            `;

        }).join("");

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayGallery();

    }
);