var EC = {
    "isSlid": true,
    "Width": $(window).width(),
    "Init": function () {
        EC.Init.LazyLoad = new LazyLoad({});
        EC.Style.Footer();
        $(".gen-search").click(function () {
            $(".pop-1").addClass("show").siblings(".box-bg2").show();
            $("body").css({
                "height": "100%",
                "width": "100%",
                "overflow": "hidden"
            });
        });
        $(".gen-history").click(function () {
            $(".pop-2").addClass("show").siblings(".box-bg2").show();
            EC.Init.LazyLoad.update();
            $("body").css({
                "height": "100%",
                "width": "100%",
                "overflow": "hidden"
            });
        });
        $(".pop-bj").click(function () {
            $(".pop-list-body").removeClass("show").siblings(".box-bg2").hide();
            $("body").css({
                "height": "",
                "width": "",
                "overflow": ""
            });
        });
        $(".pop-2 span").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            let _0x321885 = $(".pop-2 span").index(this),
                _0x19662f = $(".history").eq(_0x321885);
            _0x19662f.fadeIn(800).siblings().hide();
            _0x19662f.addClass("check").siblings().removeClass("check");
            EC.Empty(EC.Cookie.Get("user_id")) ? $(".user-history").html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "template/mmou/asset/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["0"] + "</span></div>" + "<a href=\"javascript:\" class=\"button top30 head-user\" style=\"width:100%\">" + language["1"] + "</a>") : $(".user-history li").length === 0 && EC.Ajax(maccms.path + "/index.php/api/history", "post", "json", "", function (_0x148d77) {
                if (_0x148d77.code === 1) {
                    {
                        let _0x1de79b = "";
                        $.each(_0x148d77.list, function (_0x4418d1, _0x3e3cbe) {
                            _0x1de79b += "<li><a class=\"history-a flex\" href=\"" + _0x3e3cbe.data.link + "\" target=\"video\" title=\"" + _0x3e3cbe.data.name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x3e3cbe.data.name + "\" data-src=\"" + _0x3e3cbe.data.pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x3e3cbe.data.name + "</div><div><span class=\"cor5\">" + _0x3e3cbe.data.type.type_name + "</span></div></div></a></li>";
                        });
                        $(".user-history ul").html(_0x1de79b);
                        EC.Init.LazyLoad.update();
                        Number($(".lang-bnt").length) === 1 && zh_tranBody();
                    }
                } else $(".user-history ul").html(EC.History.Msg);
            });
        });
        $(".user-share-button").click(function () {
            EC.Pop.Show($(".user-share-html").html(), language["3"], function () {});
        });
        let _0x14be2f = $(".gen-loading"),
            _0x1469f2 = _0x14be2f.data("time");
        setTimeout(function () {
            $(".gen-loading").fadeOut("slow");
        }, _0x1469f2);
        $(".head-more-a").hover(function () {
            $(".nav-more").html("&#xe564;");
            $(".head-more").show();
        }, function () {
            $(".nav-more").html("&#xe563;");
            $(".head-more").hide();
        });
        let _0xa6ac39 = null,
            _0x43b27d = $(".head"),
            _0x1d0176 = $(".row-2 .tim-box"),
            _0x41544a = null;
        _0x43b27d.length > 0 && (_0xa6ac39 = _0x43b27d.offset().top);
        _0x1d0176.length > 0 && (_0x41544a = _0x1d0176.eq(_0x1d0176.length - 1).offset().top);
        $(window).scroll(EC.debounce(function () {
            {
                let _0x4b55b1 = $(this).scrollTop();
                _0x43b27d.toggleClass("head-b", _0x4b55b1 > _0xa6ac39).css("position", _0x4b55b1 > _0xa6ac39 ? "fixed" : "");
                $(".head .left, .head .right").toggleClass("topfadeInUp animated", _0x4b55b1 > _0xa6ac39);
                _0x4b55b1 > 300 ? $(".top").fadeIn(600) : $(".top").fadeOut(600);
                _0x4b55b1 > _0x41544a ? _0x1d0176.eq(_0x1d0176.length - 1).css({
                    "position": "fixed",
                    "top": "100px",
                    "width": $(".row-2").width()
                }) : _0x1d0176.eq(_0x1d0176.length - 1).css({
                    "position": "",
                    "top": "",
                    "width": ""
                });
            }
        }, 50));
        $(".top").click(function () {
            $("html,body").animate({
                "scrollTop": 0
            }, 500);
            _0x43b27d.removeClass("head-b").css({
                "position": ""
            });
            $(".head .left,.head .right").removeClass("topfadeInUp animated");
        });
        if (Number($(".slid-e").length) === 1) {
            let _0x7a82f9 = new Swiper(".swiper3", {
                "loop": true,
                "slidesPerView": 1,
                "pagination": {
                    "el": ".swiper-pagination"
                },
                "on": {
                    "slideChangeTransitionStart": function () {
                        _0x617579();
                        $(".muted").off("click");
                        $(".toReplay").off("click");
                        $(".slid-e-video").removeClass("v-show");
                        $(".slid-e-bj").removeClass("v-hidden");
                    },
                    "slideChangeTransitionEnd": function () {
                        $(".wap-hide").is(":hidden") == false && EC.isSlid && (EC.isSlid = false, setTimeout(function () {
                            EC.isSlid = true;
                            _0x45127a();
                        }, 1000));
                    }
                }
            });
            function _0x617579() {
                {
                    let _0x10fde0 = Array.from(document.getElementsByClassName("preview"));
                    for (let _0x5afc47 = 0; _0x5afc47 < _0x10fde0.length; _0x5afc47++) {
                        {
                            const _0x11da6c = _0x10fde0[_0x5afc47];
                            _0x11da6c.pause();
                            _0x11da6c.currentTime = 0;
                        }
                    }
                }
            }
            let _0x519239 = 0;
            function _0x45127a() {
                let _0x2d1857 = document.querySelector(".slid-e").querySelector(".swiper-slide-active").querySelector("video"),
                    _0x1d999a = $(".slid-e .swiper-slide-active");
                ~~_0x2d1857.duration > 10 ? (_0x1d999a.find(".slid-e-video").addClass("v-show"), _0x1d999a.find(".slid-e-bj").addClass("v-hidden"), _0x2d1857.muted ? $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan") : $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), $(".muted").click(function () {
                    if (_0x2d1857.muted) $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x2d1857.muted = false, _0x519239 = 1;else {
                        $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan");
                        _0x2d1857.muted = true;
                        _0x519239 = 0;
                    }
                }), _0x519239 === 1 && ($(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x2d1857.muted = false), $(".toReplay").click(function () {
                    _0x1d999a.find(".slid-e-video").addClass("v-show");
                    _0x1d999a.find(".slid-e-bj").addClass("v-hidden");
                    _0x2d1857.currentTime = 0;
                    _0x2d1857.play();
                }), _0x2d1857.play(), _0x2d1857.addEventListener("ended", function () {
                    _0x1d999a.find(".slid-e-video").removeClass("v-show");
                    _0x1d999a.find(".slid-e-bj").removeClass("v-hidden");
                    _0x7a82f9.slideNext();
                })) : setTimeout(function () {
                    _0x7a82f9.slideNext();
                }, 6000);
            }
        }
        let _0x3e1a47 = $("#height_limit");
        _0x3e1a47.height() >= 80 && (_0x3e1a47.addClass("occlusion"), $(".text-open").show());
        $(".tim-bnt").click(function () {
            _0x3e1a47.hasClass("height_rel") ? ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe563;</i>" + language["4"]), _0x3e1a47.removeClass("height_rel"), _0x3e1a47.addClass("occlusion")) : ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe564;</i>" + language["5"]), _0x3e1a47.addClass("height_rel"), _0x3e1a47.removeClass("occlusion"));
        });
        EC.Swiper.Navs();
        EC.Swiper.Slide();
        EC.Swiper.Roll();
        EC.Actor.Detail();
        $(".gen-left-list").click(function () {
            let _0x1dfb2c = $(".head-more").html(),
                _0x481654 = "bold0",
                _0x310e01 = "wap-show1",
                _0x5e95c5 = $(".head-nav");
            _0x5e95c5.hasClass("bold1") && (_0x481654 = "bold1");
            if (_0x5e95c5.hasClass("wap-show0")) {
                _0x310e01 = "wap-show0";
            }
            EC.Pop.Drawer("<div class='drawer-nav drawer-scroll " + _0x481654 + " " + _0x310e01 + "'><div class='drawer-scroll-list'>" + _0x1dfb2c + "</div></div>", function () {
                {
                    let _0x435a9f = $(".gen-account-menu").html();
                    $(".drawer-list-box").prepend("<div class='drawer-menu cor2'>" + _0x435a9f + "</div>");
                }
            });
        });
        $(".playBut").click(function () {
            let data_url = $(this).attr("data-url");
            let data_src = $(this).attr("data-src");
            $(".play-advance .topfadeInUp").html("<video id=\"xkPlayer\" width=\"100%\" height=\"100%\" controls poster=\"" + data_src + "\"  preload=\"auto\" autoplay><source src=\"" + data_url + "\" type=\"video/mp4\"></video>");
            $(".play-advance").show();
        });
        $(".play-advance .box-bg,.play-advance .mfp-close").click(function () {
            let _0x156f36 = document.getElementById("xkPlayer");
            _0x156f36.currentTime = 0;
            _0x156f36.pause();
            $(".play-advance").hide();
            $(".mfp-iframe").remove();
        });
        $(".deployment").click(function () {
            let _0x41d545 = $(".info-parameter").html();
            EC.Pop.Drawer(_0x41d545, function () {
                $(".drawer-list-box").addClass("drawer-list-b bj3");
                $(document).on("click", ".drawer-of", function () {
                    EC.Pop.DrawerDel();
                });
            });
        });
        $(".wap-diy-vod-e .vod-link").hover(function () {
            $(this).addClass("box");
            $(this).children(".vod-no-dom-show").hide();
            $(this).children(".vod-no-dom").show();
        }, function () {
            $(this).removeClass("box");
            $(this).children(".vod-no-dom-show").show();
            $(this).children(".vod-no-dom").hide();
        });
        $("#BuyPopEdom").click(function () {
            let _0x2cca38 = $(this);
            _0x2cca38.attr("data-id") && confirm(language["6"]) && EC.Ajax(maccms.path + "/index.php/user/ajax_buy_popedom.html?id=" + _0x2cca38.attr("data-id") + "&mid=" + _0x2cca38.attr("data-mid") + "&sid=" + _0x2cca38.attr("data-sid") + "&nid=" + _0x2cca38.attr("data-nid") + "&type=" + _0x2cca38.attr("data-type"), "get", "json", "", function (_0x53154c) {
                _0x2cca38.addClass("disabled");
                _EC.Pop.Msg(_0x53154c.msg);
                Number(_0x53154c.code) === 1 && top.location.reload();
                _0x2cca38.removeClass("disabled");
            });
        });
        $("#check").click(function () {
            let _0x203fb4 = $(this);
            _0x203fb4.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/pwd.html?id=" + _0x203fb4.attr("data-id") + "&mid=" + _0x203fb4.attr("data-mid") + "&type=" + _0x203fb4.attr("data-type") + "&pwd=" + _0x203fb4.parents("form").find("input[name=\"pwd\"]").val(), "get", "json", "", function (_0x21706d) {
                _0x203fb4.addClass("disabled");
                _EC.Pop.Msg(_0x21706d.msg);
                Number(_0x21706d.code) === 1 && location.reload();
                _0x203fb4.removeClass("disabled");
            });
        });
        switch (maccms.aid) {
            case "12":
            case "11":
                let _0x36290a = $("#dataList");
                if (_0x36290a.length > 0) {
                    {
                        let _0x210837 = _0x36290a.data(),
                            _0x3dce13 = {
                                "type": _0x210837.type,
                                "class": _0x210837.class,
                                "area": _0x210837.area,
                                "lang": _0x210837.lang,
                                "version": _0x210837.version,
                                "state": _0x210837.state,
                                "letter": _0x210837.letter
                            };
                        $(".ec-casc-list .swiper-slide").click(function () {
                            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
                            EC.Swiper.Navs();
                            _0x3dce13[$(this).data("type")] = $(this).data("val");
                            if (EC.Empty($(this).data("type"))) return;
                            _0x36290a.html("");
                            HTML.Skeleton(_0x36290a, 3, _0x210837.tpl);
                            EC.flow.get(_0x3dce13, _0x36290a, _0x210837, function () {});
                        });
                        $(".site-tabs a").click(function () {
                            {
                                $(this).addClass("active").siblings().removeClass("active");
                                if (Number($("#dataList .null").length) === 1) return;
                                _0x3dce13.by = $(this).data("type");
                                _0x36290a.html("");
                                HTML.Skeleton(_0x36290a, 3, _0x210837.tpl);
                                EC.flow.get(_0x3dce13, _0x36290a, _0x210837, function () {});
                            }
                        });
                        HTML.Skeleton(_0x36290a, 3, _0x210837.tpl);
                        _0x3dce13[$(this).data("type")] = $(this).data("val");
                        EC.flow.get(_0x3dce13, _0x36290a, _0x210837, function () {});
                    }
                }
                break;
            case "14":
            case "104":
            case "15":
                $(".anthology-tab a").click(function () {
                    $(this).addClass("on nav-dt").siblings().removeClass("on nav-dt");
                    let _0x5bd70b = $(".anthology-tab a").index(this),
                        _0x4f090f = $(".anthology-list .none").eq(_0x5bd70b);
                    _0x4f090f.fadeIn(800).siblings().hide();
                    _0x4f090f.addClass("dx").siblings().removeClass("dx");
                    EC.Swiper.Navs();
                });
                $("#zxdaoxu").each(function () {
                    $(this).on("click", function (_0x4d4fb9) {
                        _0x4d4fb9.preventDefault();
                        $(".dx").each(function () {
                            {
                                let _0x3ce2d0 = $(this).find("li");
                                for (let _0x2ee26a = 0, _0x105b3a = _0x3ce2d0.length - 1; _0x2ee26a < _0x105b3a;) {
                                    {
                                        let _0x47c473 = _0x3ce2d0.eq(_0x2ee26a).clone(true),
                                            _0x5cac5f = _0x3ce2d0.eq(_0x105b3a).replaceWith(_0x47c473);
                                        _0x3ce2d0.eq(_0x2ee26a).replaceWith(_0x5cac5f);
                                        ++_0x2ee26a;
                                        --_0x105b3a;
                                    }
                                }
                            }
                        });
                    });
                });
                $("#role .public-list-box").click(function () {
                    {
                        let _0x4a3895 = $(this).index(),
                            _0x2e1ee7 = $("#role .cor5").eq(_0x4a3895).text(),
                            _0x4b66ce = $("#role .time-title").eq(_0x4a3895).text(),
                            _0x128a24 = $("#role .lazy").eq(_0x4a3895).data(),
                            _0xde081c = _0x128a24.text;
                        _0xde081c.length < 1 && (_0xde081c = language["7"]);
                        let _0xad4a9a = "<div class=\"role-card\"><div class=\"card-top flex\"><div class=\"left\"><img class=\"lazy\" src=\"" + _0x128a24.src + "\" alt=\"" + _0x4b66ce + "\"></div>\n" + "<div class=\"right\"><p>" + _0x4b66ce + "</p><p class=\"cor5\">" + _0x2e1ee7 + "</p></div></div> \n" + "<div class=\"card-bottom\"><p class=\"card-title\">" + language["8"] + "</p><div class=\"card-text cor5\">" + _0xde081c + "</div></div></div>";
                        EC.Pop.Show(_0xad4a9a, language["9"], function () {});
                    }
                });
                $(".vod-detail .vod-detail-bnt .button").click(function () {
                    location.href = $(".anthology-list-play a").eq(0).attr("href");
                });
                $(".player-button-ac").click(function () {
                    $(".anthology-list").toggleClass("player-list-ac");
                });
                $(".play-tips-bnt").click(function () {
                    $(".tips-box").slideToggle();
                    $(".charge,.player-share-box").hide();
                });
                $(".ec-report").click(function () {
                    {
                        let _0x5a6656 = $(this).data();
                        EC.Gbook.Report(_0x5a6656);
                    }
                });
                $(".charge-button").click(function () {
                    $(".charge").fadeToggle();
                    $(".player-share-box,.tips-box").hide();
                });
                $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
                $("#expand_details").click(function () {
                    $(".player-vod-box").hide();
                    $(".player-list-box").hide();
                    $(".player-details-box").show();
                });
                $(".player-close").click(function () {
                    $(".player-vod-box").show();
                    $(".player-list-box").show();
                    $(".player-details-box").hide();
                    $(".player-return .none").hide();
                    $(".player-vod-no1").show();
                    $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
                });
                $(".player-vod-no1 .public-list-box").click(function () {
                    $(".player-return .none").show();
                    $(".player-vod-no1").hide();
                    $(".player-vod-no2").show();
                    EC.Ajax(maccms.path + "/index.php/api/actor_vod_player_api?id=" + $(this).attr("data-id"), "get", "json", "", function (_0x2d650e) {
                        if (Number(_0x2d650e.code) === 1) {
                            {
                                let _0x54f672 = "";
                                $.each(_0x2d650e.list, function (_0x65a5c3, _0x51e703) {
                                    _0x54f672 = _0x54f672 + "<div class=\"public-list-box public-pic-b\"><div class=\"public-list-div\"><a class=\"public-list-exp\" href=\"" + _0x51e703.url + "\" title=\"" + _0x51e703.name + "\">" + "<img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + language["10"] + "\" data-src=\"" + _0x51e703.pic + "\" /></a>\n" + "<i class=\"collection fa\" data-type=\"2\" data-mid=\"" + maccms.mid + "\" data-id=\"" + _0x51e703.id + "\">&#xe577;</i></div>\n" + "<div class=\"public-list-button\"><a target=\"_blank\" class=\"time-title hide ft4\" href=\"" + _0x51e703.url + "\" title=\"" + _0x51e703.name + "\">" + _0x51e703.name + "</a></div></div>";
                                });
                                $(".player-vod-no2").html("<div class=\"role-card top20\">" + _0x2d650e.html + "</div><div class=\"title-m cor4\"><h5>" + language["11"] + "</h5></div><div class=\"flex wrap border-box hide-b-16 wap-diy-vod-a\">" + _0x54f672 + "</div>");
                                EC.Init.LazyLoad.update();
                            }
                        } else _EC.Pop.Msg(language["12"], "", "error");
                    });
                });
                $(".player-return .none").click(function () {
                    $(this).hide();
                    $(".player-vod-no1").show();
                    $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
                });
                if (Number(maccms.jx) === 1) {
                    {
                        let _0x22b8c5 = $(".line-switch");
                        EC.player.player_jx(_0x22b8c5.attr("data-api"), _0x22b8c5.attr("data-url"));
                        $(".vod-playerUrl").click(function () {
                            _0x22b8c5.html("");
                            EC.player.player_jx(_0x22b8c5.attr("data-api"), $(this).attr("data-form"));
                        });
                        $(document).on("click", ".line-switch a", function () {
                            $(this).addClass("bj2").siblings().removeClass("bj2");
                            maccms.jx_index = $(this).index();
                            $("#playleft iframe").attr("src", $(this).attr("data-api") + MacPlayer.PlayUrl);
                            _EC.Pop.Msg(language["13"], "", "success");
                        });
                    }
                }
                break;
            case "4":
                EC.Gbook.Init();
                break;
            case "24":
                $(".tim-content img").touchTouch();
                let _0x323cfe = $(".ds-comment");
                Number(_0x323cfe.length) === 1 && (EC.Comment.Login = _0x323cfe.data().login, EC.Comment.Verify = _0x323cfe.data().verify, EC.Comment.Init(), EC.Comment.Show(1));
                break;
            case "21":
                let _0x168e3f = $("#dataList");
                if (_0x168e3f.length > 0) {
                    {
                        let _0x2a5922 = _0x168e3f.data();
                        HTML.Skeleton(_0x168e3f, 3, _0x2a5922.tpl);
                        let _0x1f246f = {
                            "type": _0x2a5922.type
                        };
                        EC.flow.get(_0x1f246f, _0x168e3f, _0x2a5922, function () {
                            EC.Swiper.Roll();
                        });
                    }
                }
                break;
            case "23":
                let _0x12df80 = $("#dataList");
                if (_0x12df80.length > 0) {
                    let _0x33fa6c = _0x12df80.data();
                    HTML.Skeleton(_0x12df80, 3, _0x33fa6c.tpl);
                    let _0x1a98b9 = {
                        "wd": _0x33fa6c.type,
                        "tag": _0x33fa6c.wdtag
                    };
                    EC.flow.get(_0x1a98b9, _0x12df80, _0x33fa6c, function () {
                        EC.Swiper.Roll();
                    });
                }
                break;
            case "84":
                $(".art-so-tag").click(function () {
                    {
                        let _0x1c2bb7 = $("#dataList"),
                            _0x99d0e5 = _0x1c2bb7.data();
                        _0x1c2bb7.html("");
                        HTML.Skeleton(_0x1c2bb7, 3, _0x99d0e5.tpl);
                        let _0x5e61c2 = {
                            "wd": _0x99d0e5.type,
                            "tag": _0x99d0e5.wdtag
                        };
                        EC.flow.get(_0x5e61c2, _0x1c2bb7, _0x99d0e5, function () {
                            EC.Swiper.Roll();
                        });
                    }
                });
                break;
            case "82":
                let _0x1a0248 = $("#dataList");
                if (_0x1a0248.length > 0) {
                    {
                        let _0x1a9d01 = _0x1a0248.data(),
                            _0x3105f0 = {
                                "type": _0x1a9d01.type
                            };
                        $(".ec-casc-list .swiper-slide").click(function () {
                            {
                                $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
                                EC.Swiper.Navs();
                                _0x3105f0[$(this).data("type")] = $(this).data("val");
                                _0x1a0248.html("");
                                HTML.Skeleton(_0x1a0248, 3, _0x1a9d01.tpl);
                                EC.flow.get(_0x3105f0, _0x1a0248, _0x1a9d01, function () {});
                            }
                        });
                        HTML.Skeleton(_0x1a0248, 3, _0x1a9d01.tpl);
                        _0x3105f0[$(this).data("type")] = $(this).data("val");
                        EC.flow.get(_0x3105f0, _0x1a0248, _0x1a9d01, function () {});
                    }
                }
                break;
            case "302":
                let _0x1d4d05 = $("#dataList");
                if (_0x1d4d05.length > 0) {
                    {
                        let _0x90af5d = _0x1d4d05.data(),
                            _0x1d218e = {};
                        $(".ec-casc-list .swiper-slide").click(function () {
                            {
                                $(".swiper-slide").removeClass("nav-dt");
                                $(this).addClass("nav-dt");
                                EC.Swiper.Navs();
                                _0x1d218e.type = $(this).data("id");
                                _0x1d4d05.html("");
                                HTML.Skeleton(_0x1d4d05, 3, _0x90af5d.tpl);
                                EC.flow.get(_0x1d218e, _0x1d4d05, _0x90af5d, function () {});
                            }
                        });
                        HTML.Skeleton(_0x1d4d05, 3, _0x90af5d.tpl);
                        _0x1d218e[$(this).data("type")] = $(this).data("val");
                        EC.flow.get(_0x1d218e, _0x1d4d05, _0x90af5d, function () {});
                    }
                }
                break;
        }
        Number(maccms.mid) === 11 && ($(".web-so-btn").click(function () {
            {
                let _0x443d06 = $(".website-val").val();
                if (_0x443d06) window.open($(".website-filter-grid .action").attr("data-url") + _0x443d06);else {
                    _EC.Pop.Msg(language["14"], "", "error");
                }
            }
        }), $(".website-filter-grid .icon").click(function () {
            $(".website-filter-grid .action").removeClass("action");
            $(this).addClass("action");
        }), $(".togo").click(function () {
            {
                let _0x23f881 = $(this).attr("data-id"),
                    _0x1be2e1 = $(this).attr("data-mi");
                Number(_0x1be2e1) === 1 ? _EC.Pop.Msg(language["15"], "", "error") : EC.Ajax(maccms.path + "/index.php/api/website?id=" + _0x23f881, "get", "json", "", function (_0x2679e5) {
                    _0x2679e5.smg === 1 ? EC.Pop.Show("<div class=\"website-title\">" + _0x2679e5.data.website_name + "</div><div class=\"card-text cor5\"><p>" + _0x2679e5.data.website_blurb + "</p><p>" + _0x2679e5.data.website_content + "</p></div><div class=\"flex website-tag top20\">" + _0x2679e5.data.website_tag + "</div>", language["20"], function () {}) : _EC.Pop.Msg(language["15"], "", "error");
                });
            }
        }), $("#tou_gao").click(function () {
            if (Number(EC.User.IsLogin) === 0) {
                {
                    EC.User.Login();
                    return;
                }
            }
            EC.Pop.Show("<form class=\"tg-form\"><p class=\"cor5 top10\">" + language["16"] + "</p><div class=\"region nav-link textarea bj\">\n" + "<textarea class=\"tg-content cor5\" name=\"gbook_content\" style=\"width:100%;height:100%\"></textarea>\n" + "</div><div class=\"flex\"><input type=\"text\" class=\"input bj br cor5\" name=\"verify\" value=\"\" maxlength=\"4\" size=\"20\">\n" + "<img class=\"ds-verify-img\" src=\"/index.php/verify/index.html\" alt=\"" + language["19"] + "\" onclick=\"this.src = this.src+'?'\"></div>\n" + "<input type=\"button\" class=\"tg-submit button top20 submit_btn\" style=\"width:100%\" value=\"" + language["17"] + "\"></form>", language["18"], function () {
                $(".tg-submit").click(function () {
                    EC.Gbook.Tg();
                });
            });
        }));
        $("#website_user").click(function () {
            $.ajax({
                "url": window.location.href + "&pdw=" + $("#website_password").val(),
                "type": "post",
                "dataType": "json",
                "success": function (_0x47e889) {
                    {
                        if (Number(_0x47e889.smg) === 1) window.location.replace(_0x47e889.url);else {
                            window.location.replace("https://www.kugou.com/song/#hash=8C1A6044DDF1650A82B42769C47FD645&album_id=501600");
                        }
                    }
                }
            });
        });
        $(".jp-download").click(function () {
            {
                let _0x440cb8 = "<p class=\"cor5 top10\">" + language["21"] + "</p><div class=\"region nav-link textarea bj\"><textarea id=\"bar2\" class=\"cor5\" style=\"width:100%;height:100%\">" + language["22"] + "\u9286\uFFFD" + ecData.list[ecData.playid].name + "\u9286\uFFFD" + language["23"] + ecData.list[ecData.playid].url + "</textarea></div>\n" + "<button type=\"button\" class=\"button copyBtn\" style=\"width:100%\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar2\">" + language["24"] + "</button>";
                EC.Pop.Show(_0x440cb8, language["25"], function () {
                    $(document).on("click", ".copyBtn", function () {
                        _EC.Pop.Msg(language["26"], "", "success");
                        $(".window").remove();
                    });
                });
            }
        });
        $(".ds-pop").length > 0 && EC.Empty(EC.Cookie.Get("ecPopup")) && (EC.Cookie.Set("ecPopup", 1, 1), $("#notice").show(), $("#notice .box-bg,#notice .button").click(function () {
            $("#notice").hide();
        }));
        $(".player-switch").click(function () {
            {
                let _0x548692 = $(".player");
                if (_0x548692.hasClass("player-switch-box")) $(this).html("&#xe565;"), _0x548692.removeClass("player-switch-box");else {
                    $(this).html("&#xe566;");
                    _0x548692.addClass("player-switch-box");
                }
            }
        });
        const _0x3a9733 = " %c 短视主题 by MMOUM ® %c QQ246969885（严禁利用主题建设违法网站）";
        console.log("\n" + _0x3a9733 + "\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;", "background: #fadfa3; padding:5px 0; font-size:18px;");
        if ($(".week-title").length > 0) {
            let _0xb11d0e = ["\u6D93\u20AC", "\u6D5C\uFFFD", "\u6D93\uFFFD", "\u9365\uFFFD", "\u6D5C\uFFFD", "\u934F\uFFFD", "\u93C3\uFFFD"],
                _0x473250 = new Date().getDay();
            if (_0x473250 === 0) {
                _0x473250 = 7;
            }
            let _0x4210cf = $("#week-list" + _0x473250),
                _0x127f64 = _0x4210cf.children();
            _0x4210cf.show();
            $(".week-bj").addClass("week-" + _0x473250);
            $(".week-key" + _0x473250).addClass("tim");
            let _0xac2ec2 = $("#dataList"),
                _0x19c9d = _0xac2ec2.data(),
                _0x4fff60 = {
                    "weekday": _0xb11d0e[_0x473250 - 1],
                    "num": _0x19c9d.num,
                    "by": _0x19c9d.by,
                    "type": _0x19c9d.type
                };
            HTML.Skeleton(_0x127f64, 3, "vod");
            _0x391d2c(_0x4fff60, _0x127f64, _0x19c9d);
            $(".week-title .week-select a").click(function () {
                $(this).addClass("tim").siblings().removeClass("tim");
                let _0x22225f = $(this).data();
                $(".week-bj").removeClass("week-1 week-2 week-3 week-4 week-5 week-6 week-7").addClass("week-" + _0x22225f.index);
                $(".animated").hide();
                _0x4210cf = $("#week-list" + _0x22225f.index);
                _0x4210cf.show();
                _0x127f64 = _0x4210cf.children();
                if (_0x127f64.html().length > 50) return;
                _0x4fff60.weekday = _0x22225f.val;
                HTML.Skeleton(_0x127f64, 3, "vod");
                _0x391d2c(_0x4fff60, _0x127f64, _0x19c9d);
            });
        }
        function _0x391d2c(_0xe769c8, _0x125e4e, _0x205cc2) {
            setTimeout(function () {
                let _0x248c3e = [],
                    _0x38e84d = Math.round(new Date() / 1000),
                    _0x9ab69c = _0xe769c8;
                _0x9ab69c.time = _0x38e84d;
                _0x9ab69c.key = EC.Md5(_0x38e84d);
                EC.Ajax(_0x205cc2.api, "post", "json", _0x9ab69c, function (_0x1701e9) {
                    if (Number(_0x1701e9.code) === 1) {
                        {
                            _0x248c3e = HTML.Art(_0x1701e9, _0x205cc2);
                            if (EC.flow.empty(_0x1701e9.list.length, _0x125e4e)) return;
                            _0x125e4e.html(_0x248c3e.join(""));
                            EC.Init.LazyLoad.update();
                            EC.Style.Footer();
                            $(".lang-bnt").length === 1 && zh_tranBody();
                        }
                    } else Number(_0x1701e9.code) === 2 ? $(".flow-more").html(_0x1701e9.msg) : _EC.Pop.Msg(language["27"] + _0x1701e9.msg, "", "error");
                }, function () {
                    _EC.Pop.Msg(language["28"], "", "error");
                });
            }, 100);
        }
    },
    "Style": {
        "Init": function () {
            let _0x4c78d7 = $(".theme-style"),
                _0x5d1802 = EC.Cookie.Get("ec-wap_style");
            if (!EC.Empty(_0x5d1802)) {
                $("body").attr("class", _0x5d1802);
                _0x5d1802 === "theme1" ? _0x4c78d7.html("&#xe574;").attr("data-id", 1) : _0x4c78d7.html("&#xe575;").attr("data-id", 2);
            }
            _0x4c78d7.click(function () {
                EC.Style.Switch(_0x4c78d7);
            });
        },
        "Set": function (_0x375ca9) {
            EC.Cookie.Set("ec-wap_style", _0x375ca9);
        },
        "Switch": function (_0x5023ee) {
            let _0x29b742 = _0x5023ee.attr("data-id");
            Number(_0x29b742) === 1 ? ($("body").attr("class", "theme2"), _0x5023ee.html("&#xe575;").attr("data-id", 2), EC.Style.Set("theme2")) : ($("body").attr("class", "theme1"), _0x5023ee.html("&#xe574;").attr("data-id", 1), EC.Style.Set("theme1"));
        },
        "Footer": function () {
            $(document.body).height() < $(window).height() ? $(".footer-bottom").addClass("footerLess") : $(".footer-bottom").removeClass("footerLess");
        }
    },
    "Cookie": {
        "Set": function (_0x2b9e4f, _0x19e488, _0x365782) {
            let _0x23f120 = new Date();
            _0x23f120.setTime(_0x23f120.getTime() + _0x365782 * 24 * 60 * 60 * 1000);
            document.cookie = _0x2b9e4f + "=" + encodeURIComponent(_0x19e488) + ";path=/;expires=" + _0x23f120.toUTCString();
        },
        "Get": function (_0x410f62) {
            let _0x426d95 = document.cookie.match(new RegExp("(^| )" + _0x410f62 + "=([^;]*)(;|$)"));
            if (_0x426d95 != null) return decodeURIComponent(_0x426d95[2]);
        },
        "Del": function (_0x39ca5c) {
            let _0x4a0fc1 = new Date();
            _0x4a0fc1.setTime(_0x4a0fc1.getTime() - 1);
            let _0x5d51a8 = this.Get(_0x39ca5c);
            _0x5d51a8 != null && (document.cookie = _0x39ca5c + "=" + encodeURIComponent(_0x5d51a8) + ";path=/;expires=" + _0x4a0fc1.toUTCString());
        }
    },
    "Empty": function (_0x16284d) {
        return _0x16284d == null || _0x16284d === "";
    },
    "debounce": function (_0x33802c, _0x218937) {
        let _0x4ffc5b = null;
        return function () {
            let _0x56e693 = this,
                _0x536cc4 = arguments;
            clearTimeout(_0x4ffc5b);
            _0x4ffc5b = setTimeout(function () {
                _0x33802c.apply(_0x56e693, _0x536cc4);
            }, _0x218937);
        };
    },
    "GoBack": function () {
        let _0x35b340 = document.domain;
        document.referrer.indexOf(_0x35b340) > 0 ? history.back() : window.location = "//" + _0x35b340;
    },
    "Ajax": function (_0x2b4d36, _0x1e9766, _0x2fe5a4, _0x4b40ef, _0x11d26b, _0x866430, _0x342436) {
        _0x1e9766 = _0x1e9766 || "get";
        _0x2fe5a4 = _0x2fe5a4 || "json";
        _0x4b40ef = _0x4b40ef || "";
        _0x866430 = _0x866430 || "";
        _0x342436 = _0x342436 || "";
        $.ajax({
            "url": _0x2b4d36,
            "type": _0x1e9766,
            "dataType": _0x2fe5a4,
            "data": _0x4b40ef,
            "timeout": 5000,
            "beforeSend": function (_0x5269dc) {},
            "error": function (_0x4e4580, _0x3a3260, _0x5432a3) {
                {
                    if (_0x866430) _0x866430(_0x4e4580, _0x3a3260, _0x5432a3);
                }
            },
            "success": function (_0x249f5c) {
                _0x11d26b(_0x249f5c);
            },
            "complete": function (_0x3224d1, _0x39d7e9) {
                if (_0x342436) _0x342436(_0x3224d1, _0x39d7e9);
            }
        });
    },
    "flow": {
        "load": function (_0x517649) {
            _0x517649 = _0x517649 || {};
            let _0x356928 = this,
                _0x287389 = 0,
                _0x4f3fa3,
                _0x18c35b,
                _0x3b762e,
                _0x1d9ce6 = $(_0x517649.elem);
            if (!_0x1d9ce6[0]) return;
            let _0x9df169 = $(_0x517649.scrollElem || document),
                _0x376377 = _0x517649.mb || 50,
                _0x57707a = "isAuto" in _0x517649 ? _0x517649.isAuto : true,
                _0x1d71b7 = _0x517649.end || language["29"],
                _0x17afdb = _0x517649.scrollElem && _0x517649.scrollElem !== document,
                _0x200649 = "<i class=\"fa ds-jiantouyou\"></i>" + language["30"],
                _0x33e66d = $("<div class=\"flow-more cor5\"><a href=\"javascript:;\">" + _0x200649 + "</a></div>");
            !_0x1d9ce6.find(".flow-more")[0] && _0x1d9ce6.append(_0x33e66d);
            let _0x5af146 = function (_0x54a518, _0x49f8b5) {
                    {
                        Number(_0x287389) === 1 && $(".flow-more").siblings().remove();
                        _0x54a518 = $(_0x54a518);
                        _0x33e66d.before(_0x54a518);
                        _0x49f8b5 = Number(_0x49f8b5) === 0 ? true : null;
                        _0x49f8b5 ? _0x33e66d.html(_0x1d71b7) : _0x33e66d.find("a").html(_0x200649);
                        _0x18c35b = _0x49f8b5;
                        _0x4f3fa3 = null;
                        EC.Init.LazyLoad.update();
                    }
                },
                _0xdc8134 = function () {
                    _0x4f3fa3 = true;
                    _0x33e66d.find("a").html("<i class=\"loading3\"></i>" + language["31"]);
                    typeof _0x517649.done === "function" && _0x517649.done(++_0x287389, _0x5af146, _0x1d9ce6);
                };
            _0xdc8134();
            _0x33e66d.find("a").on("click", function () {
                if (_0x18c35b) return;
                _0x4f3fa3 || _0xdc8134();
            });
            if (!_0x57707a) return _0x356928;
            _0x9df169.off("scroll");
            _0x9df169.on("scroll", function () {
                let _0x59ff9a = $(this),
                    _0x43d54e = _0x59ff9a.scrollTop();
                if (_0x3b762e) clearTimeout(_0x3b762e);
                if (_0x18c35b || !_0x1d9ce6.width()) return;
                _0x3b762e = setTimeout(function () {
                    {
                        let _0x65b23c = _0x17afdb ? _0x59ff9a.height() : $(window).height(),
                            _0x6117b5 = _0x17afdb ? _0x59ff9a.prop("scrollHeight") : document.documentElement.scrollHeight;
                        _0x6117b5 - _0x43d54e - _0x65b23c <= _0x376377 && (_0x4f3fa3 || _0xdc8134());
                    }
                }, 100);
            });
            return _0x356928;
        },
        "empty": function (_0x3317ad, _0x587287) {
            if (Number(_0x3317ad) === 0) return _0x587287.html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "/template/mmou/asset/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["32"] + "</span></div>"), true;
            return false;
        },
        "get": function (_0x4a1397, _0x563a3d, _0xb8b343, _0x142d58) {
            if (_0x563a3d.length > 0) {
                EC.flow.load({
                    "elem": "#dataList",
                    "isAuto": _0xb8b343.pattern,
                    "end": _0xb8b343.txt,
                    "done": function (_0x4c6089, _0x534731, _0x40090e) {
                        setTimeout(function () {
                            let _0x3f64b6 = [],
                                _0x214ea8 = Math.ceil(new Date().getTime() / 1000),
                                _0x48826d = $.extend(_0x4a1397, {
                                    "page": _0x4c6089,
                                    "time": _0x214ea8,
                                    "key": EC.Md5(_0x214ea8)
                                });
                            EC.Ajax(_0xb8b343.api, "post", "json", _0x48826d, function (_0x44ac99) {
                                if (Number(_0x44ac99.code) === 1) {
                                    if (EC.flow.empty(_0x44ac99.list.length, _0x40090e)) return;
                                    _0x3f64b6 = HTML.Art(_0x44ac99, _0xb8b343);
                                    _0x534731(_0x3f64b6.join(""), _0x4c6089 < _0x44ac99.pagecount);
                                    _0x142d58();
                                    EC.Style.Footer();
                                    $(".lang-bnt").length === 1 && zh_tranBody();
                                } else {
                                    if (Number(_0x44ac99.code) === 2) {
                                        $(".flow-more").html(_0x44ac99.msg);
                                    } else _EC.Pop.Msg(language["27"] + _0x44ac99.msg, "", "error");
                                }
                            }, function () {
                                _EC.Pop.Msg(language["28"], "", "error");
                            });
                        }, 100);
                    }
                });
            }
        }
    },
    "Copy": {
        "Init": function () {
            EC.Width < 767 ? ($(".play-score").click(function () {
                EC.Pop.Show($("#rating").prop("outerHTML"), "请选择您的评分", function () {});
            }), $(".vod-detail-share").click(function () {
                {
                    $(".vod-detail .share-box").remove();
                    let _0x415e1e = "<div class=\"cor5 radius\"><span class=\"share-tips\">" + language["34"] + "</span><span id=\"bar\" class=\"share-url bj cor5\">" + window.location.href + $(document).attr("title") + "</span><button type=\"button\" class=\"share-copy bj2 ho radius copyBtn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">" + language["35"] + "</button></div>";
                    EC.Pop.Show(_0x415e1e, language["18"], function () {
                        $(document).on("click", ".copyBtn", function () {
                            _EC.Pop.Msg(language["36"], "", "success");
                            $(".window").remove();
                        });
                    });
                    new ClipboardJS(".copyBtn");
                }
            })) : ($(".share-url").html(window.location.href + $(document).attr("title")), new ClipboardJS(".copyBtn"), EC.Copy.Qrcode(), $(".vod-detail-share").hover(function () {
                $(".vod-detail .share-box").show();
                $(document).on("click", ".copyBtn", function () {
                    $(".vod-detail .share-box").hide();
                    _EC.Pop.Msg(language["36"], "", "success");
                });
            }, function () {
                $(".vod-detail .share-box").hide();
            }));
            $(".player-share-button").click(function () {
                $(".player-share-box").fadeToggle();
                $(".charge,.tips-box").hide();
                $(".player-share-box .copyBtn").click(function () {
                    _EC.Pop.Msg(language["36"], "", "success");
                    $(".player-share-box").slideUp();
                });
            });
            let _0x243ab2 = new ClipboardJS(".CopyUel");
            $(".CopyUel").click(function () {
                _0x243ab2.on("success", function () {
                    _EC.Pop.Msg(language["37"], "", "success");
                });
                _0x243ab2.on("error", function () {
                    _EC.Pop.Msg(language["38"], "", "error");
                });
            });
        },
        "Qrcode": function () {
            $(".hl-cans").each(function () {
                if ($(this).length) {
                    {
                        $(this).qrcode({
                            "width": 120,
                            "height": 120,
                            "text": encodeURI(window.location.href)
                        });
                        function _0x31e68a(_0x4cae04) {
                            {
                                let _0x33bfe7 = new Image();
                                _0x33bfe7.src = _0x4cae04.toDataURL("image/png");
                                return _0x33bfe7;
                            }
                        }
                        let _0x14d59c = $("canvas")[0],
                            _0x4cc59e = _0x31e68a(_0x14d59c);
                        $(this).next(".share-pic").append(_0x4cc59e);
                    }
                }
            });
        }
    },
    "Swiper": {
        "Navs": function () {
            new Swiper(".nav-swiper", {
                "observer": true,
                "freeMode": true,
                "slidesPerView": "auto",
                "direction": "horizontal",
                "on": {
                    "init": function () {
                        EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
                    },
                    "observerUpdate": function () {
                        EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
                    }
                }
            });
        },
        "Nav": function (_0xbc2972, _0x17a62d, _0x21e026) {
            if (_0xbc2972.find(".nav-dt").length > 0) {
                let _0x5d6971 = _0xbc2972.find(".nav-dt").outerWidth(true),
                    _0x24800c = _0xbc2972.find(".nav-dt")[0].offsetLeft,
                    _0x195911 = _0x17a62d.parent().outerWidth(true),
                    _0x86efc2 = parseInt(_0x21e026);
                _0x17a62d.transition(300);
                if (_0x24800c < (_0x195911 - parseInt(_0x5d6971)) / 2) _0x17a62d.transform("translate3d(0px,0px,0px)");else {
                    if (_0x24800c > _0x86efc2 - (parseInt(_0x5d6971) + _0x195911) / 2) _0x17a62d.transform("translate3d(" + (_0x195911 - _0x86efc2) + "px,0px,0px)");else {
                        _0x17a62d.transform("translate3d(" + ((_0x195911 - parseInt(_0x5d6971)) / 2 - _0x24800c) + "px,0px,0px)");
                    }
                }
            }
        },
        "Slide": function () {
            new Swiper(".slide-swiper", {
                "autoplay": true,
                "loop": true,
                "slidesPerView": 1
            });
            new Swiper(".mySwiper", {
                "loop": true,
                "autoplay": true,
                "clickable": true,
                "slidesPerView": 1,
                "pagination": {
                    "el": ".swiper-pagination"
                }
            });
            new Swiper(".slide-swiper2", {
                "autoplay": {
                    "disableOnInteraction": false
                },
                "loop": true,
                "slidesPerView": 1,
                "on": {
                    "init": function () {
                        let _0x225fce = $(".lazy-p").eq(1).css("backgroundImage");
                        $(".slide-time-ios").css("backgroundImage", _0x225fce);
                    },
                    "slideChangeTransitionEnd": function () {
                        {
                            let _0x50241d = $(".lazy-p").eq(this.realIndex - 1).css("backgroundImage");
                            $(".slide-time-ios").css("backgroundImage", _0x50241d);
                        }
                    }
                }
            });
        },
        "Roll": function () {
            new Swiper(".roll", {
                "paginationClickable": true,
                "slidesPerView": "auto"
            });
        }
    },
    "Actor": {
        "Detail": function () {
            new Swiper(".list-swiper", {
                "slidesPerView": 3,
                "slidesPerGroup": 3,
                "observer": true,
                "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                },
                "breakpoints": {
                    1934: {
                        "slidesPerView": 8,
                        "slidesPerGroup": 8
                    },
                    1691: {
                        "slidesPerView": 7,
                        "slidesPerGroup": 7
                    },
                    767: {
                        "freeMode": true,
                        "slidesPerView": "auto",
                        "slidesPerGroup": 1
                    }
                }
            });
            let _0x471893 = $(".star-works .actor-api");
            _0x471893.length > 0 && ($(".star-works .public-list-box").length > 0 ? _0x2a7a97($(".star-active").attr("data-actor")) : $(".star-works").hide());
            $(".star-works-top .public-list-box").click(function () {
                $(this).addClass("star-active").siblings().removeClass("star-active");
                _0x2a7a97($(this).attr("data-actor"));
            });
            function _0x2a7a97(_0xcefeb0) {
                let _0x59cf12 = "";
                for (let _0x45b0ea = 0; _0x45b0ea < 9; _0x45b0ea++) {
                    _0x59cf12 = _0x59cf12 + "<div class=\"public-list-box public-pic-b swiper-slide\"><div class=\"public-list-div\">" + "<a class=\"public-list-exp\"><div class=\"lazy box\"><span class=\"loadIcon spin-dot-spin\"><i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i>" + "<i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i></span></div></a></div><div class=\"public-list-button\"><a class=\"time-title box radius\"></a>" + "</div></div>";
                }
                _0x471893.html(_0x59cf12);
                EC.Ajax(maccms.path + "/index.php/ajax/actor_vod?name=" + _0xcefeb0, "get", "json", "", function (_0x7a27e9) {
                    Number(_0x7a27e9.code) === 1 ? (_0x59cf12 = "", $.each(_0x7a27e9.list, function (_0x4ab959, _0x100c39) {
                        _0x59cf12 = _0x59cf12 + "    <div class=\"public-list-box public-pic-" + _0x7a27e9.ajax.vod_pic + " swiper-slide\">\n" + "        <div class=\"public-list-div public-list-bj\">\n" + "            <a" + HTML.Target(_0x7a27e9.ajax.vod_target) + " class=\"public-list-exp\" href=\"" + _0x100c39.url + "\">\n" + "                <img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + _0x100c39.name + "\" data-src=\"" + _0x100c39.pic + "\" />" + "                <span class=\"public-bg\"></span>\n" + "                <span class=\"public-play\"><i class=\"fa\">&#xe593;</i></span>\n" + "            </a>\n" + "        </div>\n" + "        <div class=\"public-list-button\"><a" + HTML.Target(_0x7a27e9.ajax.vod_target) + " class=\"time-title ft4 hide\" href=\"" + _0x100c39.url + "\" title=\"" + _0x100c39.name + "\">" + _0x100c39.name + "</a></div>" + "    </div>";
                    }), _0x471893.html(_0x59cf12), EC.Init.LazyLoad.update(), $(".lang-bnt").length === 1 && zh_tranBody()) : _EC.Pop.Msg(language["39"], "", "error");
                });
            }
        }
    },
    "Pop": {
        "Uid": "DCC147D11943AF75",
        "Drawer": function (_0x896130, _0x975f3e) {
            if ($(".drawer-list").length > 0) {
                _EC.Pop.Msg(language["40"], "", "error");
                return;
            }
            $("body").append("<div class=\"drawer-list\"><div class=\"drawer-list-bg box-bg ease\" style=\"display:none\"></div><div class=\"drawer-list-box bj3\"></div></div>");
            $(".drawer-list-box").html(_0x896130);
            _0x975f3e();
            setTimeout(function () {
                $(".drawer-list-bg").css({
                    "display": "block"
                });
                $("body").css({
                    "height": "100%",
                    "width": "100%",
                    "overflow": "hidden"
                });
                $(".drawer-list").addClass("drawer-show");
            }, 0);
            $(".drawer-list-bg").on("click", function () {
                EC.Pop.DrawerDel();
            }).on("touchmove", function () {
                EC.Pop.DrawerDel();
            });
        },
        "DrawerDel": function () {
            $(".drawer-list-box").addClass("drawer-out");
            $("body").css({
                "height": "",
                "width": "",
                "overflow": ""
            });
            $(".drawer-list-bg").css({
                "display": "none"
            });
            setTimeout(function () {
                $(".drawer-list").remove();
            }, 100);
        },
        "Show": function (_0x1ac9c7, _0x34072a, _0x216fee) {
            Number($(".window").length) !== 1 && EC.Pop.RemoveWin();
            $("body").append("<div class=\"window\"><div class=\"box-bg\"></div><div class=\"window-box\"><div class=\"topfadeInUp animated bj3 cor4\"><div class=\"window-title rel\"><h2 class=\"subscript ft6 br\"></h2><a class=\"window-off fa ds-guanbi\"></a></div><div class=\"window-content\"></div></div></div></div>");
            $(".window .subscript").html(_0x34072a);
            $(".window-content").html(_0x1ac9c7);
            $(".window-box").addClass("window-show");
            $(document).on("click", ".box-bg", function () {
                $(this).parent().remove();
            });
            $(document).on("click", ".window-off", function () {
                $(this).parent().parent().parent().parent().remove();
            });
            _0x216fee();
        },
        "RemoveWin": function () {
            $(".window").remove();
        }
    },
    "Toggle": function () {
        $(".switch-button a").click(function () {
            {
                $(this).addClass("selected").siblings().removeClass("selected");
                let _0x308695 = $(".switch-button a").index(this),
                    _0x5a297b = $(".switch-box .check").eq(_0x308695);
                _0x5a297b.fadeIn(800).siblings().hide();
                _0x5a297b.addClass("selected").siblings().removeClass("selected");
            }
        });
    },
    "player": {
        "player_jx": function (_0x306115, _0x2364a7) {
            let _0x35851d = {},
                _0x115451 = _0x306115.split("#");
            for (let _0x389cff = 0; _0x389cff < _0x115451.length; _0x389cff++) {
                let _0x5726ef = _0x115451[_0x389cff].split("$"),
                    _0x245159 = _0x5726ef[1].split(",");
                for (let _0x1001a0 = 0; _0x1001a0 < _0x245159.length; _0x1001a0++) {
                    _0x35851d.hasOwnProperty(_0x245159[_0x1001a0]) ? _0x35851d[_0x245159[_0x1001a0]][Object.keys(_0x35851d[_0x245159[_0x1001a0]]).length] = {
                        "name": _0x5726ef[0],
                        "api": _0x5726ef[2]
                    } : _0x35851d[_0x245159[_0x1001a0]] = {
                        0: {
                            "name": _0x5726ef[0],
                            "api": _0x5726ef[2]
                        }
                    };
                }
            }
            let _0x382988 = "";
            for (let _0x30a0f2 in _0x35851d) {
                if (_0x30a0f2 == _0x2364a7) {
                    let _0x329f0b = _0x35851d[_0x30a0f2];
                    for (let _0x578257 = 0; _0x578257 < Object.keys(_0x329f0b).length; _0x578257++) {
                        !EC.Empty(maccms.jx_index) && _0x578257 == maccms.jx_index ? _0x382988 = _0x382988 + "<a class=\"box radius hide border bj2\" href=\"javascript:\" data-api=\"" + _0x329f0b[_0x578257].api + "\">" + _0x329f0b[_0x578257].name + "</a>" : _0x382988 = _0x382988 + "<a class=\"box radius hide border\" href=\"javascript:\" data-api=\"" + _0x329f0b[_0x578257].api + "\">" + _0x329f0b[_0x578257].name + "</a>";
                    }
                }
            }
            _0x382988.length > 1 && $(".line-switch").html(_0x382988);
        }
    },
    "User": {
        "BoxShow": 0,
        "IsLogin": 0,
        "Init": function () {
            !EC.Empty(EC.Cookie.Get("user_id")) && (EC.User.IsLogin = 1);
            $(document).on("click", ".head-user", function () {
                EC.Empty(EC.Cookie.Get("user_id")) ? EC.User.Login() : window.location.href = $(this).attr("data-url");
            });
            $(document).on("click", ".head-user-out", function () {
                EC.User.Logout();
            });
        },
        "Login": function () {
            EC.Ajax(maccms.path + "/index.php/user/ajax_login", "post", "json", "", function (_0x5c0001) {
                EC.Pop.Show(_0x5c0001, language["41"], function () {
                    $("body").on("click", "#wp-submit", function () {
                        $(this).unbind("click");
                        EC.Ajax(maccms.path + "/index.php/user/login", "post", "json", $(".login-form").serialize(), function (_0x3be536) {
                            _EC.Pop.Msg(_0x3be536.msg, "", "error");
                            Number(_0x3be536.code) === 1 && location.reload();
                        });
                    });
                });
            }, function () {
                _EC.Pop.Msg(language["42"], "", "error");
            });
        },
        "Logout": function () {
            $(this).unbind("click");
            EC.Ajax(maccms.path + "/index.php/user/logout", "post", "json", "", function (_0x9c6e6) {
                _EC.Pop.Msg(_0x9c6e6.msg);
                Number(_0x9c6e6.code) === 1 && location.reload();
            });
        },
        "Collection": function () {
            $("body").on("click", ".collection", function () {
                if (Number(EC.User.IsLogin) === 0) {
                    EC.User.Login();
                    return;
                }
                let collect = $(this);
                if(collect.attr("data-id")) {

                    if(collect.attr("data-ulogid") && collect.attr("data-ulogid") > 0) {
                        // 取消收藏
                        EC.Ajax(maccms.path + "/index.php/user/ulog_del?ids=" + collect.attr("data-ulogid") + "&type=2" , "get", "json", "", function (res) {
                            _EC.Pop.Msg(language["62"]);
                            collect.removeClass('cor6').removeAttr('data-ulogid').remove('selected').blur().html("<i class=\"fa r6\"></i>收藏");
                        });
                    } else {
                        // 收藏
                        EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + collect.attr("data-mid") + "&id=" + collect.attr("data-id") + "&type=" + collect.attr("data-type"), "get", "json", "", function () {
                            EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=&mid=" + collect.attr("data-mid") + "&id=" + collect.attr("data-id") + "&type=2&page=1&limit=9999", "get", "json", "", function (res) {
                                collect.addClass('cor6').attr('data-ulogid', res.list[0].ulog_id).html("<i class=\"fa r6\"></i>已收藏")
                                _EC.Pop.Msg(language["61"]);
                            });
                        });
                    }
                }
            });
        }
    },
    "Ulog": {
        "Init": function () {
            EC.Ulog.Set();
        },
        "Set": function () {
            let _0x15b8c7 = $(".ds-log-set");
            _0x15b8c7.attr("data-mid") && $.get(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + _0x15b8c7.attr("data-mid") + "&id=" + _0x15b8c7.attr("data-id") + "&sid=" + _0x15b8c7.attr("data-sid") + "&nid=" + _0x15b8c7.attr("data-nid") + "&type=" + _0x15b8c7.attr("data-type"));
        }
    },
    "Hits": {
        "Init": function () {
            let _0x509be9 = $(".ds-hits");
            if (Number(_0x509be9.length) === 0) return;
            EC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0x509be9.attr("data-mid") + "&id=" + _0x509be9.attr("data-id") + "&type=update", "get", "json", "", function (_0x4ee18e) {
                Number(_0x4ee18e.code) === 1 && $(".ds-hits").each(function (_0x1dd976) {
                    {
                        let _0xc4a691 = $(".ds-hits").eq(_0x1dd976).attr("data-type");
                        _0xc4a691 !== "insert" && $("." + _0xc4a691).html(eval("(r.data." + _0xc4a691 + ")"));
                    }
                });
            });
        }
    },
    "Md5": function (_0x4b5c59) {
        return hex_md5("DS" + _0x4b5c59 + EC.Pop.Uid);
    },
    "Score": function () {
        let _0x36260a = 0;
        $(document).on("click", "#rating li", function () {
            if (_0x36260a > 0) _EC.Pop.Msg(language["43"]);else {
                let _0x1646b7 = $("#rating").data();
                EC.Ajax(maccms.path + "/index.php/ajax/score?mid=" + _0x1646b7.mid + "&id=" + _0x1646b7.id + "&score=" + $(this).attr("val") * 2, "post", "json", "", function (_0x5333ff) {
                    _EC.Pop.Msg(_0x5333ff.msg);
                    _0x36260a = 1;
                }, function () {
                    _EC.Pop.Msg(language["44"], "", "error");
                });
            }
            $(this).nextAll().removeClass("active");
            $(this).prevAll().addClass("active");
            $(this).addClass("active");
        });
    },
    "Suggest": {
        "Init": function (_0x8e2c0d, _0x24d0c1) {
            if (Number(maccms.so_off) === 1) try {
                $(_0x8e2c0d).autocomplete(maccms.path + "/index.php/ajax/suggest?mid=" + _0x24d0c1, {
                    "inputClass": "search-input",
                    "resultsClass": "results",
                    "loadingClass": "loading",
                    "appendTo": ".completion",
                    "minChars": 1,
                    "matchSubset": 0,
                    "cacheLength": 10,
                    "multiple": false,
                    "matchContains": true,
                    "autoFill": false,
                    "dataType": "json",
                    "parse": function (_0x4b96e5) {
                        {
                            if (Number(_0x4b96e5.code) === 1) {
                                {
                                    let _0x4b93b6 = [];
                                    $.each(_0x4b96e5.list, function (_0x5e97f0, _0x1d2252) {
                                        _0x1d2252.url = _0x4b96e5.url;
                                        _0x4b93b6[_0x5e97f0] = {
                                            "data": _0x1d2252
                                        };
                                    });
                                    return _0x4b93b6;
                                }
                            } else {
                                return {
                                    "data": ""
                                };
                            }
                        }
                    },
                    "formatItem": function (_0x1d2f1c) {
                        return _0x1d2f1c.name;
                    },
                    "formatResult": function (_0x4a9ac6) {
                        return _0x4a9ac6.text;
                    }
                }).result(function (_0x5c05a5, _0x5631d8) {
                    $(_0x8e2c0d).val(_0x5631d8.name);
                    let _0x4423e4 = _0x5631d8.url.replace("mac_wd", encodeURIComponent(_0x5631d8.name));
                    EC.Records.Set(_0x5631d8.name, _0x4423e4);
                    location.href = _0x4423e4;
                });
            } catch (_0xeec83a) {}
        }
    },
    "History": {
        "BoxShow": 0,
        "Limit": 30,
        "Days": 7,
        "Json": "",
        "Msg": "<div class=\"null cor5\"><img src=\"" + maccms.path2 + "template/mmou/asset/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["45"] + "</span></div>",
        "Init": function () {
            let _0x3e7d99 = [];
            if (this.Json) _0x3e7d99 = this.Json;else {
                let _0x15429f = EC.Cookie.Get("mac_history");
                !EC.Empty(_0x15429f) && (_0x3e7d99 = eval(_0x15429f));
            }
            let _0x1a56c8 = "";
            if (_0x3e7d99.length > 0) {
                for (let _0x3dd7c2 = 0; _0x3dd7c2 < _0x3e7d99.length; _0x3dd7c2++) {
                    _0x1a56c8 += "<li><a class=\"history-a flex\" href=\"" + _0x3e7d99[_0x3dd7c2].link + "\" target=\"video\" title=\"" + _0x3e7d99[_0x3dd7c2].name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x3e7d99[_0x3dd7c2].name + "\" data-src=\"" + _0x3e7d99[_0x3dd7c2].pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x3e7d99[_0x3dd7c2].name + "</div><div><span class=\"cor5\">" + _0x3e7d99[_0x3dd7c2].mid + "</span></div></div></a></li>";
                }
            } else _0x1a56c8 += this.Msg;
            $(".locality-history ul").html(_0x1a56c8);
            $("#l_history").click(function () {
                EC.History.Clear();
            });
            let _0x471b42 = $(".ds-history-set");
            _0x471b42.attr("data-name") && EC.History.Set(_0x471b42.attr("data-name"), _0x471b42.attr("data-link"), _0x471b42.attr("data-pic"), _0x471b42.attr("data-mid"));
        },
        "Set": function (_0xd4119, _0x3be041, _0x1cebf7, _0x43734a) {
            !_0x3be041 && (_0x3be041 = document.URL);
            let _0x538d34 = EC.Cookie.Get("mac_history"),
                _0x482f9e = "";
            if (!EC.Empty(_0x538d34)) {
                {
                    this.Json = eval(_0x538d34);
                    for (let _0x4b9611 = 0; _0x4b9611 < this.Json.length; _0x4b9611++) {
                        if (this.Json[_0x4b9611].link === _0x3be041) {
                            return false;
                        }
                    }
                    _0x482f9e = "{log:[{\"name\":\"" + _0xd4119 + "\",\"link\":\"" + _0x3be041 + "\",\"pic\":\"" + _0x1cebf7 + "\",\"mid\":\"" + _0x43734a + "\"},";
                    for (let _0x5f096a = 0; _0x5f096a < this.Json.length; _0x5f096a++) {
                        {
                            if (_0x5f096a <= this.Limit && this.Json[_0x5f096a]) {
                                {
                                    let _0x66950c = this.Json[_0x5f096a].name;
                                    if (_0x66950c === _0xd4119) {} else _0x482f9e += "{\"name\":\"" + this.Json[_0x5f096a].name + "\",\"link\":\"" + this.Json[_0x5f096a].link + "\",\"pic\":\"" + this.Json[_0x5f096a].pic + "\",\"mid\":\"" + this.Json[_0x5f096a].mid + "\"},";
                                }
                            } else {
                                break;
                            }
                        }
                    }
                    _0x482f9e = _0x482f9e.substring(0, _0x482f9e.lastIndexOf(","));
                    _0x482f9e += "]}";
                }
            } else _0x482f9e = "{log:[{\"name\":\"" + _0xd4119 + "\",\"link\":\"" + _0x3be041 + "\",\"pic\":\"" + _0x1cebf7 + "\",\"mid\":\"" + _0x43734a + "\"}]}";
            this.Json = eval(_0x482f9e);
            EC.Cookie.Set("mac_history", _0x482f9e, this.Days);
        },
        "Clear": function () {
            EC.Cookie.Del("mac_history");
            $(".locality-history ul").html(this.Msg);
        }
    },
    "Records": {
        "Limit": 8,
        "Days": 7,
        "Json": "",
        "Init": function () {
            EC.Records.Click();
            let _0x53724e = [];
            if (this.Json) {
                _0x53724e = this.Json;
            } else {
                let _0x1a2999 = EC.Cookie.Get("DS_Records");
                !EC.Empty(_0x1a2999) && (_0x53724e = eval(_0x1a2999));
            }
            if (_0x53724e.length > 0) {
                let _0x1be462 = "";
                for (let _0x48ea88 = 0; _0x48ea88 < _0x53724e.length; _0x48ea88++) {
                    _0x1be462 += "<a href=\"" + _0x53724e[_0x48ea88].url + "?wd=" + _0x53724e[_0x48ea88].name + "\" class=\"public-list-b bj border\">" + _0x53724e[_0x48ea88].name + "</a>";
                }
                $(".records-list").html(_0x1be462);
            } else $(".records-list").html("<span class=\"cor5\">" + language["46"] + "</span>");
            $(document).on("click", "#re_del", function () {
                EC.Records.Clear();
            });
        },
        "Set": function (_0x105600, _0x3f36e2) {
            let _0x50df1c = EC.Cookie.Get("DS_Records"),
                _0x51efb9 = {};
            if (!EC.Empty(_0x50df1c)) {
                this.Json = eval(_0x50df1c);
                for (let _0x5af607 = 0; _0x5af607 < this.Json.length; _0x5af607++) {
                    {
                        if (this.Json[_0x5af607].name === _0x105600) return false;
                    }
                }
                _0x51efb9 = "{log:[{\"name\":\"" + _0x105600 + "\",\"url\":\"" + _0x3f36e2 + "\"},";
                for (let _0x46c133 = 0; _0x46c133 < this.Json.length; _0x46c133++) {
                    {
                        if (_0x46c133 <= this.Limit && this.Json[_0x46c133]) {
                            {
                                let _0x309dac = this.Json[_0x46c133].name;
                                if (_0x309dac === _0x105600) {} else _0x51efb9 += "{\"name\":\"" + this.Json[_0x46c133].name + "\",\"url\":\"" + this.Json[_0x46c133].url + "\"},";
                            }
                        } else {
                            break;
                        }
                    }
                }
                _0x51efb9 = _0x51efb9.substring(0, _0x51efb9.lastIndexOf(","));
                _0x51efb9 += "]}";
            } else _0x51efb9 = "{log:[{\"name\":\"" + _0x105600 + "\",\"url\":\"" + _0x3f36e2 + "\"}]}";
            this.Json = eval(_0x51efb9);
            EC.Cookie.Set("DS_Records", _0x51efb9, this.Days);
        },
        "Clear": function () {
            EC.Cookie.Del("DS_Records");
            $(".records-list").html("<span class=\"cor5\">" + language["47"] + "</span>");
        },
        "Click": function () {
            $(".select-name").click(function () {
                $(this).attr("data-id") === "1" ? ($(this).attr("data-id", "0").children().html("&#xe564;"), $(".select-list").show()) : ($(this).attr("data-id", "1").children().html("&#xe563;"), $(".select-list").hide());
            });
            $(".select-list a").click(function () {
                {
                    let _0x584866 = $(this).data();
                    $(".select-name").html(_0x584866.name + "<i class=\"fa cor4\">&#xe563;</i>").attr("data-id", "1");
                    $("#search").attr("action", _0x584866.url);
                    $(".select-list").hide();
                }
            });
            $(".search-input-sub").click(function () {
                let _0x453937 = $(".search-input").val(),
                    _0x4be76e = $("#search").attr("action");
                if (EC.Empty(_0x453937)) event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error");else {
                    if ($(".lang-bnt").length === 1) {
                        {
                            const _0x1c8885 = transChinese(_0x453937);
                            $(".search-input").val(_0x1c8885);
                            _0x453937 = _0x1c8885;
                        }
                    }
                    EC.Records.Set(_0x453937, _0x4be76e);
                }
            });
        }
    },
    "Remaining": function (_0x29d427, _0x24b273, _0x560d13) {
        let _0x16ec2c = _0x24b273 - $(_0x29d427).val().length;
        if (_0x16ec2c < 0) {
            _0x16ec2c = 0;
            $(_0x29d427).val($(_0x29d427).val().substr(0, 200));
        }
        $(_0x560d13).text(_0x16ec2c);
    },
    "Digg": function () {
        $("body").on("click", ".digg-link", function () {
            let _0x328034 = $(this);
            _0x328034.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/digg.html?mid=" + _0x328034.attr("data-mid") + "&id=" + _0x328034.attr("data-id") + "&type=" + _0x328034.attr("data-type"), "get", "json", "", function (_0x4c42c2) {
                _0x328034.addClass("disabled");
                let _0x569b24 = parseInt(_0x328034.find(".digg-num").html());
                console.log(_0x4c42c2);
                Number(_0x4c42c2.code) === 1 ? _0x328034.attr("data-type") === "up" ? _0x328034.find(".digg-num").html(_0x569b24 + 1) : _0x328034.find(".digg-num").html(_0x569b24 + 1) : _EC.Pop.Msg(_0x4c42c2.msg);
            });
        });
    },
    "Gbook": {
        "Login": 0,
        "Verify": 0,
        "Init": function () {
            let _0x293de4 = $(".gbook-form").data();
            EC.Gbook.Login = _0x293de4.login;
            EC.Gbook.Verify = _0x293de4.verify;
            let _0x22dd8e = $("body");
            _0x22dd8e.on("keyup", ".gbook-content", function () {
                EC.Remaining($(this), 200, ".gbook_remaining");
            });
            _0x22dd8e.on("focus", ".gbook-content", function () {
                if (Number(EC.Gbook.Login) === 1 && Number(EC.User.IsLogin) !== 1) {
                    EC.User.Login();
                }
            });
            _0x22dd8e.on("click", ".gbook-submit", function () {
                EC.Gbook.Submit();
            });
        },
        "Show": function (_0x119c81) {
            EC.Ajax(maccms.path + "/index.php/gbook/index?page=" + _0x119c81, "post", "json", "", function (_0x2506f0) {
                $(".mac_gbook_box").html(_0x2506f0);
            }, function () {
                $(".mac_gbook_box").html(language["49"]);
            });
        },
        "Submit": function () {
            if (EC.Empty($(".gbook-content").val())) {
                _EC.Pop.Msg(language["50"], "", "error");
                return false;
            }
            EC.Ajax(maccms.path + "/index.php/gbook/saveData", "post", "json", $(".gbook-form").serialize(), function (_0xda8ea1) {
                _EC.Pop.Msg(_0xda8ea1.msg);
                Number(_0xda8ea1.code) === 1 ? location.reload() : Number(EC.Gbook.Verify) === 1 && EC.Verify.Refresh();
            });
        },
        "Tg": function () {
            if (EC.Empty($(".tg-content").val())) return _EC.Pop.Msg(language["51"], "", "error"), false;
            EC.Ajax(maccms.path + "/index.php/api/tougao", "post", "json", $(".tg-form").serialize(), function (_0x28340b) {
                _EC.Pop.Msg(_0x28340b.msg);
                Number(_0x28340b.code) === 1 ? location.reload() : EC.Verify.Refresh();
            });
        },
        "Report": function (_0x144ef6) {
            EC.Ajax(maccms.path + "/index.php/gbook/report.html?id=" + _0x144ef6.id + "&name=" + encodeURIComponent(_0x144ef6.url + location.href), "post", "json", "", function (_0x5e8e20) {
                EC.Pop.Show(_0x5e8e20, language["52"], function () {
                    let _0x4e6d1b = $(".gbook-form").data();
                    EC.Gbook.Login = _0x4e6d1b.login;
                    EC.Gbook.Verify = _0x4e6d1b.verify;
                    EC.Gbook.Init();
                });
            }, function () {
                _EC.Pop.Msg(language["49"], "", "error");
            });
        }
    },
    "Comment": {
        "Login": 0,
        "Verify": 0,
        "Init": function () {
            let _0x3494af = $("body");
            _0x3494af.on("click", ".comment-face-box img", function () {
                {
                    let _0x3f4c32 = $(this).parent().parent().parent().parent().find(".comment-content");
                    $(_0x3f4c32).val($(_0x3f4c32).val() + "[em:" + $(this).attr("data-id") + "]");
                }
            });
            _0x3494af.on("click", ".comment-face-panel", function () {
                $(this).parent().parent().find(".comment-face-box").fadeToggle();
            });
            _0x3494af.on("click", ".face-close", function () {
                $(".comment-face-box").hide();
            });
            _0x3494af.on("click", ".comment-page", function () {
                EC.Comment.Show($(this).attr("data-page"));
            });
            _0x3494af.on("keyup", ".comment-content", function () {
                EC.Remaining($(this), 200, $(".comment-remaining"));
            });
            _0x3494af.on("focus", ".comment-content", function () {
                Number(EC.Comment.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
            });
            _0x3494af.on("click", ".comment-report", function () {
                {
                    let _0x23ebfe = $(this);
                    if ($(this).attr("data-id")) {
                        EC.Ajax(maccms.path + "/index.php/comment/report.html?id=" + _0x23ebfe.attr("data-id"), "get", "json", "", function (_0xebcc76) {
                            _0x23ebfe.addClass("disabled");
                            _EC.Pop.Msg(language["53"], "", "success");
                        });
                    }
                }
            });
            _0x3494af.on("click", ".comment-reply-button", function () {
                {
                    let _0x2ff5fb = $(this);
                    if (_0x2ff5fb.attr("data-id")) {
                        let _0x40fc1d = _0x2ff5fb.html();
                        $(".comment-reply-form").remove();
                        if (_0x40fc1d === language["54"]) {
                            _0x2ff5fb.html("&#xe573;");
                            return false;
                        }
                        let _0x3922c3 = $(".comment-form").prop("outerHTML"),
                            _0x3de254 = $(_0x3922c3);
                        _0x3de254.addClass("comment-reply-form");
                        _0x3de254.find("input[name=\"comment_pid\"]").val(_0x2ff5fb.attr("data-id"));
                        _0x2ff5fb.parent().parent().after(_0x3de254);
                        $(".comment-reply-button").html("&#xe573;");
                        _0x2ff5fb.html(language["54"]);
                    }
                }
            });
            _0x3494af.on("click", ".comment-submit", function () {
                let _0x486595 = $(this);
                EC.Comment.Submit(_0x486595);
            });
        },
        "Show": function (_0x5b9124) {
            let _0x38efbd = $(".ds-comment");
            _0x38efbd.length > 0 && EC.Ajax(maccms.path + "/index.php/comment/ajax.html?rid=" + _0x38efbd.attr("data-id") + "&mid=" + _0x38efbd.attr("data-mid") + "&page=" + _0x5b9124, "get", "json", "", function (_0x18ef26) {
                $(".ds-comment").html(_0x18ef26);
                $(".lang-bnt").length === 1 && zh_tranBody();
            }, function () {
                _EC.Pop.Msg(language["49"], "", "error");
            });
        },
        "Submit": function (_0x2faf66) {
            let _0x55b376 = _0x2faf66.parents("form");
            if ($(_0x55b376).find(".comment-content").val() === "") return _EC.Pop.Msg(language["55"], "", "error"), false;
            let _0x2b3152 = $(".ds-comment").data();
            if (EC.Empty(_0x2b3152.mid)) return _EC.Pop.Msg(language["56"], "", "error"), false;
            if (EC.Empty(_0x2b3152.id)) return _EC.Pop.Msg(language["57"], "", "error"), false;
            EC.Ajax(maccms.path + "/index.php/comment/saveData", "post", "json", $(_0x55b376).serialize() + "&comment_mid=" + _0x2b3152.mid + "&comment_rid=" + _0x2b3152.id, function (_0x1d2e5a) {
                _EC.Pop.Msg(_0x1d2e5a.msg);
                Number(_0x1d2e5a.code) === 1 ? EC.Comment.Show(1) : Number(EC.Comment.Verify) === 1 && EC.Verify.Refresh();
            });
        }
    },
    "Verify": {
        "Init": function () {
            EC.Verify.Click();
            $(".verify-submit").click(function () {
                let _0x806444 = $("input[name=\"verify\"]").val();
                EC.Ajax(maccms.path + "/index.php/ajax/verify_check?type=" + $(this).data("type") + "&verify=" + _0x806444, "post", "json", "", function (_0x33f6fa) {
                    Number(_0x33f6fa.code) === 1 ? location.reload() : (_EC.Pop.Msg(_0x33f6fa.msg), EC.Verify.Refresh());
                }, function () {
                    _EC.Pop.Msg(language["58"], "", "error");
                    EC.Verify.Refresh();
                });
            });
        },
        "Click": function () {
            $("body").on("click", "img.ds-verify-img", function () {
                $(this).attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
            });
        },
        "Refresh": function () {
            $(".ds-verify-img").attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
        },
        "Show": function () {
            return "<img class=\"ds-verify-img\" src=\"" + maccms.path + "/index.php/verify/index.html?\" alt=\"" + language["19"] + "\" title=\"" + language["59"] + "\">";
        }
    },
    "QiAnDao": {
        "Fun": function (_0x8ece98) {
            console.log(22)
            let _0x19e77e = $("#qiAnDao-list"),
                _0x5456ef = "",
                _0x2c6954 = new Date(),
                _0x134f4d = new Date(_0x2c6954.getFullYear(), parseInt(_0x2c6954.getMonth()), 1).getDay(),
                _0x5a3aa1 = new Date(_0x2c6954.getFullYear(), parseInt(_0x2c6954.getMonth() + 1), 0),
                _0x3bdfba = _0x5a3aa1.getDate();

            $(".qiAnDao-bj").text(_0x2c6954.getMonth() + 1);
            for (let _0x376a62 = 0; _0x376a62 < 42; _0x376a62++) {
                _0x5456ef += "<li></li>";
            }
            _0x19e77e.html(_0x5456ef);
            let _0x4f3cbf = _0x19e77e.find("li");
            for (let _0x3f6b39 = 0; _0x3f6b39 < _0x3bdfba; _0x3f6b39++) {
                {
                    let _0x3ef099 = parseInt(_0x3f6b39 + 1);
                    _0x4f3cbf.eq(_0x3f6b39 + _0x134f4d).html("<em>" + _0x3ef099 + "</em>").addClass("date" + _0x3ef099);
                    if (_0x8ece98.length > 0) for (let _0x5a234c = 0; _0x5a234c < _0x8ece98.length; _0x5a234c++) {
                        _0x3ef099 === _0x8ece98[_0x5a234c] && _0x4f3cbf.eq(_0x3f6b39 + _0x134f4d).addClass("nav-dt");
                    }
                }
            }
            $(".qiAnDao-con").after("<style>#qiAnDao-list li:nth-child(n+" + (_0x3bdfba + _0x134f4d + 1) + ") {display: none}</style>").addClass("qiAnDao-show");
            $(".date" + _0x2c6954.getDate() + ":not(.nav-dt)").addClass("able-qiAnDao");
            $(".qiAnDao-top,.able-qiAnDao").click(function () {
                EC.Ajax(maccms.path + "/index.php/qian/sign", "get", "json", "", function (_0x4aad2e) {
                    if (Number(_0x4aad2e.code) === 0) _EC.Pop.Msg(_0x4aad2e.msg, "", "error");else {
                        _EC.Pop.Msg(language["60"] + _0x4aad2e.reward, "", "success");
                        $(".able-qiAnDao").addClass("nav-dt");
                        $(".qiAnDao-top").addClass("nav-dt");
                    }
                }, function () {
                    _EC.Pop.Msg(r.msg, "", "error");
                });
            });
            $(".qiAnDao-gz-bnt").click(function () {
                $(".qiAnDao-bottom").show();
            });
            $(".qiAnDao-bottom a").click(function () {
                $(".qiAnDao-bottom").hide();
            });
            $(".qiAnDao-gz-off").click(function () {
                $(".qiAnDao-con").hide();
            });
        },
        "Init": function () {
            $(".qiAnDao_bnt").click(function () {
                if (Number(EC.User.IsLogin) === 0) {
                    EC.User.Login();
                    return;
                }
                if (Number($(".qiAnDao-show").length) === 0) {
                    $("#qiAnDao_2,.qiAnDao-top").hide();
                    $("#qiAnDao_1,.qiAnDao-con").show();
                    EC.Ajax(maccms.path + "/index.php/qian/days", "get", "json", "", function (_0x325961) {
                        Number(_0x325961.code) === 1 ? (EC.QiAnDao.Fun(_0x325961.data), setTimeout(function () {
                            $("#qiAnDao_2,.qiAnDao-top").show();
                            $("#qiAnDao_1").hide();
                        }, 1000)) : ($(".qiAnDao-con").hide(), _EC.Pop.Msg(_0x325961.msg, "", "error"));
                    }, function () {
                        $("#qiAnDao_1").html(language["42"]);
                    });
                } else $(".qiAnDao-show").show();
            });
        }
    }
};
$(function () {
    EC.Style.Init();
    EC.Init();
    EC.Verify.Init();
    EC.User.Init();
    EC.Records.Init();
    EC.Suggest.Init(".mac_wd", 1, "");
    EC.History.Init();
    EC.Digg();
    EC.Score();
    EC.Copy.Init();
    EC.User.Collection();
    EC.Ulog.Init();
    EC.Hits.Init();
    EC.Toggle();
    EC.QiAnDao.Init();
});