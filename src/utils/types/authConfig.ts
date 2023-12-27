type AuthConfig = {
    type: 'basic' | 'token';
    username?: string;
    password?: string;
    token?: string;
};
  
export default AuthConfig ;