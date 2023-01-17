// complete the given function

function palindrome(str){
	let rev="";
	for(let i=str.length-1;i>=0;i--){
		rev+=str[i];
	}
	let revF=rev.toLowerCase();
	let strF=str.toLowerCase();
	if(revF==strF){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
