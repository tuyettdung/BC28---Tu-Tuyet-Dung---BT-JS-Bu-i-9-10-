//Tạo mảng chwusa các object Nhân viên:
var mangNhanVien = [];

//Tạo sự kiện thêm nhân viên vào bảng:
document.querySelector('#btnThemNV').onclick = function () {
    //input: thông tin nv: NhanVien
    var nv = new NhanVien();
    //Lấy thông tin từ giao diện đưa vào input nv:
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLamThang = document.querySelector('#gioLam').value;

    //Validation:
    var valid = true;
    //Kiểm tra định dạng Tài khoản, Họ tên,Email, Mật khẩu, Ngày làm, Lương cơ bản:
    valid &= kiemTraTaiKhoan(nv.taiKhoan,'#error_taiKhoan','Tài khoản',4,6) & kiemTraHoTen(nv.hoTen,'#error_hoTen','Họ và tên') & kiemTraEmail(nv.email,'#error_email','Email') & kiemTraMatKhau(nv.matKhau,'#error_matKhau','Mật khẩu',6,10) & kiemTraLuongCB(nv.luongCB,'#error_luongCB', 'Lương cơ bản',1000000,20000000) & kiemTraChucVu(nv.chucVu,'#error_chucVu','Chức vụ') & kiemTraGioLam(nv.gioLamThang,'#error_gioLam','Giờ làm',80,200) & kiemTraNgayLam(nv.ngayLam,'#error_ngayLam','Ngày làm');

    if(!!!valid){
        return;
    };

    //Thêm nv vào mảng nhân viên:
    mangNhanVien.push(nv);
    //Gọi hàm để thêm nhân viên vào table:
    tableNhanVien(mangNhanVien);
}

//Tạo ra table chứa thông tin Nhân viên:
function tableNhanVien(arrNhanVien) {
    //output: chuỗi các tr:
    var htmlContent = '';
    for (var index = 0; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];
        var tr = `
           <tr>
              <td>${nv.taiKhoan}</td>
              <td>${nv.hoTen}</td>
              <td>${nv.email}</td>
              <td>${nv.ngayLam}</td>
              <td>${nv.chucVu}</td>
              <td>${nv.tinhTongLuong()}</td>
              <td>${nv.loaiNV()}</td>
              <td>
                 <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" >Sửa</button>
                 <button class="btn btn-danger " onclick="xoaNhanVien('${nv.taiKhoan}')" >Xóa</button>
              </td>
           </tr>
        `
        htmlContent += tr;
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlContent;
}


//Chức năng xóa Nhân viên:
function xoaNhanVien(taiKhoan) {
    var viTriXoa = -1;
    for (var index=0; index < mangNhanVien.length; index++){
        var nhanVien = mangNhanVien[index];
        if(nhanVien.taiKhoan === taiKhoan){
            viTriXoa = index;
            break;
        }
    }
    mangNhanVien.splice(viTriXoa, 1);
    tableNhanVien(mangNhanVien);
}

//Chức năng cập nhật Nhân viên:
document.querySelector('#btnCapNhat').onclick = function () {
    //Lấy dữ liệu từ người dùng nhập vào sau khi chỉnh sửa:
    var nhanVienCapNhat = NhanVien();
    nhanVienCapNhat.taiKhoan = document.querySelector('#tknv').value;
    nhanVienCapNhat.hoTen = document.querySelector('#name').value;
    nhanVienCapNhat.email = document.querySelector('#email').value;
    nhanVienCapNhat.matKhau = document.querySelector('#password').value;
    nhanVienCapNhat.ngayLam = document.querySelector('#datepicker').value;
    nhanVienCapNhat.luongCB = document.querySelector('#luongCB').value;
    nhanVienCapNhat.chucVu = document.querySelector('#chucvu').value;
    nhanVienCapNhat.gioLamThang = document.querySelector('#gioLam').value;
    //Duyệt qua mảng tìm ra object nhân viên cần cập nhật:
    for (var index = 0; index < mangNhanVien.length; index++) {
        var nvMang = mangNhanVien[index];
        if (nvMang.taiKhoan === nhanVienCapNhat.taiKhoan) {
            nvMang.hoTen = nhanVienCapNhat.hoTen;
            nvMang.email = nhanVienCapNhat.email;
            nvMang.matKhau = nhanVienCapNhat.matKhau;
            nvMang.ngayLam = nhanVienCapNhat.ngayLam;
            nvMang.luongCB = nhanVienCapNhat.chucVu;
            nvMang.gioLamThang = nhanVienCapNhat.gioLamThang;
        }
    }
}