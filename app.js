const DAY = 86400000;
const cityLabels={chiangmai:'清迈',sukhothai:'素可泰',chiangrai:'清莱',bangkok:'曼谷',ayutthaya:'大城'};
const typeColors={core:'#176052',optional:'#d8872c',food:'#b84835',drink:'#76513b',indoor:'#386b8a',transport:'#645a87'};
const places=[
  {id:'wat-phra-singh',city:'chiangmai',name:'Wat Phra Singh 帕辛寺',lat:18.788586,lng:98.98201,type:'core',desc:'LP 重点选择。清迈最受尊崇的寺庙之一，兰纳木构与金色装饰的代表。'},
  {id:'wat-chedi-luang',city:'chiangmai',name:'Wat Chedi Luang 契迪龙寺',lat:18.786988,lng:98.98652,type:'core',desc:'LP 重点选择。15 世纪巨型佛塔遗迹，傍晚气氛最好。'},
  {id:'wat-phan-tao',city:'chiangmai',name:'Wat Phan Tao 潘道寺',lat:18.787662,lng:98.987814,type:'core',desc:'深色柚木大殿紧邻契迪龙寺，是老城步行线自然的一站。'},
  {id:'lanna-museum',city:'chiangmai',name:'Lanna Folklife Museum',lat:18.790191,lng:98.988039,type:'indoor',desc:'理解兰纳建筑、宗教与日常生活的室内备选；下雨时优先。'},
  {id:'warorot',city:'chiangmai',name:'Talat Warorot 瓦洛洛市场',lat:18.790557,lng:99.000582,type:'core',desc:'LP 重点选择。香肠、猪皮、辣椒酱、干货和本地生活混合的老市场。'},
  {id:'monks-trail',city:'chiangmai',name:"Monk's Trail 起点",lat:18.79608,lng:98.95131,type:'optional',desc:'到 Wat Pha Lat 约 45–60 分钟；雨后石面和土路湿滑时取消。'},
  {id:'wat-pha-lat',city:'chiangmai',name:'Wat Pha Lat 帕拉寺',lat:18.79865,lng:98.93415,type:'core',desc:'LP 评为隐藏寺庙亮点。山林、石阶、小瀑布构成安静的半山空间。'},
  {id:'doi-suthep',city:'chiangmai',name:'Wat Phra That Doi Suthep 双龙寺',lat:18.80485,lng:98.92157,type:'core',desc:'清迈最重要的山寺与城市观景点；低云时观景价值下降，但寺庙本身仍值得。'},
  {id:'wat-umong',city:'chiangmai',name:'Wat Umong 悟孟寺',lat:18.78302,lng:98.95233,type:'optional',desc:'林中隧道寺庙，适合与 Wat Pha Lat/Baan Kang Wat 组合。'},
  {id:'baan-kang-wat',city:'chiangmai',name:'Baan Kang Wat 艺术村',lat:18.78578,lng:98.95249,type:'optional',desc:'小型工作室、陶艺、咖啡与树荫庭院；中雨时比山路更稳。'},
  {id:'ang-kaew',city:'chiangmai',name:'Ang Kaew Reservoir 安娇湖',lat:18.80507,lng:98.95218,type:'core',desc:'清迈大学山脚下的湖与环湖步道。这里适合傍晚散步，不需要把大学当成十分钟拍照点；如遇校方分流，按 Visit CMU 或现场接驳要求进入。'},
  {id:'cmu-art-center',city:'chiangmai',name:'CMU Art Center 清迈大学艺术中心',lat:18.79522,lng:98.96842,type:'indoor',desc:'清迈大学文化艺术中心一带的展览空间，可和宁曼、安娇湖组成雨天也能走的半日。具体展览与开放时间临近复查。'},
  {id:'ristr8to',city:'chiangmai',name:'Ristr8to Original',lat:18.79936,lng:98.96815,type:'drink',desc:'宁曼代表性的专业咖啡店，适合真正想喝咖啡时去；名气大也意味着排队，没必要为了它在门口耗掉一小时。'},
  {id:'one-nimman',city:'chiangmai',name:'One Nimman & Nimman Soi',lat:18.80078,lng:98.96839,type:'optional',desc:'不是必须打卡的商场，而是把咖啡、晚饭和下雨后的随意散步集中在一个片区。'},
  {id:'doi-inthanon',city:'chiangmai',name:'Doi Inthanon 茵他侬山',lat:18.5887,lng:98.48606,type:'optional',desc:'泰国最高峰。雨季瀑布与苔藓最好，但 Kew Mae Pan 通常关闭，能见度不保证。'},
  {id:'wachirathan',city:'chiangmai',name:'Wachirathan Waterfall',lat:18.5414,lng:98.5995,type:'optional',desc:'雨季水量大、飞沫强；防滑鞋和防水袋比雨伞更实用。'},
  {id:'sp-chicken',city:'chiangmai',name:'SP Chicken',lat:18.78756,lng:98.981516,type:'food',desc:'LP 重点餐厅，帕辛寺附近的烤鸡与 Isan 配菜。'},
  {id:'khao-soi-lamduan',city:'chiangmai',name:'Khao Soi Lam Duan',lat:18.801567,lng:99.005442,type:'food',desc:'LP 重点选择，Warorot 以北的传统咖喱面。'},
  {id:'north-gate-jazz',city:'chiangmai',name:'North Gate Jazz Co-Op',lat:18.795154,lng:98.986922,type:'core',desc:'LP 重点夜生活；早到更容易有位置。'},
  {id:'white-temple',city:'chiangrai',name:'Wat Rong Khun 白庙',lat:19.82419,lng:99.76313,type:'core',desc:'当代艺术家 Chalermchai Kositpipat 持续建造的白色寺庙艺术工程。'},
  {id:'blue-temple',city:'chiangrai',name:'Wat Rong Suea Ten 蓝庙',lat:19.92346,lng:99.84172,type:'core',desc:'蓝金色室内外视觉强烈，适合清迈抵达清莱后的傍晚。'},
  {id:'baan-dam',city:'chiangrai',name:'Baan Dam 黑屋博物馆',lat:19.99225,lng:99.86053,type:'optional',desc:'Thawan Duchanee 的黑色建筑与艺术集合，和白庙构成鲜明对照。'},
  {id:'clock-tower',city:'chiangrai',name:'Chiang Rai Clock Tower',lat:19.90701,lng:99.83067,type:'optional',desc:'市中心晚间落点，周围便于吃饭与住宿。'},
  {id:'cei',city:'chiangrai',name:'Chiang Rai Airport CEI',lat:19.95234,lng:99.88293,type:'transport',desc:'清莱备选路线从这里直飞曼谷，避免返回清迈。'},
  {id:'sukhothai-mahathat',city:'sukhothai',name:'Wat Mahathat 素可泰玛哈泰寺',lat:17.01694,lng:99.70314,type:'core',desc:'素可泰历史公园的中心。莲花苞式主塔、佛像和水面在傍晚形成这趟路线里最安静的一段。'},
  {id:'wat-sa-si',city:'sukhothai',name:'Wat Sa Si 沙西寺',lat:17.01972,lng:99.69936,type:'core',desc:'建在池中小岛上的佛塔与行走佛，适合日落前骑车停留，而不是正午匆匆拍照。'},
  {id:'wat-si-chum',city:'sukhothai',name:'Wat Si Chum 西春寺',lat:17.02677,lng:99.69362,type:'core',desc:'狭窄佛殿中坐着巨大的 Phra Achana 佛像，尺度与空间感和清迈、曼谷寺庙都不同。'},
  {id:'sukhothai-cafe',city:'sukhothai',name:'Cafe Thammada',lat:17.01779,lng:99.70491,type:'drink',desc:'历史公园入口附近的小型艺术咖啡馆。近期中文游记反复提到它适合作为骑行后的冷气与冰饮停靠点；当天营业状态仍需复查。'},
  {id:'ths',city:'sukhothai',name:'Sukhothai Airport THS',lat:17.23804,lng:99.81818,type:'transport',desc:'素可泰开口路线的关键。当前时刻表显示 PG214 约 17:50 飞往 BKK，给上午骑行留下空间；出票前必须重新确认。'},
  {id:'grand-palace',city:'bangkok',name:'Grand Palace & Wat Phra Kaew',lat:13.75002,lng:100.49129,type:'core',desc:'曼谷王城主轴。官方 2026 信息：08:30–16:30，售票至 15:30，外国游客 500 THB。'},
  {id:'wat-pho',city:'bangkok',name:'Wat Pho 卧佛寺',lat:13.746553,lng:100.49334,type:'core',desc:'LP 评为曼谷最值得的核心寺庙之一；卧佛、佛塔与传统医药/按摩历史并重。'},
  {id:'wat-arun',city:'bangkok',name:'Wat Arun 郑王庙',lat:13.743766,lng:100.488938,type:'core',desc:'从 Tha Tien 过河最顺；瓷片镶嵌的高塔是曼谷天际线地标。'},
  {id:'flower-market',city:'bangkok',name:'Pak Khlong Talat 花市',lat:13.74198,lng:100.49955,type:'optional',desc:'王城线的傍晚补充，不必为了夜里最繁忙的时段熬夜。'},
  {id:'talat-noi',city:'bangkok',name:'Talat Noi',lat:13.733747,lng:100.513047,type:'core',desc:'LP 重点选择。修车铺、老宅、宗祠、街头艺术与河岸叠在一起的步行片区。'},
  {id:'yaowarat',city:'bangkok',name:'Yaowarat Road 唐人街',lat:13.73944,lng:100.51153,type:'core',desc:'夜间小吃主轴；与 Talat Noi 从下午步行到晚上最自然。'},
  {id:'wat-traimit',city:'bangkok',name:'Wat Traimit 金佛寺',lat:13.738133,lng:100.513728,type:'optional',desc:'靠近唐人街入口，可在下午闭馆前作为文化起点。'},
  {id:'jim-thompson',city:'bangkok',name:'Jim Thompson House',lat:13.749246,lng:100.528373,type:'indoor',desc:'LP 重点选择。泰式木屋、丝绸产业与收藏史；雨天友好但仍有庭院步行。'},
  {id:'bacc',city:'bangkok',name:'Bangkok Art & Culture Centre',lat:13.746604,lng:100.530069,type:'indoor',desc:'官方开放 Tue–Sun 10:00–20:00，周一闭馆；与 Jim Thompson/Siam 组合。'},
  {id:'lumphini',city:'bangkok',name:'Lumphini Park',lat:13.731298,lng:100.541704,type:'optional',desc:'清晨或傍晚散步，雨后草地泥泞时改走硬质步道。'},
  {id:'benjakitti',city:'bangkok',name:'Benjakitti Forest Park',lat:13.72695,lng:100.55948,type:'optional',desc:'湿地式城市公园与高架步道，适合现代曼谷半日的日落。'},
  {id:'mahanakhon',city:'bangkok',name:'King Power Mahanakhon',lat:13.723033,lng:100.528282,type:'optional',desc:'LP 重点观景台。低云/雷雨时不要提前锁定不可退票时段。'},
  {id:'chatuchak',city:'bangkok',name:'Chatuchak Weekend Market',lat:13.799923,lng:100.550824,type:'optional',desc:'仅周末最完整；10 月 3–4 日可用上午半天，避开下午闷热。'},
  {id:'or-tor-kor',city:'bangkok',name:'Or Tor Kor Market',lat:13.80187,lng:100.54812,type:'food',desc:'Chatuchak 旁更适合稳定吃午餐与买水果的市场。'},
  {id:'krua-apsorn',city:'bangkok',name:'Krua Apsorn (Dusit)',lat:13.774202,lng:100.506363,type:'food',desc:'LP + Michelin Bib Gourmand 2026；中央/南部泰菜。'},
  {id:'jok-prince',city:'bangkok',name:'Jok Prince',lat:13.72072,lng:100.51456,type:'food',desc:'Charoen Krung 老牌泰式粥，Talat Noi 线顺路。'},
  {id:'ayutthaya-mahathat',city:'ayutthaya',name:'Wat Mahathat',lat:14.35692,lng:100.56848,type:'optional',desc:'树根佛头与高棉式塔群，是阿瑜陀耶最直观的遗址入口。'},
  {id:'ayutthaya-sanphet',city:'ayutthaya',name:'Wat Phra Si Sanphet',lat:14.35501,lng:100.55831,type:'optional',desc:'旧王宫范围内三座并列佛塔，理解王城尺度的核心。'},
  {id:'ayutthaya-chai',city:'ayutthaya',name:'Wat Chaiwatthanaram',lat:14.34294,lng:100.54152,type:'optional',desc:'位于河西岸，傍晚光线好；通常需要嘟嘟车或包车衔接。'}
];

