﻿(function () {
    $(function () {
        window.option = $.parseJSON($("script[src$=Demo\\.js]").html());

        $("#ajaxComment").click(function () {
            var position = $(this).position();

            //設定x , y位址,與切換顯示
            $("#ajaxCommentPanel")
                .css({
                    top: position.top + 30,
                    left: position.left + 30
                })
                .toggle();

            //判斷是否下載過資料，沒有就下載
            if (!$("#ajaxCommentPanel").data("Loaded")) {
                $("#ajaxCommentPanel").load(this.href, function () {
                    $("#ajaxCommentPanel").data("Loaded", true);
                });
            }

            return false;
        });
    });
})();