function Kiemtra(){
	var hoten = document.getElementById('hoten').value;
	var tentk = document.getElementById('tentk').value;
	var sdt = document.getElementById('sdt').value;
	var email = document.getElementById('email').value;
	check_tentk = /^[a-zA-Z0-9]{2,20}$/;
	check_sdt = /^[0-9]{10}$/;
	check_hoten = /^[a-zA-Z]{3,20}$/;
	check_email =/[A-Z0-9._+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;


	if( hoten =="" ){
			document.getElementById('1').innerText = "Không đc trống!" ;
			return false;

	}else{
		if(check_hoten.test(hoten)){
			document.getElementById('1').innerText = "Hợp lệ!" ;
		}else{
			document.getElementById('1').innerText = "Họ tên phải là chữ, ko dấu!";
			return false;
		}
	}

	if( tentk =="" ){
		document.getElementById('2').innerText = "Không đc trống!" ;
		return false;
	}else{
		if (check_tentk.test(tentk)) {
			document.getElementById('2').innerText = "Hợp lệ!" ;
				
		}else{
			document.getElementById('2').innerText = "Tài khoản không được chứa ký tự dấu cách và chỉ bao gồm các ký tự chữ cái a-z hoặc số 0-9 (không phân biệt hoa thường)";
			return false;
		}
	}

	if (sdt=="") {
		document.getElementById('3').innerText = "Không đc trống!" ;
		return false;
	}else{
		if(check_sdt.test(sdt)){
			document.getElementById('3').innerText = "SĐT hợp lệ!" ;
		}else{
			document.getElementById('3').innerText = "SĐT không hợp lệ!" ;
			return false;
		}
	}

	if( email =="" ){
		document.getElementById('4').innerText = "Không đc trống!" ;
		return false;
	}else{
		if(check_email.test(email)){
			document.getElementById('4').innerText = "Hợp lệ!" ;
		}else{
			document.getElementById('4').innerText = "Không hợp lệ!" ;
			return false;
		}
	}


	
	return true;


}