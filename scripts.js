function loadRestaurantDetails() {
    const params = new URLSearchParams(window.location.search);
    const placeId = params.get("id");

    if (!placeId) return;

    const service = new google.maps.places.PlacesService(
        document.createElement("div")
    );

    service.getDetails(
        {
            placeId: placeId,
            fields: [
                "name",
                "formatted_address",
                "formatted_phone_number",
                "opening_hours",
                "rating",
                "photos"
            ]
        },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) return;

            document.getElementById("restoName").textContent = place.name;

            document.getElementById("direccion").textContent =
                place.formatted_address || "No disponible";

            document.getElementById("telefono").textContent =
                place.formatted_phone_number || "No disponible";

            document.getElementById("calificacion").textContent =
                place.rating ? place.rating + " ⭐" : "Sin calificación";

            if (place.photos && place.photos.length > 0) {
                document.getElementById("restoImg").src =
                    place.photos[0].getUrl({ maxWidth: 800 });
            }

            if (place.opening_hours && place.opening_hours.weekday_text) {
                document.getElementById("horarios").innerHTML =
                    place.opening_hours.weekday_text
                        .map(h => `<li>${h}</li>`)
                        .join("");
            }
        }
    );
}

if (window.location.pathname.includes("restaurant.html")) {
    window.onload = loadRestaurantDetails;
}
