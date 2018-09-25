import weixin from './api/weixin.js';
import preload from './preload.js';
import events from './events.js';
import music from './music.js';

const app = {
    preload,
    music,
    events,
    async share () {
        await weixin.getConfig()
        if (this.music.bg) {
            document.getElementById((this.music.bg)).play()
        }
    },
    // app主入口
    main () {
        // 微信分享
        this.share();

        // 图片预加载入口
        this.preload.main();

        // 音乐处理入口
        this.music.main();

        // 用户交互事件入口
        this.events.main();
    }
};

app.main();
