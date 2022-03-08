const capybaras2=[
    {nombre: "A ver"}
]


module.exports = class Capybara2 {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        capybaras2.push(this);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return capybaras2;
    }
}
