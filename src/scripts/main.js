var str = 'abcde'
var pass = 'D1;S2;F3;G5;H6'
var text = 'ab8798ckekd'

var m = str.split('')
var n = pass.split(';')

for (const key in m) {
	if (m.hasOwnProperty(key)) {
		const element = m[key];
		text = text.replace(element,n[key])
	}
}
console.log(text)


for (const key in m) {
	if (m.hasOwnProperty(key)) {
		const element = m[key];
		text = text.replace(n[key], element)
	}
}
console.log(text)
