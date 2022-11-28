console.log('goodbest google sheet integrator');

let BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';


window.TrelloPowerUp.initialize({
	'board-buttons': function(t){
		return[{
			icon: BLACK_ROCKET_ICON,
			text: 'Goodbeast GSheet integration',
			callback: function(t) {
				console.log(t.getRestApi());
				// t.getRestApi()
				// .authorize()
				// .isAuthorized()
				// .then((authorized)=>{
				// 	if(authorized){
				// 		console.log('good going')
				// 	} else {
				// 		console.log('something went wrong, again')
				// 	}
				// 	let context = t.getContext();
				// let boardId = context['board'];
				// console.log(boardId);
				// })
				
			},

		}];
	}
},{
	appKey: '8567e52ef0a5c3a9a4a76eb2722ea6d0',
	appName: 'Goodbeast GSheet integration'
	})

// window.TrelloPowerUp.initialize({
//   'card-back-section': (t, options) => getTranslations(locale)
//     .then(response => response.json())
//     .then(trans => t.set('organization', 'shared', 'trans', trans))
//     .then(() => t.getRestApi()
//       .isAuthorized()
//       .then(isAuthorized => isAuthorized
//         ? renderHistory(t)
//         : askAuthorization(t)
//       ),
//     )
// }, {
//   appKey: 'no-you-wont-have-my-key',
//   appName: 'KNP Trello History',
// })






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