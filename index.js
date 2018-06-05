(function() {
	function init() {
		var stuName, stuAge;
		stuName = '小明';
		stuAge = 20;
		console.log('1', stuName, stuAge);
		stuName = '小刚';
		console.log('21', stuName, stuAge);
		var a = 10;
		var b = 20;
		var c = a - b;
		var d = a / b;
		var e = a % b;
		// var f = (++a) + (a++);
		var g = ++a;
		var h = a++;
		var i = g + h;
		console.log(a, b, c, d, e, g, h, i);
	};
	//	init();

	/**
	 * javascript Date对象
	 * 小时钟
	 */
	function _date() {
		var date = new Date();
		// console.log(date);
		/**
		 * get 方法
		 */
		var getFullYear = date.getFullYear(); //年
		var getMonth = date.getMonth() + 1; //月
		if(getMonth < 10) {
			getMonth = '0' + getMonth
		}
		var getDate = date.getDate(); //日
		if(getDate < 10) {
			getDate = '0' + getDate;
		}
		// var getDay = date.getDay();//星期几
		var hours = date.getHours(); //时
		if(hours < 10) {
			hours = '0' + hours;
		}
		var minutes = date.getMinutes(); //分
		if(minutes < 10) {
			minutes = '0' + minutes;
		}
		var seconds = date.getSeconds(); //秒
		if(seconds < 10) {
			seconds = '0' + seconds; //如果秒数小于10，在前面补个0
		}
		// var value = date.valueOf();//返回 1970 年 1 月 1 日至今的毫秒数。
		// var getTime = date.getTime();//返回 1970 年 1 月 1 日至今的毫秒数。
		// if(value === getTime){
		// 	console.log('毫秒时间相等');
		// }
		// console.log(getFullYear + '年' + getMonth + '月' + getDate + '日'  + hours + '时' + minutes + '分' + seconds + '秒');
		var time = getFullYear + '年' + getMonth + '月' + getDate + '日' + hours + '时' + minutes + '分' + seconds + '秒';
		var o_time = document.getElementById('time');
		o_time.innerHTML = time;
		setTimeout(_date, 1000);
		/**
		 * to方法
		 */
		// var toString = date.toString();
		// console.log(toString);
		// var toTimeString = date.toTimeString();
		// console.log(toTimeString);
		// var toDateString = date.toDateString();
		// console.log(toTimeString);
	};
	_date();
	var data = 100000000000000;

	function daojishi(data) {
		//		var data = _data;

		var days = (Math.floor(data / 1440 / 60)) > 9 ? (Math.floor(data / 1440 / 60)) : ('0' + (Math.floor(data / 1440 / 60)));
		if(typeof days == 'string') {
			days = parseInt(days)
			console.log('strings' + days)
		}
		if(days < 10) {
			days = days + 0
		}
		var hours = (Math.floor((data - days * 1440 * 60) / 3600)) > 9 ? (Math.floor((data - days * 1440 * 60) / 3600)) : ('0' + (Math.floor((data - days * 1440 * 60) / 3600)));
		if(typeof hours == 'string') {
			hours = parseInt(hours)
			//			console.log('strings' + hours)
		}
		var minutes = (Math.floor((data - days * 1440 * 60 - hours * 3600) / 60)) > 9 ? (Math.floor((data - days * 1440 * 60 - hours * 3600) / 60)) : ('0' + (Math.floor((data - days * 1440 * 60 - hours * 3600) / 60)));
		if(typeof minutes == 'string') {
			minutes = parseInt(minutes)
			//			console.log('strings' + minutes)
		}
		var seconds = ((data - days * 1440 * 60 - hours * 3600 - minutes * 60)) > 9 ? ((data - days * 1440 * 60 - hours * 3600 - minutes * 60)) : ('0' + ((data - days * 1440 * 60 - hours * 3600 - minutes * 60)));
		if(typeof seconds == 'string') {
			seconds = parseInt(seconds)
			//			console.log('strings' + seconds)
		}
		seconds = seconds--;
		console.log('data:', data)
		console.log(days, hours, minutes, seconds);
		//		setTimeout(daojishi,1000);
		return data;
	}
	daojishi(data);

	/**
	 * 输出20以内的偶数
	 */
	var h = 20;
	function oushu() {
		for(var i in h){
			console.log('in'+ i)
		}
//		for(var i = 0; i <= 20; i++) {
//
//			if(i % 2 == 0) {
//				console.log(i);
//			}
//		}
	};
	oushu();
})()
/**
 * 
 *
 *
 *
 */