console.log('Connected!')

let jData={
    "items":[
      {
        "sys": { "id": "1" },
        "fields": {
          "title": "queen panel bed",
          "price": 10.99,
          "image": { "fields": { "file": { "url": "./images/product-1.jpeg" } } }
        }
      },
      {
        "sys": { "id": "2" },
        "fields": {
          "title": "king panel bed",
          "price": 12.99,
          "image": { "fields": { "file": { "url": "./images/product-2.jpeg" } } }
        }
      },
      {
        "sys": { "id": "3" },
        "fields": {
          "title": "single panel bed",
          "price": 12.99,
          "image": { "fields": { "file": { "url": "./images/product-3.jpeg" } } }
        }
      },
      {
        "sys": { "id": "4" },
        "fields": {
          "title": "twin panel bed",
          "price": 22.99,
          "image": { "fields": { "file": { "url": "./images/product-4.jpeg" } } }
        }
      },
      {
        "sys": { "id": "5" },
        "fields": {
          "title": "fridge",
          "price": 88.99,
          "image": { "fields": { "file": { "url": "./images/product-5.jpeg" } } }
        }
      },
      {
        "sys": { "id": "6" },
        "fields": {
          "title": "dresser",
          "price": 32.99,
          "image": { "fields": { "file": { "url": "./images/product-6.jpeg" } } }
        }
      },
      {
        "sys": { "id": "7" },
        "fields": {
          "title": "couch",
          "price": 45.99,
          "image": { "fields": { "file": { "url": "./images/product-7.jpeg" } } }
        }
      },
      {
        "sys": { "id": "8" },
        "fields": {
          "title": "table",
          "price": 33.99,
          "image": { "fields": { "file": { "url": "./images/product-8.jpeg" } } }
        }
      }
    ]
  }

function getProduct(title,price,url)
{
    return `<img src=${url} alt=${title}>
    <p>${title}</p>
    <p>&dollar;${price}</p>`
}

function ShowProducts()
{
    console.log(jData.items)

    const products=document.createElement('div')

    products.className='products'

    for(item of jData.items)
    {
        let prod=document.createElement('div')
        prod.className='product'

        prod.innerHTML=getProduct(item.fields.title,item.fields.price,
                                                                item.fields.image.fields.file.url)
        
        console.log(prod)
        
        products.appendChild(prod)
    }

    const prod_disp=document.getElementById('product_display');

    prod_disp.appendChild(products)
}

ShowProducts()