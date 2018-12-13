var str = 'abcde'
var pass = 'D1;S2;F3;G5;H6'
var text = 'ac ba be de'

var m = str.split('')
var n = pass.split(';')

for (const key in m) {
	if (m.hasOwnProperty(key)) {
		const element = m[key];
		text = text.replace(new RegExp(element, 'g'), n[key])
	}
}
console.log(text)


for (const key in m) {
	if (m.hasOwnProperty(key)) {
		const element = m[key];
		text = text.replace(new RegExp(n[key], 'g'), element)
	}
}
console.log(text)
