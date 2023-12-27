import COP from "./cop";
import School from "./school";
import TypeIncident from "./typeIncident";
import UserFromPanic from "./userFromPanic";

class Alert {
   private _typeIncident: TypeIncident;
   private _teacher: UserFromPanic;
   private _school: School;
   private _cop: COP;
   private _responsible: UserFromPanic;
   private _description: string;
   private _problemSolving: string;

   constructor(
      typeIncident: TypeIncident,
      teacher: UserFromPanic,
      school: School,
      cop: COP,
      responsible: UserFromPanic,
      description: string,
      problemSolving: string
   ) {
      this._typeIncident = typeIncident;
      this._teacher = teacher;
      this._school = school;
      this._cop = cop;
      this._responsible = responsible;
      this._description = description;
      this._problemSolving = problemSolving;
   }

   get typeIncident(): TypeIncident {
      return this._typeIncident;
   }

   get teacher(): UserFromPanic {
      return this._teacher;
   }

   get school(): School {
      return this._school;
   }

   get cop(): COP {
      return this._cop;
   }

   get responsible(): UserFromPanic {
      return this._responsible;
   }

   get description(): string {
      return this._description;
   }

   get problemSolving(): string {
      return this._problemSolving;
   }

   set typeIncident(typeIncident: TypeIncident) {
      this._typeIncident = typeIncident;
   }

   set teacher(teacher: UserFromPanic) {
      this._teacher = teacher;
   }

   set school(school: School) {
      this._school = school;
   }

   set cop(cop: COP) {
      this._cop = cop;
   }

   set responsible(responsible: UserFromPanic) {
      this._responsible = responsible;
   }

   set description(description: string) {
      this._description = description;
   }

   set problemSolving(problemSolving: string) {
      this._problemSolving = problemSolving;
   }

   toJSON(): object {
      return {
         typeIncident: this._typeIncident,
         teacher: this._teacher,
         school: this._school,
         cop: this._cop,
         responsible: this._responsible,
         description: this._description,
         problemSolving: this._problemSolving,
      };
   }

   static fromJSON(json: any): Alert {
      return new Alert(
        json.typeIncident,
        json.teacher,
        json.school,
        json.cop,
        json.responsible,
        json.description,
        json.problemSolving
      );
   }
}

export default Alert;
