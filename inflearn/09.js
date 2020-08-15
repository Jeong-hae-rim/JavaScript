var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(name in grades) {
    console.log("name : "+name+" value : "+grades[name]);
}

var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
            console.log(name+':'+this.list[name]);
        }
    }
};
grades.show();