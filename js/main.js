

const colors = {
    food : "pink",
    animal: "green",
    beverage:"yellow"
}
const containerIcons = document.getElementById("container"); 
//argomenti l'array icone e il nodo html dove stampare le icone
const printIcons = (arr, container) => {
    container.innerHTML = "";
    arr.forEach((elem) =>{
        // destrutturazione 
        // const{name, family, prefix} = elem; Non mi funziona 
        container.innerHTML +=(`<div class="card">
        <i class="${elem.family}  ${elem.prefix}${elem.name} style = "color: color"></i>
        <div id="nome_card" class="nome_card">
            ${elem.name}
        </div>
    </div>`);
    }                         
    );

}
const iconsColors = icons.map(
    (elem) => {
        console.log(elem.category);
        return{
            ...elem,
            // name: elem.name,
            // family: elem.family,
            // prefix: elem.prefix,
            // category: elem.category,

            color: colors[elem.category]//aggiunta una proprietà!
        };
    
    }
);


printIcons (iconsColors, containerIcons)
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// icons.forEach((elem) =>{
    // destrutturazione 
//      const{name, family, prefix} = elem; 
//     document.getElementById("container").innerHTML +=(`<div class="card">
//     <i class="${elem.family}  ${elem.prefix}${elem.name}"></i>
//     <div id="nome_card" class="nome_card">
//         ${elem.name}
//      </div>
//  </div>`);
// // }                         
// );





const iconCategories =[];
icons.forEach(
    (elem)=> {
        if( iconCategories.includes(elem.category) ==false ){

            iconCategories.push(elem.category);
        }
    }
)
console.log(iconCategories);



// creo una option per ogni categoria 

const selectCategory =document.getElementById("category");

iconCategories.forEach(
    (elem)=> {
        selectCategory.innerHTML += `<option value="${elem}">${elem}</option>`
    }
);

// creo evento sulla select
selectCategory.addEventListener("change",
()=>{
    // recupero valore select 
    const iconsFilter= iconsColors.filter(
        (elem) => {
            if (elem.category == selectCategory.value || selectCategory.value ==""){
                return true;
            }
            return false;
        }
    )
    printIcons (iconsFilter, containerIcons);
}
);