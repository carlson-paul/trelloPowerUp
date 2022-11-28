console.log('goodbest google sheet integrator');

let BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';


window.TrelloPowerUp.initialize({
	'board-buttons': function(t){
		return[{
			icon: BLACK_ROCKET_ICON,
			text: 'Goodbeast GSheet integration',
			callback: function(t) {
				(async function(){
					const cardResponse = await fetch('https://api.trello.com/1/boards/62b9d5d4cd6b7c794607ebe2/cards?customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc');
let cardData = await cardResponse.text();
cardData = JSON.parse(cardData);
console.log(cardData);
				}())
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