// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const icons = [
	{
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
];
const colors = {
	food: "pink",
	animal: "green",
	beverage: "yellow"
};

// funzioni 

// arrey di icone e dove stampare 
const containerIcons = document.getElementById("container");
printIcons= (arr, container) =>{

        arr.forEach((elm) => {
        const {name, family, prefix, color} = elm;
        container.innerHTML +=`
                        <div class="card">
                        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                        <div class="text_icon">${name}</div>
                        </div> `  
        });
}


// Milestone 2
// Coloriamo le icone per tipo

let iconsColors = icons.map(
        (elm) =>{
        return{
                ...elm,
                color: colors[elm.category],
        } 
        }   
);


printIcons(iconsColors,containerIcons);
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const iconCategories =[];
//salvo ogni singola categoria una volta nell' arrey iconCategories
icons.forEach(
        (elm)=> {
                if( iconCategories.includes(elm.category) ==false ){

                iconCategories.push(elm.category);
        }
        }
)
console.log(iconCategories);

// per ogni categoria aggiungiamo una option
iconCategories.forEach((elm)=> {
document.getElementById("category").innerHTML+= `<option value="${elm}">${elm}</option>`;
}
);
// in base alla categoria stampiamo in pagina le card 
const select =document.getElementById("category");

select.addEventListener("change",
()=>{
        containerIcons.innerHTML ="";
    // recupero valore select 
        const iconsFilter= iconsColors.filter(
        (elem) => {
                if (elem.category == select.value || select.value ==""){
                return true; // per tenere questo elemento!
                }
                return false;// skippa l'elemento!
        }
        )
        printIcons (iconsFilter, containerIcons);
}
);
