import { Product } from "./product";

function createRow(p: Product) {
    const imgElement = document.createElement('img')
    imgElement.src = p.imagePath?.toString() ? p.imagePath.toString() : ''
    // imgElement.setAttribute('src', p.imagePath?.toString() ? <string>p.imagePath : '')
    imgElement.setAttribute('alt', 'NA')

    const tdImage = document.createElement('td')
    tdImage.appendChild(imgElement)

    const tdName = document.createElement('td')
    tdName.innerText = p.name

    const tdPrice = document.createElement('td')
    tdPrice.innerText = p.price.toString()

    const tdDesc = document.createElement('td')
    tdDesc.innerText = p.description

    const newRow = document.createElement('tr')
    newRow.append(tdImage, tdName, tdPrice, tdDesc)

    const tbodyElement = document.querySelector('#tbodyProducts')
    tbodyElement?.appendChild(newRow)
}
function addProduct() {
    const id = (<HTMLInputElement>document.getElementById('txtId')).value
    const name = (<HTMLInputElement>document.getElementById('txtName')).value
    const description = (<HTMLInputElement>document.getElementById('txtDesc')).value
    const price = (<HTMLInputElement>document.getElementById('txtPrice')).value

    const imgInput = <HTMLInputElement>document.getElementById('fileImage')
    const allFiles = imgInput?.files
    if (allFiles !== null) {
        const uploadedFile = allFiles[0]
        const reader = new FileReader()
        reader.addEventListener('load', function () {
            const p: Product = {
                name: name,
                id: Number(id),
                price: Number(price),
                description: description,
                imagePath: reader.result
            }
            createRow(p)
        })
        reader.readAsDataURL(uploadedFile)
    }
}
const btnObject = document.getElementById('btnAdd')
btnObject?.addEventListener('click', addProduct)