const generate = function(numRows) {
	const result = new Array(numRows);
	for(const i=0; i<numRows; i++){
		result[i] = [];
		for(const j=0; j<=i; j++){
			result[i].push(triangle(i, j));
		}
	}
	function triangle(m, n) {
		if(n===0) {return 1;}
		else if(m==n) { return 1; }
		else { return ((m+1-n)/n)*arguments.callee(m, n-1); } //	Equivalent to: else { return ((m+1-n)/n)*triangle(m, n-1); }
	}
	return result;
};