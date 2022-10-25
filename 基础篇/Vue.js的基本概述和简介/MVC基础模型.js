var model={ //数据操作
    init:function(){},//初始化
    fetch:function(){},//接受数据
    save:function(){}//储存数据
}
var view=document.querySelector('.mvch1');//查找页面中的标签
var controller={
    view:null,
    model:null,
    init:function(view,model){
        this.view=view;
        this.model=model;
        this.model.init();
        this.bindEvent();
    },
    bindEvent:function(){
      
    }
}



