import { instancia1, instancia2} from "./axios";

export const registerRequest = (user) => instancia1.post('/register', user);

export const loginRequest = user => instancia1.post('/login', user);
  
export const verifyTokenRequest = () => instancia2.get('/verify');
