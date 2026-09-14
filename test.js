
function user(name) {
    this.name = name;
}

const student = new user('홍길동');

console.log(student);

user.study = function() {
    console.log('공부');
};