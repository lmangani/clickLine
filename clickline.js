var lineToJSON = require('influx-line-protocol-parser');

module.exports = function(line,table){

	if (!table) var table = 'ts1';

	var m = [], mv = [];
	var t = [], tv = [];

	try {
		var parsed = lineToJSON(line);
	} catch(e){
		throw e;
	}

	if (parsed.fields){
	    parsed.fields.map(function (obj) { return Object.keys(obj) }).forEach(function(item){ m.push(item[0]) });
	    parsed.fields.map(function (obj) { return Object.values(obj) }).forEach(function(item){ mv.push(item[0]) });
	}

	if (parsed.tags){
	    parsed.tags.map(function (obj) { return Object.keys(obj) }).forEach(function(item){ t.push(item[0]) });
	    parsed.tags.map(function (obj) { return Object.values(obj) }).forEach(function(item){ tv.push(item[0]) });
	}

	var insert = "INSERT INTO "+table+"(entity,ts,m,mv,t,tv) VALUES ('"
	    +parsed.measurement+"',"
	    +parsed.timestamp+","
	    +JSON.stringify(m)+","
	    +JSON.stringify(mv)+","
	    +JSON.stringify(t)+","
	    +JSON.stringify(tv)+")";

	return insert.replace(/"/g, "'");

}
