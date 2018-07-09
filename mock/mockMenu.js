var Mock = require('mock.js');
var data = Mock.mock({
    'menuList|1-10': [{
        'id|+1': 1
    }]
})

console.log(JSON.stringify(data,null,4))
// JSON.stringify(data,null,4)
export default{
    a:'test b',
    b:'test c'
}