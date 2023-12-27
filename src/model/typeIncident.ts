enum TYPE_INCIDENT {
    nao_informado = "Não informado",
    incendio = "Incêndio",
    briga = "Briga",
    invasao_armada = "Invasão Armada",
  }
  
  enum TYPE_INCIDENT_CODE {
    INCENDIO_CODE = "incendio",
    BRIGA_CODE = "briga",
    INVASAO_ARMADA_CODE = "invasao_armada",
    NAO_INFORMADO_CODE = "nao_informado",
  }
  
  class TypeIncident {
    private _name: string;
    private _code: string;
  
    constructor(name: string, code: string) {
      this._code = code;
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get code(): string {
      return this._code;
    }
  
    set code(value: string) {
      this._code = value;
    }
  
    toJSON(): object {
      const typeIncidentOBJ: { name: string; code: string } = {
        name: this._name,
        code: this._code,
      };
  
      return typeIncidentOBJ;
    }
  
    static fromJSON(json: any): TypeIncident {
      return new TypeIncident(json.name, json.code);
    }
  }
  export default TypeIncident;
  