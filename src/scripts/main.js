var chuoi = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM '
var mahoa = '!1/;!2=;!#3;!4;!5;!6;!7;!8;!9;!0;@#1;@2;@=3;@4;@5;@-6;@7;@^8;@9;@$0;_1;_2;_3;_4;_5;_6;!©/;!§=;!#®;!¢;!¡;!¥;!±;!µ;!¶;!£;@#©;@§;@=®;@¢;@¡;@-¥;@±;@^µ;@¶;@$£;_©;_§;_®;_¢;_¡;_¥;~'
var m = chuoi.split('')
var n = mahoa.split(';')

function removeVietnam(s) {
	var r = s
	var non_asciis = {
		// '-': '[`~!@#$%^&*()_|+=?;:",.<>/]',
		'a': '[ảàạảãàáâãäåắặẳằẵấầẩẫậâă]',
		'ae': 'æ',
		'c': 'ç',
		'e': '[èéẹẽẻềệếểễê]',
		'd': '[đ]',
		'i': '[ìíîïị]',
		'n': 'ñ',
		'o': '[òóôõöộồốổỗơởợỡờớôơ]',
		'oe': 'œ',
		'u': '[ùúûűüủụưửựứừữư]',
		'y': '[ýỳỷỵỹ]'
	};
	for (var i in non_asciis) {
		r = r.replace(new RegExp(non_asciis[i], 'gi'), i);
	}
	// r = r.replace(/[^\w\s]/gi, '-')
	return r
};

function doMaHoa(str, e) {
	let newstr = str
	for (let key in m) {
		if (m.hasOwnProperty(key)) {
			let element = m[key];
			if(e) {
				newstr = newstr.replace(new RegExp(n[key], 'g'), element)
			} else {
				newstr = newstr.replace(new RegExp(element, 'g'), n[key])
			}
		}
	}
	return newstr
}

$('#mahoa').on('click', function(){
	var m = doMaHoa(removeVietnam($('#code').val()))
	$('#exp').val(m)
})
$('#giaima').on('click', function(){
	var m = doMaHoa($('#exp').val(), true)
	$('#code').val(m)
})
