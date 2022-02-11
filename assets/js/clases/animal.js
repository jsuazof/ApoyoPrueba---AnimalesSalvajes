class Animal {
    constructor (nombre, edad, img, comentarios, sonido){
       this._nombre = nombre; 
       this._edad = edad;
       this._img = img;
       this._comentarios = comentarios;
       this._sonido =  sonido; 

       
    } 
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get img(){
        return this._img;
    }
    get sonido(){
        return this._sonido;
    }
    get comentarios(){
        return this._comentarios;
    }
    set comentarios(value){
        this._comentarios(value);
    }
    set nombre(value){
        this._nombre(value);
    }
    set edad(value){
        this._edad(value);
    }
    set img(value){
        this._img(value);
    }
    set sonido(value){
        this._sonido(value);
    }


}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // rugir(){
    //     <audio src="../sounds/Rugido.mp3"></audio>

    // }
}
class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // aullar(){
    //     <audio src="../sounds/Aullido.mp3"></audio>
    // }
}
class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // grunir(){
    //     <audio src="../sounds/Grunido.mp3"></audio>
    // }
}
class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // sisear(){
    //     <audio src="../sounds/Siseo.mp3"></audio>
    // }
}
class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // chillar(){
    //     <audio src="../sounds/Chillido.mp3"></audio>
    // }
}

export {Leon, Lobo, Oso, Serpiente, Aguila}