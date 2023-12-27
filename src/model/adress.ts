class Address {
    private _zipCode: string;
    private _district: string;
    private _uf: string;
    private _location: string;
    private _publicArea: string;
  
    constructor(data: {
      zipCode: string;
      district: string;
      uf: string;
      location: string;
      publicArea: string;
    }) {
      this._zipCode = data.zipCode;
      this._district = data.district;
      this._uf = data.uf;
      this._location = data.location;
      this._publicArea = data.publicArea;
    }
  
    get zipCode(): string {
      return this._zipCode;
    }
  
    set zipCode(value: string) {
      this._zipCode = value;
    }
  
    get district(): string {
      return this._district;
    }
  
    set district(value: string) {
      this._district = value;
    }
  
    get uf(): string {
      return this._uf;
    }
  
    set uf(value: string) {
      this._uf = value;
    }
  
    get location(): string {
      return this._location;
    }
  
    set location(value: string) {
      this._location = value;
    }
  
    get publicArea(): string {
      return this._publicArea;
    }
  
    set publicArea(value: string) {
      this._publicArea = value;
    }
  
    static fromJSON(json: any): Address {
      return new Address({
        zipCode: json.zipCode,
        district: json.district,
        uf: json.uf,
        location: json.location,
        publicArea: json.publicArea,
      });
    }
  
    toJSON(): any {
      return {
        zipCode: this._zipCode,
        district: this._district,
        uf: this._uf,
        location: this._location,
        publicArea: this._publicArea,
      };
    }
  }

  export default Address;