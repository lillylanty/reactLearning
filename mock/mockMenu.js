// var Mock = require('mock.js');
// var data = Mock.mock({
//     'menuList|1-10': [{
//         'id|+1': 1
//     }]
// })

// console.log(JSON.stringify(data,null,4))
// JSON.stringify(data,null,4)
// export default{
//     a:'test b',
//     b:'test c'
// }
export default [    
    {
        name:'首页',
        href:'/index',
        children:[{
            name:'项目概况',
            href:'/overviewpro'
        },{
            name:'公告',
            href:'/billboard'
        },
        {
            name:'系统管理',
            href:'/systemmanage',
            children:[
                {
                    name:'权限管理',
                    href:'/authmanage',
                    children:[
                        {
                            name:'菜单管理',
                            href:'/menumanage'
                        },
                        {
                            name:'角色管理',
                            href:'rolemanage'
                        }
                    ]
                },{
                    name:'文件编辑',
                    href:'/fileedit'
                },{
                    name:'数据管理',
                    href:'/datamanage',
                    children:[
                        {
                            name:'修改权限',
                            href:'/editdataauth'
                    },{
                        name:'冻结数据',
                        href:'/freezedata'
                    }
                    ]
                }
            ]
            },
        ]
    },{
        name:'用户中心',
        href:'/usercenter',
        children:[{
            name:'用户注销',
            href:'disposeuser'
        },
        {
            name:"退出登录",
            href:'/logout'
        }    
        ]
    }
]