
var clicks = 0
$('#barrasMenu').click(function(){
	if(clicks == 0){
       $('#menu').css('margin','0')
       clicks++;
       console.log("abierto");
    }else{
        $('#menu').css('margin-left','-70%')
        clicks--;
        console.log("cerrado");
    }
	
})

function casos(url){
fetch(url)
.then(res => res.json())
.then(data=>{
	console.log (data)
	var tabla = ''
	tabla+='<table>'
	tabla+='<tr>'
	tabla+='<td>'+'País'+'</td>'
	tabla+='<td>'+data.All.country+'</td>'
	tabla+='</tr>'
	tabla+='<tr>'
	tabla+='<td>'+'Confirmados'+'</td>'
	tabla+='<td>'+data.All.confirmed+'</td>'
	tabla+='</tr>'
	tabla+='<tr>'
	tabla+='<td>'+'Recuperados'+'</td>'
	tabla+='<td>'+data.All.recovered+'</td>'
	tabla+='</tr>'
	tabla+='<tr>'
	tabla+='<td>'+'Muertos'+'</td>'
	tabla+='<td>'+data.All.deaths+'</td>'
	tabla+='</tr>'
	tabla+='</table>'
	$('#resultado').append(tabla);
	$('#resultado').append('<br><br>')
	
})
.catch(err => console.log(err))
}

function historial(url){
fetch(url)
.then(res => res.json())
.then(data=>{
	console.log(Object.keys(data.All.dates))
	console.log(data.All)
	//console.log (Object.keys(data.All.dates)[Object.keys(data.All.dates).length -1])
	var tabla = ''
	tabla+='<table>'
	// tabla+='<tr>'
	// tabla+='<td>'+'País'+'</td>'
	// tabla+='<td>'+data.All.country+'</td>'
	// tabla+='</tr>'
	// tabla+='<tr>'
	// tabla+='<td>'+'Confirmados'+'</td>'
	// tabla+='<td>'+data.All.confirmed+'</td>'
	// tabla+='</tr>'
	// tabla+='<tr>'
	// tabla+='<td>'+'Recuperados'+'</td>'
	// tabla+='<td>'+data.All.recovered+'</td>'
	// tabla+='</tr>'
	// tabla+='<tr>'
	// tabla+='<td>'+'Muertos'+'</td>'
	// tabla+='<td>'+data.All.deaths+'</td>'
	// tabla+='</tr>'
	tabla+=JSON.stringify(data.All)
	tabla+='</table>'
	$('#resultadoHisto').append(tabla);
	$('#resultadoHisto').append('<br><br>')
	
})
.catch(err => console.log(err))
}



$('#casos').click(function(){
	var url = 'https://covid-api.mmediagroup.fr/v1/cases?country=';
	var country = $('#Pais').val()
	url+=country;
	$('#resultado').html('<h1 class="fw-300 centrar-texto">Resultados</h1><br>')
	casos(url)
	console.log(url)
})



$('#historial').click(function(){
	var url = 'https://covid-api.mmediagroup.fr/v1/history?country=';
	var country = $('#PaisHisto').val()
	var estatus = $('#estatusHisto').val()
	url+=country;
	url+='&status='
	url+=estatus
	$('#resultadoHisto').html('<h1 class="fw-300 centrar-texto">Resultados</h1><br>')
	historial(url)
	console.log(url)
})


