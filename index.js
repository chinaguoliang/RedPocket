/**
 * Created by Administrator on 2016/12/12.
 */
var First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

// import secondcomponent from './component/advertisement.vue'

new Vue({
    el: "#product",
    methods:{
        handleClicked:function (item) {
            alert("您选择了" + item.title + "商品");
            this.addCount();
        },
        addCount:function () {
            this.productName = this.productName + 1;
        }
    },components:{
            ad:First,
    },
    data: {
        productName: 0,
        productListData: [{
            title: "刷子",
            url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
        },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            }, {
                title: "刷子",
                url: "http://img03.tooopen.com/images/20131102/sy_45238929299.jpg"
            },
            {
                title: "老虎",
                url: "http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg"
            },
        ]
    }
})