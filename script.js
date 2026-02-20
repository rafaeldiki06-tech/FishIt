/*
const tombolbaru = document.querySelectorAll(".beli");

tombolbaru.forEach(function(btn) {
    btn.addEventListener("click", function() {
        alert("Produk ditambahkan!");
    });
});
*/

const tombol = document.querySelectorAll(".beli");

tombol.forEach(function(btn) {
    btn.addEventListener("click", function() {

        const nama = btn.dataset.produk;
        window.location.href = "product1.html?nama=" + nama;
    });
});


const tombol2 = document.querySelectorAll(".beli2");

tombol2.forEach(function(btn) {
    btn.addEventListener("click", function() {

        const nama = btn.dataset.produk;
        window.location.href = "product2.html?nama=" + nama;
    });
});

const tombol3 = document.querySelectorAll(".beli3");

tombol3.forEach(function(btn) {
    btn.addEventListener("click", function() {

        const nama = btn.dataset.produk;
        window.location.href = "product3.html?nama=" + nama;
    });
});

function tambahkecart(nama, harga){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        nama: nama,
        harga: harga
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produk ditambahkan ke keranjang!");
}
