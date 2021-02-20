
///////////////////
// Ejercicio 1 ////
///////////////////

// 1) declara un array vacio (en una variable) donde vamos a guardar los objetos
let arrayObj1 = [];

// 2) selecciona con queryselector el elemento tabla y guardalo en una constante
const table1 = document.querySelector('table');

// 3) selecciona con queryselectorAll los elementos th y guardalos en una constante (array)
// obtendremos los elemenos que serán las claves de los objetos que irán dentro del array
const thElements = table1.querySelectorAll('th');

// 4) guarda en dos constantes diferentes
// a) todos los elementos td del primer elemento tr del body de la tabla
// b) todos los elementos td del segundo elemento tr del body de la tabla
// obtendremos elemenos que serán los valores de mis objetos
const trElements = table1.querySelector('tbody').querySelectorAll('tr');
const firstTr_tdElements = trElements[0].querySelectorAll('td');
const secondTr_tdElements = trElements[1].querySelectorAll('td');

// 5) crea dos variables de objeto vacias, uno para cada fila de la tabla
let obj1 = {};
let obj2 = {};

// haz un bucle for que se recorra 5 veces
// en cada iteración iremos añadiendo pares de clave=valor a cada objeto creado en 4.a y 4.b
// donde las claves serán el contenido html de los elementos obtenidos en 3) y los valores los contenidos html obtenidos en 4.a y 4.b 

for(let i = 0; i < 5; i++){
    obj1[thElements[i].innerHTML] = firstTr_tdElements[i].innerHTML;
    obj2[thElements[i].innerHTML] = secondTr_tdElements[i].innerHTML;
}

// 6) pushea los dos objetos en el array creado en 1)
arrayObj1.push(obj1)
arrayObj1.push(obj2)

// haz un console.log del array
// console.log("Solución 1.a: ", arrayObj1)


///////////////////
// Ejercicio 2 ////
///////////////////


// 1) guardamos en una constante con querSelector el boton submit 
const button = document.querySelector('button[type="submit"]');

// 2) añade al botón submit un evento (listener) de tipo 'click' el cual llame a una función
button.addEventListener('click', validate);

// 3) creación de la función anterior. con parámetro por defecto (event)
function validate(event){
    // 4) event.preventDefault() -> para cortar el evento. si no, refresca la página debido a que se encuentra dentro de un form
    event.preventDefault();

    // 5) creamos una variable hasEmptyValues iniciándola a false. la cual será tru si algún input está vacío
    let hasEmptyValues = false;

    // 6) guardamos en una constante todos los elementos del formulario. a traves del objeto elments, dentro del objeto forms, dentro del objeto document
    const elementsForm = document.forms[0].elements;

    // 7) validamos cada uno de los inputs.
    // primer input a validar: con la const declarada en 6), accedemos al input 'name' y verificamos si tiene valor.
    // en caso de que el input no tenga valor, añadimos al atributo border "solid red" y ponemos la variable hasEmptyValues a true
    // en caso de que el input tenga valor, añadimos al atributo border "" (vacio)
    if(!elementsForm.name.value) {
        elementsForm.name.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.name.style.border = "";
    }

    // 8) idem con todos los inpunts

    // operador condicional ternario
    elementsForm.surname.style.border = (!elementsForm.surname.value) ? "solid red" : "";

    if(!elementsForm.telephone.value) {
        elementsForm.telephone.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.telephone.style.border = "";
    }
    if(!elementsForm.identityCard.value) {
        elementsForm.identityCard[0].parentNode.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.identityCard[0].parentNode.style.border = "";
    }
    if(!elementsForm.numberIdentityCard.value) {
        elementsForm.numberIdentityCard.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.numberIdentityCard.style.border = "";
    }
    if(!elementsForm.siblings.value) {
        elementsForm.siblings.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.siblings.style.border = "";
    }
    
    if(!elementsForm.futbol.checked && !elementsForm.basket.checked && !elementsForm.rugby.checked && !elementsForm.paddle.checked && !elementsForm.basque_ball.checked) {
        elementsForm.futbol.parentNode.parentNode.previousSibling.previousSibling.style.border = "solid red";
        hasEmptyValues = true;
    } else {
        elementsForm.futbol.parentNode.parentNode.previousSibling.previousSibling.style.border = "";
    }
    
    // 9) si hasEmptyValues es false -> creamos un objeto user con los valores de los inputs y los pasamos como parametro a una funcion nueva que crearemos que se llame "addPerson(user)""
    if(!hasEmptyValues){
        // 10) añadir los correspondientes clave:valor
        const user = {
            name: elementsForm.name.value,
            surname: elementsForm.surname.value,
            telephone: elementsForm.telephone.value,
            dninie: elementsForm.numberIdentityCard.value,
            sports: {
                futbol: elementsForm.futbol.checked,
                basket: elementsForm.basket.checked,
                rugby: elementsForm.rugby.checked,
                paddle: elementsForm.paddle.checked,
                basque_ball_: elementsForm.basque_ball.checked
            }
        }
        addPerson(user);
    }
}

// function addPerson(){
//     console.log("Persona a añadir");

// }

/////////////////
// Otro modo de validación de parámetros por JS 
// más conveniente ya que validamos el input cada vez que el usuario escribe algo
/////////////////

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');

// email.addEventListener('input', function (event) {
//   // Cada vez que el usuario escribe algo, verificamos si
//   // los campos del formulario son válidos.

