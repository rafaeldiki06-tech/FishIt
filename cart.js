// Ambil cart dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function tambahkecart(nama, harga){
    let item = {
        nama: nama,
        harga: harga
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produk ditambahkan ke keranjang!");
}

let list = document.getElementById("listCart");
let total = 0;

if(list){ 
    cart.forEach(function(item, index){

    let div = document.createElement("div");

    let p = document.createElement("span");
    p.textContent = item.nama + " - Rp " + item.harga;

    // tombol hapus
    let btn = document.createElement("button");
    btn.textContent = "Hapus";

    btn.onclick = function(){
        hapusItem(index);
    };

    div.appendChild(p);
    div.appendChild(btn);

    list.appendChild(div);

    total += item.harga;
});

    document.getElementById("total").textContent =
        "Total: Rp " + total;
}

function hapusItem(index){

    cart.splice(index,1); // hapus dari array

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload(); // refresh tampilan
}
