document.addEventListener("DOMContentLoaded", function() {
    var soVeNguoiLon = document.getElementById("soVeNguoiLon");
    var soVeTreEm = document.getElementById("soVeTreEm");
    var giaVeNguoiLon = document.getElementById("giaVeNguoiLon");
    var giaVeTreEm = document.getElementById("giaVeTreEm");
    var tongGia = document.getElementById("tongGia");
    var btnXacNhanThanhToan = document.getElementById("btnXacNhanThanhToan");

    soVeNguoiLon.addEventListener("input", tinhTien);
    soVeTreEm.addEventListener("input", tinhTien);

    function tinhTien() {
        var soVeNguoiLonValue = parseInt(soVeNguoiLon.value) || 0;
        var soVeTreEmValue = parseInt(soVeTreEm.value) || 0;
        var donGiaNguoiLon = 1100000; // Đơn giá vé người lớn
        var donGiaTreEm = 800000; // Đơn giá vé trẻ em

        if (soVeNguoiLonValue < 0 || soVeTreEmValue < 0) {
            alert("Số lượng vé không được nhỏ hơn 0.");
            return;
        }

        var giaVeNguoiLonValue = donGiaNguoiLon * soVeNguoiLonValue;
        var giaVeTreEmValue = donGiaTreEm * soVeTreEmValue;
        var tongGiaValue = giaVeNguoiLonValue + giaVeTreEmValue;

        giaVeNguoiLon.innerHTML = giaVeNguoiLonValue.toLocaleString() + " VNĐ";
        giaVeTreEm.innerHTML = giaVeTreEmValue.toLocaleString() + " VNĐ";
        tongGia.innerHTML = tongGiaValue.toLocaleString() + " VNĐ";

        btnXacNhanThanhToan.innerHTML = "Xác nhận thanh toán " + tongGia.innerHTML;
        btnXacNhanThanhToan.disabled = false;
    }
    
    btnXacNhanThanhToan.addEventListener("click", function() {
        var tongGiaValue = tongGia.innerHTML.replace(" VNĐ", "").replace(/,/g, "");
        var linkThanhToan = "404.html?gia=" + tongGiaValue;
        window.location.href = linkThanhToan;
    });

    tinhTien();
});
