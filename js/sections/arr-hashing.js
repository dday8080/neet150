function arrHashing(){
    cc(containsDuplicate[1,2,3,4]);
}

function containsDuplicate(nums){
    let map = {};
    for (let entry of nums){
        if (map[entry]) return true;
    }
    return false;
}


