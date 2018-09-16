/*
	作者：云祥孙  QQ：313801120  QQ群： 35915100   网址：http://sharembweb.com/
	原创作品转载请注明出处 sharembweb.com

|cLng|uBound|lBound|chr|replace|write|cookies|queryString|typeName|redirect|formatNumber|cStr|asc|join|len|lCase|uCase|isNumeric|isNull|int|execute|serverVariables|createObject|hex|ascW|time|isObject|isArray|right|left|lTrim|rTrim|case|timer|dateDiff|fix|now|dateAdd|isDate|year|month|day|hour|minute|second|array|

日期时间的加减暂时不处理
*/
//跳转
function RR(url){
	document.location.href=url;
	return false;
}


//换行
function vbCrlf(){
	return "\n";	
}
//退格  不过它用不上
function vbTab(){
	return "\t";	
}

//从左向右搜索字符
function inStr(str,searchStr){
	return str.indexOf(searchStr)+1;
}
//从右向左搜索字符
function inStrRev(str,searchStr){
	return str.lastIndexOf(searchStr)+1;
}
//字符长度
function len(str){
	return str.length;
}
//截取字符
function mid(str,nStart,nLength){
	nStart--;
	if(nLength==-1){
		return str.substr(nStart);
	}
	return str.substr(nStart,nLength);
}
//替换
function replace(str,findStr,replaceStr){
	//return str.replace(findStr,replaceStr);				//这种只能替换一次
	return str.split(findStr).join(replaceStr);	
}
//随机数
function rnd(){
	return '.'+Math.floor(Math.random()*99999999)
}
//转成小写
function lCase(str){
	return str.toLowerCase();
}
//转成大写
function uCase(str){
	return str.toUpperCase();
}
//字符转ASC
function asc(str){
	return str.toString().charCodeAt(0);
} 
//chr转字符
function chr(str){
	return String.fromCharCode(str.toString());
}
//left从左边开始截取
function left(str,nLen) { 
	if(nLen>0){
		return str.substring(0,nLen)
	}
}  
//right从右边开始截取
function right(str,nLen) {  
	if (str.length-nLen>=0 && str.length>=0 && str.length-nLen<=str.length) { 
		return str.substring(str.length-nLen,str.length)
	} 
}  

//分割
function aspSplit(str,splType){
	return str.split(splType);
}
//定义数组  与asp版一致
function aspArray(numb){
	numb++;
	var dataArray=new Array(numb);
	for(var i=0;i<numb;i++){
		dataArray[i]="";	
	}	
	return dataArray;
}
//获得数组长度
function uBound(splstr){
	return splstr.length-1;
}
//获得数组开始长度
function lBound(str){
	return 0;
}

//返回指定数值的整数部分
function fix(n){
	n=n.toString();
	if(inStr(n,".")>0){
		n=mid(n,1,inStr(n,".")-1);
	}
	return Math.floor(n);
}
//返回指定变量子类型的信息
function typeName(str){
	var strType=typeof(str);
	var s=uCase(mid(strType,1,1))+mid(strType,2);
	if(s=="Number"){
		s="Integer";
	}
	return s;
}
//返回指定数字的整数部分
function int(str){ 
	return parseInt(str,10);	
}
//将表达式转化为Integer数值子类型
function cInt(str){ 
	return Math.round(str);
}
//将表达式转化为Integer数值子类型
function cLng(str){ 
	return Math.round(str);
}
//转字符
function cStr(str){
	return str.toString();
}

