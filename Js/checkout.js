function increaseQty(btn) {
    let qtySpan = btn.previousElementSibling;
    let qty = parseInt(qtySpan.innerText);
    qtySpan.innerText = qty + 1;
}

function decreaseQty(btn) {
    let qtySpan = btn.nextElementSibling;
    let qty = parseInt(qtySpan.innerText);

    if (qty > 1) {
        qtySpan.innerText = qty - 1;
    }
}
