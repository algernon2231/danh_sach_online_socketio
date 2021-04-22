const socket = io();
socket.on('server-gui-ds',data => {
   
    $('#ds').html('');
    data.map((ds,key) => {
        $('#ds').append(`
        <div class="hocvien">
            <div class="hang1">id:${key + 1} || <span>${ds.hoten}</span></div>
            <div class="hang2">${ds.email}- ${ds.dienthoai}</div>
        </div>
        `)
    });
});

$('#btnInfo').click(function(){
    socket.emit('hocvien-gui-thongtin',{
        hoten:$('#txtHoTen').val(),
        email:$('#txtEmail').val(),
        dienthoai:$('#txtDienThoai').val()
    });
    $('#txtHoTen').val('');
    $('#txtEmail').val('');
    $('#txtDienThoai').val('');
})