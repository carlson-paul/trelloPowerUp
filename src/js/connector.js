console.log('hello world');
var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
window.TrelloPowerUp.initialize({
	'board-buttons': function(t,options){
		let apiCall = t.getRestApi();
		let context = t.getContext();
		let boardId = context['board'];
		return fetch(`'https://api.trello.com/1/boards/${boardId}/cards?customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc'`)
		.then(function(response) {
			console.log(response.json());
		}).then(
			
		)

		return[{
			icon: BLACK_ROCKET_ICON,
			text: 'Goodbeast GSheet integration'
		}];
	}
})