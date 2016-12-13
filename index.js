/**
 * Created by Administrator on 2016/12/12.
 */
new Vue({
    el: "#product",
    methods:{
        handleClicked:function (item) {
            alert("您选择了" + item.title + "商品");
        }
    }
    ,
    data: {
        productName: "Iphone SE",
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