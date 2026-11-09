# 测策 · 官网

「测策」的官方网站（静态站），提供软件简介、安卓 / iOS 下载引导、完整使用教程与授权信息。

纯静态 HTML / CSS / JS，零依赖、零构建，可部署到 GitHub Pages 或任意静态托管。

## 目录结构

```
website/
├── index.html            # 首页：吸引 + 功能展示
├── download.html         # 下载页：APK 下载 / PWA 引导
├── guide.html            # 教程页：功能用法 + 计算逻辑
├── about.html            # 关于页：授权 + 政策 + 联系
├── assets/
│   ├── css/style.css     # 全局样式（继承主程序 Design Token）
│   ├── js/main.js        # 导航、移动端菜单、下载页 Tab
│   └── img/              # 截图、二维码等图片素材
└── icons/                # 图标（icon.svg + PWA PNG 图标）
```

## 上线前必做

### 1. 占位符（已完成）

全站 4 处链接占位符已替换为 GitHub 用户名 `CeceSurvey`：

- 下载页「下载 APK」→ `github.com/CeceSurvey/cece/releases/latest/download/cece-v3.0.2.apk`
- 下载页「前往 Releases」→ `github.com/CeceSurvey/cece/releases/latest`
- 下载页二维码文字 → `CeceSurvey.github.io/cece/`
- 关于页「查看源码」→ `github.com/CeceSurvey/cece`

若日后改名，用编辑器全局替换 `CeceSurvey` 即可。

### 2. 上传 APK 到 GitHub Releases

下载页的「下载 APK」按钮指向 `releases/latest/download/cece-v3.0.2.apk`，因此需要：

1. 在主程序仓库的 Releases 中新建一个 Release（tag 如 `v3.0.2`）。
2. 上传 APK，**资产文件名务必用英文** `cece-v3.0.2.apk`（否则需同步修改按钮链接）。
3. 若不想直接下载，访客也可通过「前往 Releases 页面」按钮手动下载。

### 3. iOS 引导二维码（已完成）

`download.html` 中 iOS 面板的二维码已生成，图片位于 `assets/img/qr.png`，指向 PWA 网址
`https://CeceSurvey.github.io/cece/`。如需更换指向，重新生成该图片即可。

## 部署（GitHub Pages）

1. 将本目录（`website/`）推送到一个**独立官网仓库**（建议英文名，如 `cece-site`）。
2. 仓库 **Settings → Pages** → Source 选 `main` 分支、根目录 `/ (root)` → Save。
3. 稍等 1–2 分钟，访问 `https://你的用户名.github.io/cece-site/`。

> 也可把本目录内容整体推到官网仓库根目录，Pages 直接托管根目录即可。

## 设计规范

官网视觉继承主程序的 Design Token，保证与软件品牌一致：

- 品牌深青 `#0f5f6b`（单色系，强调色同用深青），浅青底 `#eef2f3`
- 圆角 `14px`，系统字体栈，移动优先响应式
- 无障碍：语义化标签、焦点可见、对比度达标、`prefers-reduced-motion` 支持

详细设计见主程序仓库 `docs/官网设计文档.md`。
