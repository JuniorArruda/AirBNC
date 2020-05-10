const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"

var request = new XMLHttpRequest()
request.open('GET', url)
request.responseType = 'json'
request.send()
request.onload = function () {
    request.response.filter((item) => {

        var item_div = document.createElement("div")
        item_div.classList.add('col-md-4')
        item_div.classList.add('card')

        var item_img = document.createElement("img")
        item_img.setAttribute("src", `${item.photo}`)
        item_img.setAttribute("width", 349)
        item_img.setAttribute("height", 349)

        var item_type_node = document.createTextNode(`${item.property_type}`);
        var item_type = document.createElement("div");
        item_type.classList.add('item_type')
        item_type.appendChild(item_type_node);

        var item_description_node = document.createTextNode(`${item.name}`)
        var item_description = document.createElement("div")
        item_description.classList.add("item_description")
        item_description.appendChild(item_description_node)

        var price_node = document.createTextNode(`Reservar por R$ ${item.price}`)
        var price = document.createElement("button");
        price.setAttribute("href","#")
        price.classList.add("price")
        price.appendChild(price_node)

        item_div.appendChild(item_type)
        item_div.appendChild(item_img)
        item_div.appendChild(item_description)
        item_div.appendChild(price)

        var element = document.getElementById('item_list')
        element.appendChild(item_div)

    }

    )
}
