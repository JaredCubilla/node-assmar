'use strict';

module.exports = function(str) {
	if (str.indexOf('asthma') !== -1 || str.indexOf('Asthma') !== -1 || str.indexOf('ASTHMA') !== -1) {
		str = str.replace(/asthma/g, 'ass-mar');
		str = str.replace(/Asthma/g, 'Ass-mar');
		str = str.replace(/ASTHMA/g, 'ASS-MAR');
	}
	return str;
}