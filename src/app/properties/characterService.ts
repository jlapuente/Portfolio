import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/';
import { CONSTANTS, Sheet } from 'src/app/properties/constants';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  characters: Sheet[] = [];

  getCharacters() {
    let characters = [];
    let character = new Sheet();
    character.id = 0;
    character.age = "25 años";
    character.fullName = "Jaden Falcone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/uneventide-1395771101528084487-20210521_175857-img1.jpg";
    character.job = "Lider y cerebro de la banda";
    character.nationality = "Italiano en Tokyo desde hace 10 años";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/uneventide-1391407623396802561-20210509_170003-img1.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 87%";
    character.role = "Activo"

    let atributos = new Map<string, string>();
    atributos.set('Dominancia', '80%');
    atributos.set('Apetito Sexual', '85%');
    atributos.set('Resistencia', '90%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')

    character.atributos = atributos;

    characters.push(character);
    return characters;
  }
  generateCharacters() {
    this.characters = [];
    let character = new Sheet();
    character.id = 0;
    character.age = "25 años";
    character.fullName = "Jaden Falcone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/uneventide-1395771101528084487-20210521_175857-img1.jpg";
    character.job = "Lider y cerebro de la banda";
    character.nationality = "Italiano en Tokyo desde hace 10 años";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/uneventide-1391407623396802561-20210509_170003-img1.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 87%";
    character.role = "Activo"

    let atributos = new Map<string, string>();
    atributos.set('Dominancia', '80%');
    atributos.set('Apetito Sexual', '85%');
    atributos.set('Resistencia', '90%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')

    character.atributos = atributos;
    this.characters.push(character);

    // Segundo personaje
    character = new Sheet();
    character.id = 1;
    character.age = "22 años";
    character.fullName = "Robert Calderone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/E-XSbPsXsAQWMei.jpg";
    character.job = "Guardaespaldas y jefe de seguridad";
    character.nationality = "Neoyorquino y hermano de Marcus";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/08d808546dc9c9b7d3adbb7fe43c2b71.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 70%";
    character.role = "Versatil / Activo"
  
    atributos = new Map<string, string>();
    atributos.set('Dominancia', '80%');
    atributos.set('Apetito Sexual', '85%');
    atributos.set('Resistencia', '90%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')
  
    character.atributos = atributos;
  
    this.characters.push(character);
    // Tercer personaje
    character = new Sheet();
    character.id = 2;
    character.age = "29 años";
    character.fullName = "Marcus Calderone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/E-XRzQ5XsAIcHDr.jpg";
    character.job = "Guardaespaldas";
    character.nationality = "Neoyorquino y hermano de Robert";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/artworks-3tny3jCFZSDs1QRk-sEddyw-t500x500.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 40%";
    character.role = "Versatil / Pasivo"
  
    atributos = new Map<string, string>();
    atributos.set('Dominancia', '40%');
    atributos.set('Apetito Sexual', '60%');
    atributos.set('Resistencia', '70%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')
  
    character.atributos = atributos;
  
    this.characters.push(character);
    
    // Cuarto personaje
    character = new Sheet();
    character.id = 3;
    character.age = "29 años";
    character.fullName = "Marcus Calderone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/E-XRzQ5XsAIcHDr.jpg";
    character.job = "Guardaespaldas";
    character.nationality = "Neoyorquino y hermano de Robert";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/92943.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 40%";
    character.role = "Versatil / Pasivo"
  
    atributos = new Map<string, string>();
    atributos.set('Dominancia', '40%');
    atributos.set('Apetito Sexual', '60%');
    atributos.set('Resistencia', '70%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')
  
    character.atributos = atributos;
  
    this.characters.push(character);

    // Quinto personaje
    character = new Sheet();
    character.id = 4;
    character.age = "29 años";
    character.fullName = "Marcus Calderone";
    character.hw = "1.78M, 70KG"
    character.img = "../../assets/img/EvelR18WQAUiDrD.jpg";
    character.job = "Guardaespaldas";
    character.nationality = "Neoyorquino y hermano de Robert";
    character.personality = " Jaden es un chico manipulador, egocentrico, sadico y hace un uso muy habil de la mentira; es el tipo de persona del que no conviene fiarte. Se suele presentar como alguien amable, cariñoso e incluso feminista pero esto es solo un disfraz para poder acercarse mas a sus posibles presas. En la linea de lo anterior es habitual ver a Jaden subir stories a Instagram promocionando imagenes o manifestaciones feministas. <br> Tras años de entrenamiento ha logrado perfeccionar la tecnica del hipnotismo, inicialmente solo lo usaba para los espectaculos del club pero, cuando vio que podia sacarle mas partido que ese, no dudó en aprovecharlo."
    character.physicalDesc = "Falcone entrena boxeo en sus ratos libres, de hecho, lleva años haciendolo y eso le ha proporcionado una gran resistencia asi como un cuerpo bastante tonificado. No tiene unos musculos especialmente grandes pero si que están muy definidos. <br> En su torso no hay un solo pelo con la excepción de sus sobacos los cuales no se ha depilado en la vida(Aunque tampoco tiene excesivo vello en ellos). Jaden tiene un miembro notablemente mayor que la media(23cm) y ademas no su anchura tampoco deja nada que desear siendo esta mediana. Sus huevos cuelgan bastante, como los de un animal.Su pelvis suele estar depilada asi como sus huevos."
    character.profileImg = "../../assets/img/gandalf-design-gandalf-design-phoenix-project-thumbnail.jpg";
    character.socialNetwork = "@BlackBullsClub_";
    character.occupancy = "Activity Level: 40%";
    character.role = "Versatil / Pasivo"
  
    atributos = new Map<string, string>();
    atributos.set('Dominancia', '40%');
    atributos.set('Apetito Sexual', '60%');
    atributos.set('Resistencia', '70%');
    atributos.set('Temporal', '20%')
    atributos.set('Temporal_2', '12%')
  
    character.atributos = atributos;
  
    this.characters.push(character);
  }

  constructor(){
    this.generateCharacters();
  }

  getCharById(id: number) {
    console.log("He recibido el id: " + id)
    console.log("Hay : " + this.characters.length)
    let char = this.characters.find(sheet => sheet.id == id);
    console.log("Devuelvo: " + char);
    return char;

  }

}
