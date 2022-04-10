let usersInteractions = [];
// Data = { "profile" : userProfileHashCode, "command" : CommandName }
function setInteraction(data){
	if(usersInteractions.length > 0){
		if(usersInteractions.find(e => e.profile === data.profile)){
			deleteInteraction(data.profile);
			usersInteractions.push(data);
		}else{
			usersInteractions.push(data);
		}
	}else{
		usersInteractions.push(data);
	}
	return data;
}
function getInteraction(profile){
	let result = { "result" : false, "data" : null };
	if(usersInteractions.length > 0){
		if(usersInteractions.find(e => e.profile === profile)){
			result.result = true;
			result.data = usersInteractions.find(e => e.profile === profile);
		}
	}
	return result;
}
function deleteInteraction(profile){
	let result = {"result" : false, "data" : null};
	if(usersInteractions.length > 0){
		if(usersInteractions.find(e => e.profile === profile)){
			let index = usersInteractions.findIndex(e => e.profile == profile);
			result.result = true;
			result.data = usersInteractions[index];
			userInteractions = usersInteractions.splice(index,1);
		}
	}
	return result;
}
module.exports = {
	"setInteraction" : setInteraction,
	"getInteraction" : getInteraction,
	"deleteInteraction" : deleteInteraction
}