//清除左边空格 ASP版
function aspLTrim(str){ 
	for(var i=1 ; i<= len(str); i++){
		var s=mid(str,i,1);
		if(s!=" "){
			str=mid(str,i,-1);
			 break;
		 }
	}
	return str;
}
//清除右边空格 ASP版
function aspRTrim(str){ 
	for(var i=len(str) ; i>=1; i--){
		var s=mid(str,i,1);
		if(s!=" "){
			str=mid(str,1,i);
			 break;
		 }
	}
	return str;
}
//两除两边空格 ASP版
function aspTrim(str){ 
	return aspRTrim(aspLTrim(str)); 
}
//清除左边空格+换行 PHP版
function phpLTrim(str){ 
	for(var i=1 ; i<= len(str); i++){
		var s=mid(str,i,1);
		if(s!=" " && s!="\t" && s!="\n"){
			str=mid(str,i,-1);
			 break;
		 }
	}
	return str;
}
//清除右边空格+换行 PHP版
function phpRTrim(str){ 
	for(var i=len(str) ; i>=1; i--){
		var s=mid(str,i,1);
		if(s!=" " && s!="\t" && s!="\n"){
			str=mid(str,1,i);
			 break;
		 }
	}
	return str;
}
//清除两这空格+换行 PHP版
function phpTrim(str){ 
	return phpRTrim(phpLTrim(str)); 
}

//当前时期
function aspDate(){
	var timeObj = new Date();
	var y = timeObj.getFullYear().toString();
	var m = (timeObj.getMonth() + 1).toString()	 ;
	var d = timeObj.getDate().toString();	 
	return y+"/"+ m +"/"+ d;
}
//当前时间
function aspTime(){
	var timeObj = new Date();
	var h = timeObj.getHours().toString();
	var ms = timeObj.getMinutes().toString();	 
	if (ms.length == 1) {
		ms = "0" + ms
	}
	var s = timeObj.getSeconds().toString();
	if (s.length == 1) {
		s = "0" + s
	}
	return h +":"+ ms +":"+s;
}
//当前日期+时间
function now(){ 
	return aspDate() +" "+ aspTime();
}
//获得年
function year(timeStr){
	var timeObj = new Date();
	return timeObj.getFullYear().toString();
}








//功能:ASP里的IIF 如：IIf(1 = 2, "a", "b") 
function IIF(bExp, sVal1, sVal2){
	//if(bExp==true){return sVal1;}else{return sVal2;}
	return bExp?sVal1:sVal2;		//二元运算符
}
//MD5加密
function aspMD5(str){
	return md5(str);	
}
//MD5加密
function myMD5(str){
	return md5(str);	
}














































function md5(string) {
	function md5_RotateLeft(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	}

	function md5_AddUnsigned(lX, lY) {
		var lX4, lY4, lX8, lY8, lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
	}

	function md5_F(x, y, z) {
		return (x & y) | ((~x) & z);
	}

	function md5_G(x, y, z) {
		return (x & z) | (y & (~z));
	}

	function md5_H(x, y, z) {
		return (x ^ y ^ z);
	}

	function md5_I(x, y, z) {
		return (y ^ (x | (~z)));
	}

	function md5_FF(a, b, c, d, x, s, ac) {
		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	};

	function md5_GG(a, b, c, d, x, s, ac) {
		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	};

	function md5_HH(a, b, c, d, x, s, ac) {
		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	};

	function md5_II(a, b, c, d, x, s, ac) {
		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	};

	function md5_ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1 = lMessageLength + 8;
		var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
		var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
		var lWordArray = Array(lNumberOfWords - 1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
		lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
		return lWordArray;
	};

	function md5_WordToHex(lValue) {
		var WordToHexValue = "",
			WordToHexValue_temp = "",
			lByte, lCount;
		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
		}
		return WordToHexValue;
	};

	function md5_Utf8Encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	};
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11 = 7,
		S12 = 12,
		S13 = 17,
		S14 = 22;
	var S21 = 5,
		S22 = 9,
		S23 = 14,
		S24 = 20;
	var S31 = 4,
		S32 = 11,
		S33 = 16,
		S34 = 23;
	var S41 = 6,
		S42 = 10,
		S43 = 15,
		S44 = 21;
	string = md5_Utf8Encode(string);
	x = md5_ConvertToWordArray(string);
	a = 0x67452301;
	b = 0xEFCDAB89;
	c = 0x98BADCFE;
	d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a;
		BB = b;
		CC = c;
		DD = d;
		a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
		a = md5_AddUnsigned(a, AA);
		b = md5_AddUnsigned(b, BB);
		c = md5_AddUnsigned(c, CC);
		d = md5_AddUnsigned(d, DD);
	}
	return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
} 
