console.log('goodbest google sheet integrator');

let BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
window.TrelloPowerUp.initialize({
	'board-buttons': function(t){

		return[{
			icon: BLACK_ROCKET_ICON,
			text: 'Goodbeast GSheet integration'
		}];
	}
})
// console.log('hello world');
// var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
// window.TrelloPowerUp.initialize({
// 	'board-buttons': function(t,options){
// 		let apiCall = t.getRestApi();
// 		let context = t.getContext();
// 		let boardId = context['board'];
		

// 		return[{
// 			icon: BLACK_ROCKET_ICON,
// 			text: 'Goodbeast GSheet integration'
// 		}];
// 	}
// })