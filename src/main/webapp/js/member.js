$(function(){
	$('#join').submit(function(){
		var user_id= $('input[name=user_id]').val();
		if(!user_id){
			alert('아이디입력');
			$('input[name=user_id]').focus();
			return false;
		}
		
		var user_pw= $('input[name=user_pw]').val();
		if(!user_pw){
			alert('비밀번호 입력');
			$('input[name=user_pw]').focus();
			return false;
		}
		
		var juminno= $('input[name=juminno]').val();
		if(!juminno){
			alert('주민번호 입력');
			$('input[name=juminno]').focus();
			return false;
		}
		
		
		return false;
		
		
	});
});