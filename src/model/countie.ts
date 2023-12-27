class Countie {
    private _id: string;
    private _name: string;
    private _code: string;
  
    constructor(data: { id: string; name: string; code: string }) {
      this._id = data.id;
      this._name = data.name;
      this._code = data.code;
    }
  
    get id(): string {
      return this._id;
    }
  
    set id(value: string) {
      this._id = value;
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
  
    static fromJSON(json: any): Countie {
      return new Countie({
        id: json.id,
        name: json.name,
        code: json.code,
      });
    }
  
    toJSON(): object {
      return {
        id: this._id,
        name: this._name,
        code: this._code,
      };
    }
  }

  export default Countie;