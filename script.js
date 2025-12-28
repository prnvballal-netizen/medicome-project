let banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
let index = 0;

function changeBanner() {
    document.getElementById("banner").src = "assets/images/" + banners[index];
    index = (index + 1) % banners.length;
}
setInterval(changeBanner, 3000);

let cart = [];
let total = 0;

function addToCart(name, price) {
    let qty = prompt("Enter quantity:");
    qty = parseInt(qty);

    if (!qty || qty <= 0) return;

    let cost = price * qty;
    total += cost;

    cart.push({ name, qty, cost });
    showCart();
}

function showCart() {
    let box = document.getElementById("cart");
    box.innerHTML = "<h3>Your Cart</h3>";
    cart.forEach(i => {
        box.innerHTML += `<p>${i.name} x ${i.qty} = ₹${i.cost}</p>`;
    });
    box.innerHTML += `<h4>Total: ₹${total}</h4>`;
}
