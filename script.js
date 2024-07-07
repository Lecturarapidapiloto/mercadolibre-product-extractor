document.getElementById('getProductInfo').addEventListener('click', function() {
    const url = document.getElementById('productUrl').value;
    fetch('https://tu-backend.herokuapp.com/extract', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').innerText = data.title;
        document.getElementById('photo').src = data.photo;
        document.getElementById('description').innerText = data.description;
        document.getElementById('price').innerText = data.price;
        document.getElementById('productInfo').style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
