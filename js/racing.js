(function(root) {
    let racingGameStatus = 0;
    let racingUlIndex = 0;
    const bgList = ['bg-color', 'bg-car', 'bg-environment'];

    function startRacing() {
        racingGameStatus = 1;
        $('#racingLogin').hide();
        $("#racingGame").show()
    }

    function hideItem() {
        const itemTip = $("#racingGame").find("i");

        if (racingGameStatus === 1 && !itemTip.is(":hidden")) {
            itemTip.hide();
        }
    }

    $("#racingFooterUl li").click(item => {
        const index = item.target.getAttribute('tag');
        if (index) {

        }
    });
    $("#racingFooterUl").addClass('bg-color')
    root.racingObj = {
        startRacing: startRacing,
        hideItem: hideItem,
        racingUlIndex: racingUlIndex
    }
})(window);