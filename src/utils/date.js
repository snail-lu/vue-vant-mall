// date.js
export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss', placeholder = '-') {
	if (!date) {
		return placeholder
	}

	if (Object.prototype.toString.call(date) !== '[object Date]') {
		date = new Date(+date)
	}

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	const o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			const str = o[k] + ''
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
		}
	}
	return fmt
}
