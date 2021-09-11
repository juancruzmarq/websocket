//referencia html

const lblOnline = document.querySelector('#online');
const lblOffline = document.querySelector('#offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect', () =>{
    //console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () =>{
    //console.log('desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) =>{
    
    console.log(payload);

});

btnEnviar.addEventListener('click', (payload)=>{
    const mensaje = txtMensaje.value;
    
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log('desde el server', id);
    });
    
})

