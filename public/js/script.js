var options =
[
	{
		icon:'<a href="/" class="has-text-white"><i class="fa fa-home" aria-hidden="true"></i></a>',
		label: 'Home',
		display: {
			background: 'transparent',
		}
	},
	{
		icon:'<a href="/portfolio/" class="has-text-primary"><i class="fa fa-suitcase" aria-hidden="true"></i></a>',
		label: 'Portfolio',
		display: {
			background: 'transparent',
		}
	},
	{
		icon:'<a href="/music/" class="has-text-danger"><i class="fa fa-music" aria-hidden="true"></i></a>',
		label: 'Music',
		// callback: function() {
		// 	alert('dasd');
		// },
		display: {
			background: 'transparent',
		}
	}
];

var context = new Bubbler(options);
