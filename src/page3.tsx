import { useState, useEffect } from 'react'
import './App.css'

import { io } from 'socket.io-client';

const socket = io("http://localhost:3001", {
    transports: ['websocket'], // Required when using Vite      
});

function Page3() {

    const [alert, setAlert] = useState<any>({})
    const [status, setStatus ] =useState<string>("")

    useEffect(() => {

        function onNewAlert(menssagem: any) {
            console.log("Novo alerta")
            console.log(menssagem);
            socket.emit("join_room_alert",menssagem.id)
            setStatus(menssagem.status)
            setAlert(menssagem);
        }
        socket.emit("join_room")

        socket.on('new_alert', onNewAlert)

        socket.on("new_status",(menssagem)=>{
            console.log("Novo stauts",menssagem)
            setStatus(menssagem)
        })

        socket.on('connect', () => {
            console.log('Conectado ao servidor WebSocket');
        });

        socket.on('disconnect', () => {
            console.log('Desconectado do servidor WebSocket');
        });

    }, [socket]);

    return (
        <>
            <div>
                <h3>Alerta ativo: {alert.school?.name}</h3>
                <h3>Status: {status}</h3>
            </div>
        </>
    )
}

export default Page3

