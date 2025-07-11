const products = [
	{
        productID: 1,
		productName: 'Bobina',
        productPrice: 19.99,
        productImg: 'https://http2.mlstatic.com/D_NQ_NP_997390-MLA79709545651_102024-O.webp',
        storeID: 1,
        storeName: 'JV Escritório'
	},
    {
        productID: 2,
		productName: 'Celular',
        productPrice: 1050.99,
        productImg: 'https://http2.mlstatic.com/D_NQ_NP_792554-MLA82773468680_032025-O.webp',
        storeID: 2,
        storeName: 'Loja Eletrônicos'
	},
    {
        productID: 3,
		productName: 'Fita Adesiva',
        productPrice: 9.99,
        productImg: 'https://http2.mlstatic.com/D_NQ_NP_878855-MLU70632916280_072023-O.webp',
        storeID: 1,
        storeName: 'JV Escritório'
	},
    {
        productID: 4,
		productName: 'Caixa de som',
        productPrice: 69.99,
        productImg: 'https://http2.mlstatic.com/D_NQ_NP_633790-MLA81772871630_012025-O.webp',
        storeID: 2,
        storeName: 'Varejo Eletrônicos'
	},
];


const cart = {
    products: [
        {
           productID: 1,
           qtd: 2,
           price: 69.99,
           storeID: 2,
        }
    ],
    total: 39.98
}


const listProducts = document.getElementById('listProducts')
const listItem = document.createElement('li')

const addToCartHandler = (product) => {
    const item = {
        productID : products[product].productID,
        qtd: 1,
        price: products[product].productPrice,
        storeID: products[product].storeID,
    }

    cart.products.push(item)

    
}

function findIndex(id) {
    const i = products.findIndex(product => product.productID === id)
    if(i === -1) {
        throw Error ('Index não existe')
    } else {
        return i
    }
    
}


function renderCartItem(e) {
    const id = parseInt(e.target.parentNode.id)
    const currentProductIndex = findIndex(id)
    const itemSection = document.createElement('section')
    itemSection.classList = 'itemContainer'
    
    

    const checkbox = document.createElement('input')
    checkbox.id = products[currentProductIndex].productID
    checkbox.type = 'checkbox'

    const productImg = document.createElement('img')
    productImg.src = products[currentProductIndex].productImg

    const productTitle = document.createElement('label')
    productTitle.innerText = products[currentProductIndex].productName

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Excluir'

    const amountLabel = document.createElement('label')
    amountLabel.innerText = 'Qtd'
    amountLabel.htmlFor = `qtd${products[currentProductIndex].productID}`

    const inputQuantity = document.createElement('input')
    inputQuantity.id = `qtd${products[currentProductIndex].productID}`
    inputQuantity.type = 'number'
    inputQuantity.min = '1'
    inputQuantity.max = '20'
    inputQuantity.value = 1
    

    const amountDiv = document.createElement('div')
    amountDiv.append(amountLabel, inputQuantity)

    const span = document.createElement('span')
    span.innerText = 'R$'

    const price = document.createElement('span')
    price.id = `price-${id}`
    price.innerText = products[currentProductIndex].productPrice
    
    inputQuantity.addEventListener('change', (e) => {
        const currentPrice = e.target.value * products[currentProductIndex].productPrice

        price.innerText = currentPrice.toFixed(2)
    })

    const asidePrice = document.createElement('aside')
    asidePrice.append(span,price)

    itemSection.append(checkbox, productImg, productTitle, deleteBtn, amountDiv, asidePrice)

    if(cart.products[id]) {
        const currentQtd = document.getElementById(`qtd${id}`)
        const productPrice = document.getElementById(`price-${id}`)
        currentQtd.value++
        const currentPrice = currentQtd.value * products[currentProductIndex].productPrice
        productPrice.innerText = currentPrice.toFixed(2)

    } else {
        listProducts.appendChild(itemSection)
        addToCartHandler(currentProductIndex)
    }

}


const showcase = document.getElementById('showproducts')

products.forEach(product => {
    const div = document.createElement('div')
    div.id = product.productID
    div.classList = 'product'
    const img = document.createElement('img')
    img.src = product.productImg
    const name = document.createElement('h3')
    name.textContent = product.productName
    const price = document.createElement('p')
    price.textContent = 'R$' + product.productPrice
    const storeName = document.createElement('p')
    storeName.textContent = product.storeName
    storeName.style.fontWeight = 'bold'

    const addBtn = document.createElement('button')
    addBtn.textContent = 'Adicionar ao carrinho'
    addBtn.addEventListener('click', renderCartItem)
    div.append(img,name, price, storeName, addBtn)
    showcase.appendChild(div)
})

