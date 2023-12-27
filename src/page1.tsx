import './App.css'

import { io } from 'socket.io-client';
import ApiRequest from './utils/request';
import AuthConfig from './utils/types/authConfig';

const socket = io("http://localhost:3001", {
  transports: ['websocket'], // Required when using Vite      
});

function Page1() {

  const handleCreateAlert = async () => {
    try {
      const requestFromToken = new ApiRequest('http://localhost:8000')

      const data: object = {
        "email": "henrique.pacheco@gmail.com",
        "password": "adminadmin"
      }

      const responseFromToken = await requestFromToken.post<{ refresh: string, access: string }>('api/auth/token/login', data);

      const tokenAuthConfig: AuthConfig = {
        type: 'token',
        token: responseFromToken.access,
      };

      const requestFromListAlert = new ApiRequest('http://localhost:8000', tokenAuthConfig)

      const responseFromListAlert = await requestFromListAlert.post<{ id: string }>('api/button/create/')
      console.log("Sala criada com sucesso")
      console.log(responseFromListAlert.id)
      socket.emit('create_room', responseFromListAlert.id)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Erro desconhecido:', JSON.stringify(error));
      }
    }

  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleCreateAlert}>Lançar Alerta</button>
        </div>
      </div>
    </>
  )
}

export default Page1