const p=id=>places.find(x=>x.id===id);
const localDate=s=>new Date(`${s}T12:00:00`);
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const zhDate=d=>`${d.getMonth()+1}月${d.getDate()}日`;
const week=d=>['周日','周一','周二','周三','周四','周五','周六'][d.getDay()];
const add=(d,n)=>new Date(d.getTime()+n*DAY);

const dayDefs={
  arrival:{title:'晚上抵达清迈 · 今晚只管安顿好',tag:'核心',summary:'到酒店、吃一顿不费脑子的晚饭，然后早点睡。第一晚不拿航班准点去赌任何预订。',slots:['晚间｜机场→酒店→附近吃饭','住哪里｜老城东侧或宁曼，整段清迈不换酒店','如果早到｜散步可以，远郊留给明天'],ids:[]},
  cmOld:{title:'清迈老城 · 先把兰纳的线索串起来',tag:'核心',summary:'Lonely Planet 的老城寺庙线很适合第一次来，但我们把密度降下来：上午看建筑，下午去市场，晚上听爵士。',slots:['上午｜帕辛寺→潘道寺→契迪龙寺','下午｜午休后看博物馆或去 Warorot','晚上｜North Gate Jazz 或清迈门夜市'],ids:['wat-phra-singh','wat-phan-tao','wat-chedi-luang','lanna-museum','warorot','north-gate-jazz']},
  cmWestSlow:{title:'清迈西线 · 山寺之后回到大学与咖啡',tag:'核心',summary:'短版也要留一点清迈的生活感。上午看山寺，下午去宁曼认真喝杯咖啡，17:00 左右到安娇湖散步。',slots:['上午｜包红车去 Wat Pha Lat→双龙寺','下午｜Ristr8to；排队太久就换附近独立店','傍晚｜安娇湖→宁曼随意吃晚饭'],ids:['wat-pha-lat','doi-suthep','ristr8to','ang-kaew','one-nimman']},
  cmWest:{title:'清迈西线 · 山林、寺庙与手作社区',tag:'核心',summary:'晴或小雨才走 Monk’s Trail；雨后改坐红车。下午不要再冲景点，在悟孟寺或 Baan Kang Wat 二选一。',slots:["上午｜Monk's Trail→Wat Pha Lat",'中午｜红车继续到双龙寺','下午｜Wat Umong / Baan Kang Wat 二选一'],ids:['monks-trail','wat-pha-lat','doi-suthep','wat-umong','baan-kang-wat']},
  cmSlow:{title:'清迈慢日 · 咖啡、校园与安娇湖',tag:'核心',summary:'这天不是行程的空白，而是两个人真的在清迈生活半天：晚起、喝咖啡、看小展，等湖边的光变软。',slots:['上午｜睡够再去宁曼喝咖啡','下午｜Baan Kang Wat / CMU Art Center','17:00｜安娇湖散步→宁曼晚饭'],ids:['ristr8to','baan-kang-wat','cmu-art-center','ang-kaew','one-nimman']},
  cmFlex:{title:'清迈机动日 · 天气好才进山',tag:'可换',summary:'若特别想看雨季山林，可把慢日换成茵他侬；连续降雨就留在城里上烹饪课、看展、按摩。',slots:['晴/小雨｜茵他侬峰顶→Ang Ka→瀑布','中雨｜小班烹饪课+SPA','暴雨｜取消山区，回到老城和宁曼'],ids:['doi-inthanon','wachirathan','lanna-museum']},
  cmToBkk:{title:'飞曼谷 · 傍晚从唐人街开始',tag:'核心',summary:'选 10:00–13:00 左右起飞最舒服。入住后别急着看王城，17:00 起从 Talat Noi 一路吃到 Yaowarat。',slots:['上午｜CNX 起飞，提前确认 BKK/DMK','下午｜入住 MRT/BTS 沿线','傍晚｜Talat Noi→Yaowarat 分站吃'],ids:['talat-noi','yaowarat','jok-prince']},
  cmToSukhothai:{title:'清迈→素可泰 · 用半天换一场古都落日',tag:'核心',summary:'直达巴士约 5.5 小时，包车约 4.5 小时。住历史公园附近，放下行李后只骑中央区，不赶外围。',slots:['上午｜08:45 左右直达巴士 / 预约包车','下午｜入住 Mueang Kao，租自行车','16:30｜玛哈泰寺→沙西寺看日落'],ids:['sukhothai-mahathat','wat-sa-si']},
  sukhothaiToBkk:{title:'素可泰晨骑 · 傍晚飞曼谷',tag:'核心',summary:'早起看中央区与西春寺，午后喝咖啡、休息。当前 PG214 约 17:50–19:10 飞 BKK，出票前再核对。',slots:['06:30/07:30｜中央区→西春寺','中午｜素可泰米粉→咖啡→回酒店取行李','15:30｜前往 THS；傍晚飞 BKK'],ids:['sukhothai-mahathat','wat-si-chum','sukhothai-cafe','ths']},
  crTransfer:{title:'清迈→清莱 · 住一晚而非当天往返',tag:'核心',summary:'上午巴士约 3–3.5 小时，下午入住；包车去蓝庙，晚上回钟楼周边吃饭。',slots:['上午｜Arcade Bus Terminal→Chiang Rai','下午｜入住→蓝庙','晚上｜钟楼与夜市'],ids:['blue-temple','clock-tower']},
  crToBkk:{title:'清莱建筑三联 · 晚飞曼谷',tag:'核心',summary:'白庙在城南、黑屋在城北，必须用包车组织；蓝庙若前一天看过可不重复。',slots:['08:00｜白庙，避开旅行团高峰','11:30｜午餐→黑屋博物馆','傍晚｜CEI→BKK/DMK'],ids:['white-temple','baan-dam','cei']},
  bkkRoyal:{title:'曼谷王城 · 把最经典的一天走顺',tag:'核心',summary:'08:30 前到大皇宫，趁热气和团客还没完全上来。午后过河去郑王庙，累了就把花市删掉。',slots:['08:30｜大皇宫 / 玉佛寺','11:30｜卧佛寺→午餐和休息','15:00｜过河到郑王庙；有余力再去花市'],ids:['grand-palace','wat-pho','wat-arun','flower-market']},
  bkkOld:{title:'Talat Noi、河岸与唐人街',tag:'核心',summary:'下午才出门，在老仓库、修车巷和河岸之间慢慢走到 Yaowarat。两个人分着吃，比一口气排十家店有趣。',slots:['下午｜Wat Traimit→Talat Noi','傍晚｜河岸/老街随走随停','晚上｜Yaowarat 每站只点一两样'],ids:['wat-traimit','talat-noi','yaowarat']},
  bkkArts:{title:'现代曼谷 · Jim Thompson、BACC 与公园',tag:'可换',summary:'这是最完整的雨天替代线；注意 BACC 周一闭馆。天晴可在傍晚加 Lumphini/Benjakitti。',slots:['上午｜Jim Thompson House','下午｜BACC→Siam 商圈','傍晚｜Benjakitti 或 Mahanakhon'],ids:['jim-thompson','bacc','benjakitti','mahanakhon']},
  bkkWeekend:{title:'周末市场半日 + 现代曼谷',tag:'可换',summary:'10 月 3–4 日才成立。09:00 到 Chatuchak，Or Tor Kor 午餐，14:00 前离开；下午回 Siam/BACC。',slots:['09:00｜Chatuchak 先逛目标区','12:00｜Or Tor Kor 午餐','下午｜BACC/Siam；不再塞王城'],ids:['chatuchak','or-tor-kor','bacc']},
  departure:{title:'离开曼谷 · 保持低风险',tag:'核心',summary:'未给出航班时间，默认不安排跨河或远郊。晚班机才增加酒店附近咖啡/公园。',slots:['BKK｜轨道交通高峰另加 20–30 分钟','DMK｜Red Line 或出租车','国际航班｜建议提前约 3 小时到机场'],ids:[]}
};

