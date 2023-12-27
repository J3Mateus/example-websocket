import Address from "./adress";
import Countie from "./countie";
import UserFromPanic from "./userFromPanic";

class School {
    private _id?: string;
    private _responsible: UserFromPanic;
    private _name: string;
    private _geolocation: string;
    private _address: Address;
    private _countie: Countie;
    private _isDeleted: boolean;

    constructor(data:{id?: string, responsible: UserFromPanic,name: string, geolocation: string,address: Address, countie: Countie, isDeleted: boolean}){
        this._id = data.id;
        this._responsible = data.responsible;
        this._address = data.address;
        this._name = data.name;
        this._geolocation = data.geolocation;
        this._countie = data.countie;
        this._isDeleted = data.isDeleted;
    }

    get id(): string | undefined {
        return this._id;
    }
    
    set id(value: string) {
        this._id = value;
    }

    get responsible(): UserFromPanic {
        return this._responsible;
    }

    set responsible(value: UserFromPanic) {
        this._responsible = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get geolocation(): string {
        return this._geolocation;
    }

    set geolocation(value: string){
        this._geolocation = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address){
        this._address = value;
    }

    get countie(): Countie {
        return this._countie;
    }

    set countie(value: Countie){
        this._countie = value;
    }

    get isDeleted(): boolean {
        return this._isDeleted;
    }

    set isDeleted(value: boolean){
        this._isDeleted = value;
    }

    static fromJSON(json: any): School {
        return new School({
          id: json.id,
          name: json.name,
          address : json.address,
          countie: json.countie,
          geolocation: json.geolocation,
          isDeleted: json.isDeleted,
          responsible: json.responsible,
        });
      }
    
      toJSON(): object {
        return {
          id: this._id,
          name: this._name,
          address: this._address,
          countie: this._countie,
          geolocation: this._geolocation,
          responsible: this._responsible,
          isDeleted: this._isDeleted,
        };
      }
}

export default School;