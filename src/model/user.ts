class User {
    private userId: string;
    private username?: string;
  
    constructor(userId: string, username?: string) {
      this.userId = userId;
      this.username = username;
    }
  
    getUserId(): string {
      return this.userId;
    }
  
    getUsername(): string | undefined {
      return this.username;
    }
  
    toJSON(): object {
      const userObject: { userId: string; username?: string } = {
        userId: this.userId,
      };
  
      if (this.username !== undefined) {
        userObject.username = this.username;
      }
  
      return userObject;
    }
  }
  
  export default User;
  