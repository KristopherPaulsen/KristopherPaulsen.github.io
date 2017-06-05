$(document).ready(() => {
    $(".pullrequest-row").initialize(function() {
        $(this).each(() => {
            if ($(this).html().includes("DECLINED")){
                $(this).hide();
            }
        });
    });
});
