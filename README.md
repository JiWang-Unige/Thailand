# Thailand 2026 interactive trip map

一页式中文旅行手册，覆盖 2026 年 9 月 28/29 日抵达清迈、10 月 4–6 日从曼谷离开的动态行程。

功能：

- 根据抵达/离开日期生成 5–8 晚路线；
- Leaflet 地图展示清迈、清莱、曼谷与阿瑜陀耶景点；
- 区分核心点、可选模块、餐饮和雨天室内点；
- 出发前 16 天尝试读取 Open-Meteo 逐日预报；
- 提供雨天替代、城市交通、租车判断、美食和观看清单；
- 路线基于用户提供的《Lonely Planet Thailand》，开放时间与交通使用 2026 年在线来源校准。

## Local preview

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## Deployment

站点从 `main` 分支根目录直接发布，不需要构建步骤。

仓库首次发布时，在 **Settings → Pages → Build and deployment** 中选择
**Deploy from a branch**，分支设为 **main**、目录设为 **/(root)**，然后保存。
此后每次推送 `main` 都会自动更新网页。
