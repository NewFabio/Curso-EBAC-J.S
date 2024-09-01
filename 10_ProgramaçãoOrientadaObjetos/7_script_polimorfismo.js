//Crie a classe animal
//Método emitirsom
//Crie duas classe derivadas: cachorro e gato
//Altere a emitirsom para cachorro e gato
//Crie a funçao fazerbarulho

class animal {
    emitirsom() {

    }
}
class cachorro extends animal {
    emitirsom() {
        return 'Au au!';
    }
}

class gato extends animal {
    emitirsom() {
        return 'Miau miau!';
    }
}

function fazerbarulho(animal) {
    console.log(animal.emitirsom());
}

const cachorro1 = new cachorro();
const gato1 = new gato();

fazerbarulho(cachorro1);
fazerbarulho(gato1);