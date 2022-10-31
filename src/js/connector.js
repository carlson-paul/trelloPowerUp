console.log('hello world');
var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
window.trelloPowerUp.initialize({
	'board-badges': function(t,options){
		return[{
			icon: BLACK_ROCKET_ICON,
			text: 'Goodbeast GSheet integration'
		}];
	}
})