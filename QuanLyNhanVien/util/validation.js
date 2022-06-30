
//Kiểm tra tài khoản phải từ 4-6 ký số:
function kiemTraTaiKhoan (value,selectorError,name, minValue, maxValue) {
    var regex = /^[0-9]+$/;
    if(regex.test(value) && value.length >= minValue && value.length <= maxValue){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name +' phải từ 4-6 ký số!';
    return false;
}

//Kiểm tra định dạng tên nhân viên:
function kiemTraHoTen (value,selectorError,name) {
    regexHoTen = /^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" + "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" + "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$/;
    if(regexHoTen.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name +' phải là chữ !';
    return false;
}

//Kiểm tra định dạng email:
function kiemTraEmail (value,selectorError,name) {
    regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<br>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexEmail.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải đúng định dạng! <br>Ví dụ: abc@gmail.com</br>';
    return false;
}

//Kiểm tra mật khẩu:
function kiemTraMatKhau (value,selectorError,name,minValue, maxValue) {
    regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if(regexPassword.test(value) && value.length >= minValue && value.length <= maxValue){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải từ '+ minValue + '-' + maxValue + ' ký tự.(Chứa ít nhất 1 ký tự số, 1 ký in hoa, 1 ký tự đặc biệt)!';
    return false;
}

//Kiểm tra ngày làm:
function kiemTraNgayLam (value,selectorError,name) {
    regexNgay = /^\d{2}\/\d{2}\/\d{4}$/;
    if(regexNgay.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + 'chưa đúng định dạng!';
    return false;
}

//Kiểm tra lương cơ bản
function kiemTraLuongCB (value,selectorError,name,minLuong,maxLuong) {
    if(Number(value) < minLuong || Number(value) > maxLuong) {
        document.querySelector(selectorError).innerHTML = name + ' phải từ '+ minLuong +' đến '+maxLuong 
        ;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

//Kiểm tra chức vụ:
function kiemTraChucVu (value,selectorError,name) {
    if (value === 'Chọn chức vụ'){
        document.querySelector(selectorError).innerHTML = name + ' phải được chọn hợp lệ (Sếp, Trưởng phòng, Nhân viên)!';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

//Kiểm tra giờ làm trong tháng:
function kiemTraGioLam (value,selectorError,name,minGio,maxGio) {
    if(Number(value) < minGio || Number(value) > maxGio) {
        document.querySelector(selectorError).innerHTML = name + ' phải từ '+ minGio +' đến '+ maxGio + 'giờ!'
        ;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}


