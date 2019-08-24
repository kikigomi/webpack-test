// named exports : 여러개 사용 가능
//export를 붙혀야 다른데서 호출할수있음. 배포한다는 의미임.
//이름이 있는 export라서 네임드 익스폭트
export var area = function(r) {
    return Math.PI * r * r;
};

export var circumference = function (r) {
    return 2 * Math.PI * r;
};