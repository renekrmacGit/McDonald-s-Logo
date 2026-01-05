// To je tvoja skripta
console.log("Pozdravljen! JavaScript je uspešno povezan.");

// Primer funkcije: Ko klikneš na logotip, se prikaže opozorilo
function pozdrav() {
    alert("Dobrodošel na moji McDonald's strani!");
}

// Poiščemo prvo sliko in ji dodamo klik
document.addEventListener('DOMContentLoaded', () => {
    const slika = document.querySelector('img');
    if(slika) {
        slika.addEventListener('click', pozdrav);
    }
});