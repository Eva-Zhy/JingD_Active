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
        const index = item.target.getAttribute("tag");
        if (index && index * 1 < 4) {
            const rClassName = $("#racingFooterUl")[0].getAttribute("class");
            if ($("#racingFooterUl").hasClass(bgList[index - 1])) {
                return;
            } else {
                $("#racingFooterUl").removeClass(rClassName);
                $("#racingFooterUl").toggleClass(bgList[index - 1], true);
            }
            switch (index * 1) {
                case 1:
                    $("#racingContentColor").show();
                    $("#racingContentCar").hide();
                    $("#racingContentEnv").hide();
                    break;
                case 2:
                    $("#racingContentCar").show();
                    $("#racingContentColor").hide();
                    $("#racingContentEnv").hide();
                    break;
                case 3:
                    $("#racingContentColor").hide();
                    $("#racingContentCar").hide();
                    $("#racingContentEnv").show();
                    break;
                default:
                    break;
            }
        }
        if (index === "4") {
            console.log("save");
        }
        racingUlIndex = index;
    });
    $("#racingContent p img").click(item => {
        if (item.target.src.includes("click")) {
            return;
        } else {
            for (let element of $("#racingContent img")) {
                element.src = element.src.replace("-click", "");
            }
            // set current img check status
            item.target.src = item.target.src.replace(".png", "-click.png");
        }

    });
    $("#racingFooterUl").addClass("bg-color");
    root.racingObj = {
        startRacing: startRacing,
        hideItem: hideItem,
        racingUlIndex: racingUlIndex
    }
})(window);