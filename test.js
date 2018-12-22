var clickline = require('./clickline');
var command = 'hepic_statistics_method_all,captid=0,cseq=OPTIONS,gid=10,host=de3.qxip.net,ip=0.0.0.0,ipgroup_in=default,usergroup=default,xgroup=default 100=1,100:OPTIONS=1 1545424651000000000';

console.log(clickline(command,'ts100'));
