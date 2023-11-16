
let container = document.getElementById("container")

let fragment = document.createDocumentFragment()

let card = document.createElement('div')
card.setAttribute('class', 'card')

let div_img = document.createElement('div')
div_img.setAttribute('class', 'div-img')

card.append(div_img)

let div_chef = document.createElement('div')
div_chef.setAttribute('class', 'chef-avatar')

card.append(div_chef)


let btn_receita = document.createElement('button')
btn_receita.setAttribute('class' , 'btn-receita')
btn_receita.textContent = "ver receita"



card.append(btn_receita)








let lb_chef = document.createElement('label')

lb_chef.setAttribute('class', 'lb-chef')

lb_chef.textContent = 'felipe'

card.append(lb_chef)





fragment.append(card)








container.append(fragment)












// Exemplo com innerHTML (não usar)
// let texto = "Índice :"
// for (let i = 0; i < 50; i++) {
//     let card = 
//     `
//     <div class="card">
//         <div class="top">
//         ${texto+i}
//         </div>
//         <div class="botton">

//         </div>
//     </div>
//     `
//     container.innerHTML += card
// } 

