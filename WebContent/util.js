/**
 *  Use function string name to check build-in types,
 *  because a simple equality check will fail when running
 *  across different vms/iframes.
 */

function getType(fn){
	var match=fn&&fn.toString().match(/^\s*function(\w+)/);
	return match&&match[1]
}

function isType(type,fn){
	if(!Array.isArray(fn)){
		return getType(fn)===getType(type)
	}
	for(var i=0,len=fn.length;i<len;i++){
		if(getType(fn[i])===getType(type)){
			return true
		}
	}
	
	return false
}