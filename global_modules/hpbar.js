function changeHp(amount){
	amount = Math.round(amount/10);
	if(amount<=10){
		if(amount == 0){
			return ""
		}else{
			return "\u2589".repeat(amount)
		}
	}else{
		return '\u2589'.repeat(10);
	}
}
module.exports = changeHp;