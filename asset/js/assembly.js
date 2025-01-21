const _EC = {
    Pop: {
        "Msg": function(msg, timeout, type, close) {
            close = close || true;
            timeout = timeout || 3000;
            if (Number($('.msg').length) !== 1) {
                _EC.Pop.Remove();
            }
            let mas_html = '';
            switch (type) {
                case "error":
                    mas_html = '<div class="msg msg-error"><div class="box-bg"></div><div class="msg-box"><div class="topfadeInUp animated"><div class="msg-box-bj"><i class="fa r3 ds-tanhao"></i><div class="msg-box-msg"></div></div></div></div>';
                    break;
                case "success":
                    mas_html = '<div class="msg msg-success"><div class="box-bg"></div><div class="msg-box"><div class="topfadeInUp animated"><div class="msg-box-bj"><i class="fa r3 ds-ok"></i><div class="msg-box-msg"></div></div></div></div>';
                    break;
                case "loading":
                    mas_html = '<div class="msg msg-loading"><div class="box-bg"></div><div class="msg-box"><div class="topfadeInUp animated"><div class="msg-box-bj"><i class="fa r3 spin-dot-spin ds-shuaxin"></i><div class="msg-box-msg"></div></div></div></div>';
                    break;
                default:
                    mas_html = '<div class="msg msg-ordinary"><div class="box-bg"></div><div class="msg-box"><div class="topfadeInUp animated"><div class="msg-box-bj"><i class="fa r3 ds-lingdang"></i><div class="msg-box-msg"></div></div></div></div>';
            }
            $('body').append(mas_html);
            $('.msg-box-msg').html(msg);
            if (close) {
                setTimeout(_EC.Pop.Remove, timeout);
            }
        },
        'Remove': function() {
            $('.msg').remove();
        }
    }
}
const language = {
    0: '请登录后查看',
    1: '立即登录',
    2: '空列表',
    3: '分享积分赚钱',
    4: '展开',
    5: '收起',
    6: '您确认购买此条数据访问权限吗？',
    7: '暂无角色简介',
    8: '角色简介',
    9: '角色详情',
    10: '封面图',
    11: '相关作品',
    12: '明星信息获取失败~',
    13: '切换成功~',
    14: '请先输入关键词！',
    15: '该网站不提供查看',
    16: '请输入网址及分享说明（您的分享只有站长可见）：',
    17: '提交分享',
    18: '分享网址',
    19: '验证码',
    20: '详情详情',
    21: '音乐地址有时效哦~太长时间后可能无法播放~',
    22: '一首巨好听的歌',
    23: '分享给你一起听听吧：',
    24: '复制内容',
    25: '分享音乐',
    26: '复制完成，分享给你的好友吧',
    27: '错误信息：',
    28: '接口请求失败',
    29: '没有更多了',
    30: '加载更多',
    31: '加载中',
    32: '什么都没有',
    33: '为本片评分',
    34: '复制下方链接，去粘贴给好友吧',
    35: '复制链接',
    36: '复制完成，分享给你的好友吧',
    37: '复制成功~',
    38: '复制失败请手动复制下载地址',
    39: '明星相关作品获取失败~',
    40: '速度太快了，请稍后在试',
    41: '用户登录',
    42: '接口加载失败',
    43: '已经评分,请务重复评分',
    44: '积分提交失败',
    45: '暂无播放记录',
    46: '暂无搜索记录',
    47: '记录已清空',
    48: '你还没有输入搜索关键词！',
    49: '加载失败，请刷新...',
    50: '请输入您的留言!',
    51: '请输入分享内容!',
    52: '数据报错',
    53: '举报成功~ 感谢您的支持',
    54: '取消回复',
    55: '请输入您的评论！',
    56: '模块mid错误！',
    57: '关联id错误',
    58: '请求失败，请重试',
    59: '看不清楚? 换一张！',
    60: '签到成功,积分+',
    61: '收藏成功',
    62: '收藏已取消',
}
var HTML = {
    'Art': function(res, ajaxData) {
        let list = [];
        switch (ajaxData.tpl) {

            case "art_type.html":
                for (let i = 0; i < res.list.length; i++) {
                    let pd = res.list[i];
                    let str = '<div class="art-box p-list-a"><div class="box radius"><div class="tim-top p-top3 rel"><a' + HTML.Target(res['ajax']['vod_target']) + ' class="public-list-exp" href="' + HTML.ArtType(res['rewrite'], pd.art_id, pd.art_en, ajaxData['url']) + '"><img alt="封面图" class="lazy lazy2 mask-' + res['mask'] + '" referrerpolicy="no-referrer" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" data-src="' + HTML.Pic(pd.art_pic) + '" style="border-radius:0;" />' + HTML.ArtLevel(pd.art_level) + HTML.ArtPwd(pd.art_pwd) + '</a></div><div class="bottom"><a' + HTML.Target(res['ajax']['vod_target']) + ' href="' + HTML.ArtType(res['rewrite'], pd.art_id, pd.art_en, ajaxData['url']) + '" class="cor4 hide2" ' + HTML.ArtColor(pd.art_color) + '>' + pd.art_name + HTML.ArtSub(pd.art_sub) + '</a><div class="tim-tag roll overflow">\n<div class="swiper-wrapper">' + HTML.ArtPoints(pd.art_points) + '<a href="' + HTML.ArtType(res['rewrite_type'], pd.type_id, res['type'][pd.type_id], ajaxData['typeurl']) + '" class="p-type p-b-h p-blue swiper-slide"><i class="fa r3">&#xe599;</i>' + pd['type_name'] + '</a>' + HTML.ArtTag(pd.art_tag, ajaxData.tag) + '</div>\n</div><div class="ft1 cor5"><span class="r6"><i class="fa r3">&#xe576;</i>' + HTML.TimeFormat(pd['art_time']) + '</span><span><i class="fa r3">&#xe581;</i>' + pd.art_hits + '</span></div></div></div></div>';
                    list.push(str)
                }
                break;
            case "art_type2.html":
                for (let i = 0; i < res.list.length; i++) {
                    let pd = res.list[i];
                    let str = '<div class="art-box col-xl-6"><div class="box radius flex"><div class="tim-pic"><div class="tim-top p-top3 rel"><a' + HTML.Target(res['ajax']['vod_target']) + ' class="public-list-exp" href="' + HTML.ArtType(res['rewrite'], pd.art_id, pd.art_en, ajaxData['url']) + '"><img alt="封面图" class="lazy lazy2 mask-' + res['mask'] + '" referrerpolicy="no-referrer" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" data-src="' + HTML.Pic(pd.art_pic) + '" />' + HTML.ArtLevel(pd.art_level) + HTML.ArtPwd(pd.art_pwd) + '</a></div></div><div class="bottom flex-auto"><a' + HTML.Target(res['ajax']['vod_target']) + ' href="' + HTML.ArtType(res['rewrite'], pd.art_id, pd.art_en, ajaxData['url']) + '" class="cor4" ' + HTML.ArtColor(pd.art_color) + '>' + pd.art_name + HTML.ArtSub(pd.art_sub) + '</a>\n<div class="tim-blurb hide cor5">' + pd.art_blurb + '</div><div class="tim-tag roll overflow"><div class="swiper-wrapper">' + HTML.ArtPoints(pd.art_points) + '<a href="' + HTML.ArtType(res['rewrite_type'], pd.type_id, res['type'][pd.type_id], ajaxData['typeurl']) + '" class="p-type p-b-h p-blue swiper-slide"><i class="fa r3">&#xe599;</i>' + pd['type_name'] + '</a>' + HTML.ArtTag(pd.art_tag, ajaxData.tag) + '</div></div><div class="ft1 cor5">\n<span class="r6"><i class="fa r3">&#xe576;</i>' + HTML.TimeFormat(pd['art_time']) + '</span><span><i class="fa r3">&#xe581;</i>' + pd.art_hits + '</span></div></div></div></div>';
                    list.push(str)
                }
                break;
            case "actor_type.html":
                for (let i = 0; i < res.list.length; i++) {
                    let pd = res.list[i];
                    let str = '<div class="public-list-box public-pic-b public-pic-wap">' + '<div class="public-list-div">' + '<a' + HTML.Target(res['ajax']['vod_target']) + ' class="public-list-exp" href="' + HTML.ArtType(res['rewrite'], pd.actor_id, pd.actor_en, ajaxData['url']) + '" title="">' + '<img alt="' + pd['actor_name'] + '" class="lazy lazy3 gen-movie-img mask-' + res['mask'] + '" src="' + HTML.Pic(pd.actor_pic) + '" />' + '<div class="bj-100"></div><div class="actor-name ft4 cor3">' + pd['actor_name'] + '</div></a></div></div>';
                    list.push(str)
                }
                break;
            case "vod":
                const ajaxVod = res['ajax'];
                const vodPic = ajaxVod['vod_pic'];
                const vodTarget = ajaxVod['vod_target'];
                const rewrite = res['rewrite'];

                for (let i = 0; i < res.list.length; i++) {
                    let pd = res.list[i];
                    let vodPicUrl = HTML.PicIf(pd.vod_pic, pd.vod_pic_thumb, vodPic);
                    let artTypeUrl = HTML.ArtType(rewrite, pd.vod_id, pd.vod_en, ajaxData['url']);

                    let str = `<div class="public-list-box public-pic-${vodPic}">
                                          <div class="public-list-div public-list-bj">
                                              <a ${HTML.Target(vodTarget)} class="public-list-exp" href="${artTypeUrl}">
                                                  <img class="lazy lazy1 gen-movie-img mask-${vodPic}" alt="${pd['vod_name']}" referrerpolicy="no-referrer" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" data-src="${vodPicUrl}" />
                                                  ${HTML.tag(ajaxVod['vod_tag_off'], ajaxVod['vod_right'], ajaxVod['vod_tag_color'], pd)}
                                                  <span class="public-bg"></span>
                                                  <span class="public-play"><i class="fa">&#xe593;</i></span>
                                              </a>
                                          </div>
                                          <div class="public-list-button">
                                              <a ${HTML.Target(vodTarget)} class="time-title hide ft4" href="${artTypeUrl}">${pd['vod_name']}</a>
                                              ${HTML.Title(ajaxVod['vod_bottom'], pd)}
                                          </div>
                                      </div>`;
                    list.push(str);
                }
                break;
            case "iv":
                for (let i = 0; i < res.list.length; i++) {
                    const pd = res.list[i];
                    const mask = res['mask'];
                    const picUrl1 = HTML.Pic(pd.screenshot);
                    const picUrl = HTML.convertToHttps(picUrl1);
                    const tagName = pd.recommendTagName.length > 1 ? pd.recommendTagName : pd.gameFullName;
                    const nick = pd.nick;

                    const artTypeUrl = HTML.ArtType('3', pd.profileRoom, '', ajaxData['url']);

                    const str = `<div class="public-list-box public-pic-a public-pic-wap">
            <div class="public-list-div">
                <a target="_blank" class="public-list-exp" href="${artTypeUrl}">
                    <img alt="${pd.introduction}" class="lazy lazy1 gen-movie-img mask-${mask}" referrerpolicy="no-referrer" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" data-src="${picUrl}" />
                    <span class="public-bg"></span>
                    <span class="public-prt live-tag">${tagName}</span>
                </a>
            </div>
            <div class="public-list-button">
                <a target="_blank" class="time-title hide ft4" href="${artTypeUrl}">${pd.introduction}</a>
                <div class="public-list-subtitle cor5 hide ft2">主播：${nick}</div>
            </div>
        </div>`;

                    list.push(str);
                }
                break
        }

        return list
    },
    'TimeFormat': function(timestamp) {
        function formatMsgTime(timespan) {
            let dateTime = parseDate(timespan);
            let year = dateTime.getFullYear();
            let month = dateTime.getMonth() + 1;
            let day = dateTime.getDate();
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = dateTime.getSeconds();
            let now = new Date();
            let milliseconds = 0;
            let timeSpanStr = "";
            milliseconds = now.getTime() - dateTime.getTime();
            let when = "";
            if (hour < 6) {
                when = "凌晨 "
            } else if (hour < 9) {
                when = "早上 "
            } else if (hour < 12) {
                when = "上午 "
            } else if (hour < 14) {
                when = "中午 "
            } else if (hour < 17) {
                when = "下午 "
            } else if (hour < 19) {
                when = "傍晚 "
            } else if (hour < 22) {
                when = "晚上 "
            } else {
                when = "深夜 "
            }
            if (milliseconds <= 1000 * 30 * 1) {
                timeSpanStr = '刚刚'
            } else if (milliseconds <= 1000 * 60 * 1) {
                timeSpanStr = '1分钟内'
            } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 30) {
                timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
            } else if (1000 * 60 * 30 < milliseconds && milliseconds <= 1000 * 60 * 60) {
                timeSpanStr = '半小时前'
            } else if (1000 * 60 * 60 < milliseconds && milliseconds <= (1000 * 60 * 60 * now.getHours() + 1000 * 60 * now.getMinutes() + 1000 * now.getSeconds() + now.getMilliseconds())) {
                timeSpanStr = "今天" + when + hour + ":" + minute
            } else if (1000 * 60 * 60 * now.getHours() < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
                timeSpanStr = '昨天' + when + hour + ":" + minute
            } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
                var d = Math.round(milliseconds / (1000 * 60 * 60 * 24));
                if (d == 1 || (d == 2 && milliseconds == (1000 * 60 * 60 * now.getHours() + 1000 * 60 * now.getMinutes() + 1000 * now.getSeconds() + now.getMilliseconds()) + 86400000)) {
                    timeSpanStr += '昨天'
                } else if (d == 2) {
                    timeSpanStr += '前天'
                } else if (d == 3) {
                    timeSpanStr += '大前天'
                } else {
                    timeSpanStr += Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
                }
                timeSpanStr += when + hour + ":" + minute
            } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
                timeSpanStr = month + '月' + day + '日 ' + hour + ':' + minute
            } else {
                timeSpanStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute
            }
            return timeSpanStr
        }

        let parseDate = function(dateString) {
            return new Date(Date.parse(dateString.replace(/-/g, "/")))
        };

        function getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
        }

        return formatMsgTime(getLocalTime(timestamp))
    },
    'ArtTag': function(txt, u) {
        let html = '';
        if (txt != '') {
            let tag = txt.split(",");
            for (let i = 0; i < tag.length; i++) {
                let url = u.replace("66", tag[i]);
                html = html + '<a href="' + url + '" class="p-type p-b-h bj swiper-slide cor8"># ' + tag[i] + '</a>'
            }
        }
        return html
    },
    'ArtLevel': function(level) {
        if (level != '') {
            return '<badge class="p-level">推荐' + level + '</badge>'
        }
        return ''
    },
    'ArtPwd': function(pwd) {
        if (pwd != '') {
            return '<badge class="p-pass fa p-b-h">&#xe619;</badge>'
        }
        return ''
    },
    'ArtSub': function(sub) {
        if (sub != '') {
            return '<i class="co1">[' + sub + ']</i>'
        }
        return ''
    },
    'ArtPoints': function(points) {
        return points != '' ? '<a class="p-type p-b-h swiper-slide ol1" style="color:#fff">付费阅读 ￥' + points + '</a>' : '';
    },
    'ArtColor': function(color) {
        return color != '' ? ' style="color:#' + color + '"' : '';
    },
    'ArtType': function(v, id, en, u) {
        let result = u;
        switch (v) {
            case "1":
                result = result.replace("nickname", en);
                break;
            case "2":
                result = result.replace("ISCCCS", id);
                break;
            default:
                result = result.replace("66", id);
                break;
        }
        return result;
    },
    'Skeleton': function(id, num, type) {
        let data = {
            'art_type.html': '<div class="art-box p-list-a"><div class="box radius"><div class="tim-top p-top3 rel l-bj" style="margin:10px"></div><div class="bottom">\n<div class="l-bj l-100 l-h-2 l-t"></div><div class="l-bj l-t l-45 l-t l-h-2"></div><div class="l-bj l-40 l-h-1 r6"></div></div></div></div>',
            'art_type2.html': '<div class="art-box col-xl-6"><div class="box radius flex"><div class="tim-pic l-bj"></div><div class="bottom flex-auto"><div class="l-bj l-t l-45 l-t l-h-2"></div><div class="tim-blurb l-bj l-100 l-h-2 l-t"></div><div class="l-bj l-5 l-h-1 l-t"></div><div class="l-bj l-10 l-h-1 r6"></div></div></div></div>',
            'actor_type.html': '<div class="public-list-box public-pic-b public-pic-wap"><div class="public-list-div l-bj"><a class="public-list-exp"></a></div></div>',
            'vod': '<div class="public-list-box public-pic-b"><div class="public-list-div public-list-bj"><a target="_blank" class="public-list-exp l-bj"></a></div>\n<div class="public-list-button"><a target="_blank" class="time-title l-bj"></a><div class="public-list-subtitle l-bj l-60"></div></div></div>',
            'iv': '<div class="public-list-box public-pic-a"><div class="public-list-div public-list-bj"><a target="_blank" class="public-list-exp l-bj"></a></div>\n<div class="public-list-button"><a target="_blank" class="time-title l-bj"></a><div class="public-list-subtitle l-bj l-60"></div></div></div>',
        };

        let htmlArr = [];
        for (let i = 0; i < num; i++) {
            htmlArr.push(data[type]);
        }
        const html = htmlArr.join('');

        id.empty();
        id.prepend(html);
    },
    'Pic': function(url) {
        let protocol = maccms.upload.protocol || 'http';

        if (url.startsWith('mac:')) {
            url = url.replace('mac:', protocol + ':');
        } else if (!url.startsWith('http') && !url.startsWith('//') && url.charAt(0) !== '/') {
            if (maccms.upload.mode === 'remote') {
                url = maccms.upload.remoteurl + url;
            } else {
                url = '/' + url;
            }
        } else if (maccms.upload.img_key && url.includes(maccms.upload.img_key)) {
            url = maccms.upload.img_api + '' + url;
        }

        return url;
    },
    'PicIf': function(pic, thumb, if2) {
        if (thumb.length > 1 && if2 == 'a') {
            return HTML.Pic(thumb)
        }
        return HTML.Pic(pic)
    },
    'tag': function(if2, if3, color, data) {
        const key = parseInt(data['vod_level'], 10);
        const htmlClass = `public-prt ${color}`;
        const isShowTags = Number(if2) === 1;
        const isShowRemarks = Number(if3) === 2;
        const isShowScore = Number(if3) === 3;

        let html = '';
        let name = '';
        if (typeof label[key] !== 'undefined') {
            name = label[key].name;
        }
        if (name) {
            html = `<span class="${htmlClass}" style="${label[key].css}">${name}</span>`;
        } else if (isShowTags && data.vod_class !== '') {
            html = `<span class="${htmlClass}">${HTML.tagSplit(data.vod_class)}</span>`;
        }

        if (isShowRemarks) {
            html = html + `<span class="public-list-prb hide ft2">${data.vod_remarks}</span>`;
        } else if (isShowScore) {
            const score = Number(data.vod_douban_score) > 1 ? data.vod_douban_score : data.vod_score;
            html += `<span class="public-list-prb hide"><i class="ft4">${score}</i></span>`;
        }

        return html;
    },
    'tagSplit': function(lass) {
        const splitResult = lass.split(',')[0];
        return splitResult === '' ? '热播' : splitResult;
    },
    'Title': function(if4, data) {
        let html = '';

        let vodSubLength = data.vod_sub.length;
        let vodBlurbLength = data.vod_blurb.length;
        let vodRemarksLength = data.vod_remarks.length;

        if (if4 === "2") {
            html = vodSubLength > 1 ? data.vod_sub : data.vod_actor;
        } else if (if4 === "3") {
            html = vodBlurbLength > 1 ? data.vod_blurb : data.vod_actor;
        } else if (if4 === "4") {
            html = vodRemarksLength > 1 ? data.vod_remarks : data.vod_serial;
        }

        if (html.length > 1) {
            return '<div class="public-list-subtitle cor5 hide ft2">' + html + '</div>';
        } else {
            return '';
        }
    },
    'Target': function(target) {
        return target === '_blank' ? ' target="_blank"' : '';
    },
    convertToHttps: function(url) {
        if (!url.startsWith('https://')) {
            url = url.replace('http://', 'https://');
        }
        return url;
    }
}
var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz))
}
function b64_md5(s) {
    return binl2b64(core_md5(str2binl(s), s.length * chrsz))
}
function str_md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz))
}
function hex_hmac_md5(key, data) {
    return binl2hex(core_hmac_md5(key, data))
}
function b64_hmac_md5(key, data) {
    return binl2b64(core_hmac_md5(key, data))
}
function str_hmac_md5(key, data) {
    return binl2str(core_hmac_md5(key, data))
}
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}
function core_md5(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd)
    }
    return Array(a, b, c, d)
}
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t)
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
}
function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16)
        bkey = core_md5(bkey, key.length * chrsz);
    var ipad = Array(16)
        , opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128)
}
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF)
}
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
}
function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    return bin
}
function binl2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
    return str
}
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF)
    }
    return str
}
function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32)
                str += b64pad;
            else
                str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F)
        }
    }
    return str
}
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t()
}(this, (function() {
        "use strict";
        function n() {
            return n = Object.assign || function(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
                }
                return n
            }
                ,
                n.apply(this, arguments)
        }
        var t = "undefined" != typeof window
            , e = t && !("onscroll"in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
            , i = t && "IntersectionObserver"in window
            , o = t && "classList"in document.createElement("p")
            , a = t && window.devicePixelRatio > 1
            , r = {
            elements_selector: ".lazy",
            container: e || t ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_bg_set: "bg-set",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading2",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1,
            restore_on_error: !1
        }
            , c = function(t) {
            return n({}, r, t)
        }
            , l = function(n, t) {
            var e, i = "LazyLoad::Initialized", o = new n(t);
            try {
                e = new CustomEvent(i,{
                    detail: {
                        instance: o
                    }
                })
            } catch (n) {
                (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                    instance: o
                })
            }
            window.dispatchEvent(e)
        }
            , u = "src"
            , s = "srcset"
            , d = "sizes"
            , f = "poster"
            , _ = "llOriginalAttrs"
            , g = "data"
            , v = "loading"
            , b = "loaded"
            , m = "applied"
            , p = "error"
            , h = "native"
            , E = "data-"
            , I = "ll-status"
            , y = function(n, t) {
            return n.getAttribute(E + t)
        }
            , k = function(n) {
            return y(n, I)
        }
            , w = function(n, t) {
            return function(n, t, e) {
                var i = "data-ll-status";
                null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
            }(n, 0, t)
        }
            , A = function(n) {
            return w(n, null)
        }
            , L = function(n) {
            return null === k(n)
        }
            , O = function(n) {
            return k(n) === h
        }
            , x = [v, b, m, p]
            , C = function(n, t, e, i) {
            n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
        }
            , N = function(n, t) {
            o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
        }
            , M = function(n, t) {
            o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }
            , z = function(n) {
            return n.llTempImage
        }
            , T = function(n, t) {
            if (t) {
                var e = t._observer;
                e && e.unobserve(n)
            }
        }
            , R = function(n, t) {
            n && (n.loadingCount += t)
        }
            , G = function(n, t) {
            n && (n.toLoadCount = t)
        }
            , j = function(n) {
            for (var t, e = [], i = 0; t = n.children[i]; i += 1)
                "SOURCE" === t.tagName && e.push(t);
            return e
        }
            , D = function(n, t) {
            var e = n.parentNode;
            e && "PICTURE" === e.tagName && j(e).forEach(t)
        }
            , H = function(n, t) {
            j(n).forEach(t)
        }
            , V = [u]
            , F = [u, f]
            , B = [u, s, d]
            , J = [g]
            , P = function(n) {
            return !!n[_]
        }
            , S = function(n) {
            return n[_]
        }
            , U = function(n) {
            return delete n[_]
        }
            , $ = function(n, t) {
            if (!P(n)) {
                var e = {};
                t.forEach((function(t) {
                        e[t] = n.getAttribute(t)
                    }
                )),
                    n[_] = e
            }
        }
            , q = function(n, t) {
            if (P(n)) {
                var e = S(n);
                t.forEach((function(t) {
                        !function(n, t, e) {
                            e ? n.setAttribute(t, e) : n.removeAttribute(t)
                        }(n, t, e[t])
                    }
                ))
            }
        }
            , K = function(n, t, e) {
            N(n, t.class_applied),
                w(n, m),
            e && (t.unobserve_completed && T(n, t),
                C(t.callback_applied, n, e))
        }
            , Q = function(n, t, e) {
            N(n, t.class_loading),
                w(n, v),
            e && (R(e, 1),
                C(t.callback_loading, n, e))
        }
            , W = function(n, t, e) {
            e && n.setAttribute(t, e)
        }
            , X = function(n, t) {
            W(n, d, y(n, t.data_sizes)),
                W(n, s, y(n, t.data_srcset)),
                W(n, u, y(n, t.data_src))
        }
            , Y = {
            IMG: function(n, t) {
                D(n, (function(n) {
                        $(n, B),
                            X(n, t)
                    }
                )),
                    $(n, B),
                    X(n, t)
            },
            IFRAME: function(n, t) {
                $(n, V),
                    W(n, u, y(n, t.data_src))
            },
            VIDEO: function(n, t) {
                H(n, (function(n) {
                        $(n, V),
                            W(n, u, y(n, t.data_src))
                    }
                )),
                    $(n, F),
                    W(n, f, y(n, t.data_poster)),
                    W(n, u, y(n, t.data_src)),
                    n.load()
            },
            OBJECT: function(n, t) {
                $(n, J),
                    W(n, g, y(n, t.data_src))
            }
        }
            , Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"]
            , nn = function(n, t) {
            !t || function(n) {
                return n.loadingCount > 0
            }(t) || function(n) {
                return n.toLoadCount > 0
            }(t) || C(n.callback_finish, t)
        }
            , tn = function(n, t, e) {
            n.addEventListener(t, e),
                n.llEvLisnrs[t] = e
        }
            , en = function(n, t, e) {
            n.removeEventListener(t, e)
        }
            , on = function(n) {
            return !!n.llEvLisnrs
        }
            , an = function(n) {
            if (on(n)) {
                var t = n.llEvLisnrs;
                for (var e in t) {
                    var i = t[e];
                    en(n, e, i)
                }
                delete n.llEvLisnrs
            }
        }
            , rn = function(n, t, e) {
            !function(n) {
                delete n.llTempImage
            }(n),
                R(e, -1),
                function(n) {
                    n && (n.toLoadCount -= 1)
                }(e),
                M(n, t.class_loading),
            t.unobserve_completed && T(n, e)
        }
            , cn = function(n, t, e) {
            var i = z(n) || n;
            on(i) || function(n, t, e) {
                on(n) || (n.llEvLisnrs = {});
                var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                tn(n, i, t),
                    tn(n, "error", e)
            }(i, (function(o) {
                    !function(n, t, e, i) {
                        var o = O(t);
                        rn(t, e, i),
                            N(t, e.class_loaded),
                            w(t, b),
                            C(e.callback_loaded, t, i),
                        o || nn(e, i)
                    }(0, n, t, e),
                        an(i)
                }
            ), (function(o) {
                    !function(n, t, e, i) {
                        var o = O(t);
                        rn(t, e, i),
                            N(t, e.class_error),
                            w(t, p),
                            C(e.callback_error, t, i),
                        e.restore_on_error && q(t, B),
                        o || nn(e, i)
                    }(0, n, t, e),
                        an(i)
                }
            ))
        }
            , ln = function(n, t, e) {
            !function(n) {
                return Z.indexOf(n.tagName) > -1
            }(n) ? function(n, t, e) {
                !function(n) {
                    n.llTempImage = document.createElement("IMG")
                }(n),
                    cn(n, t, e),
                    function(n) {
                        P(n) || (n[_] = {
                            backgroundImage: n.style.backgroundImage
                        })
                    }(n),
                    function(n, t, e) {
                        var i = y(n, t.data_bg)
                            , o = y(n, t.data_bg_hidpi)
                            , r = a && o ? o : i;
                        r && (n.style.backgroundImage = 'url("'.concat(r, '")'),
                            z(n).setAttribute(u, r),
                            Q(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_multi)
                            , o = y(n, t.data_bg_multi_hidpi)
                            , r = a && o ? o : i;
                        r && (n.style.backgroundImage = r,
                            K(n, t, e))
                    }(n, t, e),
                    function(n, t, e) {
                        var i = y(n, t.data_bg_set);
                        if (i) {
                            var o = i.split("|")
                                , a = o.map((function(n) {
                                    return "image-set(".concat(n, ")")
                                }
                            ));
                            n.style.backgroundImage = a.join(),
                            "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")")
                                }
                            )),
                                n.style.backgroundImage = a.join()),
                                K(n, t, e)
                        }
                    }(n, t, e)
            }(n, t, e) : function(n, t, e) {
                cn(n, t, e),
                    function(n, t, e) {
                        var i = Y[n.tagName];
                        i && (i(n, t),
                            Q(n, t, e))
                    }(n, t, e)
            }(n, t, e)
        }
            , un = function(n) {
            n.removeAttribute(u),
                n.removeAttribute(s),
                n.removeAttribute(d)
        }
            , sn = function(n) {
            D(n, (function(n) {
                    q(n, B)
                }
            )),
                q(n, B)
        }
            , dn = {
            IMG: sn,
            IFRAME: function(n) {
                q(n, V)
            },
            VIDEO: function(n) {
                H(n, (function(n) {
                        q(n, V)
                    }
                )),
                    q(n, F),
                    n.load()
            },
            OBJECT: function(n) {
                q(n, J)
            }
        }
            , fn = function(n, t) {
            (function(n) {
                    var t = dn[n.tagName];
                    t ? t(n) : function(n) {
                        if (P(n)) {
                            var t = S(n);
                            n.style.backgroundImage = t.backgroundImage
                        }
                    }(n)
                }
            )(n),
                function(n, t) {
                    L(n) || O(n) || (M(n, t.class_entered),
                        M(n, t.class_exited),
                        M(n, t.class_applied),
                        M(n, t.class_loading),
                        M(n, t.class_loaded),
                        M(n, t.class_error))
                }(n, t),
                A(n),
                U(n)
        }
            , _n = ["IMG", "IFRAME", "VIDEO"]
            , gn = function(n) {
            return n.use_native && "loading"in HTMLImageElement.prototype
        }
            , vn = function(n, t, e) {
            n.forEach((function(n) {
                    return function(n) {
                        return n.isIntersecting || n.intersectionRatio > 0
                    }(n) ? function(n, t, e, i) {
                        var o = function(n) {
                            return x.indexOf(k(n)) >= 0
                        }(n);
                        w(n, "entered"),
                            N(n, e.class_entered),
                            M(n, e.class_exited),
                            function(n, t, e) {
                                t.unobserve_entered && T(n, e)
                            }(n, e, i),
                            C(e.callback_enter, n, t, i),
                        o || ln(n, e, i)
                    }(n.target, n, t, e) : function(n, t, e, i) {
                        L(n) || (N(n, e.class_exited),
                            function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v
                                }(n) && "IMG" === n.tagName && (an(n),
                                    function(n) {
                                        D(n, (function(n) {
                                                un(n)
                                            }
                                        )),
                                            un(n)
                                    }(n),
                                    sn(n),
                                    M(n, e.class_loading),
                                    R(i, -1),
                                    A(n),
                                    C(e.callback_cancel, n, t, i))
                            }(n, t, e, i),
                            C(e.callback_exit, n, t, i))
                    }(n.target, n, t, e)
                }
            ))
        }
            , bn = function(n) {
            return Array.prototype.slice.call(n)
        }
            , mn = function(n) {
            return n.container.querySelectorAll(n.elements_selector)
        }
            , pn = function(n) {
            return function(n) {
                return k(n) === p
            }(n)
        }
            , hn = function(n, t) {
            return function(n) {
                return bn(n).filter(L)
            }(n || mn(t))
        }
            , En = function(n, e) {
            var o = c(n);
            this._settings = o,
                this.loadingCount = 0,
                function(n, t) {
                    i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t)
                        }
                    ),function(n) {
                        return {
                            root: n.container === document ? null : n.container,
                            rootMargin: n.thresholds || n.threshold + "px"
                        }
                    }(n)))
                }(o, this),
                function(n, e) {
                    t && (e._onlineHandler = function() {
                        !function(n, t) {
                            var e;
                            (e = mn(n),
                                bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error),
                                        A(t)
                                }
                            )),
                                t.update()
                        }(n, e)
                    }
                        ,
                        window.addEventListener("online", e._onlineHandler))
                }(o, this),
                this.update(e)
        };
        return En.prototype = {
            update: function(n) {
                var t, o, a = this._settings, r = hn(n, a);
                G(this, r.length),
                    !e && i ? gn(a) ? function(n, t, e) {
                        n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"),
                                        cn(n, t, e),
                                        function(n, t) {
                                            var e = Y[n.tagName];
                                            e && e(n, t)
                                        }(n, t),
                                        w(n, h)
                                }(n, t, e)
                            }
                        )),
                            G(e, 0)
                    }(r, a, this) : (o = r,
                        function(n) {
                            n.disconnect()
                        }(t = this._observer),
                        function(n, t) {
                            t.forEach((function(t) {
                                    n.observe(t)
                                }
                            ))
                        }(t, o)) : this.loadAll(r)
            },
            destroy: function() {
                this._observer && this._observer.disconnect(),
                t && window.removeEventListener("online", this._onlineHandler),
                    mn(this._settings).forEach((function(n) {
                            U(n)
                        }
                    )),
                    delete this._observer,
                    delete this._settings,
                    delete this._onlineHandler,
                    delete this.loadingCount,
                    delete this.toLoadCount
            },
            loadAll: function(n) {
                var t = this
                    , e = this._settings;
                hn(n, e).forEach((function(n) {
                        T(n, t),
                            ln(n, e, t)
                    }
                ))
            },
            restoreAll: function() {
                var n = this._settings;
                mn(n).forEach((function(t) {
                        fn(t, n)
                    }
                ))
            }
        },
            En.load = function(n, t) {
                var e = c(t);
                ln(n, e)
            }
            ,
            En.resetStatus = function(n) {
                A(n)
            }
            ,
        t && function(n, t) {
            if (t)
                if (t.length)
                    for (var e, i = 0; e = t[i]; i += 1)
                        l(n, e);
                else
                    l(n, t)
        }(En, window.lazyLoadOptions),
            En
    }
));
$.browser = navigator.userAgent;
(function($) {
        $.fn.extend({
            autocomplete: function(urlOrData, options) {
                var isUrl = typeof urlOrData == "string";
                options = $.extend({}, $.Autocompleter.defaults, {
                    url: isUrl ? urlOrData : null,
                    data: isUrl ? null : urlOrData,
                    delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                    max: options && !options.scroll ? 10 : 150
                }, options);
                options.highlight = options.highlight || function(value) {
                    return value;
                }
                ;
                options.formatMatch = options.formatMatch || options.formatItem;
                return this.each(function() {
                    new $.Autocompleter(this,options);
                });
            },
            result: function(handler) {
                return this.bind("result", handler);
            },
            search: function(handler) {
                return this.trigger("search", [handler]);
            },
            flushCache: function() {
                return this.trigger("flushCache");
            },
            setOptions: function(options) {
                return this.trigger("setOptions", [options]);
            },
            unautocomplete: function() {
                return this.trigger("unautocomplete");
            }
        });
        $.Autocompleter = function(input, options) {
            var KEY = {
                UP: 38,
                DOWN: 40,
                DEL: 46,
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                COMMA: 188,
                PAGEUP: 33,
                PAGEDOWN: 34,
                BACKSPACE: 8
            };
            var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
            var timeout;
            var previousValue = "";
            var cache = $.Autocompleter.Cache(options);
            var hasFocus = 0;
            var lastKeyPressCode;
            var config = {
                mouseDownOnSelect: false
            };
            var select = $.Autocompleter.Select(options, input, selectCurrent, config);
            var blockSubmit;
            $.browser.opera && $(input.form).bind("submit.autocomplete", function() {
                if (blockSubmit) {
                    blockSubmit = false;
                    return false;
                }
            });
            $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
                hasFocus = 1;
                lastKeyPressCode = event.keyCode;
                switch (event.keyCode) {
                    case KEY.UP:
                        event.preventDefault();
                        if (select.visible()) {
                            select.prev();
                        } else {
                            onChange(0, true);
                        }
                        break;
                    case KEY.DOWN:
                        event.preventDefault();
                        if (select.visible()) {
                            select.next();
                        } else {
                            onChange(0, true);
                        }
                        break;
                    case KEY.PAGEUP:
                        event.preventDefault();
                        if (select.visible()) {
                            select.pageUp();
                        } else {
                            onChange(0, true);
                        }
                        break;
                    case KEY.PAGEDOWN:
                        event.preventDefault();
                        if (select.visible()) {
                            select.pageDown();
                        } else {
                            onChange(0, true);
                        }
                        break;
                    case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
                    case KEY.TAB:
                    case KEY.RETURN:
                        if (selectCurrent()) {
                            event.preventDefault();
                            blockSubmit = true;
                            return false;
                        }
                        break;
                    case KEY.ESC:
                        select.hide();
                        break;
                    default:
                        clearTimeout(timeout);
                        timeout = setTimeout(onChange, options.delay);
                        break;
                }
            }).focus(function() {
                hasFocus++;
            }).blur(function() {
                hasFocus = 0;
                if (!config.mouseDownOnSelect) {
                    hideResults();
                }
            }).click(function() {
                if (hasFocus++ > 1 && !select.visible()) {
                    onChange(0, true);
                }
            }).bind("search", function() {
                var fn = (arguments.length > 1) ? arguments[1] : null;
                function findValueCallback(q, data) {
                    var result;
                    if (data && data.length) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].result.toLowerCase() == q.toLowerCase()) {
                                result = data[i];
                                break;
                            }
                        }
                    }
                    if (typeof fn == "function")
                        fn(result);
                    else
                        $input.trigger("result", result && [result.data, result.value]);
                }
                $.each(trimWords($input.val()), function(i, value) {
                    request(value, findValueCallback, findValueCallback);
                });
            }).bind("flushCache", function() {
                cache.flush();
            }).bind("setOptions", function() {
                $.extend(options, arguments[1]);
                if ("data"in arguments[1])
                    cache.populate();
            }).bind("unautocomplete", function() {
                select.unbind();
                $input.unbind();
                $(input.form).unbind(".autocomplete");
            });
            function selectCurrent() {
                var selected = select.selected();
                if (!selected)
                    return false;
                var v = selected.result;
                previousValue = v;
                if (options.multiple) {
                    var words = trimWords($input.val());
                    if (words.length > 1) {
                        var seperator = options.multipleSeparator.length;
                        var cursorAt = $(input).selection().start;
                        var wordAt, progress = 0;
                        $.each(words, function(i, word) {
                            progress += word.length;
                            if (cursorAt <= progress) {
                                wordAt = i;
                                return false;
                            }
                            progress += seperator;
                        });
                        words[wordAt] = v;
                        v = words.join(options.multipleSeparator);
                    }
                    v += options.multipleSeparator;
                }
                $input.val(v);
                hideResultsNow();
                $input.trigger("result", [selected.data, selected.value]);
                return true;
            }
            function onChange(crap, skipPrevCheck) {
                if (lastKeyPressCode == KEY.DEL) {
                    select.hide();
                    return;
                }
                var currentValue = $input.val();
                if (!skipPrevCheck && currentValue == previousValue)
                    return;
                previousValue = currentValue;
                currentValue = lastWord(currentValue);
                if (currentValue.length >= options.minChars) {
                    $input.addClass(options.loadingClass);
                    if (!options.matchCase)
                        currentValue = currentValue.toLowerCase();
                    request(currentValue, receiveData, hideResultsNow);
                } else {
                    stopLoading();
                    select.hide();
                }
            }
            ;function trimWords(value) {
                if (!value)
                    return [""];
                if (!options.multiple)
                    return [$.trim(value)];
                return $.map(value.split(options.multipleSeparator), function(word) {
                    return $.trim(value).length ? $.trim(word) : null;
                });
            }
            function lastWord(value) {
                if (!options.multiple)
                    return value;
                var words = trimWords(value);
                if (words.length == 1)
                    return words[0];
                var cursorAt = $(input).selection().start;
                if (cursorAt == value.length) {
                    words = trimWords(value)
                } else {
                    words = trimWords(value.replace(value.substring(cursorAt), ""));
                }
                return words[words.length - 1];
            }
            function autoFill(q, sValue) {
                if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                    $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                    $(input).selection(previousValue.length, previousValue.length + sValue.length);
                }
            }
            ;function hideResults() {
                clearTimeout(timeout);
                timeout = setTimeout(hideResultsNow, 200);
            }
            ;function hideResultsNow() {
                var wasVisible = select.visible();
                select.hide();
                clearTimeout(timeout);
                stopLoading();
                if (options.mustMatch) {
                    $input.search(function(result) {
                        if (!result) {
                            if (options.multiple) {
                                var words = trimWords($input.val()).slice(0, -1);
                                $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""));
                            } else {
                                $input.val("");
                                $input.trigger("result", null);
                            }
                        }
                    });
                }
            }
            ;function receiveData(q, data) {
                if (data && data.length && hasFocus) {
                    stopLoading();
                    select.display(data, q);
                    autoFill(q, data[0].value);
                    select.show();
                } else {
                    hideResultsNow();
                }
            }
            ;function request(term, success, failure) {
                if (!options.matchCase)
                    term = term.toLowerCase();
                var data = cache.load(term);
                if (data && data.length) {
                    success(term, data);
                } else if ((typeof options.url == "string") && (options.url.length > 0)) {
                    var extraParams = {
                        timestamp: +new Date()
                    };
                    $.each(options.extraParams, function(key, param) {
                        extraParams[key] = typeof param == "function" ? param() : param;
                    });
                    $.ajax({
                        mode: "abort",
                        port: "autocomplete" + input.name,
                        dataType: options.dataType,
                        url: options.url,
                        data: $.extend({
                            wd: lastWord(term),
                            limit: options.max
                        }, extraParams),
                        success: function(data) {
                            var parsed = options.parse && options.parse(data) || parse(data);
                            cache.add(term, parsed);
                            success(term, parsed);
                        }
                    });
                } else {
                    select.emptyList();
                    failure(term);
                }
            }
            ;function parse(data) {
                var parsed = [];
                var rows = data.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var row = $.trim(rows[i]);
                    if (row) {
                        row = row.split("|");
                        parsed[parsed.length] = {
                            data: row,
                            value: row[0],
                            result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                        };
                    }
                }
                return parsed;
            }
            ;function stopLoading() {
                $input.removeClass(options.loadingClass);
            }
            ;
        }
        ;
        $.Autocompleter.defaults = {
            inputClass: "ac_input",
            resultsClass: "ac_results",
            loadingClass: "ac_loading",
            minChars: 1,
            delay: 400,
            matchCase: false,
            matchSubset: false,
            matchContains: false,
            cacheLength: 10,
            max: 100,
            mustMatch: false,
            extraParams: {},
            selectFirst: true,
            formatItem: function(row) {
                return row[0];
            },
            formatMatch: null,
            autoFill: false,
            width: "auto",
            multiple: false,
            multipleSeparator: ", ",
            highlight: function(value, term) {
                return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), "<strong>$1</strong>");
            },
            scroll: true,
            scrollHeight: "auto"
        };
        $.Autocompleter.Cache = function(options) {
            var data = {};
            var length = 0;
            function matchSubset(s, sub) {
                if (!options.matchCase)
                    s = s.toLowerCase();
                var i = s.indexOf(sub);
                if (options.matchContains == "word") {
                    i = s.toLowerCase().search("\\b" + sub.toLowerCase());
                }
                if (i == -1)
                    return false;
                return i == 0 || options.matchContains;
            }
            ;function add(q, value) {
                if (length > options.cacheLength) {
                    flush();
                }
                if (!data[q]) {
                    length++;
                }
                data[q] = value;
            }
            function populate() {
                if (!options.data)
                    return false;
                var stMatchSets = {}
                    , nullData = 0;
                if (!options.url)
                    options.cacheLength = 1;
                stMatchSets[""] = [];
                for (var i = 0, ol = options.data.length; i < ol; i++) {
                    var rawValue = options.data[i];
                    rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
                    var value = options.formatMatch(rawValue, i + 1, options.data.length);
                    if (value === false)
                        continue;
                    var firstChar = value.charAt(0).toLowerCase();
                    if (!stMatchSets[firstChar])
                        stMatchSets[firstChar] = [];
                    var row = {
                        value: value,
                        data: rawValue,
                        result: options.formatResult && options.formatResult(rawValue) || value
                    };
                    stMatchSets[firstChar].push(row);
                    if (nullData++ < options.max) {
                        stMatchSets[""].push(row);
                    }
                }
                ;$.each(stMatchSets, function(i, value) {
                    options.cacheLength++;
                    add(i, value);
                });
            }
            setTimeout(populate, 25);
            function flush() {
                data = {};
                length = 0;
            }
            return {
                flush: flush,
                add: add,
                populate: populate,
                load: function(q) {
                    if (!options.cacheLength || !length)
                        return null;
                    if (!options.url && options.matchContains) {
                        var csub = [];
                        for (var k in data) {
                            if (k.length > 0) {
                                var c = data[k];
                                $.each(c, function(i, x) {
                                    if (matchSubset(x.value, q)) {
                                        csub.push(x);
                                    }
                                });
                            }
                        }
                        return csub;
                    } else if (data[q]) {
                        return data[q];
                    } else if (options.matchSubset) {
                        for (var i = q.length - 1; i >= options.minChars; i--) {
                            var c = data[q.substr(0, i)];
                            if (c) {
                                var csub = [];
                                $.each(c, function(i, x) {
                                    if (matchSubset(x.value, q)) {
                                        csub[csub.length] = x;
                                    }
                                });
                                return csub;
                            }
                        }
                    }
                    return null;
                }
            };
        }
        ;
        $.Autocompleter.Select = function(options, input, select, config) {
            var CLASSES = {
                ACTIVE: "ac_over"
            };
            var listItems, active = -1, data, term = "", needsInit = true, element, list;
            function init() {
                if (!needsInit)
                    return;
                element = $("<div/>").hide().addClass(options.resultsClass).appendTo(".completion");
                list = $("<ul/>").appendTo(element).mouseover(function(event) {
                    if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
                        active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                        $(target(event)).addClass(CLASSES.ACTIVE);
                    }
                }).click(function(event) {
                    $(target(event)).addClass(CLASSES.ACTIVE);
                    select();
                    input.focus();
                    return false;
                }).mousedown(function() {
                    config.mouseDownOnSelect = true;
                }).mouseup(function() {
                    config.mouseDownOnSelect = false;
                });
                if (options.width > 0)
                    element.css("width", options.width);
                needsInit = false;
            }
            function target(event) {
                var element = event.target;
                while (element && element.tagName != "LI")
                    element = element.parentNode;
                if (!element)
                    return [];
                return element;
            }
            function moveSelect(step) {
                listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
                movePosition(step);
                var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
                if (options.scroll) {
                    var offset = 0;
                    listItems.slice(0, active).each(function() {
                        offset += this.offsetHeight;
                    });
                    if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                        list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
                    } else if (offset < list.scrollTop()) {
                        list.scrollTop(offset);
                    }
                }
            }
            ;function movePosition(step) {
                active += step;
                if (active < 0) {
                    active = listItems.size() - 1;
                } else if (active >= listItems.size()) {
                    active = 0;
                }
            }
            function limitNumberOfItems(available) {
                return options.max && options.max < available ? options.max : available;
            }
            function fillList() {
                list.empty();
                var max = limitNumberOfItems(data.length);
                for (var i = 0; i < max; i++) {
                    if (!data[i])
                        continue;
                    var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                    if (formatted === false)
                        continue;
                    var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                    $.data(li, "ac_data", data[i]);
                }
                listItems = list.find("li");
                if (options.selectFirst) {
                    listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                    active = 0;
                }
                if ($.fn.bgiframe)
                    list.bgiframe();
            }
            return {
                display: function(d, q) {
                    init();
                    data = d;
                    term = q;
                    fillList();
                },
                next: function() {
                    moveSelect(1);
                },
                prev: function() {
                    moveSelect(-1);
                },
                pageUp: function() {
                    if (active != 0 && active - 8 < 0) {
                        moveSelect(-active);
                    } else {
                        moveSelect(-8);
                    }
                },
                pageDown: function() {
                    if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                        moveSelect(listItems.size() - 1 - active);
                    } else {
                        moveSelect(8);
                    }
                },
                hide: function() {
                    element && element.hide();
                    listItems && listItems.removeClass(CLASSES.ACTIVE);
                    active = -1;
                },
                visible: function() {
                    return element && element.is(":visible");
                },
                current: function() {
                    return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
                },
                show: function() {
                    var offset = $(input).offset();
                    element.css({
                        width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                        top: offset.top + input.offsetHeight,
                        left: offset.left
                    }).show();
                    if (options.scroll) {
                        list.scrollTop(0);
                        list.css({
                            maxHeight: options.scrollHeight,
                            overflow: 'auto'
                        });
                        if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                            var listHeight = 0;
                            listItems.each(function() {
                                listHeight += this.offsetHeight;
                            });
                            var scrollbarsVisible = listHeight > options.scrollHeight;
                            list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
                            if (!scrollbarsVisible) {
                                listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")));
                            }
                        }
                    }
                },
                selected: function() {
                    var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                    return selected && selected.length && $.data(selected[0], "ac_data");
                },
                emptyList: function() {
                    list && list.empty();
                },
                unbind: function() {
                    element && element.remove();
                }
            };
        }
        ;
        $.fn.selection = function(start, end) {
            if (start !== undefined) {
                return this.each(function() {
                    if (this.createTextRange) {
                        var selRange = this.createTextRange();
                        if (end === undefined || start == end) {
                            selRange.move("character", start);
                            selRange.select();
                        } else {
                            selRange.collapse(true);
                            selRange.moveStart("character", start);
                            selRange.moveEnd("character", end);
                            selRange.select();
                        }
                    } else if (this.setSelectionRange) {
                        this.setSelectionRange(start, end);
                    } else if (this.selectionStart) {
                        this.selectionStart = start;
                        this.selectionEnd = end;
                    }
                });
            }
            var field = this[0];
            if (field.createTextRange) {
                var range = document.selection.createRange()
                    , orig = field.value
                    , teststring = "<->"
                    , textLength = range.text.length;
                range.text = teststring;
                var caretAt = field.value.indexOf(teststring);
                field.value = orig;
                this.selection(caretAt, caretAt + textLength);
                return {
                    start: caretAt,
                    end: caretAt + textLength
                }
            } else if (field.selectionStart !== undefined) {
                return {
                    start: field.selectionStart,
                    end: field.selectionEnd
                }
            }
        }
        ;
    }
)(jQuery);
(function() {
        var a, b, c, d, e, f = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            }, g = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a)
                        return b;
                return -1
            }
        ;
        b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b)
                    d = b[c],
                    null == a[c] && (a[c] = d);
                return a
            }
                ,
                a.prototype.isMobile = function(a) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
                }
                ,
                a.prototype.addEvent = function(a, b, c) {
                    return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
                }
                ,
                a.prototype.removeEvent = function(a, b, c) {
                    return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
                }
                ,
                a.prototype.innerHeight = function() {
                    return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
                }
                ,
                a
        }(),
            c = this.WeakMap || this.MozWeakMap || (c = function() {
                function a() {
                    this.keys = [],
                        this.values = []
                }
                return a.prototype.get = function(a) {
                    var b, c, d, e, f;
                    for (f = this.keys,
                             b = d = 0,
                             e = f.length; e > d; b = ++d)
                        if (c = f[b],
                        c === a)
                            return this.values[b]
                }
                    ,
                    a.prototype.set = function(a, b) {
                        var c, d, e, f, g;
                        for (g = this.keys,
                                 c = e = 0,
                                 f = g.length; f > e; c = ++e)
                            if (d = g[c],
                            d === a)
                                return void (this.values[c] = b);
                        return this.keys.push(a),
                            this.values.push(b)
                    }
                    ,
                    a
            }()),
            a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
                function a() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return a.notSupported = !0,
                    a.prototype.observe = function() {}
                    ,
                    a
            }()),
            d = this.getComputedStyle || function(a) {
                return this.getPropertyValue = function(b) {
                    var c;
                    return "float" === b && (b = "styleFloat"),
                    e.test(b) && b.replace(e, function(a, b) {
                        return b.toUpperCase()
                    }),
                    (null != (c = a.currentStyle) ? c[b] : void 0) || null
                }
                    ,
                    this
            }
            ,
            e = /(\-([a-z]){1})/g,
            this.WOW = function() {
                function e(a) {
                    null == a && (a = {}),
                        this.scrollCallback = f(this.scrollCallback, this),
                        this.scrollHandler = f(this.scrollHandler, this),
                        this.start = f(this.start, this),
                        this.scrolled = !0,
                        this.config = this.util().extend(a, this.defaults),
                        this.animationNameCache = new c
                }
                return e.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0
                },
                    e.prototype.init = function() {
                        var a;
                        return this.element = window.document.documentElement,
                            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                            this.finished = []
                    }
                    ,
                    e.prototype.start = function() {
                        var b, c, d, e;
                        if (this.stopped = !1,
                            this.boxes = function() {
                                var a, c, d, e;
                                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                                         e = [],
                                         a = 0,
                                         c = d.length; c > a; a++)
                                    b = d[a],
                                        e.push(b);
                                return e
                            }
                                .call(this),
                            this.all = function() {
                                var a, c, d, e;
                                for (d = this.boxes,
                                         e = [],
                                         a = 0,
                                         c = d.length; c > a; a++)
                                    b = d[a],
                                        e.push(b);
                                return e
                            }
                                .call(this),
                            this.boxes.length)
                            if (this.disabled())
                                this.resetStyle();
                            else {
                                for (e = this.boxes,
                                         c = 0,
                                         d = e.length; d > c; c++)
                                    b = e[c],
                                        this.applyStyle(b, !0);
                                this.util().addEvent(window, "scroll", this.scrollHandler),
                                    this.util().addEvent(window, "resize", this.scrollHandler),
                                    this.interval = setInterval(this.scrollCallback, 50)
                            }
                        return this.config.live ? new a(function(a) {
                            return function(b) {
                                var c, d, e, f, g;
                                for (g = [],
                                         e = 0,
                                         f = b.length; f > e; e++)
                                    d = b[e],
                                        g.push(function() {
                                            var a, b, e, f;
                                            for (e = d.addedNodes || [],
                                                     f = [],
                                                     a = 0,
                                                     b = e.length; b > a; a++)
                                                c = e[a],
                                                    f.push(this.doSync(c));
                                            return f
                                        }
                                            .call(a));
                                return g
                            }
                        }(this)).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }) : void 0
                    }
                    ,
                    e.prototype.stop = function() {
                        return this.stopped = !0,
                            this.util().removeEvent(window, "scroll", this.scrollHandler),
                            this.util().removeEvent(window, "resize", this.scrollHandler),
                            null != this.interval ? clearInterval(this.interval) : void 0
                    }
                    ,
                    e.prototype.sync = function() {
                        return a.notSupported ? this.doSync(this.element) : void 0
                    }
                    ,
                    e.prototype.doSync = function(a) {
                        var b, c, d, e, f;
                        if (!this.stopped) {
                            if (null == a && (a = this.element),
                            1 !== a.nodeType)
                                return;
                            for (a = a.parentNode || a,
                                     e = a.querySelectorAll("." + this.config.boxClass),
                                     f = [],
                                     c = 0,
                                     d = e.length; d > c; c++)
                                b = e[c],
                                    g.call(this.all, b) < 0 ? (this.applyStyle(b, !0),
                                        this.boxes.push(b),
                                        this.all.push(b),
                                        f.push(this.scrolled = !0)) : f.push(void 0);
                            return f
                        }
                    }
                    ,
                    e.prototype.show = function(a) {
                        return this.applyStyle(a),
                            a.className = "" + a.className + " " + this.config.animateClass
                    }
                    ,
                    e.prototype.applyStyle = function(a, b) {
                        var c, d, e;
                        return d = a.getAttribute("data-wow-duration"),
                            c = a.getAttribute("data-wow-delay"),
                            e = a.getAttribute("data-wow-iteration"),
                            this.animate(function(f) {
                                return function() {
                                    return f.customStyle(a, b, d, c, e)
                                }
                            }(this))
                    }
                    ,
                    e.prototype.animate = function() {
                        return "requestAnimationFrame"in window ? function(a) {
                                return window.requestAnimationFrame(a)
                            }
                            : function(a) {
                                return a()
                            }
                    }(),
                    e.prototype.resetStyle = function() {
                        var a, b, c, d, e;
                        for (d = this.boxes,
                                 e = [],
                                 b = 0,
                                 c = d.length; c > b; b++)
                            a = d[b],
                                e.push(a.setAttribute("style", "visibility: visible;"));
                        return e
                    }
                    ,
                    e.prototype.customStyle = function(a, b, c, d, e) {
                        return b && this.cacheAnimationName(a),
                            a.style.visibility = b ? "hidden" : "visible",
                        c && this.vendorSet(a.style, {
                            animationDuration: c
                        }),
                        d && this.vendorSet(a.style, {
                            animationDelay: d
                        }),
                        e && this.vendorSet(a.style, {
                            animationIterationCount: e
                        }),
                            this.vendorSet(a.style, {
                                animationName: b ? "none" : this.cachedAnimationName(a)
                            }),
                            a
                    }
                    ,
                    e.prototype.vendors = ["moz", "webkit"],
                    e.prototype.vendorSet = function(a, b) {
                        var c, d, e, f;
                        f = [];
                        for (c in b)
                            d = b[c],
                                a["" + c] = d,
                                f.push(function() {
                                    var b, f, g, h;
                                    for (g = this.vendors,
                                             h = [],
                                             b = 0,
                                             f = g.length; f > b; b++)
                                        e = g[b],
                                            h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                                    return h
                                }
                                    .call(this));
                        return f
                    }
                    ,
                    e.prototype.vendorCSS = function(a, b) {
                        var c, e, f, g, h, i;
                        for (e = d(a),
                                 c = e.getPropertyCSSValue(b),
                                 i = this.vendors,
                                 g = 0,
                                 h = i.length; h > g; g++)
                            f = i[g],
                                c = c || e.getPropertyCSSValue("-" + f + "-" + b);
                        return c
                    }
                    ,
                    e.prototype.animationName = function(a) {
                        var b;
                        try {
                            b = this.vendorCSS(a, "animation-name").cssText
                        } catch (c) {
                            b = d(a).getPropertyValue("animation-name")
                        }
                        return "none" === b ? "" : b
                    }
                    ,
                    e.prototype.cacheAnimationName = function(a) {
                        return this.animationNameCache.set(a, this.animationName(a))
                    }
                    ,
                    e.prototype.cachedAnimationName = function(a) {
                        return this.animationNameCache.get(a)
                    }
                    ,
                    e.prototype.scrollHandler = function() {
                        return this.scrolled = !0
                    }
                    ,
                    e.prototype.scrollCallback = function() {
                        var a;
                        return !this.scrolled || (this.scrolled = !1,
                            this.boxes = function() {
                                var b, c, d, e;
                                for (d = this.boxes,
                                         e = [],
                                         b = 0,
                                         c = d.length; c > b; b++)
                                    a = d[b],
                                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                                return e
                            }
                                .call(this),
                        this.boxes.length || this.config.live) ? void 0 : this.stop()
                    }
                    ,
                    e.prototype.offsetTop = function(a) {
                        for (var b; void 0 === a.offsetTop; )
                            a = a.parentNode;
                        for (b = a.offsetTop; a = a.offsetParent; )
                            b += a.offsetTop;
                        return b
                    }
                    ,
                    e.prototype.isVisible = function(a) {
                        var b, c, d, e, f;
                        return c = a.getAttribute("data-wow-offset") || this.config.offset,
                            f = window.pageYOffset,
                            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
                            d = this.offsetTop(a),
                            b = d + a.clientHeight,
                        e >= d && b >= f
                    }
                    ,
                    e.prototype.util = function() {
                        return null != this._util ? this._util : this._util = new b
                    }
                    ,
                    e.prototype.disabled = function() {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                    }
                    ,
                    e
            }()
    }
).call(this);
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return n = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return o
                }
            });
            var e = n(279)
                , i = n.n(e)
                , e = n(370)
                , u = n.n(e)
                , e = n(817)
                , c = n.n(e);
            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var f = function(t) {
                t = c()(t);
                return a("cut"),
                    t
            };
            var l = function(t) {
                var e, n, o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                }, i = "";
                return "string" == typeof t ? (e = t,
                    n = "rtl" === document.documentElement.getAttribute("dir"),
                    (o = document.createElement("textarea")).style.fontSize = "12pt",
                    o.style.border = "0",
                    o.style.padding = "0",
                    o.style.margin = "0",
                    o.style.position = "absolute",
                    o.style[n ? "right" : "left"] = "-9999px",
                    n = window.pageYOffset || document.documentElement.scrollTop,
                    o.style.top = "".concat(n, "px"),
                    o.setAttribute("readonly", ""),
                    o.value = e,
                    o = o,
                    r.container.appendChild(o),
                    i = c()(o),
                    a("copy"),
                    o.remove()) : (i = c()(t),
                    a("copy")),
                    i
            };
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                )(t)
            }
            var s = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , e = t.action
                    , n = void 0 === e ? "copy" : e
                    , o = t.container
                    , e = t.target
                    , t = t.text;
                if ("copy" !== n && "cut" !== n)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== r(e) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: o
                }) : e ? "cut" === n ? f(e) : l(e, {
                    container: o
                }) : void 0
            };
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                )(t)
            }
            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                    "value"in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o)
                }
            }
            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e,
                            t
                    }
                )(t, e)
            }
            function h(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                            !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return t = o ? (t = m(this).constructor,
                        Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                        e = this,
                        !(t = t) || "object" !== p(t) && "function" != typeof t ? function(t) {
                            if (void 0 !== t)
                                return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                }
            }
            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }
                )(t)
            }
            function v(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t))
                    return e.getAttribute(t)
            }
            var o = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && y(t, e)
                }(r, i());
                var t, e, n, o = h(r);
                function r(t, e) {
                    var n;
                    return function(t) {
                        if (!(t instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                        (n = o.call(this)).resolveOptions(e),
                        n.listenClick(t),
                        n
                }
                return t = r,
                    n = [{
                        key: "copy",
                        value: function(t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                container: document.body
                            };
                            return l(t, e)
                        }
                    }, {
                        key: "cut",
                        value: function(t) {
                            return f(t)
                        }
                    }, {
                        key: "isSupported",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                , t = "string" == typeof t ? [t] : t
                                , e = !!document.queryCommandSupported;
                            return t.forEach(function(t) {
                                e = e && !!document.queryCommandSupported(t)
                            }),
                                e
                        }
                    }],
                (e = [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                            this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                            this.text = "function" == typeof t.text ? t.text : this.defaultText,
                            this.container = "object" === p(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = u()(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget
                            , n = this.action(e) || "copy"
                            , t = s({
                            action: n,
                            container: this.container,
                            target: this.target(e),
                            text: this.text(e)
                        });
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(),
                                    document.activeElement.blur(),
                                    window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return v("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        t = v("target", t);
                        if (t)
                            return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return v("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && d(t.prototype, e),
                n && d(t, n),
                    r
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector),
                t.exports = function(t, e) {
                    for (; t && 9 !== t.nodeType; ) {
                        if ("function" == typeof t.matches && t.matches(e))
                            return t;
                        t = t.parentNode
                    }
                }
        },
        438: function(t, e, n) {
            var u = n(828);
            function i(t, e, n, o, r) {
                var i = function(e, n, t, o) {
                    return function(t) {
                        t.delegateTarget = u(t.target, n),
                        t.delegateTarget && o.call(e, t)
                    }
                }
                    .apply(this, arguments);
                return t.addEventListener(n, i, r),
                    {
                        destroy: function() {
                            t.removeEventListener(n, i, r)
                        }
                    }
            }
            t.exports = function(t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
                    Array.prototype.map.call(t, function(t) {
                        return i(t, e, n, o, r)
                    }))
            }
        },
        879: function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
                ,
                n.nodeList = function(t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
                }
                ,
                n.string = function(t) {
                    return "string" == typeof t || t instanceof String
                }
                ,
                n.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
        },
        370: function(t, e, n) {
            var f = n(879)
                , l = n(438);
            t.exports = function(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!f.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!f.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (f.node(t))
                    return c = e,
                        a = n,
                        (u = t).addEventListener(c, a),
                        {
                            destroy: function() {
                                u.removeEventListener(c, a)
                            }
                        };
                if (f.nodeList(t))
                    return o = t,
                        r = e,
                        i = n,
                        Array.prototype.forEach.call(o, function(t) {
                            t.addEventListener(r, i)
                        }),
                        {
                            destroy: function() {
                                Array.prototype.forEach.call(o, function(t) {
                                    t.removeEventListener(r, i)
                                })
                            }
                        };
                if (f.string(t))
                    return t = t,
                        e = e,
                        n = n,
                        l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(),
                    t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""),
                    t.select(),
                    t.setSelectionRange(0, t.value.length),
                e || t.removeAttribute("readonly"),
                    t.value) : (t.hasAttribute("contenteditable") && t.focus(),
                    n = window.getSelection(),
                    (e = document.createRange()).selectNodeContents(t),
                    n.removeAllRanges(),
                    n.addRange(e),
                    n.toString());
                return n
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                        this
                },
                once: function(t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r),
                            e.apply(n, arguments)
                    }
                    return r._ = e,
                        this.on(t, r, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                        , o = n[t]
                        , r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++)
                            o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t],
                        this
                }
            },
                t.exports = e,
                t.exports.TinyEmitter = e
        }
    },
        r = {},
        o.n = function(t) {
            var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
            ;
            return o.d(e, {
                a: e
            }),
                e
        }
        ,
        o.d = function(t, e) {
            for (var n in e)
                o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }
        ,
        o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        o(686).default;
    function o(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, o),
            e.exports
    }
    var n, r
});
(function() {
        var overlay = $('<div id="galleryOverlay">')
            , slider = $('<div id="gallerySlider">')
            , prevArrow = $('<a id="prevArrow" class="fa">&#xe566;</a>')
            , nextArrow = $('<a id="nextArrow" class="fa">&#xe565;</a>')
            , pageSpan = $('<span id="pagelimit"></span')
            , overlayVisible = false;
        $.fn.touchTouch = function() {
            var placeholders = $([])
                , pl1 = []
                , index = 0
                , items = this;
            overlay.hide().appendTo('body');
            slider.appendTo(overlay);
            pageSpan.appendTo(overlay);
            items.each(function() {
                placeholders = placeholders.add($('<div class="placeholder">'))
            });
            slider.append(placeholders).on('click', function(e) {
                hideOverlay()
            });
            $('body').on('touchstart', '#gallerySlider img', function(e) {
                var touch = e.originalEvent
                    , startX = touch.changedTouches[0].pageX;
                slider.on('touchmove', function(e) {
                    e.preventDefault();
                    touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    if (touch.pageX - startX > 10) {
                        slider.off('touchmove');
                        showPrevious()
                    } else if (touch.pageX - startX < -10) {
                        slider.off('touchmove');
                        showNext()
                    }
                });
                return false
            }).on('touchend', function() {
                slider.off('touchmove')
            });
            items.on('click', function(e) {
                e.preventDefault();
                index = items.index(this);
                showOverlay(index);
                showImage(index);
                calcPages(items, index);
                preload(index + 1);
                preload(index - 1);
                $(document).data("overlayVisible", true);
                e.cancelBubble = true
            });
            function calcPages(items, index) {
                pageSpan.text((index + 1) + "/" + items.length)
            }
            if (!("ontouchstart"in window)) {
                overlay.append(prevArrow).append(nextArrow);
                prevArrow.click(function(e) {
                    e.preventDefault();
                    showPrevious()
                });
                nextArrow.click(function(e) {
                    e.preventDefault();
                    showNext()
                })
            }
            $(window).bind('keydown', function(e) {
                if (e.keyCode == 37) {
                    showPrevious()
                } else if (e.keyCode == 39) {
                    showNext()
                }
            });
            function showOverlay(index) {
                if (overlayVisible) {
                    return false
                }
                overlay.show();
                setTimeout(function() {
                    overlay.addClass('visible')
                }, 100);
                offsetSlider(index);
                overlayVisible = true
            }
            function hideOverlay() {
                if (!overlayVisible) {
                    return false
                }
                overlay.hide().removeClass('visible');
                overlayVisible = false;
                $(document).data("overlayVisible", overlayVisible)
            }
            function offsetSlider(index) {
                slider.css('left', (-index * 100) + '%')
            }
            function preload(index) {
                setTimeout(function() {
                    showImage(index)
                }, 1000)
            }
            function showImage(index) {
                if (index < 0 || index >= items.length) {
                    return false
                }
                loadImage(items.eq(index).attr('src'), function() {
                    placeholders.eq(index).html(this)
                })
            }
            function loadImage(src, callback) {
                var img = $('<img>').on('load', function() {
                    callback.call(img)
                });
                img.attr('src', src)
            }
            function showNext() {
                if (index + 1 < items.length) {
                    index++;
                    offsetSlider(index);
                    preload(index + 1);
                    calcPages(items, index)
                } else {
                    slider.addClass('rightSpring');
                    setTimeout(function() {
                        slider.removeClass('rightSpring')
                    }, 500)
                }
            }
            function showPrevious() {
                if (index > 0) {
                    index--;
                    offsetSlider(index);
                    preload(index - 1);
                    calcPages(items, index)
                } else {
                    slider.addClass('leftSpring');
                    setTimeout(function() {
                        slider.removeClass('leftSpring')
                    }, 500)
                }
            }
        }
    }
)(jQuery);
(function($) {
    "use strict";
    function supportFullScreen() {
        var doc = document.documentElement;
        return ('requestFullscreen'in doc) || ('mozRequestFullScreen'in doc && document.mozFullScreenEnabled) || ('webkitRequestFullScreen'in doc)
    }
    function requestFullScreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen()
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
    }
    function fullScreenStatus() {
        return document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || false
    }
    function cancelFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
        }
    }
    function onFullScreenEvent(callback) {
        $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function() {
            callback(fullScreenStatus())
        })
    }
    $.support.fullscreen = supportFullScreen();
    $.fn.fullScreen = function(props) {
        if (!$.support.fullscreen || this.length !== 1) {
            return this
        }
        if (fullScreenStatus()) {
            cancelFullScreen();
            return this
        }
        var options = $.extend({
            'background': '#111',
            'callback': $.noop(),
            'fullscreenClass': 'fullScreen'
        }, props)
            , elem = this
            , fs = $('<div>', {
            'css': {
                'overflow-y': 'auto',
                'background': options.background,
                'width': '100%',
                'height': '100%'
            }
        }).insertBefore(elem).append(elem);
        elem.addClass(options.fullscreenClass);
        requestFullScreen(fs.get(0));
        fs.click(function(e) {
            if (e.target == this) {
                cancelFullScreen()
            }
        });
        elem.cancel = function() {
            cancelFullScreen();
            return elem
        }
        ;
        onFullScreenEvent(function(fullScreen) {
            if (!fullScreen) {
                $(document).off('fullscreenchange mozfullscreenchange webkitfullscreenchange');
                elem.removeClass(options.fullscreenClass).insertBefore(fs);
                fs.remove()
            }
            if (options.callback) {
                options.callback(fullScreen)
            }
        });
        return elem
    }
    ;
    $.fn.cancelFullScreen = function() {
        cancelFullScreen();
        return this
    }
}(jQuery));
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('(3($){4 s={1r:"<1q 2i=\'T-2\'>",1l:"1k",1j:"1k",1i:"1R",1f:"1M",V:"1K",W:"1J",1b:"1z U",19:"2x",17:D,16:"21",O:P,15:D,Q:P,7:"T-U-14"};$.13.2=3(f){4 g=u;6(!g.12){8 g}4 i=$.1N(s,f);6(g.12>1){g.10(3(){$(u).2(i)});8 g}6(g.E("2")){g.v("2.F");8 g}g.7(i.7);g.E("2",f);6(!i.R){1x 24 1S("1W 1d 1y 1A 1G. 1I 1L 1O: $(...).2({R: \'...\'})")}6(!i.Q){g.1P(i.1r)}4 j=$("<1q>").7("1e");4 k=$("<2b>").t({X:"Y",Z:i.1l}).7(i.1j);4 l=$("<N>").t("X","11").7(i.1f).M(i.1i);4 m=$("<N>").7(i.W).M(i.V).9("H",3(){k.H();8 D});4 n=$("<N>").7(i.19).M(i.1b).9("H",3(){g.v("2.A");g.v("2.23");g.K();8 D});4 p="2e-"+2h.2j().2m(2n).2p(5,20).2t();4 q=$("<1w>").t({18:p,Z:p}).x();4 r=$("<1a>").7(i.16).t({1B:q.t("18"),1C:"1D/1a-E",1E:"1F",1d:i.R});r.C([m,k,l,n,q]);6(i.15){n.K()}6(i.17){l.x();k.9("1H",3(){6(!$(u).1c()){8}l.H()})}6(i.O){k.x()}L{m.x()}j.C(r);r.9("11",3(){4 c=$(u);q.J("I");4 d=g.t("G");6(1g i.1h==="1Q"){g.t("G",i.1h)}g.7("S");j.x();q.9("I",3(){4 a=$(u.1T.1U).1V();4 b;1X{b=1Y("("+a+")");}1Z(e){}6(b==22){y(g,d);g.v("2.1m",[\'返回数据格式不正确\']);8;}6(b.25==0){y(g,d);g.v("2.1m",[b.26]);8;}6(i.O){g.v("2.F")}6(!k.1c()){y(g,d);8}q.t("G","");y(g,b.Y,3(){g.v("2.27")});k.28(k.29(P))})});6(!i.Q){g.2a().C(j)}L{j.1n({2c:"2d"});j.7("T-U-14-1e");$("1o").C(j.x());g.9("2f",3(){6(g.2g("S")){8}4 a=g.1p();j.1n({B:a.B,z:a.z});j.2k()});$("1o").9("2l","."+i.7,3(e){4 o=g.1p();4 w=g.2o();4 h=g.2q();6(e.1s<o.z||e.1s>o.z+w||(e.1t<o.B||e.1t>o.B+h)){j.x()}})}g.9("2.A",3(){j.K();g.J("2.A");g.J("2.F");g.E("2",2r)});g.9("2.F",3(){g.v("2.A");g.2(f)});8 g};3 y(a,b,c){a.2s(3(){a.t("G",b);1u(a,3(){a.2u("S");a.2v();6(1g c==="3"){c()}})})}3 1u(a,b){$(a).10(3(){6(u.2w){b.1v(u)}L{$(u).9("I",3(){b.1v(u)})}})}$.2=$.13.2;$.2.2y=s})($);', 62, 159, '||imageUpload|function|var||if|addClass|return|on||||||||||||||||||||attr|this|trigger||hide|loadImage|left|destroy|top|append|false|data|reload|src|click|load|off|remove|else|html|button|hideFileInput|true|hover|formAction|loading|jQuery|image|browseButtonValue|browseButtonClass|type|file|name|each|submit|length|fn|upload|hideDeleteButton|formClass|automaticUpload|id|deleteButtonClass|form|deleteButtonValue|val|action|controls|uploadButtonClass|typeof|waiter|uploadButtonValue|inputFileClass|inputFile|inputFileName|uploadFailed|css|body|offset|div|wrapContent|pageX|pageY|imgLoad|apply|iframe|throw|was|Delete|not|target|enctype|multipart|method|post|provided|change|Please|browseButton|Browse|provide|uploadButton|extend|it|wrap|string|Upload|Error|contentWindow|document|text|Form|try|eval|catch||controlForm|undefined|imageRemoved|new|code|msg|imageChanged|replaceWith|clone|parent|input|position|absolute|uploadIframe|mouseenter|hasClass|Math|class|random|show|mouseleave|toString|36|width|substring|height|null|fadeOut|toLowerCase|removeClass|fadeIn|complete|deleteButton|defaults'.split('|'), 0, {}));
(function(r) {
        r.fn.qrcode = function(h) {
            var s;
            function u(a) {
                this.mode = s;
                this.data = a
            }
            function o(a, c) {
                this.typeNumber = a;
                this.errorCorrectLevel = c;
                this.modules = null;
                this.moduleCount = 0;
                this.dataCache = null;
                this.dataList = []
            }
            function q(a, c) {
                if (void 0 == a.length)
                    throw Error(a.length + "/" + c);
                for (var d = 0; d < a.length && 0 == a[d]; )
                    d++;
                this.num = Array(a.length - d + c);
                for (var b = 0; b < a.length - d; b++)
                    this.num[b] = a[b + d]
            }
            function p(a, c) {
                this.totalCount = a;
                this.dataCount = c
            }
            function t() {
                this.buffer = [];
                this.length = 0
            }
            u.prototype = {
                getLength: function() {
                    return this.data.length
                },
                write: function(a) {
                    for (var c = 0; c < this.data.length; c++)
                        a.put(this.data.charCodeAt(c), 8)
                }
            };
            o.prototype = {
                addData: function(a) {
                    this.dataList.push(new u(a));
                    this.dataCache = null
                },
                isDark: function(a, c) {
                    if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c)
                        throw Error(a + "," + c);
                    return this.modules[a][c]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    if (1 > this.typeNumber) {
                        for (var a = 1, a = 1; 40 > a; a++) {
                            for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++)
                                b += c[e].dataCount;
                            for (e = 0; e < this.dataList.length; e++)
                                c = this.dataList[e],
                                    d.put(c.mode, 4),
                                    d.put(c.getLength(), j.getLengthInBits(c.mode, a)),
                                    c.write(d);
                            if (d.getLengthInBits() <= 8 * b)
                                break
                        }
                        this.typeNumber = a
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(a, c) {
                    this.moduleCount = 4 * this.typeNumber + 17;
                    this.modules = Array(this.moduleCount);
                    for (var d = 0; d < this.moduleCount; d++) {
                        this.modules[d] = Array(this.moduleCount);
                        for (var b = 0; b < this.moduleCount; b++)
                            this.modules[d][b] = null
                    }
                    this.setupPositionProbePattern(0, 0);
                    this.setupPositionProbePattern(this.moduleCount - 7, 0);
                    this.setupPositionProbePattern(0, this.moduleCount - 7);
                    this.setupPositionAdjustPattern();
                    this.setupTimingPattern();
                    this.setupTypeInfo(a, c);
                    7 <= this.typeNumber && this.setupTypeNumber(a);
                    null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                    this.mapData(this.dataCache, c)
                },
                setupPositionProbePattern: function(a, c) {
                    for (var d = -1; 7 >= d; d++)
                        if (!(-1 >= a + d || this.moduleCount <= a + d))
                            for (var b = -1; 7 >= b; b++)
                                -1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] = 0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
                },
                getBestMaskPattern: function() {
                    for (var a = 0, c = 0, d = 0; 8 > d; d++) {
                        this.makeImpl(!0, d);
                        var b = j.getLostPoint(this);
                        if (0 == d || a > b)
                            a = b,
                                c = d
                    }
                    return c
                },
                createMovieClip: function(a, c, d) {
                    a = a.createEmptyMovieClip(c, d);
                    this.make();
                    for (c = 0; c < this.modules.length; c++)
                        for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
                            var e = 1 * b;
                            this.modules[c][b] && (a.beginFill(0, 100),
                                a.moveTo(e, d),
                                a.lineTo(e + 1, d),
                                a.lineTo(e + 1, d + 1),
                                a.lineTo(e, d + 1),
                                a.endFill())
                        }
                    return a
                },
                setupTimingPattern: function() {
                    for (var a = 8; a < this.moduleCount - 8; a++)
                        null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                    for (a = 8; a < this.moduleCount - 8; a++)
                        null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
                },
                setupPositionAdjustPattern: function() {
                    for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++)
                        for (var d = 0; d < a.length; d++) {
                            var b = a[c]
                                , e = a[d];
                            if (null == this.modules[b][e])
                                for (var f = -2; 2 >= f; f++)
                                    for (var i = -2; 2 >= i; i++)
                                        this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                        }
                },
                setupTypeNumber: function(a) {
                    for (var c = j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                        var b = !a && 1 == (c >> d & 1);
                        this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
                    }
                    for (d = 0; 18 > d; d++)
                        b = !a && 1 == (c >> d & 1),
                            this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
                },
                setupTypeInfo: function(a, c) {
                    for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
                        var e = !a && 1 == (d >> b & 1);
                        6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
                    }
                    for (b = 0; 15 > b; b++)
                        e = !a && 1 == (d >> b & 1),
                            8 > b ? this.modules[8][this.moduleCount - b - 1] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
                    this.modules[this.moduleCount - 8][8] = !a
                },
                mapData: function(a, c) {
                    for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2)
                        for (6 == i && i--; ; ) {
                            for (var g = 0; 2 > g; g++)
                                if (null == this.modules[b][i - g]) {
                                    var n = !1;
                                    f < a.length && (n = 1 == (a[f] >>> e & 1));
                                    j.getMask(c, b, i - g) && (n = !n);
                                    this.modules[b][i - g] = n;
                                    e--;
                                    -1 == e && (f++,
                                        e = 7)
                                }
                            b += d;
                            if (0 > b || this.moduleCount <= b) {
                                b -= d;
                                d = -d;
                                break
                            }
                        }
                }
            };
            o.PAD0 = 236;
            o.PAD1 = 17;
            o.createData = function(a, c, d) {
                for (var c = p.getRSBlocks(a, c), b = new t, e = 0; e < d.length; e++) {
                    var f = d[e];
                    b.put(f.mode, 4);
                    b.put(f.getLength(), j.getLengthInBits(f.mode, a));
                    f.write(b)
                }
                for (e = a = 0; e < c.length; e++)
                    a += c[e].dataCount;
                if (b.getLengthInBits() > 8 * a)
                    throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
                for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8; )
                    b.putBit(!1);
                for (; !(b.getLengthInBits() >= 8 * a); ) {
                    b.put(o.PAD0, 8);
                    if (b.getLengthInBits() >= 8 * a)
                        break;
                    b.put(o.PAD1, 8)
                }
                return o.createBytes(b, c)
            }
            ;
            o.createBytes = function(a, c) {
                for (var d = 0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
                    var n = c[g].dataCount
                        , h = c[g].totalCount - n
                        , b = Math.max(b, n)
                        , e = Math.max(e, h);
                    f[g] = Array(n);
                    for (var k = 0; k < f[g].length; k++)
                        f[g][k] = 255 & a.buffer[k + d];
                    d += n;
                    k = j.getErrorCorrectPolynomial(h);
                    n = (new q(f[g],k.getLength() - 1)).mod(k);
                    i[g] = Array(k.getLength() - 1);
                    for (k = 0; k < i[g].length; k++)
                        h = k + n.getLength() - i[g].length,
                            i[g][k] = 0 <= h ? n.get(h) : 0
                }
                for (k = g = 0; k < c.length; k++)
                    g += c[k].totalCount;
                d = Array(g);
                for (k = n = 0; k < b; k++)
                    for (g = 0; g < c.length; g++)
                        k < f[g].length && (d[n++] = f[g][k]);
                for (k = 0; k < e; k++)
                    for (g = 0; g < c.length; g++)
                        k < i[g].length && (d[n++] = i[g][k]);
                return d
            }
            ;
            s = 4;
            for (var j = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(a) {
                    for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15); )
                        c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
                    return (a << 10 | c) ^ j.G15_MASK
                },
                getBCHTypeNumber: function(a) {
                    for (var c = a << 12; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G18); )
                        c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
                    return a << 12 | c
                },
                getBCHDigit: function(a) {
                    for (var c = 0; 0 != a; )
                        c++,
                            a >>>= 1;
                    return c
                },
                getPatternPosition: function(a) {
                    return j.PATTERN_POSITION_TABLE[a - 1]
                },
                getMask: function(a, c, d) {
                    switch (a) {
                        case 0:
                            return 0 == (c + d) % 2;
                        case 1:
                            return 0 == c % 2;
                        case 2:
                            return 0 == d % 3;
                        case 3:
                            return 0 == (c + d) % 3;
                        case 4:
                            return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
                        case 5:
                            return 0 == c * d % 2 + c * d % 3;
                        case 6:
                            return 0 == (c * d % 2 + c * d % 3) % 2;
                        case 7:
                            return 0 == (c * d % 3 + (c + d) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + a);
                    }
                },
                getErrorCorrectPolynomial: function(a) {
                    for (var c = new q([1],0), d = 0; d < a; d++)
                        c = c.multiply(new q([1, l.gexp(d)],0));
                    return c
                },
                getLengthInBits: function(a, c) {
                    if (1 <= c && 10 > c)
                        switch (a) {
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case s:
                                return 8;
                            case 8:
                                return 8;
                            default:
                                throw Error("mode:" + a);
                        }
                    else if (27 > c)
                        switch (a) {
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case s:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw Error("mode:" + a);
                        }
                    else if (41 > c)
                        switch (a) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case s:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + a);
                        }
                    else
                        throw Error("type:" + c);
                },
                getLostPoint: function(a) {
                    for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++)
                        for (var e = 0; e < c; e++) {
                            for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++)
                                if (!(0 > b + g || c <= b + g))
                                    for (var h = -1; 1 >= h; h++)
                                        0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
                            5 < f && (d += 3 + f - 5)
                        }
                    for (b = 0; b < c - 1; b++)
                        for (e = 0; e < c - 1; e++)
                            if (f = 0,
                            a.isDark(b, e) && f++,
                            a.isDark(b + 1, e) && f++,
                            a.isDark(b, e + 1) && f++,
                            a.isDark(b + 1, e + 1) && f++,
                            0 == f || 4 == f)
                                d += 3;
                    for (b = 0; b < c; b++)
                        for (e = 0; e < c - 6; e++)
                            a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e + 2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
                    for (e = 0; e < c; e++)
                        for (b = 0; b < c - 6; b++)
                            a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
                    for (e = f = 0; e < c; e++)
                        for (b = 0; b < c; b++)
                            a.isDark(b, e) && f++;
                    a = Math.abs(100 * f / c / c - 50) / 5;
                    return d + 10 * a
                }
            }, l = {
                glog: function(a) {
                    if (1 > a)
                        throw Error("glog(" + a + ")");
                    return l.LOG_TABLE[a]
                },
                gexp: function(a) {
                    for (; 0 > a; )
                        a += 255;
                    for (; 256 <= a; )
                        a -= 255;
                    return l.EXP_TABLE[a]
                },
                EXP_TABLE: Array(256),
                LOG_TABLE: Array(256)
            }, m = 0; 8 > m; m++)
                l.EXP_TABLE[m] = 1 << m;
            for (m = 8; 256 > m; m++)
                l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
            for (m = 0; 255 > m; m++)
                l.LOG_TABLE[l.EXP_TABLE[m]] = m;
            q.prototype = {
                get: function(a) {
                    return this.num[a]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(a) {
                    for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                        for (var b = 0; b < a.getLength(); b++)
                            c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
                    return new q(c,0)
                },
                mod: function(a) {
                    if (0 > this.getLength() - a.getLength())
                        return this;
                    for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++)
                        d[b] = this.get(b);
                    for (b = 0; b < a.getLength(); b++)
                        d[b] ^= l.gexp(l.glog(a.get(b)) + c);
                    return (new q(d,0)).mod(a)
                }
            };
            p.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
            p.getRSBlocks = function(a, c) {
                var d = p.getRsBlockTable(a, c);
                if (void 0 == d)
                    throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
                for (var b = d.length / 3, e = [], f = 0; f < b; f++)
                    for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++)
                        e.push(new p(g,j));
                return e
            }
            ;
            p.getRsBlockTable = function(a, c) {
                switch (c) {
                    case 1:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                    case 0:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                    case 3:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 2];
                    case 2:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
                }
            }
            ;
            t.prototype = {
                get: function(a) {
                    return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
                },
                put: function(a, c) {
                    for (var d = 0; d < c; d++)
                        this.putBit(1 == (a >>> c - d - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(a) {
                    var c = Math.floor(this.length / 8);
                    this.buffer.length <= c && this.buffer.push(0);
                    a && (this.buffer[c] |= 128 >>> this.length % 8);
                    this.length++
                }
            };
            "string" === typeof h && (h = {
                text: h
            });
            h = r.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, h);
            return this.each(function() {
                var a;
                if ("canvas" == h.render) {
                    a = new o(h.typeNumber,h.correctLevel);
                    a.addData(h.text);
                    a.make();
                    var c = document.createElement("canvas");
                    c.width = h.width;
                    c.height = h.height;
                    for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++)
                        for (var i = 0; i < a.getModuleCount(); i++) {
                            d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
                            var g = Math.ceil((i + 1) * b) - Math.floor(i * b)
                                , j = Math.ceil((f + 1) * b) - Math.floor(f * b);
                            d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
                        }
                } else {
                    a = new o(h.typeNumber,h.correctLevel);
                    a.addData(h.text);
                    a.make();
                    c = r("<table></table>").css("width", h.width + "px").css("height", h.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", h.background);
                    d = h.width / a.getModuleCount();
                    b = h.height / a.getModuleCount();
                    for (e = 0; e < a.getModuleCount(); e++) {
                        f = r("<tr></tr>").css("height", b + "px").appendTo(c);
                        for (i = 0; i < a.getModuleCount(); i++)
                            r("<td></td>").css("width", d + "px").css("background-color", a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
                    }
                }
                a = c;
                jQuery(a).appendTo(this)
            })
        }
    }
)(jQuery);