function bangkokDays(dates,{allowWeekend=false,needsOld=true}={}){
  const out=[];let weekendUsed=false,oldUsed=!needsOld,royalUsed=false,artsUsed=false;
  dates.forEach((d,i)=>{
    const isWeekend=[0,6].includes(d.getDay());
    if(allowWeekend&&isWeekend&&!weekendUsed){out.push('bkkWeekend');weekendUsed=true;return}
    if(!royalUsed){out.push('bkkRoyal');royalUsed=true;return}
    if(!oldUsed){out.push('bkkOld');oldUsed=true;return}
    if(d.getDay()!==1&&!artsUsed){out.push('bkkArts');artsUsed=true;return}
    out.push('bkkOld');
  });
  if(out.some((x,i)=>x==='bkkArts'&&dates[i].getDay()===1)){
    const j=out.findIndex((x,i)=>dates[i].getDay()!==1&&x!=='bkkArts');
    const i=out.indexOf('bkkArts'); if(j>=0){[out[i],out[j]]=[out[j],out[i]]}
  }
  return out;
}

function buildKeys(nights,arrival){
  if(nights<=5)return ['arrival','cmOld','cmWestSlow','cmToBkk','bkkRoyal','departure'];
  if(nights===6){const bdates=[add(arrival,4),add(arrival,5)];return ['arrival','cmOld','cmWestSlow','cmToBkk',...bangkokDays(bdates,{allowWeekend:true,needsOld:false}),'departure']}
  if(nights===7){const bdates=[add(arrival,5),add(arrival,6)];return ['arrival','cmOld','cmWest','cmSlow','cmToBkk',...bangkokDays(bdates,{allowWeekend:true,needsOld:false}),'departure']}
  const bdates=[add(arrival,6),add(arrival,7)];
  return ['arrival','cmOld','cmWest','cmSlow','cmToSukhothai','sukhothaiToBkk',...bangkokDays(bdates,{allowWeekend:false,needsOld:true}),'departure'];
}

