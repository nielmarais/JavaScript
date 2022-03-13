let postCodes = [
    {"Postcode": "W1"},
    {"Postcode": "W2"},
    {"Postcode": "W3"},
    {"Postcode": "W4"},
    {"Postcode": "W5"},
    {"Postcode": "W6"},
    {"Postcode": "W7"},
    {"Postcode": "W8"},
    {"Postcode": "W9"},
    {"Postcode": "N1"},
    {"Postcode": "N2"},
    {"Postcode": "N3"},
    {"Postcode": "N4"},
    {"Postcode": "N5"},
    {"Postcode": "N6"},
    {"Postcode": "N7"},
    {"Postcode": "N8"},
    {"Postcode": "N9"},
    {"Postcode": "E1"},
    {"Postcode": "E2"},
    {"Postcode": "E3"},
    {"Postcode": "E4"},
    {"Postcode": "E5"},
    {"Postcode": "E6"},
    {"Postcode": "E7"},
    {"Postcode": "E8"},
    {"Postcode": "E9"},
    {"Postcode": "WC"},
    {"Postcode": "EC"},
    {"Postcode": "SE"},
    {"Postcode": "SW"},
    {"Postcode": "NW"},
    {"Postcode": "CR"},
    {"Postcode": "SM"},
    {"Postcode": "KT"},
    {"Postcode": "TW"},
    {"Postcode": "UB"},
    {"Postcode": "HA"},
    {"Postcode": "WD"},
    {"Postcode": "EN"},
    {"Postcode": "IG"},
    {"Postcode": "RM"},
    {"Postcode": "DA"},
    {"Postcode": "BR"},
    {"Postcode": "RH"},
    {"Postcode": "GU"},
    {"Postcode": "SL"},
    {"Postcode": "HP"},
    {"Postcode": "AL"}
]

function searchValue() {
    const searchInput = document.getElementById('search').value.substring(0, 2).toUpperCase();
    if (searchInput && searchInput.trim().length > 1 && postCodes.find(({Postcode}) => 
    Postcode == searchInput)) {
        window.location.href = "./supported.html";
    } else if (searchInput && searchInput.trim() == null || searchInput.trim().length < 2) {
        alert('Please enter at least 2 characters');
    } else {
        window.location.href = "./notsupported.html";
    }
}

$(document).keypress(function(e){
    if (e.which == 13){
        $("#submit").click();
    }
});