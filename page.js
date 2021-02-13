
/////////////////
// Ejercicio 1 //
/////////////////

// 1) declara un array donde vamos a guardar los objetos

// 2) selecciona con queryselector el elemento tabla y guardalo en una variable

// 3) selecciona con queryselectorAll los elementos th y guardalos en una variable (array)
// obtendremos los elemenos que serán las claves de los objetos que irán dentro del array

// 4) guarda en dos vrbles diferentes
// a) todos los elementos td del primer elemento tr del body de la tabla
// b) todos los elementos td del segundo elemento tr del body de la tabla
// obtendremos elemenos que serán los valores de mis objetos
const trElements = table1.querySelector('tbody').querySelectorAll('tr');


// 5) crea dos variables de objeto vacias, uno para cada fila de la tabla

// 6) haz un bucle for que se recorra 5 veces
// en cada iteración iremos añadiendo pares de clave=valor a cada objeto creado en 4.a y 4.b
// donde las claves serán el contenido html de los elementos obtenidos en 3) y los valores los contenidos html obtenidos en 4.a y 4.b 


// 7) pushea los dos objetos en el array creado en 1)

// 8) haz un console.log del array


/////////////////
// Ejercicio 2 //
/////////////////

// 1) utilizar el método querSelector y guardar en una constante el boton submit 

// 2) añade al botón submit del paso 1) un evento (listener) de tipo 'click' el cual llame a una función

// 3) creación de la función anterior. con parámetro por defecto (event)
function validate(event){
    // 4) event.preventDefault() -> para cortar el evento. si no, refresca la página debido a que se encuentra dentro de un form
    event.preventDefault();

    // 5) creamos una variable hasEmptyValues iniciándola a false. la cual será true si algún input está vacío
    let hasEmptyValues = false;

    // 6) guardamos en una constante todos los elementos del formulario. a traves del objeto elments, dentro del objeto forms, dentro del objeto document

    // 7) validamos cada uno de los inputs.
    // primer input a validar: con la const declarada en 6), accedemos al input 'name' y verificamos si tiene valor.
    // en caso de que el input no tenga valor, añadimos al atributo border "solid red" y ponemos la variable hasEmptyValues a true
    // en caso de que el input tenga valor, añadimos al atributo border "" (vacio)
  

    // 8) idem con todos los inpunts

    
    // 9) si hasEmptyValues es false -> creamos un objeto user con los valores de los inputs y los pasamos como parametro a una funcion nueva que crearemos que se llame "addPerson(user)""
    if(!hasEmptyValues){
        const user = {
            // 10) añadir los correspondientes clave:valor
        }
        addPerson(user);
    }
}


/////////////////
// Ejercicio 3 //
/////////////////
function addPerson(user){
    console.log("Persona a añadir: ", user);

    // 1) Crea un elemento tr con el método createElement()

    // 2) Crea un elemento td con el método createElement()

    // 3) Crea un nodo texto con createTextNode() done el texto sea el nombre del usuario

    // 4) añade el nodo de texto al nodo del elemento td
 
    // 5) añade el nodo del elemento td al nodeo del elemento tr creado en 1)


    // 6) repite los 5 pasos anteriores para cada uno de los campos que queremos añadir en la tabla
    // salvo para los elementos de checkbox, que son los que se vana insertar en la última columna


    // 7) declara una constante string vacia, que será la que se irá actualizando con los deportes que se haya seleccionado en el checkbox
    let strSports = "";

    // 8) bucle for in que recorra el objeto user.sports
    // iremos añadiendo ahora, a la vrble declarada en 7), el string correspondiente en función de si la propiedad (el deporte) está a true o false


    // 9) crea un elemento td

    // 10) crea un nodo de tipo texto con el string final que se habia declarado en 7)

    // 11) añade el nodo de texto al nodo del elemento td creado en 9)

    // 12) añade el nodo del elemento td (creado en 11) al nodeo del elemento tr creado en 1)

    // 13) añade el elemento 1) tr al elemento tbody (seleccionalo con querySelector si no se ha seleccionado antes)
}