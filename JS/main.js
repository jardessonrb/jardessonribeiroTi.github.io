/*fetch("https://api.github.com/users/jardessonribeiroti/repos")
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log();
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].name);
		console.log(data[i].language);
		console.log(data[i].created_at);
	}
	
});*/

/*var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/jardessonribeiroti/repos');
xhr.send(null);

xhr.onreadystatechange = function(){
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}*/

var createContents = function (){

}

var minhaPromisePerfil = function(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/jardessonribeiroti');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}else{
					reject('Erro na requisição');
				}
			}
	    }
    });
}

minhaPromisePerfil()
.then(function(response){

	var myname = document.querySelector('#myname');
	var mybio  = document.querySelector('#mybio');

	myname.innerHTML = response.login;
	mybio.innerHTML  = '" '+response.bio+' "';

}).catch(function(error){

	console.log(error);

});

var minhaPromise = function(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/jardessonribeiroti/repos');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}else{
					reject('Erro na requisição');
				}
			}
	    }
    });
}

minhaPromise()
	.then(function(response){

		var contentBody = document.querySelector('#content-Body');
		for (var i = 0; i < response.length ; i++) {
			var bodyRepos  = document.createElement('div');
			var titleRepos = document.createElement('p');
			var dateRepos  = document.createElement('p');
			var img        = document.createElement('img');
			var link       = document.createElement('a');
			

			bodyRepos.classList.add('repos-content');


			img.src = "IMG/"+response[i].language.toLowerCase()+".png";
			img.classList.add('class-img');

			link.href = response[i].html_url;
			link.innerHTML = "On Github" ;
			link.classList.add('class-link');
			
			titleRepos.innerHTML = response[i].name.toLowerCase();
			titleRepos.classList.add('title-repos');

			dateRepos.innerHTML = response[i].created_at;
			dateRepos.classList.add('date-repos');



			bodyRepos.appendChild(titleRepos);
			bodyRepos.appendChild(img);
			bodyRepos.appendChild(link);
			bodyRepos.appendChild(dateRepos);

			contentBody.appendChild(bodyRepos);
		}

	})
	.catch(function(error){
		console.warn(error);
	});