let map,markers=[],activeCity='all';
function mapIcon(place){const c=typeColors[place.type];const glyph={food:'食',drink:'咖',indoor:'雨',transport:'行'}[place.type]||'•';return L.divIcon({className:'',html:`<div style="width:28px;height:28px;border-radius:50%;background:${c};border:2px solid white;box-shadow:0 3px 10px rgba(0,0,0,.24);display:grid;place-items:center;color:white;font-size:12px;font-weight:900">${glyph}</div>`,iconSize:[28,28],iconAnchor:[14,14],popupAnchor:[0,-14]})}
function popup(place){const q=encodeURIComponent(`${place.name} Thailand`);const labels={core:'核心',food:'餐饮',drink:'咖啡',indoor:'雨天',transport:'交通',optional:'可选'};return `<div class="popup"><span class="popup-tag">${cityLabels[place.city]} · ${labels[place.type]}</span><h4>${place.name}</h4><p>${place.desc}</p><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${q}">Google Maps 导航 ↗</a></div>`}
function renderMarkers(city='all'){
  markers.forEach(m=>map.removeLayer(m.marker));markers=[];
  const visible=places.filter(x=>city==='all'||x.city===city);
  visible.forEach(place=>{const marker=L.marker([place.lat,place.lng],{icon:mapIcon(place)}).addTo(map).bindPopup(popup(place));markers.push({id:place.id,city:place.city,marker})});
  if(visible.length)map.fitBounds(visible.map(x=>[x.lat,x.lng]),{padding:[34,34],maxZoom:city==='all'?6:13});
}
function focusPlace(id){const place=p(id);if(!place)return;activeCity=place.city;setActiveChip(activeCity);renderMarkers(activeCity);setTimeout(()=>{const x=markers.find(m=>m.id===id);if(x){map.setView([place.lat,place.lng],14,{animate:true});x.marker.openPopup()}document.querySelector('#map-section').scrollIntoView({behavior:'smooth'})},100)}
function focusCity(city){activeCity=city;setActiveChip(city);renderMarkers(city);document.querySelector('#map-section').scrollIntoView({behavior:'smooth'})}
function setActiveChip(city){document.querySelectorAll('[data-city]').forEach(x=>x.classList.toggle('active',x.dataset.city===city))}

