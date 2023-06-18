// Thiết lập cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Đăng ký
function register() {
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    var email = document.getElementById("register-email").value;
    var phone = document.getElementById("register-phone").value;

    // Kiểm tra định dạng email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ!");
        return;
    }

    // Kiểm tra định dạng số điện thoại
    var phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert("Vui lòng nhập một số điện thoại hợp lệ!");
        return;
    }

    setCookie("loginInfo", username + "|" + password, 7);
    alert("Đăng ký thành công!");
}

// Kiểm tra đăng nhập và chuyển hướng đến trang chủ
function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var cookieValue = document.cookie;
    if (cookieValue.includes("loginInfo=" + username + "|" + password)) {
        alert("Đăng nhập thành công!");
        window.location.href = "../index.html"; // Thay đổi tên trang đích thành "trang-chu.html"
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}
