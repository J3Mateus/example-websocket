import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import User from "../model/user";

class ManagerUser {
    private connectedUsers: User[];

    constructor(users: User[]){
        this.connectedUsers = users
    }
    public disconnectUser(userID: string):  User[] {
        this.connectedUsers = this.connectedUsers.filter(user => user.getUserId() !== userID);
        return this.connectedUsers
    }  
}

export default ManagerUser;