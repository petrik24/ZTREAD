// File: assets/js/cart.js

/**
 * Menambahkan produk ke keranjang belanja di localStorage.
 * @param {string} id - ID unik produk.
 * @param {string} name - Nama produk.
 * @param {number} price - Harga produk.
 * @param {string} image - Path ke gambar produk.
 */
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('ztreadCart')) || [];
    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem('ztreadCart', JSON.stringify(cart));
    alert(`"${name}" telah ditambahkan ke keranjang!`);
    updateCartIcon();
}

/**
 * Mengupdate angka pada ikon keranjang di header.
 */
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('ztreadCart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartIconCounter = document.getElementById('cart-count');
    if (cartIconCounter) {
        if (totalItems > 0) {
            cartIconCounter.innerText = totalItems;
            cartIconCounter.style.display = 'inline-block';
        } else {
            cartIconCounter.style.display = 'none';
        }
    }
}

// Panggil saat halaman selesai dimuat.
document.addEventListener('DOMContentLoaded', updateCartIcon);