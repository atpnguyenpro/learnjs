// function xacnhan(traloi){
//     var ketQua = "";
//     if (traloi){
//         ket qua = " tuyet voi , chuc ban chien thăng"
//     } else {
//         ketqua = " hen gap lai cac ban nhe!"
//     }
//     return ketqua;

// }

// var traloi = confirm ("ban se choi game chứ");
// var thongbao = xac nhan(traloi);
// alert(thongbao);

function delproduct(confirmResult){
     let message 
     if (confirmResult){
         message = " the product is del"
     } else {
         message = " no product is del "
     } return message
}
 let confirmResult = confirm('do u want del')
let msg = delproduct(confirmResult)
alert(msg)