function btn() {
    let image = document.getElementById('image');
    let images = ['pic/i1.jpg','pic/i2.jpg','pic/i3.jpg','pic/i4.jpg','pic/i5.jpg','pic/i6.jpg',
    'pic/i7.jpg',];

    let random = Math.floor (Math.random() * 7);
    image.src = images[random];
}