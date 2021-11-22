window.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll("button[data-order]");
    //console.log(orderButtons);
    orderButtons.forEach(item => {
        item.addEventListener('click', (event) => { //event señala al evento que se ejecuto
            const button = event.currentTarget;
            //console.log(button);
            const container = button.parentNode;
            //console.log(container);obtener contenedor padre

            let order = {
                title: container.querySelector('.title').innerText,
                price: container.querySelector('.price').innerText,
                id: button.getAttribute('data-order'), //el data order es nuestro id en HTML
            };
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("catalogo.html", "order.html");
            window.location.href = url;

        })
    })
});