var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
state : "Name",
details : "Name",

assets : {
large_image : "The name of the avatar that was uploaded", 
large_text : "Sheesh",
small_image : "The name of the avatar that was uploaded",
small_text : "Sheesh",
},
buttons : [
    {label : "My Steam." , url : "link"},
    {label : "My GitHub.",url : "link"},
]
}   
})
})
client.login({ clientId : "APPLICATION ID" }).catch(console.error);
