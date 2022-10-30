var removeDuplicates = function(nums) {
	let k = 0
	for( i=0; i<nums.length -1; i++){
		for( j=i+1; j<nums.length; j++){
			if (nums[i] === nums[j] ){
				nums.splice(j, 1);                
				k++;
			}
		}
	}
	
	return `${k} duplicates removed, nums =[${nums}]`
};