$(function(){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

    //接收URL中的参数booksId
    var id = getUrlParam('goodsId');
    console.log('goodsId:'+id);

    $.ajax({
        type:'get',
        url:'goods.json',
        dataType:'json',
        success:function(res,status){
            console.log(status)
            $.each(res.goods, function(idx,val) {
                //根据id获取详情数据
                if(id == val.id){
                    var str = "<img src='"+val.img+"'/><p>出版编号："+val.id+"</p><p>出版社："+val.price+"</p><p>页数："+val.title+"</p><p>简介："+val.title+"</p>";
                    console.log('index:'+idx);
                }
                $('.goodsDeatail').append(str);
            });
        }
    })
})