function renderPlan(){
  const a=localDate(document.querySelector('#arrivalSelect').value),d=localDate(document.querySelector('#departureSelect').value);const nights=Math.round((d-a)/DAY);
  if(nights<5||nights>8){document.querySelector('#planSummary').innerHTML='<span class="summary-chip alert">请选择 5–8 晚范围</span>';return}
  let keys=buildKeys(nights,a);
  if(keys.length!==nights+1){keys=keys.slice(0,nights).concat('departure')}
  const planType=nights<=5?'双城压缩版：清迈生活感 + 曼谷王城':nights===6?'双城标准版：清迈两整天 + 曼谷两整天':nights===7?'推荐慢游版：给大学与宁曼一个下午':'古都开口版：素可泰住一晚后飞曼谷';
  const alerts=[];if(nights<=5)alerts.push('不加素可泰 / 清莱 / 大城');if(nights===8)alerts.push('PG214 当前约 17:50 起飞，先确认再订住宿');
  document.querySelector('#planSummary').innerHTML=`<span class="summary-chip">${nights} 晚 · ${planType}</span><span class="summary-chip">${zhDate(a)} → ${zhDate(d)}</span><span class="summary-chip">${nights===8?'清迈 4 晚 · 素可泰 1 晚 · 曼谷 3 晚':'清迈慢游 → 飞曼谷'}</span>${alerts.map(x=>`<span class="summary-chip alert">${x}</span>`).join('')}`;
  document.querySelector('#timeline').innerHTML=keys.map((key,i)=>{const def=dayDefs[key],date=add(a,i);const slots=def.slots.map(s=>{const [label,...rest]=s.split('｜');return `<div class="slot"><b>${label}</b>${rest.join('｜')}</div>`}).join('');const locs=def.ids.map(id=>`<button class="place-link" data-place="${id}">${p(id).name.split(' ')[0]}</button>`).join(' · ');return `<article class="day-card"><div class="day-date"><b>${String(date.getMonth()+1).padStart(2,'0')}.${String(date.getDate()).padStart(2,'0')}</b><span>${week(date)} · D${i}</span></div><div class="day-body"><div class="day-title"><h3>${def.title}</h3><span class="tag ${def.tag==='可换'?'swap':''}">${def.tag}</span></div><p>${def.summary}${locs?`<br><span class="inline-locs">地图：${locs}</span>`:''}</p><div class="slots">${slots}</div></div></article>`}).join('');
  document.querySelectorAll('[data-place]').forEach(btn=>btn.addEventListener('click',()=>focusPlace(btn.dataset.place)));
  localStorage.setItem('thaiTripDates',JSON.stringify({arrival:iso(a),departure:iso(d)}));
  updateForecast(a,d);
}

