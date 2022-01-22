
	function total(){
		var valorUn;
		var quantidade;
		var quantidade;
		
		valorUn = document.getElementById("vlunitario1").value

		quantidade = document.getElementById("quantidade").value
		for (var i=0; ){
			var resultado = valorUn * quantidade;
			document.getElementById("total").value = resultado;
			}	
	}
	function adicionar(){
		var camposcategaria = document.getElementsByClassName("teste");

		console.log(camposcategaria);

		for(var i=0; i < camposCategoria.length; i++){
    		console.log(i)
    		console.log(camposcategoria[i].value)
		};
	}	