<?php

if (!function_exists('ds_player_pass')) {
    /**
     * 生成网盘资源密码复制
     * @param string text
     * @return string
     */
    function ds_player_pass($text): string
    {
        $html = "";
        preg_match('#密码:(.*)#', $text, $key);
        if (!empty($key[1])) {
            $html = '<a href="javascript:" data-clipboard-text="' . $key[1] . '" class="CopyUel btn ol7">复制密码</a>';
        }
        return $html;
    }
}

if (!function_exists('ds_jx')) {
    /**
     * 生成接口地址
     * @param string text
     * @return string
     */
    function ds_jx($text): string
    {
        $apiData = explode("#", $text);
        $html = '';
        foreach ($apiData as $k => $v) {
            $api = explode("$", $v);
            $html = '<option value="' . $api['1'] . '" selected="">' . $api['0'] . '</option>' . $html;
        }
        return $html;
    }
}

if (!function_exists('app_url')) {
    /**
     * app下载地址
     * @param string text
     * @return string
     */
    function app_url($text): string
    {
        $apiData = explode("#", $text);
        $html = '';
        foreach ($apiData as $k => $v) {
            $api = explode("$", $v);
            $html = $html . '<a href="' . $api['1'] . '" target="_blank" class="button">' . $api['0'] . '</a>';
        }
        return $html;
    }
}

if (!function_exists('ds_pages')) {
    /**
     * 分页
     * @param string text
     * @param array info
     * @param array page
     * @return string
     */
    function ds_pages($url, $page, $info = []): string
    {

        $info['page'] = $page;
        return mac_url($url, $info);

    }
}

if (!function_exists('ds_tag')) {
    /**
     * 文章tag
     * @param string text
     * @param array info
     * @param array page
     * @return string
     */
    function ds_tag($text): string
    {
        $html = '';
        if (!empty($text)) {
            $tag = explode(',', $text);
            foreach ($tag as $k => $v) {
                $html = $html . '<a href="' . mac_url('art/search', ['wd' => $v]) . '" class="p-type p-b-h bj swiper-slide cor8"># ' . $v . '</a>';
            }
        }
        return $html;
    }
}

if (!function_exists('ds_vod_tag')) {
    /**
     * 视频标签
     * @param array data
     * @return string
     */
    function ds_vod_tag($data): string
    {
        $html = '';
        if (!empty($data['vod_tag'])) {
            $tag = explode(',', $data['vod_tag']);
            $html = $tag[0];
        } else {
            $tag = explode(',', $data['vod_class']);
            $html = $tag[0];
        }
        return $html;
    }
}

if (!function_exists('ds_user_portrait')) {
    /**
     * 头像处理
     * @param string "用户id"
     * @param string "用户昵称"
     * @param string "用户账号"
     * @param string "默认头像"
     * @param string "远程网址"
     * @return string
     */
    function ds_user_portrait($user_id, $nick, $name, $img, $url): string
    {
        $res = img_url($img);
        if (!empty($user_id)) {
            $res2 = 'upload/user/' . ($user_id % 10) . '/' . $user_id . '.jpg';
            if (file_exists(ROOT_PATH . $res2)) {
                if (empty($url)) {
                    $res = MAC_PATH . $res2;
                } else {
                    $res = $url . $res2;
                }
            } else {
                if (empty($nick)) {
                    $res = letter_avatar($name);
                } else {
                    $res = letter_avatar($nick);
                }
            }
        }
        return $res;
    }
}

if (!function_exists('letter_avatar')) {
    /**
     * 首字母头像
     * @param $text
     * @return string
     */
    function letter_avatar($text): string
    {
        $total = unpack('L', hash('adler32', $text, true))[1];
        $hue = $total % 360;
        list($r, $g, $b) = hsv2rgb($hue / 360, 0.3, 0.9);

        $bg = "rgb({$r},{$g},{$b})";
        $color = "#ffffff";
        $first = mb_strtoupper(mb_substr($text, 0, 1));
        $src = base64_encode('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100" width="100"><rect fill="' . $bg . '" x="0" y="0" width="100" height="100"></rect><text x="50" y="50" font-size="50" text-copy="fast" fill="' . $color . '" text-anchor="middle" text-rights="admin" dominant-baseline="central">' . $first . '</text></svg>');
        $value = 'data:image/svg+xml;base64,' . $src;
        return $value;
    }
}

if (!function_exists('hsv2rgb')) {
    function hsv2rgb($h, $s, $v)
    {
        $r = $g = $b = 0;

        $i = floor($h * 6);
        $f = $h * 6 - $i;
        $p = $v * (1 - $s);
        $q = $v * (1 - $f * $s);
        $t = $v * (1 - (1 - $f) * $s);

        switch ($i % 6) {
            case 0:
                $r = $v;
                $g = $t;
                $b = $p;
                break;
            case 1:
                $r = $q;
                $g = $v;
                $b = $p;
                break;
            case 2:
                $r = $p;
                $g = $v;
                $b = $t;
                break;
            case 3:
                $r = $p;
                $g = $q;
                $b = $v;
                break;
            case 4:
                $r = $t;
                $g = $p;
                $b = $v;
                break;
            case 5:
                $r = $v;
                $g = $p;
                $b = $q;
                break;
        }

        return [
            floor($r * 255),
            floor($g * 255),
            floor($b * 255)
        ];
    }
}

if (!function_exists('img_url')) {
    /**
     * 图片处理
     * @param string "图片地址"
     * @return string
     */
    function img_url($img)
    {
        $res = $img;
        if (substr($img, 0, 4) != 'http' && substr($img, 0, 2) != '//' && substr($img, 0, 1) != '/') {
            $res = MAC_PATH . $img;
        }
        return $res;
    }
}

if (!function_exists('if_collect')) {
    /**
     * 检测是否已经收藏
     * @param int $uid 用户id
     * @param int $mid 模块:1=视频,2=文章,3=专题,4=评论,5=留言,6=用户,7=自定义页面,8=演员,9=角色,10=分集剧情,11=网站
     * @param array $where "查询条件"
     * @return bool|int
     */
    function if_collect($uid, $mid, $rid)
    {
        if (empty($uid) or empty($mid) or empty($rid)) {
            return false;
        }
        $where['user_id'] = $uid;
        $where['ulog_mid'] = $mid;
        $where['ulog_type'] = 2;
        $where['ulog_rid'] = $rid;
        $data = model('Ulog')->where($where)->select();
        if (!empty($data)) {
            return $data[0]['ulog_id'] ?: false;
        }
        return false;
    }
}