async function updateForecast(arrival,departure){
  const status=document.querySelector('#forecastStatus'),detail=document.querySelector('#forecastDetail');
  const now=new Date();now.setHours(12,0,0,0);const days=Math.ceil((arrival-now)/DAY);
  if(days>16){const unlock=add(arrival,-16);status.textContent=`预计 ${zhDate(unlock)} 进入窗口`;detail.textContent='届时页面会自动读取清迈、素可泰与曼谷的降雨概率；现在先用“上午户外、下午机动”的结构。';return}
  if(days<-2){status.textContent='行程日期已过';return}
  status.textContent='正在获取逐日预报…';
  try{
    const cities=[['清迈',18.79,98.99],['素可泰',17.01,99.70],['曼谷',13.75,100.52]];
    const rows=await Promise.all(cities.map(async([name,lat,lng])=>{const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=precipitation_probability_max,precipitation_sum,temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok&start_date=${iso(arrival)}&end_date=${iso(departure)}`;const j=await fetch(url).then(r=>{if(!r.ok)throw new Error('forecast');return r.json()});const max=Math.max(...j.daily.precipitation_probability_max.filter(Number.isFinite));const rain=j.daily.precipitation_sum.reduce((x,y)=>x+(y||0),0);return `${name}最高降雨概率 ${max}% / 累计约 ${rain.toFixed(0)}mm`;}));
    status.textContent='逐日预报已可用';detail.textContent=rows.join('；')+'。仍以 TMD 暴雨警报为更高优先级。';
  }catch(e){status.textContent='暂时无法读取预报';detail.textContent='请直接打开 Thai Meteorological Department，并在出发前 72 小时复查。'}
}

function init(){
  const arrivalEl=document.querySelector('#arrivalSelect');
  const departureEl=document.querySelector('#departureSelect');
  const buildButton=document.querySelector('#buildPlan');
  const toolbar=document.querySelector('#mapToolbar');
  let saved=null;try{saved=JSON.parse(localStorage.getItem('thaiTripDates')||'null')}catch(e){localStorage.removeItem('thaiTripDates')}if(saved){if([...arrivalEl.options].some(x=>x.value===saved.arrival))arrivalEl.value=saved.arrival;if([...departureEl.options].some(x=>x.value===saved.departure))departureEl.value=saved.departure}
  map=L.map('map',{zoomControl:false,scrollWheelZoom:false}).setView([16.7,99.5],6);L.control.zoom({position:'topright'}).addTo(map);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);renderMarkers();
  toolbar.addEventListener('click',e=>{const b=e.target.closest('[data-city]');if(!b)return;focusCity(b.dataset.city)});
  document.querySelectorAll('[data-focus-city]').forEach(b=>b.addEventListener('click',()=>focusCity(b.dataset.focusCity)));
  document.querySelectorAll('[data-focus-id]').forEach(b=>b.addEventListener('click',()=>focusPlace(b.dataset.focusId)));
  buildButton.addEventListener('click',renderPlan);arrivalEl.addEventListener('change',renderPlan);departureEl.addEventListener('change',renderPlan);renderPlan();
}
document.addEventListener('DOMContentLoaded',init);
