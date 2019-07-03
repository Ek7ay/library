$(function () {
    $('.panel').panel({
        collapsible: true,
        beforeClose: function (e) {
            console.log('beforeClose');
            return fish.blockedConfirm(e, 'Are you sure to close this panel?');
            //return false;// 阻止关闭
        }
    });
});