import { Product } from "./product";

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
            console.log(p)
        })
        reader.readAsDataURL(uploadedFile)
    }
    console.log(p)
    // const p = new Product(1, 'dellxps', 1000, '', '')
}
const btnObject = document.getElementById('btnAdd')
btnObject?.addEventListener('click', addProduct)