	function incluir(){
			

	}

	function total(){
		

	}
	$("#cep").blur(function() {
		$.getJSON("//viacep.com.br/ws/"+ $("#cep").val()+"/json/", function(dado){
			$("#bairro").val(dado.bairro); 
			$("#cidade").val(dado.logradouro); 
			$("#estado").val(dado.localidade); 
		})
	});

	$("#cep2").blur(function() {
		$.getJSON("//viacep.com.br/ws/"+ $("#cep2").val()+"/json/", function(dado){
			$("#bairro2").val(dado.bairro); 
			 
			$("#cidade2").val(dado.logradouro); 
			$("#estado2").val(dado.localidade); 
		})
	});
	