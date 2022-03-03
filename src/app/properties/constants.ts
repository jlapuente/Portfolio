export class Sheet {
  id: number;
  profileImg?: string;
  img?: string;
  fullName: string;
  job?: string;
  nationality: string;
  personality?: string;
  age?: string;
  hw?: string;
  physicalDesc?: string;
  atributos: Map<string, string>
  socialNetwork: string;
  occupancy: string;
  role: string;

  constructor(){
    console.log("he entrado al constructor");
    this.atributos = new Map<string, string>();
    this.atributos.set("Prueba", "90%");
  }
}

export class CONSTANTS {
  
  
}
