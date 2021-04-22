const express =require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const { isObject } = require('util');
const io = new Server(server);

app.set('view engine','ejs');
app.set('views',"./views");
app.use(express.static('public'));

let mang= [];

io.on('connection',(socket) => {
    // console.log('A user connected ' + socket.id);
    socket.on('hocvien-gui-thongtin',data => {
        mang.push(new HocVien(data.hoten,data.email,data.dienthoai));
         io.sockets.emit('server-gui-ds',mang);
    })


})

function HocVien(hoten,email,dienthoai){
    this.hoten = hoten;
    this.email = email;
    this.dienthoai = dienthoai;
}

app.get('/',(req,res) => {
    res.render('trangchu');
});


server.listen(3000,() => console.log('Server is running at port 3000...'));