//   if (email.validity.valid) {
//     // En caso de que haya un mensaje de error visible, si el campo
//     // es válido, eliminamos el mensaje de error.
//     emailError.innerHTML = ''; // Restablece el contenido del mensaje
//     emailError.className = 'error'; // Restablece el estado visual del mensaje
//   } else {
//     // Si todavía hay un error, muestra el error exacto
//     showError();
//   }
// });


/////////////////////
/// Ejercicio 3.1 ///
/////////////////////

// function addPerson(user){
//     // 1) Crea un elemento tr con el método createElement()
//     const trElement = document.createElement("TR");
//     // 2) Crea un elemento td con el método createElement()
//     const tdElem_1 = document.createElement("TD");
//     // 3) Crea un nodo texto con createTextNode() done el texto sea el nombre del usuario
//     const tdElem_1_text = document.createTextNode(user.name);
//     // 4) añade el nodo de texto al nodo del elemento td
//     tdElem_1.appendChild(tdElem_1_text);
//     // 5) añade el nodo del elemento td al nodeo del elemento tr creado en 1)
//     trElement.appendChild(tdElem_1);

//     // 6) repite los 5 pasos anteriores para cada uno de los campos que queremos añadir en la tabla
//     // salvo para los elementos de checkbox, que son los que se vana insertar en la última columna
//     const tdElem_2 = document.createElement("TD");
//     const tdElem_2_text = document.createTextNode(user.surname);
//     tdElem_2.appendChild(tdElem_2_text);
//     trElement.appendChild(tdElem_2);

//     const tdElem_3 = document.createElement("TD");
//     const tdElem_3_text = document.createTextNode(user.telephone);
//     tdElem_3.appendChild(tdElem_3_text);
//     trElement.appendChild(tdElem_3);

//     const tdElem_4 = document.createElement("TD");
//     const tdElem_4_text = document.createTextNode(user.dninie);
//     tdElem_4.appendChild(tdElem_4_text);
//     trElement.appendChild(tdElem_4);

//     // 7) declara una constante string vacia, que será la que se irá actualizando con los deportes que se haya seleccionado en el checkbox
//     let strSports = "";
//     const sports = user.sports;

//     // 8) bucle for in que recorra el objeto user.sports
//     // iremos añadiendo ahora, a la vrble declarada en 7), el string correspondiente en función de si la propiedad (el deporte) está a true o false
//     for(const property in sports){
//         let title = '';
//         if(sports[property]) {
//             switch (property) {
//                 case 'basket': title = 'Baloncesto'; break;
//                 case 'basque_ball_': title = 'Pelota vasca'; break;
//                 case 'futbol': title = 'Fútbol'; break;
//                 case 'paddle': title = 'Padel'; break;
//                 case 'rugby': title = 'Rugby'; break;
//             }
//             strSports += `${title}, `
//         }
//     }

//     // 9) crea un elemento td
//     const tdElem_5 = document.createElement("TD");
//     // 10) crea un nodo de tipo texto con el string final que se habia declarado en 7)
//     const tdElem_5_text = document.createTextNode(strSports.substring(0,strSports.length-2));
//     // 11) añade el nodo de texto al nodo del elemento td creado en 9)
//     tdElem_5.appendChild(tdElem_5_text);
//     // 12) añade el nodo del elemento td (creado en 11) al nodeo del elemento tr creado en 1)
//     trElement.appendChild(tdElem_5);

//     // 13) añade el elemento 1) tr al elemento tbody (seleccionalo con querySelector si no se ha seleccionado antes)
//     const tBodyElement = table2.querySelector('tbody');
//     tBodyElement.appendChild(trElement)
// }

/////////////////////
/// Ejercicio 3.2 ///
/////////////////////

function addPerson(user){
    console.log("Persona a añadir: ", user);

    const trElement = document.createElement("TR");
    let strSports = "";
    for(const prop in user) {
        if(prop === 'sports'){
            for(const property in user.sports){
                let title = '';
                if(user.sports[property]) {
                    switch (property) {
                        case 'basket': title = 'Baloncesto'; break;
                        case 'basque_ball_': title = 'Pelota vasca'; break;
                        case 'futbol': title = 'Fútbol'; break;
                        case 'paddle': title = 'Padel'; break;
                        case 'rugby': title = 'Rugby'; break;
                    }
                    strSports += `${title}, `
                }
            }
        } else {
            const tdElem_2 = document.createElement("TD");
            const tdElem_2_text = document.createTextNode(user[prop]);
            tdElem_2.appendChild(tdElem_2_text);
            trElement.appendChild(tdElem_2);

        }
    }


    // 9) crea un elemento td
    const tdElem_5 = document.createElement("TD");
    // 10) crea un nodo de tipo texto con el string final que se habia declarado en 7)
    const tdElem_5_text = document.createTextNode(strSports.substring(0,strSports.length-2));
    // 11) añade el nodo de texto al nodo del elemento td creado en 9)
    tdElem_5.appendChild(tdElem_5_text);
    // 12) añade el nodo del elemento td (creado en 11) al nodeo del elemento tr creado en 1)
    trElement.appendChild(tdElem_5);

    // 13) añade el elemento 1) tr al elemento tbody (seleccionalo con querySelector si no se ha seleccionado antes)
    table1.querySelector('tbody').appendChild(trElement)
}