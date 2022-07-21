for(i=0; i<=20; i++) {
    fetch(`https://fakestoreapi.com/products/${i}`)
    .then(res=>res.json())
    .then(data=> {
        var el = document.createElement("div");
        el.innerHTML = `<img src="${data.image}">`
        const contentEle = document.getElementById("content");
        contentEle.appendChild(el);

        var ti = document.createElement("h4")
        ti.innerHTML = data.title;
        el.appendChild(ti);

        var pele = document.createElement("p")
        pele.innerHTML = `<p>Price = ${data.price} INR</p>`
        el.appendChild(pele)
    
        var pele = document.createElement("p")
        pele.innerHTML = `<p>Customer Ratings : ${data.rating.rate}</p>`
        el.appendChild(pele)

        var btnele = document.createElement("button")
        btnele.id = `addcartbtn${i}`
        btnele.innerHTML = `Add To cart`
        el.appendChild(btnele)

        
        var innerdiv = document.createElement('div');
        innerdiv.innerHTML = `<img src="${data.image}"></img>`
        var cartdiv = document.getElementById('cartcontent')
        cartdiv.appendChild(innerdiv);

        var producttitle = document.createElement('h4')
        producttitle.innerHTML = data.title;
        innerdiv.appendChild(producttitle)

        var productprice = document.createElement('p')
        productprice.innerHTML = `<p>Price = ${data.price} INR</p> <hr>`
        innerdiv.appendChild(productprice)
        })
        
        // For Cart items
}
