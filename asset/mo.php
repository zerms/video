<?php
return [
    'config' => [
        'js' => '/template/mmou/asset/js/',
        // 跳转 1=播放页 0=详情页
        'tz' => '0',
        // 开启的模块 vod 视频 art视频 actor明星 link友链 topic专题
//        'module' => 'vod,art,actor,link,topic',
        'module' => 'vod',
    ],
    // 主题配置
    'theme' => [
        // 默认样式
        'style' => "theme2",
        // 徽标
        'logo' => [
            // 白天
            'white' => '/template/mmou/asset/img/logo-1.png',
            // 黑夜
            'black' => '/template/mmou/asset/img/logo-2.png',
        ],
        // 加载图
        'lazy' => 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
        // 公告配置
        'tips' => [
            'status' => "1",
            'title' => "网站公告",
            'content' => '
            <div style="line-height: 30px;">
<p>叮咚✨ 我们的<span style="color:#ff0000;font-size:20px;"><b> 新版本 </b></span>上线啦！🎉</p>
<p>
	<b>然！还有一点点小<span style="font-size:30px;">🐛</span>，</b>但请放心😊 我正在<span style="color:#6A5ACD;font-size:18px;"> 全力修复中💻 </span><b>，感谢大家的耐心和支持，我会尽快为大家带来更加流畅的体验。</b>
</p>
</div>
',
        ],
        // 宽图分类
        'wcover' => [
            'id' => '3,4',
        ],
        // 广告
        'ads' => [
            // 状态
            'status' => "1",
            // 广告提示
            'tips' => "1",
            // 首页轮播下
            "ad1" => '<a style="padding-top:5px" href="#" target="_blank"><img class="slide-pc" src="/template/mmou/asset/img/ad/1760X140.jpg" alt="展示你的位置"><img class="slide-wap" style="display:none" src="/template/mmou/asset/img/ad/c1.png" alt="展示你的位置"><span class="this-adicon"></span></a>',
            // 首页底部
            "ad2" => '',
            // 视频播放右侧顶部
            "ad3" => '',
        ]
    ],
    // APP配置
    'app' => [
        // 状态
        'status' => "0",
        // 宣传语
        'title' => "最佳体验，尽在短视 APP",
    ],
    // 导航配置
    'nav' => [
        // 开启导航，关闭导航则全部不显示
        "status" => "1",
        // 手机端二级导航
        "header_nav" => "0",
        // 更多菜单
        'more' => [
            "status" => "1"
        ],
        // 搜索功能
        'search' => [
            'status' => "1",
            // 提示词
            'tips' => '请输入关键字',
            // 筛选项
            'filter' => 'vod,art,actor',
        ],
        // 底部配置
        'bottom' => [
            // 底部菜单状态
            "status" => "1",
            // 需要底部的页面
            "footer_off" => "1",
            // 语言
            'lang' => '1',
            // 主题
            'theme' => '1',
            // 返回顶部
            'top' => '1',
        ],
        // 首页
        'home' => [
            // 电脑端开启
            'pc' => "1",
            // 手机端开启
            'mobile' => "1",
            // 显示文本
            'title' => "首页",
            // 链接
            'link' => "/",
            // 图标
            'icon1' => "ds-zhuye",
            'icon2' => "ds-zhuye2"
        ],
    ],
    // 首页配置
    'home' => [
        // 轮播模块
        'banner' => [
            // 开启轮播
            "status" => "1",
            // 推荐位置
            'level' => '9',
            // 排序字段
            'by' => 'time',
            // 排序方式
            'order' => 'desc',
            // 数量
            'num' => '5',
        ],
        // 分类列表
        'typelist' => [
            // 开启分类列表
            "status" => "1",
            // 分类前缀
            'title' => '',
            // 指定分类
            'id' => '1,2,3,4',
            // 排序字段
            'by' => 'time',
            // 排序方式
            'order' => 'desc',
            // 数量
            'num' => '24',
        ],
        // 资讯列表
        'artlist' => [
            // 开启资讯列表
            "status" => "0",
            // 模块标题
            'title' => '',
            // 排序字段
            'by' => 'time',
            // 排序方式
            'order' => 'desc',
            // 数量
            'num' => '6',
        ],
        // 演员列表
        'actorlist' => [
            // 开启演员列表
            "status" => "1",
            // 模块标题
            'title' => '',
            // 排序字段
            'by' => 'time',
            // 排序方式
            'order' => 'desc',
            // 数量
            'num' => '12',
        ],
        // 专题列表
        'topiclist' => [
            // 开启专题列表
            "status" => "0",
            // 模块标题
            'title' => '',
            // 排序字段
            'by' => 'time',
            // 排序方式
            'order' => 'desc',
            // 数量
            'num' => '12',
        ],
    ],
    // 页面配置
    'web' => [
        // 扫一扫手机播放
        'web_app_m' => 'https://api.pwmqr.com/qrcode/create/?url=http://127.0.0.1/index.php/label/app.html',
        // 视频配置
        'vod' => [
            'notice' => [
                "status" => "1",
                "text" => '<li class="swiper-slide"><i class="ol1">提示</i>不要轻易相信视频中的广告，谨防上当受骗!</li>
                        <li class="swiper-slide"><i class="ol3">提示</i>如果无法播放请重新刷新页面，或者切换线路。</li>
                        <li class="swiper-slide"><i class="ol7">提示</i>视频载入速度跟网速有关，请耐心等待几秒钟。</li>'
            ],
            'copyright' => [
                "status" => "0",
                "img" => "/template/mmou/asset/img/intl_default.png",
                "title" => '亲爱的⚡用户',
                "text" => '由于版权限制本影片已下架，不在提供播放，感谢您的支持！！！'
            ],
            'comment' => [
                "status" => 1
            ]
        ]
    ]
];