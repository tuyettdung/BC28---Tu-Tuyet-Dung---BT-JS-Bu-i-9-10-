function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = 0;
    this.luongCB = 0;
    this.chucVu = '';
    this.gioLamThang = 0;

    this.tinhTongLuong = function () {
        var tongLuong = 0;
        if (this.chucVu === 'Sếp') {
            tongLuong = this.luongCB * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            tongLuong = this.luongCB * 2;
        } else {
            tongLuong = this.luongCB * 1;
        }
        return tongLuong.toLocaleString();
    };

    this.loaiNV = function () {
        var xepLoai = '';
        if (this.gioLamThang >= 192) {
            xepLoai = 'Nhân viên xuất sắc';
        } else if (this.gioLamThang >= 176 && this.gioLamThang < 192) {
            xepLoai = 'Nhân viên giỏi';
        } else if (this.gioLamThang >= 160 && this.gioLamThang < 176) {
            xepLoai = 'Nhân viên khá';
        } else if (this.gioLamThang < 160) {
            xepLoai = 'Nhân viên trung bình';
        }
        return xepLoai;
    };
}