class UserFromPanic {
    private _id?: string;
    private _fullName: string;
    private _email: string;
    private _phone: string;
    private _isActive: boolean;
  
    constructor(fullName: string, email: string, phone: string, isActive: boolean, id?: string) {
      this._id = id;
      this._fullName = fullName;
      this._email = email;
      this._phone = phone;
      this._isActive = isActive;
    }
  
    get id(): string | undefined {
      return this._id;
    }
  
    set id(value: string | undefined) {
      this._id = value;
    }
  
    get fullName(): string {
      return this._fullName;
    }
  
    set fullName(value: string) {
      this._fullName = value;
    }
  
    get email(): string {
      return this._email;
    }
  
    set email(value: string) {
      this._email = value;
    }
  
    get phone(): string {
      return this._phone;
    }
  
    set phone(value: string) {
      this._phone = value;
    }
  
    get isActive(): boolean {
      return this._isActive;
    }
  
    set isActive(value: boolean) {
      this._isActive = value;
    }
  
    toJSON(): object {
      const userFromPanicOBJ: { id?: string; fullName: string; email: string; phone: string; isActive: boolean } = {
        email: this._email,
        fullName: this._fullName,
        isActive: this._isActive,
        phone: this._phone,
      };
      if (this._id !== undefined) {
        userFromPanicOBJ.id = this._id;
      }
      return userFromPanicOBJ;
    }
  
    static fromJSON(json: any): UserFromPanic {
      return new UserFromPanic(
        json.fullName,
        json.email,
        json.phone,
        json.isActive,
        json.id // assuming your JSON has an 'id' property
      );
    }
  }
  
  export default UserFromPanic;