export interface IAuthService {
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<any>;
    register(registerDto: any): Promise<any>;
}
