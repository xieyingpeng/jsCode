			
	window.onload = function(){
	var res = getCode();
	unction getCode(){
		let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		let str = '';
		for (let i = 0 ; i < 6 ; i++){
		var num = Math.round(Math.random() * 15);
			str += arr[num];
		}
		return str;
	}
	document.getElementById('checkCode').innerText = res ;
	document.getElementById('linkbt' ).onclick= function() {
	document.getElementById('checkCode').innerText= getCode() ;
	}
	document.getElementById('Button1').innerText = function(){
	var code = document.getElementById('checkCode').innerText ;
	var input =document.getElementById('inputCode').value ;
					
	f(code !== inputCode){
	alert("你输入的验证码不正确");
	document.getElementById('inputCode').value = '';
	return false;
	}
	else {

	}
       }
}
		