let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

util.getObjType =  function(obj){
	if(!obj){
		return obj;
	}
	var str = Object.prototype.toString.call(obj),
		execRet = /\[object (\w+)\]/.exec(str);
	return execRet.length >=2 ? execRet[1].toLocaleLowerCase() :'' ;
}

export default util;