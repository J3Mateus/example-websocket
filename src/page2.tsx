import { useState, useEffect } from 'react'
import './App.css'

import { io } from 'socket.io-client';
import ApiRequest from './utils/request';
import AuthConfig from './utils/types/authConfig';

const socket = io("http://localhost:3001", {
    transports: ['websocket'], // Required when using Vite      
});

function Page2() {

    const [listAlert, setListAlert] = useState<any[]>([])
    const [status, setStatus] = useState<Array<{ label: string, value: string }>>([]);
    const [alertSelect, setAlertSelect] = useState<string>("");

    useEffect(() => {
        async function searchData() {

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

                const responseFromListStatus = await requestFromListAlert.get<Array<{ label: string, value: string }>>('api/button/get/list/status', responseFromToken.access)
                setStatus(responseFromListStatus)
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('Erro desconhecido:', JSON.stringify(error));
                }
            }
        }
        searchData()
    }, [])

    useEffect(() => {
        socket.on('list_alert', (listAlert) => {
            setListAlert(listAlert)
        })

        socket.on('connect', () => {
            console.log('Conectado ao servidor WebSocket');
        });

        socket.on('disconnect', () => {
            console.log('Desconectado do servidor WebSocket');
        });

    }, [socket]);


    const handleButtonAlert = (uuid: string) => {
       // socket.emit("join_room_alert", uuid)
       /// setAlertSelect(uuid)
    }
    
    const handleSelect = (event: { target: { value: any; }; }) => {
        const data = {
            "room": alertSelect,
            "status": event.target.value
        }
        socket.emit("status_update", data)
    }

    return (
        <>
            <div>
                <ol>
                    {listAlert && (
                        listAlert.map((alert, key) => {
                            return (
                                <>
                                    <p>Nome da escola</p>
                                    <li key={key}>{alert.id}</li>
                                    <button onClick={() => { handleButtonAlert(alert.id) }}>Abrir Alerta</button>
                                </>
                            )
                        })
                    )}


                </ol>

                {alertSelect && (
                    <>
                        <select onChange={handleSelect} name="status">
                            {status.map((status, index) => {
                                return (
                                    <option key={index} value={status.value}>
                                        {status.label}
                                    </option>
                                );
                            }
                            )}
                        </select>
                        <button>Atualizar alerta</button>
                    </>
                )
                }

            </div>
        </>
    )
}

export default Page2
