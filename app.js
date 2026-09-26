const NODE_TYPES={
  battle:{name:"上课",glyph:"课",detail:"战斗节点"},exam:{name:"月考",glyph:"月",detail:"精英战斗节点"},dorm:{name:"宿舍",glyph:"舍",detail:"休整节点"},
  canteen:{name:"食堂",glyph:"食",detail:"采购节点"},
  event:{name:"超市",glyph:"超",detail:"随机节点"},sport:{name:"操场",glyph:"体",detail:"体育节点"},
  boss:{name:"期末",glyph:"期",detail:"本层 Boss"}
};
const UPGRADES={
  quick:"造成9点伤害。",brainstorm:"造成10点伤害，给予3层思路。",continuous:"造成4点伤害4次。",research:"造成12点伤害。",
  solve:"造成10点伤害。若目标拥有思路，获得5点防御。",catch_gap:"造成9点伤害。若目标已有思路，给予2层思路；否则给予1层。",
  rebuild:"造成7点伤害。可以消耗1张其他手牌，若如此做，额外造成10点伤害。",combo:"造成5点伤害3次。本场每消耗4张牌，额外攻击1次，最多额外攻击2次。",
  showcase:"造成18点伤害。消耗牌堆每有1张牌，额外造成2点伤害，最多24点。",ultimate:"造成30点伤害，给予3层思路。",
  conjecture:"移除目标全部思路。造成15点伤害，每移除1层额外造成7点伤害，最多计算3层。",
  organize:"获得8点防御。",myth:"失去2点生命。下一张攻击牌造成的伤害翻倍。费用变为0。",
  tradeoff:"消耗1张其他手牌，获得8点防御。",backup:"获得11点防御。若因拖延被消耗，获得7点防御。",
  seminar:"给予所有敌人3层思路。",review:"将弃牌堆中1张攻击牌放入手牌，其本回合费用减少1。费用变为0。",
  recycle_draft:"消耗1张其他手牌，抽3张牌。",restart:"消耗任意数量其他手牌，再抽取等量牌，然后额外抽1张牌。费用变为0。",
  overtime:"失去2点生命，获得2点行动力。",emergency:"获得18点防御。选择弃牌堆中最多2张牌消耗。",
  negation:"将消耗牌堆中1张任意牌放入手牌。其本回合费用变为0并获得消耗。",
  defense:"每回合前2次使用攻击牌攻击拥有思路的敌人时，抽1张牌。",inertia:"每回合开始时，给予所有敌人2层思路。",
  waste_value:"每回合首次消耗卡牌时，获得7点防御。",contest_body:"每当卡牌使你失去生命，下一张攻击牌额外造成6点伤害。",
  deadline:"每回合首张因拖延被消耗的牌，使你在下回合获得1点行动力并多抽1张牌。",
  recycle_power:"每当消耗1张牌，对所有敌人造成4点伤害。",thought_loop:"敌人的思路层数减少时，对其造成8点伤害。",
  prototype:"每回合首次消耗攻击牌时，将其0费消耗的升级复制品加入手牌。",
  draft_paper:"抽2张牌。消耗。",standard_steps:"造成10点伤害。若敌人意图包含攻击，获得4点防御。",
  temporary_barrier:"获得10点防御。若手牌中没有其他技能牌，额外获得3点防御。",borrowed_notes:"选择弃牌堆中的1张牌，将其放到抽牌堆顶，然后抽1张牌。费用变为0。",
  break_bell:"本回合打出的下一张牌费用减少2。消耗。",duty_schedule:"每回合首次打出技能牌时，获得4点防御。",
  mock_drill:"抽3张牌，然后选择1张手牌放到抽牌堆顶。",sideline_guidance:"选择手牌中的1张攻击牌。本场战斗中，该牌每段攻击伤害增加2。消耗。",
  universal_method:"从抽牌堆选择1张牌加入手牌。该牌本回合费用变为0。费用变为1。消耗。",
  grade_star:"若本回合打出过攻击牌和技能牌，下一回合获得1点行动力并额外抽1张牌。每回合最多触发1次。费用变为1。"
};
const TYPE_LABEL={attack:"攻击",skill:"技能",power:"天赋",curse:"厄运"};
const DIVISION_LABEL={a:"A部",b:"B部",c:"C部",neutral:"无色"};
const RARITY_LABEL={basic:"基础",common:"普通",uncommon:"罕见",rare:"稀有",curse:"厄运"};
const cardDivision=def=>def.colorless||def.type==="curse"?"neutral":(["a","b","c"].includes(def.division)?def.division:"c");
const CARDS={
  quick:{name:"快速作答",type:"attack",rarity:"basic",cost:1,text:"造成6点伤害。"},
  brainstorm:{name:"头脑风暴",type:"attack",rarity:"basic",cost:1,text:"造成8点伤害，给予2层思路。"},
  continuous:{name:"连课",type:"attack",rarity:"common",cost:1,text:"造成3点伤害4次。"},
  research:{name:"钻研",type:"attack",rarity:"common",cost:1,text:"造成9点伤害。",keyword:"拖延",delay:true},
  solve:{name:"破题",type:"attack",rarity:"common",cost:1,text:"造成7点伤害。若目标拥有思路，获得4点防御。"},
  catch_gap:{name:"抓住漏洞",type:"attack",rarity:"common",cost:1,text:"造成6点伤害。若目标已有思路，给予2层思路；否则给予1层。"},
  rebuild:{name:"废案重构",type:"attack",rarity:"uncommon",cost:1,text:"造成5点伤害。可以消耗1张其他手牌，若如此做，额外造成8点伤害。"},
  combo:{name:"竞赛连击",type:"attack",rarity:"uncommon",cost:2,text:"造成4点伤害3次。本场每消耗4张牌，额外攻击1次，最多额外攻击2次。"},
  showcase:{name:"成果展示",type:"attack",rarity:"uncommon",cost:2,text:"造成14点伤害。消耗牌堆每有1张牌，额外造成2点伤害，最多20点。"},
  ultimate:{name:"极限论证",type:"attack",rarity:"rare",cost:3,text:"造成24点伤害，给予3层思路。",keyword:"消耗",exhaust:true},
  conjecture:{name:"压轴猜想",type:"attack",rarity:"rare",cost:2,text:"移除目标全部思路。造成12点伤害，每移除1层额外造成6点伤害，最多计算3层。"},
  organize:{name:"整理思路",type:"skill",rarity:"basic",cost:1,text:"获得5点防御。"},
  myth:{name:"竞赛神话",type:"skill",rarity:"basic",cost:1,text:"失去2点生命。下一张攻击牌造成的伤害翻倍。"},
  tradeoff:{name:"取舍",type:"skill",rarity:"common",cost:0,text:"消耗1张其他手牌，获得5点防御。"},
  backup:{name:"备份方案",type:"skill",rarity:"common",cost:1,text:"获得8点防御。若因拖延被消耗，获得5点防御。",keyword:"拖延",delay:true},
  seminar:{name:"集中研讨",type:"skill",rarity:"common",cost:1,text:"给予所有敌人2层思路。",keyword:"消耗",exhaust:true},
  review:{name:"复盘",type:"skill",rarity:"common",cost:1,text:"将弃牌堆中1张攻击牌放入手牌，其本回合费用减少1。"},
  recycle_draft:{name:"草稿回收",type:"skill",rarity:"uncommon",cost:1,text:"消耗1张其他手牌，抽2张牌。"},
  restart:{name:"推倒重来",type:"skill",rarity:"uncommon",cost:1,text:"消耗任意数量其他手牌，再抽取等量牌，然后额外抽1张牌。"},
  overtime:{name:"熬夜赶工",type:"skill",rarity:"uncommon",cost:0,text:"失去3点生命，获得2点行动力。",keyword:"消耗",exhaust:true},
  emergency:{name:"抢救进度",type:"skill",rarity:"rare",cost:2,text:"获得14点防御。选择弃牌堆中最多2张牌消耗。"},
  negation:{name:"否定之否定",type:"skill",rarity:"rare",cost:1,text:"将消耗牌堆中1张攻击牌放入手牌。其本回合费用变为0并获得消耗。",keyword:"消耗",exhaust:true},
  defense:{name:"公开答辩",type:"power",rarity:"uncommon",cost:1,text:"每回合首次使用攻击牌攻击拥有思路的敌人时，抽1张牌。"},
  inertia:{name:"思维惯性",type:"power",rarity:"uncommon",cost:1,text:"每回合开始时，给予随机敌人1层思路。"},
  waste_value:{name:"废案价值",type:"power",rarity:"uncommon",cost:1,text:"每回合首次消耗卡牌时，获得5点防御。"},
  contest_body:{name:"竞赛体质",type:"power",rarity:"uncommon",cost:1,text:"每当卡牌使你失去生命，下一张攻击牌额外造成4点伤害。"},
  deadline:{name:"截止效应",type:"power",rarity:"uncommon",cost:1,text:"每回合首张因拖延被消耗的牌，使你在下回合获得1点行动力。"},
  recycle_power:{name:"化废为宝",type:"power",rarity:"rare",cost:2,text:"每当消耗1张牌，对所有敌人造成3点伤害。"},
  thought_loop:{name:"思路闭环",type:"power",rarity:"rare",cost:2,text:"敌人的思路层数减少时，对其造成6点伤害。"},
  prototype:{name:"原型迭代",type:"power",rarity:"rare",cost:2,text:"每回合首次消耗攻击牌时，将其0费消耗复制品加入手牌。"},
  draft_paper:{name:"草稿纸",type:"skill",rarity:"common",cost:0,text:"抽1张牌。",keyword:"消耗",exhaust:true,colorless:true},
  standard_steps:{name:"规范步骤",type:"attack",rarity:"common",cost:1,text:"造成7点伤害。若敌人意图包含攻击，获得3点防御。",colorless:true},
  temporary_barrier:{name:"临时挡板",type:"skill",rarity:"common",cost:1,text:"获得7点防御。若手牌中没有其他技能牌，额外获得2点防御。",colorless:true},
  borrowed_notes:{name:"借阅笔记",type:"skill",rarity:"common",cost:1,text:"选择弃牌堆中的1张牌，将其放到抽牌堆顶，然后抽1张牌。",colorless:true},
  break_bell:{name:"课间铃",type:"skill",rarity:"uncommon",cost:0,text:"本回合打出的下一张牌费用减少1。",keyword:"消耗",exhaust:true,colorless:true},
  duty_schedule:{name:"值日安排",type:"power",rarity:"uncommon",cost:1,text:"每回合首次打出技能牌时，获得3点防御。",colorless:true},
  mock_drill:{name:"模拟演练",type:"skill",rarity:"uncommon",cost:1,text:"抽2张牌，然后选择1张手牌放到抽牌堆顶。",colorless:true},
  sideline_guidance:{name:"场外指导",type:"skill",rarity:"uncommon",cost:1,text:"选择手牌中的1张攻击牌。本场战斗中，该牌每段攻击伤害增加1。",keyword:"消耗",exhaust:true,colorless:true},
  universal_method:{name:"万能答题法",type:"skill",rarity:"rare",cost:2,text:"从抽牌堆选择1张牌加入手牌。该牌本回合费用变为0。",keyword:"消耗",exhaust:true,colorless:true},
  grade_star:{name:"年级之星",type:"power",rarity:"rare",cost:2,text:"若本回合打出过攻击牌和技能牌，下一回合获得1点行动力并额外抽1张牌。每回合最多触发1次。",colorless:true},
  forgotten_homework:{name:"没带作业",type:"curse",rarity:"curse",cost:"—",text:"不能打出。回合结束时若仍在手牌中，失去3专注。",keyword:"厄运"},
  sleepy:{name:"失眠症",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时失去2专注。",keyword:"厄运"},
  spilled_ink:{name:"墨泻千里",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时随机弃掉另外1张手牌。",keyword:"厄运"},
  brain_knot:{name:"脑子打结",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时获得1层紧张。",keyword:"厄运"},
  lost_meal_card:{name:"饭卡无了",type:"curse",rarity:"curse",cost:"—",text:"不能打出。只要留在牌组中，每次战斗胜利获得的饭卡减少10，最低减至0。",keyword:"厄运"}
};
const CARD_ART=Object.fromEntries(Object.keys(CARDS).map(id=>[id,"./assets/cards/"+id+".webp"]));
function cardArtMarkup(id){return '<img class="card-art" src="'+CARD_ART[id]+'" alt="" width="512" height="512" loading="lazy" decoding="async" draggable="false">'}
const RELICS={
  ring:{name:"戒指",rarity:"common",text:"每场战斗中，专注首次降至上限的50%或以下时，获得12点防御。"},
  rose:{name:"玫瑰花",rarity:"common",text:"在宿舍选择休息时，额外恢复专注上限的5%。"},
  pen:{name:"小米巨能写",rarity:"common",text:"每场战斗首次在同一回合打出第3张牌时，抽1张牌。"},
  gaokao_guide:{name:"新高掌",rarity:"uncommon",text:"战斗开始时，查看抽牌堆顶3张牌，选择1张加入手牌。"},
  mp4:{name:"mp4",rarity:"uncommon",text:"每场战斗第1回合额外抽1张牌。"},
  certificate:{name:"奖状",rarity:"uncommon",text:"完成战斗节点后，额外获得10点饭卡价值。"},
  water_card:{name:"无限水卡",rarity:"rare",text:"每场战斗首次在打出卡牌后行动力变为0时，获得1点行动力。"},
  iphone:{name:"iPhone18promax",rarity:"rare",text:"可以同时查看敌人本回合与下回合的意图。"},
  transcript:{name:"成绩单",rarity:"rare",text:"每完成3个战斗节点，随机升级牌组中1张尚未升级的卡牌。"},
  grade1_relic:{name:"高一专属圣遗物",rarity:"rare",grade1:true,text:"效果待设计。当前版本会记录获得，后续确定名称和效果。"}
};
const STARTER_DECK=[..."quick,quick,quick,quick,organize,organize,organize,organize,brainstorm,myth".split(",")];
const ENEMY_INTENTS=[
  {name:"基础题",damage:6,hits:1,text:"造成6点压力"},
  {name:"连续小问",damage:4,hits:2,text:"造成4点压力2次"},
  {name:"重点检查",damage:10,hits:1,text:"造成10点压力"},
  {name:"限时作答",damage:6,hits:1,block:5,text:"造成6点压力，获得5点防御"},
  {name:"压轴小题",damage:14,hits:1,text:"造成14点压力"}
];
const EXAM_INTENTS=[
  {name:"基础大题",damage:9,hits:1,text:"造成9点压力"},
  {name:"连续小问",damage:5,hits:3,text:"造成5点压力3次"},
  {name:"重点核查",damage:15,hits:1,text:"造成15点压力"},
  {name:"限时综合",damage:10,hits:1,block:8,text:"造成10点压力，获得8点防御"},
  {name:"压轴综合",damage:20,hits:1,text:"造成20点压力"}
];
const ROWS=12,ROW_GAP=126,CANVAS_PAD=82;
const DEBUFFS={weak:{name:"分心",text:"攻击伤害降低25%"},frail:{name:"疲惫",text:"卡牌获得的防御降低25%"},vulnerable:{name:"紧张",text:"受到的攻击伤害增加50%"}};
const ENCOUNTERS={
  quiz:{kind:"battle",name:"随堂小测",hp:52,note:"基础题与连续小问交替，检查回合会让你分心。",moves:[{name:"基础题",damage:6,hits:1},{name:"连续小问",damage:4,hits:2},{name:"重点检查",block:6,debuff:"weak",stacks:1},{name:"压轴小题",damage:12,hits:1}]},
  board:{kind:"battle",name:"板书追击",hp:48,note:"先擦板设防，再用连写题施加疲惫，最后集中提问。",moves:[{name:"擦板备课",block:9},{name:"连写不停",damage:3,hits:3,debuff:"frail",stacks:1},{name:"突然提问",damage:11,hits:1}]},
  dictation:{kind:"battle",name:"突击默写",hp:46,note:"抽查让你紧张，下回合的连续默写会利用紧张增伤。",moves:[{name:"随机点名",damage:4,hits:1,debuff:"vulnerable",stacks:1},{name:"连续默写",damage:4,hits:2},{name:"核对答案",block:8,debuff:"weak",stacks:1}]},
  exam_chain:{kind:"exam",name:"月考·连问主考",hp:88,note:"多段攻击。预备卷先设防，追问叠加紧张，压轴集中爆发。",moves:[{name:"预备卷",damage:7,hits:1,block:8},{name:"步步追问",damage:4,hits:3,debuff:"vulnerable",stacks:1},{name:"压轴连问",damage:6,hits:3},{name:"回收答卷",block:12,debuff:"weak",stacks:1}]},
  exam_wall:{kind:"exam",name:"月考·铁壁审题官",hp:100,note:"高防御。封卷阶段适合积累思路，留意疲惫后的重击。",moves:[{name:"严密审题",block:16,debuff:"frail",stacks:2},{name:"扣分红笔",damage:13,hits:1,block:5},{name:"封卷复查",block:12},{name:"一锤定分",damage:20,hits:1}]},
  exam_clock:{kind:"exam",name:"月考·倒计时监考",hp:82,note:"施加分心和紧张。倒计时之后必定收卷，抓住整理考场的空档。",moves:[{name:"巡场提醒",damage:8,hits:1,debuff:"weak",stacks:1},{name:"最后倒计时",block:8,debuff:"vulnerable",stacks:1},{name:"强制收卷",damage:16,hits:1},{name:"整理考场",block:10,debuff:"frail",stacks:1}]},
  boss_wen:{kind:"boss",name:"期末·文海长卷",hp:140,growth:1,note:"主课＋文科：阅读设防、论述施加分心、材料题制造紧张，作文收束爆发。每轮循环每段攻击增加1。",moves:[{name:"主课·基础统考",damage:10,hits:1},{name:"文科·阅读壁垒",block:16,debuff:"weak",stacks:2},{name:"主课·材料连问",damage:5,hits:2,debuff:"vulnerable",stacks:1},{name:"文科·长篇论述",damage:18,hits:1},{name:"阅卷间隙",block:8}]},
  boss_li:{kind:"boss",name:"期末·压轴演算核心",hp:155,growth:1,note:"主课＋理科：模型构建获得高防御，推导叠加疲惫，蓄力后释放压轴证明。每轮循环每段攻击增加1。",moves:[{name:"主课·基础运算",damage:6,hits:2},{name:"理科·模型构建",block:20},{name:"主课·连锁推导",damage:10,hits:1,debuff:"frail",stacks:2},{name:"理科·证明蓄力",block:10},{name:"理科·压轴证明",damage:26,hits:1}]},
  boss_sport:{kind:"boss",name:"期末·全能体测官",hp:130,growth:1,note:"主课＋体育：体能连击配合疲惫，口试制造紧张后发动冲刺，调整呼吸是反击窗口。每轮循环每段攻击增加1。",moves:[{name:"主课·口试点名",damage:8,hits:1,debuff:"vulnerable",stacks:1},{name:"体育·折返冲刺",damage:4,hits:4},{name:"体育·耐力加练",damage:7,hits:1,debuff:"frail",stacks:2},{name:"调整呼吸",block:14},{name:"主课·终点抢答",damage:18,hits:1}]}
};
function rollEncounter(kind){const ids=Object.keys(ENCOUNTERS).filter(id=>ENCOUNTERS[id].kind===kind);return ids[Math.floor(Math.random()*ids.length)]}
let uid=0;
let deckUid=0;
let run={nodes:[],edges:[],current:null,visited:new Set(),id:"",deck:[],hp:80,maxHp:80,meal:400,strength:0,dexterity:0,relics:[],battleCount:0,pendingNode:null,dormVisits:0,bingeCount:0,shop:null,eventSeen:[],nextBattleDraw:0,nextBattleFrail:0};
let battle=null,selection=null,pendingReward=null,pendingRelic=null,deckAction=null,utilityChoice=null,upgradePreview=false,currentEvent=null;
let encyclopediaTab="cards",encyclopediaFilter="all",encyclopediaUpgrade=false;
let shakeTimer=null;
const $=id=>document.getElementById(id);
const makeDeckEntry=id=>({id,upgraded:false,deckUid:++deckUid});
const makeCard=source=>{const entry=typeof source==="string"?{id:source,upgraded:false}:source;return{id:entry.id,upgraded:!!entry.upgraded,deckUid:entry.deckUid,uid:++uid,tempCost:null,forcedExhaust:false,damageBonus:entry.damageBonus||0}};
const shuffle=list=>{const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const hasRelic=id=>run.relics.includes(id);

function showOnly(id){
  ["startScreen","mapScreen","battleScreen","rewardScreen","relicRewardScreen","dormScreen","canteenScreen","eventScreen","sportScreen"].forEach(screen=>{$(screen).hidden=screen!==id});
}
function randomType(row){
  if(row===0)return "battle";
  const pool=row<3?["battle","battle","battle","event"]:["battle","battle","battle","exam","exam","dorm","canteen","event","sport"];
  return pool[Math.floor(Math.random()*pool.length)];
}
function createMap(){
  const nodes=[],edges=[],byRow=[];
  for(let row=0;row<ROWS;row++){
    const count=row===0?3:(Math.random()<.48?3:4),rowNodes=[];
    for(let i=0;i<count;i++){
      const base=(i+1)/(count+1)*100;
      const node={id:row+"-"+i,row,x:Math.max(12,Math.min(88,base+(Math.random()*8-4))),y:CANVAS_PAD+(ROWS-row)*ROW_GAP,type:randomType(row)};
      if(node.type==="battle"||node.type==="exam")node.encounterId=rollEncounter(node.type);
      nodes.push(node);rowNodes.push(node);
    }
    byRow.push(rowNodes);
  }
  const boss={id:"boss",row:ROWS,x:50,y:CANVAS_PAD,type:"boss",encounterId:rollEncounter("boss")};nodes.push(boss);byRow.push([boss]);
  for(let row=0;row<ROWS;row++){
    const from=byRow[row],to=byRow[row+1];
    // Ordered connections ensure every node is reachable without crossing edges.
    let i=0,j=0;
    addEdge(edges,from[i],to[j]);
    while(i<from.length-1||j<to.length-1){
      if(i===from.length-1)j++;
      else if(j===to.length-1)i++;
      else {
        const nextFrom=(i+1)/(from.length-1),nextTo=(j+1)/(to.length-1);
        if(Math.abs(nextFrom-nextTo)<.01&&Math.random()<.55){i++;j++}
        else if(nextFrom<nextTo)i++;
        else if(nextTo<nextFrom)j++;
        else if(Math.random()<.5)i++;else j++;
      }
      addEdge(edges,from[i],to[j]);
    }
  }
  run.nodes=nodes;run.edges=edges;run.current=null;run.visited=new Set();
  $("bossPreview").textContent="本层期末："+ENCOUNTERS[boss.encounterId].name;
  renderMap();updateRunHud();
  $("floorText").textContent="入口";$("routeStatus").textContent="从教学楼入口出发";
  $("mapTip").textContent="底部的起点均为上课，选择任意一条路线开始战斗。";
  requestAnimationFrame(()=>{$("mapViewport").scrollTop=$("mapViewport").scrollHeight});
}
function addEdge(edges,a,b){if(!edges.some(edge=>edge.from===a.id&&edge.to===b.id))edges.push({from:a.id,to:b.id})}
function nodeState(node){
  if(run.current===node.id)return "current";
  if(run.visited.has(node.id))return "visited";
  if(!run.current&&node.row===0)return "available";
  if(run.current&&run.edges.some(edge=>edge.from===run.current&&edge.to===node.id))return "available";
  return "locked";
}
function renderMap(){
  const height=CANVAS_PAD*2+ROWS*ROW_GAP,lookup=Object.fromEntries(run.nodes.map(node=>[node.id,node]));
  $("mapCanvas").style.height=height+"px";
  const svg=$("routeLines");svg.setAttribute("viewBox","0 0 1000 "+height);svg.setAttribute("preserveAspectRatio","none");svg.innerHTML="";
  run.edges.forEach(edge=>{
    const a=lookup[edge.from],b=lookup[edge.to],line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",a.x*10);line.setAttribute("y1",a.y);line.setAttribute("x2",b.x*10);line.setAttribute("y2",b.y);
    const state=run.visited.has(edge.from)&&run.visited.has(edge.to)?"visited":edge.from===run.current?"available":"";
    line.setAttribute("class","route-line "+state);line.dataset.from=edge.from;line.dataset.to=edge.to;
    svg.appendChild(line);
    const arrow=document.createElementNS("http://www.w3.org/2000/svg","path");
    const x=(a.x+b.x)*5,y=(a.y+b.y)/2;
    arrow.setAttribute("d",`M ${x-7} ${y+5} L ${x} ${y-5} L ${x+7} ${y+5}`);
    arrow.setAttribute("class","route-arrow "+state);arrow.dataset.from=edge.from;arrow.dataset.to=edge.to;svg.appendChild(arrow);
  });
  const holder=$("mapNodes");holder.innerHTML="";
  run.nodes.forEach(node=>{
    const type=NODE_TYPES[node.type],state=nodeState(node),button=document.createElement("button");
    button.type="button";button.className="map-node "+node.type+" "+state;button.style.left=node.x+"%";button.style.top=node.y+"px";
    const label=node.type==="boss"?"期末":(node.row+1)+"-"+(Number(node.id.split("-")[1])+1)+" "+type.name;
    button.title=node.encounterId?ENCOUNTERS[node.encounterId].name+"："+ENCOUNTERS[node.encounterId].note:type.detail;
    button.dataset.node=node.id;button.setAttribute("aria-label",label+"，"+button.title+(state==="available"?"，可以进入":"，查看连接"));
    button.innerHTML='<span class="glyph">'+type.glyph+"</span><small>"+label+"</small>";
    button.addEventListener("pointerenter",()=>highlightRoute(node.id));
    button.addEventListener("pointerleave",()=>highlightRoute(null));
    button.addEventListener("focus",()=>highlightRoute(node.id));
    button.addEventListener("blur",()=>highlightRoute(null));
    button.addEventListener("click",()=>{if(nodeState(node)==="available")chooseNode(node);else highlightRoute(node.id)});holder.appendChild(button);
  });
}
function highlightRoute(id){
  const connected=new Set([id]);
  run.edges.forEach(edge=>{if(edge.from===id||edge.to===id){connected.add(edge.from);connected.add(edge.to)}});
  $("mapCanvas").classList.toggle("route-inspecting",!!id);
  $("routeLines").querySelectorAll("[data-from]").forEach(line=>line.classList.toggle("route-focused",line.dataset.from===id||line.dataset.to===id));
  $("mapNodes").querySelectorAll("[data-node]").forEach(node=>node.classList.toggle("route-focused",connected.has(node.dataset.node)));
}
function chooseNode(node){
  if(nodeState(node)!=="available")return;
  if(run.current)run.visited.add(run.current);
  run.current=node.id;run.visited.add(node.id);run.pendingNode=node;
  $("floorText").textContent=node.type==="boss"?"期末":"第"+(node.row+1)+"阶段";
  $("routeStatus").textContent="当前位置："+NODE_TYPES[node.type].name;
  renderMap();updateRunHud();
  if(node.type==="battle"){setTimeout(()=>startBattle("battle"),180);return}
  if(node.type==="exam"){setTimeout(()=>startBattle("exam"),180);return}
  if(node.type==="boss"){setTimeout(()=>startBattle("boss"),180);return}
  if(node.type==="dorm"){setTimeout(openDorm,180);return}
  if(node.type==="canteen"){setTimeout(openCanteen,180);return}
  if(node.type==="event"){setTimeout(openEvent,180);return}
  if(node.type==="sport"){setTimeout(openSport,180);return}
  $("mapTip").textContent="已进入"+NODE_TYPES[node.type].name+"。节点内容暂未开放，请沿亮起的连线继续。";
}
function updateRunHud(){
  $("visitedText").textContent=run.visited.size;$("mealText").textContent=run.meal;$("deckCount").textContent=run.deck.length;
  $("strengthText").textContent=run.strength;$("dexterityText").textContent=run.dexterity;
  $("relicCount").textContent=run.relics.length;renderRunRelics();
  const hpText=document.querySelector(".profile-panel .status-line b"),hpBar=document.querySelector(".profile-panel .status-bar i");
  if(hpText)hpText.textContent=run.hp+" / "+run.maxHp;if(hpBar)hpBar.style.width=(run.hp/run.maxHp*100)+"%";
}
function enterGame(id){
  run.id=id;run.deck=STARTER_DECK.map(makeDeckEntry);run.hp=80;run.maxHp=80;run.meal=400;run.strength=0;run.dexterity=0;run.relics=[];run.battleCount=0;run.dormVisits=0;run.bingeCount=0;run.shop=null;run.eventSeen=[];run.nextBattleDraw=0;run.nextBattleFrail=0;
  $("displayId").textContent=id;$("battlePlayerId").textContent=id;$("dormPlayerId").textContent=id;$("eventPlayerId").textContent=id;$("sportPlayerId").textContent=id;showOnly("mapScreen");createMap();
}
function backToStart(){showOnly("startScreen");$("finishModal").hidden=true;$("playerId").focus()}

function updateRealTime(){
  const now=new Date(),pad=value=>String(value).padStart(2,"0");
  $("realTime").textContent=pad(now.getHours())+":"+pad(now.getMinutes())+":"+pad(now.getSeconds());
  $("realDate").textContent=now.getFullYear()+"年"+pad(now.getMonth()+1)+"月"+pad(now.getDate())+"日";
}
function openDeckView(){
  upgradePreview=false;$("toggleUpgradePreview").setAttribute("aria-pressed","false");
  $("toggleUpgradePreview").textContent="显示升级后效果";renderDeckView();$("deckViewModal").hidden=false;
}
function renderDeckView(){
  $("deckViewCount").textContent=run.deck.length;
  $("deckViewHint").textContent=upgradePreview?"正在预览所有卡牌的升级后效果，不改变实际牌组。":"显示当前实际效果，已升级卡牌带有“+”。";
  const holder=$("deckViewCards");holder.innerHTML="";
  run.deck.forEach(entry=>{
    const preview=upgradePreview&&!entry.upgraded&&CARDS[entry.id].type!=="curse",inst=makeCard({...entry,upgraded:entry.upgraded||preview}),card=createCardElement(inst,false);
    if(preview){card.classList.add("previewing");const label=document.createElement("span");label.className="preview-label";label.textContent="升级预览";card.querySelector(".card-text").appendChild(label)}
    card.disabled=false;holder.appendChild(card);
  });
}
function toggleUpgradePreview(){
  upgradePreview=!upgradePreview;$("toggleUpgradePreview").setAttribute("aria-pressed",String(upgradePreview));
  $("toggleUpgradePreview").textContent=upgradePreview?"显示当前效果":"显示升级后效果";renderDeckView();
}
function openEncyclopedia(){
  encyclopediaTab="cards";encyclopediaFilter="all";encyclopediaUpgrade=false;
  $("encyclopediaCardFilter").value="all";
  renderEncyclopedia();$("encyclopediaModal").hidden=false;$("closeEncyclopedia").focus();
}
function closeEncyclopedia(){
  $("encyclopediaModal").hidden=true;$("openEncyclopedia").focus();
}
function renderEncyclopedia(){
  const showCards=encyclopediaTab==="cards";
  $("encyclopediaCardsTab").setAttribute("aria-selected",String(showCards));
  $("encyclopediaRelicsTab").setAttribute("aria-selected",String(!showCards));
  $("encyclopediaCardsPanel").hidden=!showCards;$("encyclopediaRelicsPanel").hidden=showCards;
  $("encyclopediaUpgrade").setAttribute("aria-pressed",String(encyclopediaUpgrade));
  $("encyclopediaUpgrade").textContent=encyclopediaUpgrade?"显示当前效果":"显示升级后效果";
  const cardIds=Object.keys(CARDS).filter(id=>{
    const def=CARDS[id];
    return encyclopediaFilter==="all"||(encyclopediaFilter==="class"&&cardDivision(def)==="c")||(encyclopediaFilter==="a"&&cardDivision(def)==="a")||(encyclopediaFilter==="b"&&cardDivision(def)==="b")||(encyclopediaFilter==="colorless"&&def.colorless)||(encyclopediaFilter==="curse"&&def.type==="curse");
  });
  $("encyclopediaCardCount").textContent="共"+cardIds.length+"张卡牌 · 厄运卡不能升级";
  const cards=$("encyclopediaCards");cards.innerHTML="";
  cardIds.forEach(id=>{
    const def=CARDS[id],upgraded=encyclopediaUpgrade&&def.type!=="curse";
    cards.appendChild(createCardElement(makeCard({id,upgraded}),false,true));
  });
  const relics=$("encyclopediaRelics");relics.innerHTML="";
  const relicIds=Object.keys(RELICS);
  $("encyclopediaRelicCount").textContent="共"+relicIds.length+"件圣遗物";
  relicIds.forEach(id=>{
    const def=RELICS[id],item=document.createElement("article");item.className="relic-detail-item";
    item.innerHTML='<small>'+RARITY_LABEL[def.rarity]+' · '+(def.grade1?"高一专属圣遗物":"圣遗物")+'</small><h3>'+def.name+'</h3><p>'+def.text+'</p>';
    relics.appendChild(item);
  });
}

function finishNode(message){
  updateRunHud();showOnly("mapScreen");renderMap();$("mapTip").textContent=message+" 请选择下一节点。";
}
function renderRunRelics(){
  const holder=$("relicList");holder.innerHTML="";
  if(!run.relics.length){holder.innerHTML="<small>暂无圣遗物</small>";return}
  run.relics.forEach(id=>{const span=document.createElement("span");span.textContent=RELICS[id].name;span.title=RELICS[id].text;holder.appendChild(span)});
}
function closeCollectionView(){$("collectionModal").hidden=true}
function openPileView(zone){
  if(!battle)return;
  const labels={draw:"抽牌堆",discard:"弃牌堆",exhaust:"消耗牌堆"},cards=[...(battle[zone]||[])];
  $("collectionTitle").textContent=labels[zone]+" · "+cards.length+"张";
  $("collectionHint").textContent=zone==="draw"?"展示抽牌堆所含卡牌，实际抽取顺序保持隐藏。":"点击关闭后继续战斗。";
  const holder=$("collectionGrid");holder.className="collection-grid";holder.innerHTML="";
  if(!cards.length){holder.innerHTML='<p class="collection-empty">当前牌堆为空。</p>'}
  cards.forEach(entry=>{const card=createCardElement(entry);card.disabled=true;holder.appendChild(card)});
  $("collectionModal").hidden=false;
}
function openRelicDetails(){
  $("collectionTitle").textContent="圣遗物详情 · "+run.relics.length+"件";
  $("collectionHint").textContent="当前持有圣遗物及其完整效果。";
  const holder=$("collectionGrid");holder.className="collection-grid relic-detail-grid";holder.innerHTML="";
  if(!run.relics.length){holder.innerHTML='<p class="collection-empty">当前没有圣遗物。</p>'}
  run.relics.forEach(id=>{const relic=RELICS[id],item=document.createElement("article");item.className="relic-detail-item";item.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h3>'+relic.name+'</h3><p>'+relic.text+'</p>';holder.appendChild(item)});
  $("collectionModal").hidden=false;
}
function openDorm(){
  const isNoon=run.dormVisits%2===0,name=isNoon?"午休":"晚休",percent=(isNoon?25:35)+(hasRelic("rose")?5:0),heal=Math.ceil(run.maxHp*percent/100);
  $("restCycleTitle").textContent=name;$("restCycleLabel").textContent=name;$("restPercent").textContent=percent+"%";
  $("restPreview").textContent="预计恢复 "+Math.min(heal,run.maxHp-run.hp)+" 点专注";
  $("chooseRest").textContent="开始"+name;$("chooseUpgrade").disabled=!run.deck.some(card=>!card.upgraded&&CARDS[card.id].type!=="curse");
  $("dormStatus").textContent="当前专注 "+run.hp+" / "+run.maxHp+"，本次为"+name+"。";showOnly("dormScreen");
}
function restAtDorm(){
  const isNoon=run.dormVisits%2===0,name=isNoon?"午休":"晚休",percent=(isNoon?25:35)+(hasRelic("rose")?5:0),amount=Math.ceil(run.maxHp*percent/100),before=run.hp;
  run.hp=Math.min(run.maxHp,run.hp+amount);run.dormVisits++;
  finishNode(name+"结束，恢复了 "+(run.hp-before)+" 点专注。");
}
function openDeckAction(mode){
  deckAction={mode,returnTo:mode==="upgrade"?"dorm":"canteen"};
  $("deckActionTitle").textContent=mode==="upgrade"?"挑灯修读":"暴食";
  $("deckActionHint").textContent=mode==="upgrade"?"选择1张尚未升级的卡牌。":"选择1张卡牌永久移出本次牌组。";
  const entries=mode==="upgrade"?run.deck.filter(card=>!card.upgraded&&CARDS[card.id].type!=="curse"):run.deck,holder=$("deckActionCards");holder.innerHTML="";
  if(!entries.length){holder.innerHTML='<p class="deck-empty">没有可以选择的卡牌。</p>'}
  entries.forEach(entry=>{const card=createCardElement(makeCard(entry),false);card.disabled=false;card.addEventListener("click",()=>completeDeckAction(entry.deckUid));holder.appendChild(card)});
  $("deckActionModal").hidden=false;
}
function openEventDeckChoice(title,hint,filter,onChoose){
  deckAction={mode:"event",filter,onChoose};
  $("deckActionTitle").textContent=title;$("deckActionHint").textContent=hint;
  const holder=$("deckActionCards");holder.innerHTML="";
  run.deck.filter(filter).forEach(entry=>{const card=createCardElement(makeCard(entry),false);card.disabled=false;card.addEventListener("click",()=>completeDeckAction(entry.deckUid));holder.appendChild(card)});
  $("deckActionModal").hidden=false;
}
function completeDeckAction(targetUid){
  if(!deckAction)return;
  if(deckAction.mode==="event"){
    const entry=run.deck.find(card=>card.deckUid===targetUid),action=deckAction;
    if(!entry||!action.filter(entry))return;
    $("deckActionModal").hidden=true;deckAction=null;action.onChoose(entry);return;
  }
  if(deckAction.mode==="upgrade"){
    const entry=run.deck.find(card=>card.deckUid===targetUid);if(!entry||CARDS[entry.id].type==="curse")return;entry.upgraded=true;run.dormVisits++;$("deckActionModal").hidden=true;deckAction=null;
    finishNode("“"+CARDS[entry.id].name+"”已升级为“"+CARDS[entry.id].name+"+”。");return;
  }
  const price=150+run.bingeCount*75;if(run.meal<price)return;
  const entry=run.deck.find(card=>card.deckUid===targetUid);if(!entry)return;
  run.meal-=price;run.deck=run.deck.filter(card=>card.deckUid!==targetUid);run.bingeCount++;$("deckActionModal").hidden=true;deckAction=null;renderShop();
}
function cancelDeckAction(){$("deckActionModal").hidden=true;deckAction=null}
function priceFor(rarity,extra){
  const ranges={common:[90,110],uncommon:[170,190],rare:[290,310]},range=ranges[rarity];
  return range[0]+Math.floor(Math.random()*(range[1]-range[0]+1))+(extra||0);
}
function generateShop(){
  const cards=[];
  while(cards.length<5){
    const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===rarity&&!cards.some(item=>item.id===id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)cards.push({id,rarity,price:priceFor(rarity),sold:false});
  }
  const colorless=[];
  while(colorless.length<2){const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>CARDS[id].colorless&&CARDS[id].rarity===rarity&&!colorless.some(item=>item.id===id));const id=pool[Math.floor(Math.random()*pool.length)];if(id)colorless.push({id,rarity,price:priceFor(rarity,50),sold:false})}
  const relicPool=shuffle(Object.keys(RELICS).filter(id=>!hasRelic(id)&&!RELICS[id].grade1)).slice(0,3);
  run.shop={cards,colorless,relics:relicPool.map(id=>({id,price:340+Math.floor(Math.random()*21),sold:false})),foods:Array.from({length:3},(_,index)=>({name:"食物槽位 "+(index+1)}))};
}
function openCanteen(){generateShop();showOnly("canteenScreen");renderShop()}
function renderShop(){
  $("shopMeal").textContent=run.meal;
  const cardHolder=$("classShopCards");cardHolder.innerHTML="";
  run.shop.cards.forEach(item=>{
    const def=CARDS[item.id],division=cardDivision(def),box=document.createElement("article");box.className="shop-item division-"+division+" type-"+def.type+" rarity-item-"+item.rarity+(item.sold?" sold":"");
    box.innerHTML='<span class="rarity-tag">'+DIVISION_LABEL[division]+' · '+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</span><h3>'+def.name+'</h3>'+cardArtMarkup(item.id)+'<p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';
    const button=box.querySelector("button");button.disabled=item.sold||run.meal<item.price;button.addEventListener("click",()=>buyClassCard(item));cardHolder.appendChild(box);
  });
  renderColorlessShop();renderRelicShop();
  renderPlaceholderGoods("foodShopItems",run.shop.foods,()=>"食物",false);
  const price=150+run.bingeCount*75;$("bingePrice").textContent=price;$("bingeButton").disabled=run.meal<price||run.deck.length===0;
  updateRunHud();
}
function renderPlaceholderGoods(holderId,items,label,priced){
  const holder=$(holderId);holder.innerHTML="";
  items.forEach(item=>{const box=document.createElement("article");box.className="shop-item colorless placeholder";box.innerHTML='<small>'+label(item)+'</small><h3>'+item.name+'</h3><p>效果等待后续设计，本演示暂不可购买。</p><div class="shop-bottom"><span class="shop-price">'+(priced?item.price:"价格待定")+'</span><button class="shop-buy" type="button" disabled>待设计</button></div>';holder.appendChild(box)});
}
function buyClassCard(item){
  if(item.sold||run.meal<item.price)return;run.meal-=item.price;run.deck.push(makeDeckEntry(item.id));item.sold=true;renderShop();
}
function renderColorlessShop(){
  const holder=$("colorlessShopCards");holder.innerHTML="";
  run.shop.colorless.forEach(item=>{const def=CARDS[item.id],division=cardDivision(def),box=document.createElement("article");box.className="shop-item colorless-card division-"+division+" type-"+def.type+" rarity-item-"+item.rarity+(item.sold?" sold":"");box.innerHTML='<small>'+DIVISION_LABEL[division]+' · '+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</small><h3>'+def.name+'</h3>'+cardArtMarkup(item.id)+'<p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';const button=box.querySelector("button");button.disabled=item.sold||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;run.deck.push(makeDeckEntry(item.id));item.sold=true;renderShop()});holder.appendChild(box)});
}
function renderRelicShop(){
  const holder=$("relicShopItems");holder.innerHTML="";
  run.shop.relics.forEach(item=>{const relic=RELICS[item.id],box=document.createElement("article");box.className="shop-item relic-item"+(item.sold?" sold":"");box.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h3>'+relic.name+'</h3><p>'+relic.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已获得":"购买")+'</button></div>';const button=box.querySelector("button");button.disabled=item.sold||hasRelic(item.id)||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;grantRelic(item.id);item.sold=true;renderShop()});holder.appendChild(box)});
}

const CURSE_IDS=["forgotten_homework","sleepy","spilled_ink","brain_knot","lost_meal_card"];
const randomFrom=list=>list[Math.floor(Math.random()*list.length)];
const randomCards=(rarity,count=3,filter=()=>true)=>shuffle(Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===rarity&&filter(CARDS[id]))).slice(0,count);
const canLoseEventHp=amount=>run.hp>amount;
function loseEventHp(amount){run.hp-=amount}
function healEventHp(amount){const healed=Math.min(amount,run.maxHp-run.hp);run.hp+=healed;return healed}
function eventDone(message){currentEvent=null;finishNode(message)}
function addEventCard(id){run.deck.push(makeDeckEntry(id));return CARDS[id].name}
function offerEventCards(rarity,filter=()=>true,afterPick=()=>{}){
  const ids=randomCards(rarity,3,filter);
  openUtilityChoice("选择1张卡牌","加入本次牌组。",ids.map(makeCard),chosen=>{addEventCard(chosen.id);const extra=afterPick(chosen.id)||"";eventDone("获得“"+CARDS[chosen.id].name+"”"+extra+"。")});
}
function chooseEventOption(option){
  if(!currentEvent||!option.available())return;
  option.run();
}
function renderEvent(){
  $("eventTitle").textContent=currentEvent.title;
  $("eventDescription").textContent=currentEvent.story;
  $("eventBalance").textContent="专注 "+run.hp+" / "+run.maxHp+" · 饭卡 "+run.meal;
  const holder=$("eventChoices");holder.innerHTML="";
  currentEvent.choices.forEach(option=>{
    const button=document.createElement("button");button.type="button";button.className="event-option";
    const name=document.createElement("strong"),detail=document.createElement("span");name.textContent=option.name;detail.textContent=option.detail;
    button.append(name,detail);button.disabled=!option.available();button.addEventListener("click",()=>chooseEventOption(option));holder.appendChild(button);
  });
}
function openEvent(){
  const unused=EVENTS.filter(event=>!run.eventSeen.includes(event.id));
  if(!unused.length)run.eventSeen=[];
  const picked=randomFrom(unused.length?unused:EVENTS);run.eventSeen.push(picked.id);
  currentEvent=picked;renderEvent();showOnly("eventScreen");
}
const eventOption=(name,detail,runOption,available=()=>true)=>({name,detail,run:runOption,available});
const EVENTS=[
  {id:"sausage",title:"最后1根烤肠",story:"店员看了眼烤肠，又看了眼你：“再不买我自己吃了。”",choices:[
    eventOption("买烤肠","花25饭卡，回复12专注。",()=>{run.meal-=25;eventDone("吃完烤肠，回复"+healEventHp(12)+"专注。")},()=>run.meal>=25),
    eventOption("连面包一起买","花40饭卡，回复20专注。",()=>{run.meal-=40;eventDone("吃得挺饱，回复"+healEventHp(20)+"专注。")},()=>run.meal>=40),
    eventOption("不买了","无事发生。",()=>eventDone("你把最后1根烤肠留给了店员。"))]},
  {id:"old_card",title:"校服兜里的饭卡",story:"翻兜找零钱，摸出1张忘了带回宿舍的旧饭卡。",choices:[
    eventOption("直接收起来","获得30饭卡。",()=>{run.meal+=30;eventDone("找到30饭卡。")}),
    eventOption("拿去试刷","50%获得60饭卡，50%只获得5饭卡。",()=>{const amount=Math.random()<.5?60:5;run.meal+=amount;eventDone("旧饭卡里还有"+amount+"饭卡。")})]},
  {id:"new_pen",title:"新笔就是好写",story:"在柜台试写新笔，顺手把一道题写明白了。",choices:[
    eventOption("买下这支笔","花20饭卡，升级1张攻击或技能牌。",()=>openEventDeckChoice("新笔就是好写","选择1张攻击或技能牌升级。",entry=>!entry.upgraded&&["attack","skill"].includes(CARDS[entry.id].type),entry=>{run.meal-=20;entry.upgraded=true;eventDone("花20饭卡，升级了“"+CARDS[entry.id].name+"”。")}),()=>run.meal>=20&&run.deck.some(entry=>!entry.upgraded&&["attack","skill"].includes(CARDS[entry.id].type))),
    eventOption("放回柜台","无事发生。",()=>eventDone("试写了半页纸，笔还是放回去了。"))]},
  {id:"old_notes",title:"同学的旧笔记",story:"同学清书包，问你要不要他上学期的笔记。",choices:[
    eventOption("免费拿几页","从3张普通C部卡中选1张。",()=>offerEventCards("common")),
    eventOption("挑一本整理好的","花45饭卡，从3张罕见C部卡中选1张。",()=>offerEventCards("uncommon",()=>true,()=>{run.meal-=45;return "，花45饭卡"}),()=>run.meal>=45),
    eventOption("不用了","无事发生。",()=>eventDone("你把笔记还给了同学。"))]},
  {id:"class_rep",title:"排队碰上课代表",story:"课代表拿着小测卷，非要你现在看1眼。",choices:[
    eventOption("现在就看","失去6专注，从3张普通攻击牌中选1张。",()=>offerEventCards("common",def=>def.type==="attack",()=>{loseEventHp(6);return "，失去6专注"}),()=>canLoseEventHp(6)),
    eventOption("下节课再看","回复5专注。",()=>eventDone("你缓了口气，回复"+healEventHp(5)+"专注。"))]},
  {id:"instant_noodles",title:"泡面加不加肠",story:"热水刚好烧开，你站在货架前犹豫。",choices:[
    eventOption("普通泡面","花20饭卡，回复10专注。",()=>{run.meal-=20;eventDone("吃完泡面，回复"+healEventHp(10)+"专注。")},()=>run.meal>=20),
    eventOption("加肠","花35饭卡，回复16专注；下场战斗首回合多抽1张牌。",()=>{run.meal-=35;run.nextBattleDraw++;eventDone("加肠的泡面回复"+healEventHp(16)+"专注；下场战斗首回合多抽1张牌。")},()=>run.meal>=35),
    eventOption("不吃了","无事发生。",()=>eventDone("你决定把饭卡留着。"))]},
  {id:"draft_stack",title:"草稿纸买多了",story:"旁边同学抱着一摞纸：“我妈买了3包，真用不完。”",choices:[
    eventOption("拿1张","免费获得1张草稿纸。",()=>eventDone("获得“"+addEventCard("draft_paper")+"”。")),
    eventOption("拿2张","花15饭卡，获得2张草稿纸。",()=>{run.meal-=15;addEventCard("draft_paper");addEventCard("draft_paper");eventDone("花15饭卡，获得2张“草稿纸”。")},()=>run.meal>=15),
    eventOption("婉拒","无事发生。",()=>eventDone("你说自己的本子还没用完。"))]},
  {id:"waste_box",title:"柜台旁的废纸箱",story:"等结账时，你翻到了以前写过的一张错题纸。",choices:[
    eventOption("扔掉旧卷","移除1张基础攻击或基础防御牌。",()=>openEventDeckChoice("扔掉旧卷","选择1张基础攻击或基础防御牌移除。",entry=>["quick","organize"].includes(entry.id),entry=>{run.deck=run.deck.filter(card=>card.deckUid!==entry.deckUid);eventDone("移除了“"+CARDS[entry.id].name+"”。")}),()=>run.deck.some(entry=>["quick","organize"].includes(entry.id))),
    eventOption("留作纪念","无事发生。",()=>eventDone("你又把错题纸折好塞回包里。"))]},
  {id:"carry_water",title:"帮忙搬一箱水",story:"老板问能不能把门口那箱水搬到货架边。",choices:[
    eventOption("搬整箱","失去7专注，获得45饭卡。",()=>{loseEventHp(7);run.meal+=45;eventDone("搬完一箱水，获得45饭卡。")},()=>canLoseEventHp(7)),
    eventOption("搬半箱","失去3专注，获得20饭卡。",()=>{loseEventHp(3);run.meal+=20;eventDone("搬完半箱水，获得20饭卡。")},()=>canLoseEventHp(3)),
    eventOption("马上上课了","无事发生。",()=>eventDone("你和老板打了声招呼就走了。"))]},
  {id:"discount",title:"差1块凑满减",story:"收银员提醒你还差一点就能参加活动。",choices:[
    eventOption("凑普通资料","花30饭卡，从3张普通C部卡中选1张。",()=>offerEventCards("common",()=>true,()=>{run.meal-=30;return "，花30饭卡"}),()=>run.meal>=30),
    eventOption("凑一本好资料","花65饭卡，从3张罕见C部卡中选1张。",()=>offerEventCards("uncommon",()=>true,()=>{run.meal-=65;return "，花65饭卡"}),()=>run.meal>=65),
    eventOption("不凑了","无事发生。",()=>eventDone("你结完账就走了。"))]},
  {id:"water_spill",title:"水杯倒在作业上",story:"“完了，刚写完的那页。”",choices:[
    eventOption("去复印","花35饭卡，平安无事。",()=>{run.meal-=35;eventDone("复印好了作业，花了35饭卡。")},()=>run.meal>=35),
    eventOption("重新写","失去8专注。",()=>{loseEventHp(8);eventDone("重新写完作业，失去8专注。")},()=>canLoseEventHp(8)),
    eventOption("先晾着","获得厄运卡“墨泻千里”。",()=>eventDone("作业还没干，牌组加入“"+addEventCard("spilled_ink")+"”。"))]},
  {id:"homework",title:"课代表已经走到门口",story:"你才想起作业还在宿舍。",choices:[
    eventOption("跑回去拿","失去10专注。",()=>{loseEventHp(10);eventDone("跑回宿舍拿了作业，失去10专注。")},()=>canLoseEventHp(10)),
    eventOption("赌今天不查","获得30饭卡，同时获得厄运卡“没带作业”。",()=>{run.meal+=30;addEventCard("forgotten_homework");eventDone("省下了早饭钱，获得30饭卡；牌组加入“没带作业”。")})]},
  {id:"dorm_noodles",title:"宿舍里有人煮泡面",story:"有人举着叉子问：“要不要来一口？”",choices:[
    eventOption("蹭一碗","花20饭卡，回复12专注。",()=>{run.meal-=20;eventDone("吃完泡面，回复"+healEventHp(12)+"专注。")},()=>run.meal>=20),
    eventOption("聊到熄灯后","回复20专注，获得厄运卡“失眠症”。",()=>{const healed=healEventHp(20);addEventCard("sleepy");eventDone("回复"+healed+"专注；牌组加入“失眠症”。")}),
    eventOption("继续睡","回复5专注。",()=>eventDone("你翻个身，回复"+healEventHp(5)+"专注。"))]},
  {id:"card_error",title:"饭卡怎么刷都没反应",story:"后面已经排了好几个人。",choices:[
    eventOption("去窗口处理","失去5专注，获得25饭卡。",()=>{loseEventHp(5);run.meal+=25;eventDone("窗口补好了余额，获得25饭卡。")},()=>canLoseEventHp(5)),
    eventOption("先借同学的钱吃饭","回复10专注，获得厄运卡“饭卡无了”。",()=>{const healed=healEventHp(10);addEventCard("lost_meal_card");eventDone("回复"+healed+"专注；牌组加入“饭卡无了”。")}),
    eventOption("不吃了","失去4专注。",()=>{loseEventHp(4);eventDone("没吃上饭，失去4专注。")},()=>canLoseEventHp(4))]},
  {id:"old_exam",title:"抽屉里翻出旧卷子",story:"上面居然有一道现在还不会的题。",choices:[
    eventOption("认真看一遍","升级1张技能牌，获得厄运卡“脑子打结”。",()=>openEventDeckChoice("认真看一遍","选择1张技能牌升级。",entry=>!entry.upgraded&&CARDS[entry.id].type==="skill",entry=>{entry.upgraded=true;addEventCard("brain_knot");eventDone("升级了“"+CARDS[entry.id].name+"”；牌组加入“脑子打结”。")}),()=>run.deck.some(entry=>!entry.upgraded&&CARDS[entry.id].type==="skill")),
    eventOption("直接扔掉","移除1张基础攻击或基础防御牌。",()=>openEventDeckChoice("扔掉旧卷","选择1张基础攻击或基础防御牌移除。",entry=>["quick","organize"].includes(entry.id),entry=>{run.deck=run.deck.filter(card=>card.deckUid!==entry.deckUid);eventDone("移除了“"+CARDS[entry.id].name+"”。")}),()=>run.deck.some(entry=>["quick","organize"].includes(entry.id))),
    eventOption("塞回抽屉","无事发生。",()=>eventDone("旧卷子又回到了抽屉里。"))]},
  {id:"rain",title:"下雨了，衣服还晾着",story:"窗外的雨下得比你跑得快。",choices:[
    eventOption("冲回宿舍","失去7专注，获得20饭卡。",()=>{loseEventHp(7);run.meal+=20;eventDone("收好衣服，还在兜里找到20饭卡。")},()=>canLoseEventHp(7)),
    eventOption("等雨停再说","获得厄运卡“失眠症”。",()=>eventDone("晚上还得重新晾，牌组加入“"+addEventCard("sleepy")+"”。")),
    eventOption("请室友帮忙","花30饭卡，平安无事。",()=>{run.meal-=30;eventDone("室友帮你收好了衣服。")},()=>run.meal>=30)]},
  {id:"desk_bag",title:"同桌整理书包",story:"他递来一叠“你先拿着”的资料。",choices:[
    eventOption("整叠收下","从3张普通C部卡中选1张，同时获得1张随机厄运卡。",()=>offerEventCards("common",()=>true,()=>{const curse=randomFrom(CURSE_IDS);addEventCard(curse);return "，同时获得厄运卡“"+CARDS[curse].name+"”"})),
    eventOption("只挑几页","花25饭卡，从3张普通C部卡中选1张。",()=>offerEventCards("common",()=>true,()=>{run.meal-=25;return "，花25饭卡"}),()=>run.meal>=25),
    eventOption("婉拒","无事发生。",()=>eventDone("你说自己桌洞里也快塞不下了。"))]},
  {id:"shoelace",title:"早操集合，鞋带开了",story:"队伍已经往操场走，你还在低头找鞋带。",choices:[
    eventOption("系好再跑","失去5专注。",()=>{loseEventHp(5);eventDone("赶上队伍，失去5专注。")},()=>canLoseEventHp(5)),
    eventOption("硬跑过去","50%平安无事，50%失去12专注。",()=>{const lost=Math.random()<.5?12:0;if(lost)loseEventHp(lost);eventDone(lost?"差点绊倒，失去12专注。":"鞋带居然没松，平安无事。")},()=>canLoseEventHp(12)),
    eventOption("慢慢走","下场战斗开始时获得1层疲惫。",()=>{run.nextBattleFrail++;eventDone("下场战斗开始时获得1层疲惫。")})]}
];
function openSport(){showOnly("sportScreen")}
function chooseSport(type){
  if(type==="run"){run.maxHp+=5;finishNode("完成跑步训练，最大专注增加 5。");return}
  if(type==="basketball"){run.strength++;finishNode("完成篮球训练，获得 1 点力量。");return}
  run.dexterity++;finishNode("完成羽毛球训练，获得 1 点敏捷。");
}

function startBattle(kind){
  const encounterId=run.pendingNode?.encounterId||rollEncounter(kind),enemy=ENCOUNTERS[encounterId];
  pendingReward=null;pendingRelic=null;
  battle={
    kind:enemy.kind,encounterId,enemy,weak:0,frail:0,vulnerable:0,turn:1,energy:3,nextEnergy:0,nextDraw:0,block:0,playerHp:run.hp,enemyHp:enemy.hp,maxEnemyHp:enemy.hp,enemyBlock:0,enemyThought:0,intents:enemy.moves,
    draw:shuffle(run.deck.map(makeCard)),discard:[],exhaust:[],hand:[],powers:{},doubleNext:false,nextAttackBonus:0,
    exhaustedCount:0,locked:false,over:false,exhaustTriggered:false,delayTriggered:false,prototypeTriggered:false,thoughtAttackTriggers:0,
    nextCardDiscount:0,cardsPlayedTurn:0,penTriggered:false,waterTriggered:false,ringTriggered:false,keepBlockOnce:false,skillPowerTriggered:false,starTriggered:false,typesPlayed:new Set(),playingDamageBonus:0
  };
  $("quizTitle").textContent=enemy.name;$("battleEncounterTitle").textContent=NODE_TYPES[enemy.kind].name;
  $("enemyDescription").textContent=enemy.note;$("battleNodeLabel").textContent=NODE_TYPES[enemy.kind].name+" · 战斗节点";
  battle.frail=run.nextBattleFrail;run.nextBattleFrail=0;
  showOnly("battleScreen");startPlayerTurn(true);battleLog("遭遇“"+enemy.name+"”，请查看本回合意图。");
  if(hasRelic("gaokao_guide")&&!battle.over)setTimeout(openGuideChoice,180);
}
function startPlayerTurn(first){
  if(!first){if(battle.keepBlockOnce)battle.keepBlockOnce=false;else battle.block=0}
  battle.energy=3+battle.nextEnergy;battle.nextEnergy=0;battle.exhaustTriggered=false;battle.delayTriggered=false;
  battle.prototypeTriggered=false;battle.thoughtAttackTriggers=0;battle.cardsPlayedTurn=0;battle.skillPowerTriggered=false;battle.starTriggered=false;battle.typesPlayed=new Set();
  if(battle.powers.inertia)battle.enemyThought+=battle.powers.inertia;
  drawCards(5+battle.nextDraw+(first&&hasRelic("mp4")?1:0)+(first?run.nextBattleDraw:0));if(first)run.nextBattleDraw=0;battle.nextDraw=0;renderBattle();if(battle.playerHp<=0)loseBattle();
}
function drawCards(count){
  for(let i=0;i<count;i++){
    if(!battle.draw.length){if(!battle.discard.length)break;battle.draw=shuffle(battle.discard);battle.discard=[]}
    const card=battle.draw.pop();battle.hand.push(card);
    if(card.id==="sleepy"){const lost=Math.min(2,battle.playerHp);battle.playerHp-=lost;shakeScreen(lost);checkRing()}
    if(card.id==="brain_knot")battle.vulnerable++;
    if(card.id==="spilled_ink"){
      const others=battle.hand.filter(other=>other.uid!==card.uid);
      if(others.length){const discarded=others[Math.floor(Math.random()*others.length)];battle.hand=battle.hand.filter(other=>other.uid!==discarded.uid);battle.discard.push(discarded)}
    }
    if(battle.playerHp<=0)break;
  }
}
function printedCost(inst){
  if(CARDS[inst.id].type==="curse")return "—";
  return inst.upgraded&&["myth","review","restart","borrowed_notes"].includes(inst.id)?0:(inst.upgraded&&["universal_method","grade_star"].includes(inst.id)?1:CARDS[inst.id].cost);
}
function getCost(inst){
  if(CARDS[inst.id].type==="curse")return "—";
  let cost=printedCost(inst);
  if(inst.tempCost!=null)cost=inst.tempCost;
  if(battle&&battle.nextCardDiscount&&inst.id!=="break_bell")cost=Math.max(0,cost-battle.nextCardDiscount);
  return cost;
}
function selectionConfig(card){
  const id=typeof card==="string"?card:card.id,isUpgraded=typeof card==="object"&&card.upgraded;
  if(id==="rebuild")return {zone:"hand",min:0,max:1,title:"选择1张手牌作为废案",hint:"也可以不消耗，直接造成基础伤害。"};
  if(id==="tradeoff")return {zone:"hand",min:1,max:1,title:"选择1张手牌消耗",hint:"消耗后获得5点防御。"};
  if(id==="recycle_draft")return {zone:"hand",min:1,max:1,title:"选择1张手牌回收",hint:"消耗后抽2张牌。"};
  if(id==="restart")return {zone:"hand",min:0,max:99,title:"选择要推倒的手牌",hint:"重新抽取等量牌，并额外抽1张。"};
  if(id==="review")return {zone:"discard",min:1,max:1,filter:inst=>CARDS[inst.id].type==="attack",title:"选择1张攻击牌复盘",hint:"将其放入手牌，本回合费用减少1。"};
  if(id==="emergency")return {zone:"discard",min:0,max:2,title:"选择最多2张弃牌消耗",hint:"不选择也可以获得14点防御。"};
  if(id==="negation")return {zone:"exhaust",min:1,max:1,filter:inst=>isUpgraded||CARDS[inst.id].type==="attack",title:isUpgraded?"选择1张已消耗的牌":"选择1张已消耗的攻击牌",hint:"将其0费放入手牌，并再次获得消耗。"};
  if(id==="borrowed_notes")return {zone:"discard",min:1,max:1,title:"选择1张牌借阅",hint:"将其放到抽牌堆顶，然后抽1张牌。"};
  if(id==="sideline_guidance")return {zone:"hand",min:1,max:1,filter:inst=>CARDS[inst.id].type==="attack",title:"选择1张攻击牌接受指导",hint:"其每段攻击伤害在本场战斗中提高。"};
  if(id==="universal_method")return {zone:"draw",min:1,max:1,title:"选择1张牌加入手牌",hint:"该牌本回合费用变为0。"};
  return null;
}
function cardPlayable(inst){
  if(CARDS[inst.id].type==="curse")return false;
  if(battle.locked||battle.over||battle.energy<getCost(inst))return false;
  if(inst.id==="myth"&&battle.playerHp<=2)return false;
  if(inst.id==="overtime"&&battle.playerHp<=3)return false;
  const config=selectionConfig(inst);
  if(config&&config.min>0){
    const zone=battle[config.zone],candidates=zone.filter(other=>other.uid!==inst.uid&&(!config.filter||config.filter(other)));
    if(candidates.length<config.min)return false;
  }
  return true;
}
function prepareCardPlay(uidValue){
  const inst=battle.hand.find(card=>card.uid===uidValue);if(!inst||!cardPlayable(inst))return;
  const config=selectionConfig(inst);
  if(config){openSelection(inst,config);return}
  resolveCardPlay(inst,[]);
}
function openSelection(inst,config){
  const candidates=battle[config.zone].filter(other=>other.uid!==inst.uid&&(!config.filter||config.filter(other)));
  selection={cardUid:inst.uid,config,candidates,selected:new Set()};
  $("selectionTitle").textContent=config.title;$("selectionHint").textContent=config.hint;$("selectionModal").hidden=false;renderSelection();
}
function renderSelection(){
  const holder=$("selectionCards");holder.innerHTML="";
  selection.candidates.forEach(inst=>{
    const card=createCardElement(inst,false);
    if(selection.selected.has(inst.uid))card.classList.add("chosen-card");
    card.disabled=false;card.addEventListener("click",()=>{
      if(selection.selected.has(inst.uid))selection.selected.delete(inst.uid);
      else if(selection.selected.size<selection.config.max)selection.selected.add(inst.uid);
      else if(selection.config.max===1){selection.selected.clear();selection.selected.add(inst.uid)}
      renderSelection();
    });
    holder.appendChild(card);
  });
  $("confirmSelection").disabled=selection.selected.size<selection.config.min||selection.selected.size>selection.config.max;
}
function confirmSelection(){
  if(!selection||$("confirmSelection").disabled)return;
  const inst=battle.hand.find(card=>card.uid===selection.cardUid),selected=[...selection.selected].map(id=>selection.candidates.find(card=>card.uid===id)).filter(Boolean);
  $("selectionModal").hidden=true;selection=null;if(inst)resolveCardPlay(inst,selected);
}
function cancelSelection(){$("selectionModal").hidden=true;selection=null}
function openUtilityChoice(title,hint,items,onChoose){
  if(!items.length)return;utilityChoice={items,onChoose};$("utilityChoiceTitle").textContent=title;$("utilityChoiceHint").textContent=hint;
  const holder=$("utilityChoiceCards");holder.innerHTML="";
  items.forEach(inst=>{const card=createCardElement(inst,false);card.disabled=false;card.addEventListener("click",()=>{const choice=utilityChoice;utilityChoice=null;$("utilityChoiceModal").hidden=true;choice.onChoose(inst)});holder.appendChild(card)});
  $("utilityChoiceModal").hidden=false;
}
function openGuideChoice(){
  const options=battle.draw.splice(Math.max(0,battle.draw.length-3));
  openUtilityChoice("新高掌","从抽牌堆顶3张牌中选择1张加入手牌。",options,chosen=>{
    options.filter(card=>card.uid!==chosen.uid).forEach(card=>battle.draw.push(card));battle.hand.push(chosen);renderBattle();
  });
}
function chooseHandForTop(){
  if(!battle.hand.length)return;
  openUtilityChoice("模拟演练","选择1张手牌放到抽牌堆顶。",[...battle.hand],chosen=>{battle.hand=battle.hand.filter(card=>card.uid!==chosen.uid);battle.draw.push(chosen);renderBattle()});
}

function resolveCardPlay(inst,selected){
  const def=CARDS[inst.id],cost=getCost(inst);if(battle.energy<cost)return;
  const beforeEnergy=battle.energy,usedDiscount=battle.nextCardDiscount&&inst.id!=="break_bell";
  battle.energy-=cost;if(usedDiscount)battle.nextCardDiscount=0;battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);
  battle.playingDamageBonus=inst.damageBonus||0;let selectedUsed=false,postAction=null;
  switch(inst.id){
    case"quick":dealAttack(inst.upgraded?9:6);break;
    case"brainstorm":dealAttack(inst.upgraded?10:8);battle.enemyThought+=inst.upgraded?3:2;break;
    case"continuous":dealAttack(inst.upgraded?4:3,4);break;
    case"research":dealAttack(inst.upgraded?12:9);break;
    case"solve":{const active=battle.enemyThought>0;dealAttack(inst.upgraded?10:7);if(active)gainCardBlock(inst.upgraded?5:4);break}
    case"catch_gap":{const active=battle.enemyThought>0;dealAttack(inst.upgraded?9:6);battle.enemyThought+=active?2:1;break}
    case"rebuild":if(selected.length){exhaustSelected(selected,"hand");selectedUsed=true;dealAttack(inst.upgraded?17:13)}else dealAttack(inst.upgraded?7:5);break;
    case"combo":dealAttack(inst.upgraded?5:4,3+Math.min(2,Math.floor(battle.exhaustedCount/4)));break;
    case"showcase":dealAttack((inst.upgraded?18:14)+Math.min(inst.upgraded?24:20,battle.exhaust.length*2));break;
    case"ultimate":dealAttack(inst.upgraded?30:24);battle.enemyThought+=3;break;
    case"conjecture":{const layers=Math.min(3,battle.enemyThought);battle.enemyThought=0;dealAttack((inst.upgraded?15:12)+layers*(inst.upgraded?7:6));break}
    case"organize":gainCardBlock(inst.upgraded?8:5);break;
    case"myth":loseHp(2,true);battle.doubleNext=true;break;
    case"tradeoff":exhaustSelected(selected,"hand");selectedUsed=true;gainCardBlock(inst.upgraded?8:5);break;
    case"backup":gainCardBlock(inst.upgraded?11:8);break;
    case"seminar":battle.enemyThought+=inst.upgraded?3:2;break;
    case"review":returnFromDiscard(selected[0]);selectedUsed=true;break;
    case"recycle_draft":exhaustSelected(selected,"hand");selectedUsed=true;drawCards(inst.upgraded?3:2);break;
    case"restart":{const count=selected.length;exhaustSelected(selected,"hand");selectedUsed=true;drawCards(count+1);break}
    case"overtime":loseHp(inst.upgraded?2:3,true);battle.energy+=2;break;
    case"emergency":exhaustSelected(selected,"discard");selectedUsed=true;gainCardBlock(inst.upgraded?18:14);break;
    case"negation":returnFromExhaust(selected[0]);selectedUsed=true;break;
    case"draft_paper":drawCards(inst.upgraded?2:1);break;
    case"standard_steps":dealAttack(inst.upgraded?10:7);if(currentIntent().damage)gainCardBlock(inst.upgraded?4:3);break;
    case"temporary_barrier":{const noOtherSkill=!battle.hand.some(card=>CARDS[card.id].type==="skill");gainCardBlock((inst.upgraded?10:7)+(noOtherSkill?(inst.upgraded?3:2):0));break}
    case"borrowed_notes":{const chosen=selected[0];if(chosen){battle.discard=battle.discard.filter(card=>card.uid!==chosen.uid);battle.draw.push(chosen);drawCards(1)}break}
    case"break_bell":battle.nextCardDiscount=inst.upgraded?2:1;break;
    case"mock_drill":drawCards(inst.upgraded?3:2);postAction=chooseHandForTop;break;
    case"sideline_guidance":if(selected[0])selected[0].damageBonus+=(inst.upgraded?2:1);break;
    case"universal_method":{const chosen=selected[0];if(chosen){battle.draw=battle.draw.filter(card=>card.uid!==chosen.uid);chosen.tempCost=0;battle.hand.push(chosen)}break}
    default:applyPower(inst.id,inst.upgraded);
  }
  battle.playingDamageBonus=0;
  if(def.type==="power"){}
  else if(def.exhaust||inst.forcedExhaust)exhaustCard(inst,{played:true});
  else{inst.tempCost=null;inst.forcedExhaust=false;battle.discard.push(inst)}
  battle.cardsPlayedTurn++;battle.typesPlayed.add(def.type);
  if(hasRelic("pen")&&!battle.penTriggered&&battle.cardsPlayedTurn===3){battle.penTriggered=true;drawCards(1)}
  if(hasRelic("water_card")&&!battle.waterTriggered&&beforeEnergy>0&&battle.energy===0){battle.waterTriggered=true;battle.energy++}
  if(def.type==="skill"&&battle.powers.duty_schedule&&!battle.skillPowerTriggered){battle.skillPowerTriggered=true;gainBlock(battle.powers.duty_schedule)}
  if(battle.powers.grade_star&&!battle.starTriggered&&battle.typesPlayed.has("attack")&&battle.typesPlayed.has("skill")){battle.starTriggered=true;battle.nextEnergy+=battle.powers.grade_star;battle.nextDraw+=battle.powers.grade_star}
  if(battle.playerHp<=0){loseBattle();return}
  if(battle.enemyHp<=0){winBattle();return}
  battleLog("使用“"+def.name+"”。");renderBattle();if(postAction)setTimeout(postAction,80);
}
function exhaustSelected(selected,zone){
  selected.forEach(inst=>{
    battle[zone]=battle[zone].filter(card=>card.uid!==inst.uid);
    exhaustCard(inst,{selected:true});
  });
}
function returnFromDiscard(inst){
  if(!inst)return;battle.discard=battle.discard.filter(card=>card.uid!==inst.uid);
  inst.tempCost=Math.max(0,CARDS[inst.id].cost-1);battle.hand.push(inst);
}
function returnFromExhaust(inst){
  if(!inst)return;battle.exhaust=battle.exhaust.filter(card=>card.uid!==inst.uid);
  inst.tempCost=0;inst.forcedExhaust=true;battle.hand.push(inst);
}
function gainBlock(amount){battle.block+=amount}
function gainCardBlock(amount){gainBlock(Math.max(0,Math.floor((amount+run.dexterity)*(battle.frail>0?.75:1))))}
function loseHp(amount,fromCard){
  const lost=Math.min(amount,battle.playerHp);battle.playerHp-=lost;shakeScreen(lost);
  if(fromCard&&battle.powers.contest_body)battle.nextAttackBonus+=battle.powers.contest_body;
  checkRing();
}
function shakeScreen(damage){
  if(damage<=0||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return 0;
  const screen=$("battleScreen"),strength=Math.min(7,2+Math.sqrt(damage)*.8),vertical=Math.round(strength*.4);
  screen.style.setProperty("--shake-left",(-strength).toFixed(1)+"px");
  screen.style.setProperty("--shake-right",strength.toFixed(1)+"px");
  screen.style.setProperty("--shake-up",-vertical+"px");
  screen.style.setProperty("--shake-down",vertical+"px");
  screen.classList.remove("damage-shake");void screen.offsetWidth;screen.classList.add("damage-shake");
  if(shakeTimer)clearTimeout(shakeTimer);
  shakeTimer=setTimeout(()=>{screen.classList.remove("damage-shake");shakeTimer=null},320);
  return strength;
}
function checkRing(){if(hasRelic("ring")&&!battle.ringTriggered&&battle.playerHp<=run.maxHp*.5){battle.ringTriggered=true;battle.keepBlockOnce=true;gainBlock(12);battleLog("戒指触发，获得12点防御。")}}
function dealAttack(base,hits){
  hits=hits||1;
  const thought=battle.enemyThought>0,multiplier=(thought?1.5:1)*(battle.doubleNext?2:1)*(battle.weak>0?.75:1),bonus=battle.nextAttackBonus;
  let total=0;
  for(let i=0;i<hits;i++){
    let damage=Math.floor((base+run.strength+battle.playingDamageBonus+(i===0?bonus:0))*multiplier);
    const absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
    battle.enemyHp=Math.max(0,battle.enemyHp-damage);total+=damage;
  }
  battle.doubleNext=false;battle.nextAttackBonus=0;animateEnemy("-"+total);
  if(thought&&battle.powers.defense&&battle.thoughtAttackTriggers<battle.powers.defense){battle.thoughtAttackTriggers++;drawCards(1)}
}
function applyPower(id,upgraded){
  const values={defense:upgraded?2:1,inertia:upgraded?2:1,waste_value:upgraded?7:5,contest_body:upgraded?6:4,deadline:1,recycle_power:upgraded?4:3,thought_loop:upgraded?8:6,prototype:1,duty_schedule:upgraded?4:3,grade_star:1};
  battle.powers[id]=(battle.powers[id]||0)+values[id];if(id==="deadline"&&upgraded)battle.powers.deadline_draw=(battle.powers.deadline_draw||0)+1;if(id==="prototype"&&upgraded)battle.powers.prototype_upgraded=1;
}
function exhaustCard(inst,context){
  inst.tempCost=null;inst.forcedExhaust=false;battle.exhaust.push(inst);battle.exhaustedCount++;
  if(!battle.exhaustTriggered&&battle.powers.waste_value){battle.exhaustTriggered=true;gainBlock(battle.powers.waste_value)}
  if(battle.powers.recycle_power)dealEffectDamage(battle.powers.recycle_power);
  if(context.delay&&!battle.delayTriggered&&battle.powers.deadline){battle.delayTriggered=true;battle.nextEnergy+=battle.powers.deadline;battle.nextDraw+=battle.powers.deadline_draw||0}
  if(context.delay&&inst.id==="backup")gainCardBlock(inst.upgraded?7:5);
  if(CARDS[inst.id].type==="attack"&&!battle.prototypeTriggered&&battle.powers.prototype){
    battle.prototypeTriggered=true;
    for(let i=0;i<battle.powers.prototype;i++){const copy=makeCard({id:inst.id,upgraded:!!battle.powers.prototype_upgraded});copy.tempCost=0;copy.forcedExhaust=true;battle.hand.push(copy)}
  }
}
function dealEffectDamage(amount){
  let damage=amount,absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
  battle.enemyHp=Math.max(0,battle.enemyHp-damage);animateEnemy("-"+damage);
}
function currentIntent(offset=0){
  const turn=battle.turn-1+offset,intent={...battle.intents[turn%battle.intents.length]};
  let vulnerable=battle.vulnerable;
  for(let step=0;step<offset;step++){const previous=battle.intents[(battle.turn-1+step)%battle.intents.length];vulnerable=Math.max(0,vulnerable-1)+(previous.debuff==="vulnerable"?previous.stacks:0)}
  if(intent.damage)intent.damage=Math.floor((intent.damage+Math.floor(turn/battle.intents.length)*(battle.enemy.growth||0))*(vulnerable>0?1.5:1));
  const parts=[];
  if(intent.damage)parts.push("造成"+intent.damage+"点压力"+(intent.hits>1?"×"+intent.hits:""));
  if(intent.block)parts.push("获得"+intent.block+"点防御");
  if(intent.debuff)parts.push("施加"+intent.stacks+"回合"+DEBUFFS[intent.debuff].name);
  intent.text=parts.join("；");return intent;
}
function endPlayerTurn(){
  if(battle.locked||battle.over)return;battle.locked=true;
  const homework=battle.hand.filter(inst=>inst.id==="forgotten_homework").length;
  if(homework){const lost=Math.min(homework*3,battle.playerHp);battle.playerHp-=lost;shakeScreen(lost);checkRing()}
  const delayed=battle.hand.filter(inst=>CARDS[inst.id].delay);
  delayed.forEach(inst=>{battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);exhaustCard(inst,{delay:true})});
  battle.hand.forEach(inst=>{inst.tempCost=null;inst.forcedExhaust=false;battle.discard.push(inst)});battle.hand=[];
  if(battle.playerHp<=0){loseBattle();return}
  if(battle.enemyHp<=0){winBattle();return}
  renderBattle();setTimeout(enemyTurn,420);
}
function enemyTurn(){
  const intent=currentIntent();battle.enemyBlock=0;
  let total=0;
  for(let i=0;i<intent.hits;i++){
    const absorbed=Math.min(battle.block,intent.damage);battle.block-=absorbed;
    const taken=Math.min(battle.playerHp,intent.damage-absorbed);battle.playerHp-=taken;total+=taken;
  }
  if(total)shakeScreen(total);
  checkRing();
  if(intent.block)battle.enemyBlock+=intent.block;
  Object.keys(DEBUFFS).forEach(key=>{battle[key]=Math.max(0,battle[key]-1)});
  if(intent.debuff)battle[intent.debuff]+=intent.stacks;
  animateBattle(total?"压力 -"+total:"完全防住");
  battleLog("“"+intent.name+"”造成"+total+"点实际压力。");
  if(battle.enemyThought>0){battle.enemyThought--;if(battle.powers.thought_loop)dealEffectDamage(battle.powers.thought_loop)}
  if(battle.enemyHp<=0){winBattle();return}
  if(battle.playerHp<=0){loseBattle();return}
  battle.turn++;battle.locked=false;startPlayerTurn(false);
}
function renderBattle(){
  if(!battle)return;
  hideStatusTooltip();
  run.hp=battle.playerHp;
  $("battleTurn").textContent="第"+battle.turn+"回合";$("battleHpText").textContent=battle.playerHp+" / "+run.maxHp;
  $("battleHpBar").style.width=(battle.playerHp/run.maxHp*100)+"%";$("battleBlock").textContent=battle.block;
  $("battleStrength").textContent=run.strength;$("battleDexterity").textContent=run.dexterity;
  $("nextAttackState").textContent=battle.doubleNext?"双倍":(battle.nextAttackBonus?"+"+battle.nextAttackBonus:"无");
  $("quizHpText").textContent=battle.enemyHp+" / "+battle.maxEnemyHp;$("quizHpBar").style.width=(battle.enemyHp/battle.maxEnemyHp*100)+"%";
  $("battleEnergy").textContent=battle.energy;$("battleDraw").textContent=battle.draw.length;$("battleDiscard").textContent=battle.discard.length;$("battleExhaust").textContent=battle.exhaust.length;
  const thought=$("enemyThought");thought.hidden=battle.enemyThought===0;thought.querySelector("b").textContent=battle.enemyThought;
  const enemyBlock=$("enemyBlock");enemyBlock.hidden=battle.enemyBlock===0;enemyBlock.querySelector("b").textContent=battle.enemyBlock;
  const intent=currentIntent(),nextIntent=currentIntent(1);$("intentName").textContent=intent.name;$("intentText").textContent=intent.text+(hasRelic("iphone")?"；下回合："+nextIntent.name+"（"+nextIntent.text+"）":"");
  $("battleEndTurn").disabled=battle.locked||battle.over;
  renderPowers();renderHand();
  const statuses=$("playerDebuffs");statuses.innerHTML="";
  Object.entries(DEBUFFS).forEach(([key,def])=>{if(battle[key]>0){const tag=document.createElement("span");tag.textContent=def.name+" "+battle[key];setStatusHelp(tag,def.name,def.text+"，计算结果向下取整。剩余"+battle[key]+"回合；敌方行动后减少1回合。重复施加增加持续回合，不提高百分比。" );statuses.appendChild(tag)}});
  setStatusHelp($("battleStrength").parentElement,"力量","当前"+run.strength+"点。每点使攻击牌的每段基础伤害增加1，再计算思路、分心与双倍等倍率。操场获得的力量保留到本局结束。");
  setStatusHelp($("battleDexterity").parentElement,"敏捷","当前"+run.dexterity+"点。每次卡牌获得防御时额外增加等量防御，再计算疲惫。不增加圣遗物和天赋触发的防御。本局持续。");
  setStatusHelp($("battleBlock").parentElement,"防御","抵挡等量攻击压力，不能抵挡卡牌主动失去的生命。通常在下个玩家回合开始时清空；戒指触发时可保留1次。当前"+battle.block+"点。");
  setStatusHelp($("nextAttackState").parentElement,"思路增幅","下一次攻击结算："+(battle.doubleNext?"所有攻击段伤害翻倍。":"没有双倍效果。")+"首段额外基础伤害+"+battle.nextAttackBonus+"。攻击结算后清除；未使用时跨回合保留。");
  setStatusHelp($("enemyThought"),"思路（敌方减益）","敌人受到的攻击牌伤害增加50%，不增加天赋直接伤害。当前"+battle.enemyThought+"层；敌方行动后减少1层。层数表示持续时间，不叠加增伤倍率。");
  setStatusHelp($("enemyBlock"),"敌方防御","抵挡等量伤害，当前"+battle.enemyBlock+"点。在敌人下一次行动开始时清空，再获得该次意图提供的新防御。");
}
function setStatusHelp(element,name,text){
  element.dataset.statusName=name;element.dataset.statusHelp=text;element.tabIndex=0;element.classList.add("status-help");
}
let statusTooltipAnchor=null;
function hideStatusTooltip(){
  if(statusTooltipAnchor)statusTooltipAnchor.removeAttribute("aria-describedby");
  statusTooltipAnchor=null;$("statusTooltip").hidden=true;
}
function showStatusTooltip(element){
  hideStatusTooltip();statusTooltipAnchor=element;
  const box=$("statusTooltip");$("statusTooltipTitle").textContent=element.dataset.statusName;$("statusTooltipText").textContent=element.dataset.statusHelp;
  box.hidden=false;element.setAttribute("aria-describedby","statusTooltip");
  const rect=element.getBoundingClientRect(),size=box.getBoundingClientRect();
  box.style.left=Math.max(8,Math.min(rect.left,window.innerWidth-size.width-8))+"px";
  const below=rect.bottom+8;
  box.style.top=Math.max(8,below+size.height<=window.innerHeight-8?below:rect.top-size.height-8)+"px";
}
function powerHelp(id){
  const p=battle.powers,n=p[id];
  const descriptions={
    defense:`每回合前${n}次用攻击牌攻击拥有思路的敌人时，抽1张牌。本回合已触发${battle.thoughtAttackTriggers}次。`,
    inertia:`每个玩家回合开始时，给敌人施加${n}层思路。`,
    waste_value:`每回合首次消耗卡牌时获得${n}点防御。本回合${battle.exhaustTriggered?"已":"未"}触发。`,
    contest_body:`每次卡牌使你失去生命时，下一次攻击的首段额外增加${n}点基础伤害。可累计，攻击后清除。`,
    deadline:`每回合首次因拖延消耗卡牌时，下回合额外获得${n}点行动力`+(p.deadline_draw?`并多抽${p.deadline_draw}张牌`:"")+`。本回合${battle.delayTriggered?"已":"未"}触发。`,
    recycle_power:`每消耗1张牌，对敌人造成${n}点伤害。可被敌方防御抵挡，不受力量、思路、分心或双倍影响。`,
    thought_loop:`敌方行动后思路层数减少时，造成${n}点伤害。可被防御抵挡，不受攻击倍率影响；主动移除思路目前不触发。`,
    prototype:`每回合首次消耗攻击牌时，获得${n}张该牌的0费消耗复制品。复制品${p.prototype_upgraded?"为升级版":"为未升级版"}，0费仅限本回合。本回合${battle.prototypeTriggered?"已":"未"}触发。`,
    duty_schedule:`每回合首次打出技能牌时，获得${n}点防御。本回合${battle.skillPowerTriggered?"已":"未"}触发。`,
    grade_star:`同一回合打出过攻击和技能牌后，下回合额外获得${n}点行动力并多抽${n}张牌。每回合最多触发1次；本回合${battle.starTriggered?"已":"未"}触发。`
  };
  return descriptions[id]+" 天赋持续到本场战斗结束，数值已计入叠加效果。";
}
function renderPowers(){
  const names={defense:"公开答辩",inertia:"思维惯性",waste_value:"废案价值",contest_body:"竞赛体质",deadline:"截止效应",recycle_power:"化废为宝",thought_loop:"思路闭环",prototype:"原型迭代",duty_schedule:"值日安排",grade_star:"年级之星"};
  const holder=$("powerList"),entries=Object.keys(battle.powers).filter(id=>names[id]);holder.innerHTML="";
  if(!entries.length){holder.innerHTML="<small>暂无天赋</small>";return}
  entries.forEach(id=>{const span=document.createElement("span");span.textContent=names[id];setStatusHelp(span,names[id],powerHelp(id));holder.appendChild(span)});
}
function renderHand(){
  const holder=$("battleHand");holder.innerHTML="";
  battle.hand.forEach(inst=>{
    const card=createCardElement(inst,false);card.disabled=!cardPlayable(inst);card.addEventListener("click",()=>prepareCardPlay(inst.uid));holder.appendChild(card);
  });
}
function createCardElement(inst,reward,staticPreview=false){
  const def=CARDS[inst.id],division=cardDivision(def),button=document.createElement(staticPreview?"article":"button");if(!staticPreview)button.type="button";
  button.className="battle-card "+(def.colorless?"colorless-card ":"class-card ")+"division-"+division+" "+def.type+" rarity-card-"+def.rarity+(reward?" reward-card":"")+(inst.upgraded?" upgraded":"");
  const rarity='<span class="rarity-'+def.rarity+'">'+RARITY_LABEL[def.rarity]+"</span>";
  button.innerHTML='<span class="card-cost">'+(staticPreview?printedCost(inst):reward?def.cost:getCost(inst))+'</span><span class="card-division">'+DIVISION_LABEL[division]+'</span><p class="card-meta"><span class="card-type-label">'+TYPE_LABEL[def.type]+'</span><span class="card-rarity">'+rarity+'</span></p><h3>'+def.name+(inst.upgraded?"+":"")+'</h3>'+cardArtMarkup(inst.id)+'<p class="card-text">'+(inst.upgraded?UPGRADES[inst.id]:def.text)+(def.keyword?'<span class="keyword">'+def.keyword+"</span>":"")+"</p>";
  return button;
}
function battleLog(text){$("battleLog").textContent=text}
function animateEnemy(text){const enemy=$("quizEnemy");enemy.classList.remove("hit");void enemy.offsetWidth;enemy.classList.add("hit");animateBattle(text)}
function animateBattle(text){const el=$("battleFloat");el.textContent=text;el.classList.remove("show");void el.offsetWidth;el.classList.add("show")}
function winBattle(){
  if(battle.over)return;battle.over=true;battle.locked=true;run.hp=battle.playerHp;renderBattle();
  battleLog(battle.enemy.name+"已完成，正在结算奖励。");setTimeout(showRewards,600);
}
function loseBattle(){
  battle.over=true;battle.locked=true;run.hp=0;renderBattle();$("defeatModal").hidden=false;$("returnAfterDefeat").focus();
}
function returnFromDefeat(){$("defeatModal").hidden=true;battle=null;backToStart()}
function rollRarity(){const n=Math.random();return n<.7?"common":n<.9?"uncommon":"rare"}
function generateRewardCards(rarity=null,count=3){
  const ids=[];
  while(ids.length<count){
    const pickedRarity=rarity||rollRarity(),pool=Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===pickedRarity&&!ids.includes(id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)ids.push(id);
  }
  return ids;
}
function showRewards(){
  if(!pendingReward){const penalty=run.deck.filter(entry=>entry.id==="lost_meal_card").length*10,meal=Math.max(0,10+Math.floor(Math.random()*21)+(hasRelic("certificate")?10:0)-penalty);run.meal+=meal;pendingReward={cards:[],meal,picksRemaining:battle.kind==="battle"?1:2,round:1,elite:battle.kind!=="battle",boss:battle.kind==="boss"}}
  pendingReward.cards=pendingReward.boss?(pendingReward.round===1?generateRewardCards("rare",3):generateRewardCards("common",1)):generateRewardCards();$("mealReward").textContent=pendingReward.meal;
  $("rewardEyebrow").textContent=battle.enemy.name+" · 胜利";$("rewardTitle").textContent=pendingReward.boss?(pendingReward.round===1?"期末奖励：稀有卡3选1":"期末奖励：1张普通卡"):(pendingReward.elite?"第"+pendingReward.round+"次卡牌奖励":"选择1张卡牌");
  const holder=$("rewardCards");holder.innerHTML="";
  pendingReward.cards.forEach(id=>{
    const option=document.createElement("div");option.className="reward-option";
    option.appendChild(createCardElement(makeCard(id),true));
    const choose=document.createElement("button");choose.type="button";choose.className="primary-button";choose.textContent="选择"+CARDS[id].name;
    choose.addEventListener("click",()=>selectReward(id));option.appendChild(choose);holder.appendChild(option);
  });
  showOnly("rewardScreen");
}
function selectReward(id){
  if(!pendingReward||$("rewardScreen").hidden)return;
  if(id&&!pendingReward.cards.includes(id))return;
  if(id)run.deck.push(makeDeckEntry(id));pendingReward.picksRemaining--;
  if(pendingReward.picksRemaining>0){pendingReward.round++;showRewards();return}
  if(pendingReward.elite){showRelicReward();return}
  const message=id?"已将“"+CARDS[id].name+"”加入牌组。":"已跳过卡牌奖励，保留饭卡价值。";pendingReward=null;completeBattleRewards(message);
}
function rollRelicRarity(){return rollRarity()}
function showRelicReward(){
  const rarity=rollRelicRarity(),available=Object.keys(RELICS).filter(id=>!hasRelic(id)&&!RELICS[id].grade1),matching=available.filter(id=>RELICS[id].rarity===rarity),pool=matching.length?matching:available;
  pendingRelic=pendingReward.boss?"grade1_relic":pool[Math.floor(Math.random()*pool.length)]||null;const holder=$("relicRewardCard");holder.innerHTML="";
  if(pendingRelic){const relic=RELICS[pendingRelic];holder.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h2>'+relic.name+'</h2><p>'+relic.text+'</p>'}
  else holder.innerHTML="<h2>圣遗物已收集完毕</h2><p>当前版本中的圣遗物已经全部拥有。</p>";
  showOnly("relicRewardScreen");
}
function grantRelic(id){if(id&&!hasRelic(id))run.relics.push(id);updateRunHud()}
function claimRelicReward(skip=false){
  if($("relicRewardScreen").hidden||!pendingReward)return;
  const name=pendingRelic?RELICS[pendingRelic].name:"无";if(!skip)grantRelic(pendingRelic);pendingRelic=null;pendingReward=null;completeBattleRewards(skip?"已跳过圣遗物奖励。":name==="无"?"奖励结算完成。":"获得圣遗物“"+name+"”。");
}
function completeBattleRewards(message){
  run.battleCount++;let extra="";
  if(hasRelic("transcript")&&run.battleCount%3===0){const pool=run.deck.filter(card=>!card.upgraded&&CARDS[card.id].type!=="curse");if(pool.length){const card=pool[Math.floor(Math.random()*pool.length)];card.upgraded=true;extra=" 成绩单将“"+CARDS[card.id].name+"”升级了。"}}
  finishNode(message+extra);
  if(battle.kind==="boss"){$("finishTitle").textContent="高一学年通关";$("finishSummary").textContent="你击败了“"+battle.enemy.name+"”，完成了本层期末考试。";$("finishModal").hidden=false}
}

$("startForm").addEventListener("submit",event=>{event.preventDefault();const id=$("playerId").value.trim();if(!id){$("formError").textContent="请输入学生 ID 后开始游戏";$("playerId").focus();return}$("formError").textContent="";enterGame(id)});
$("playerId").addEventListener("input",()=>{$("formError").textContent=""});
$("openEncyclopedia").addEventListener("click",openEncyclopedia);
$("closeEncyclopedia").addEventListener("click",closeEncyclopedia);
$("encyclopediaCardsTab").addEventListener("click",()=>{encyclopediaTab="cards";renderEncyclopedia()});
$("encyclopediaRelicsTab").addEventListener("click",()=>{encyclopediaTab="relics";renderEncyclopedia()});
$("encyclopediaCardFilter").addEventListener("change",event=>{encyclopediaFilter=event.target.value;renderEncyclopedia()});
$("encyclopediaUpgrade").addEventListener("click",()=>{encyclopediaUpgrade=!encyclopediaUpgrade;renderEncyclopedia()});
$("newRun").addEventListener("click",backToStart);
$("restartMap").addEventListener("click",backToStart);
$("battleEndTurn").addEventListener("click",endPlayerTurn);
$("cancelSelection").addEventListener("click",cancelSelection);$("confirmSelection").addEventListener("click",confirmSelection);
$("returnAfterDefeat").addEventListener("click",returnFromDefeat);
$("chooseRest").addEventListener("click",restAtDorm);
$("chooseUpgrade").addEventListener("click",()=>openDeckAction("upgrade"));
$("cancelDeckAction").addEventListener("click",cancelDeckAction);
$("leaveCanteen").addEventListener("click",()=>finishNode("已离开食堂。"));
$("bingeButton").addEventListener("click",()=>openDeckAction("remove"));
document.querySelectorAll(".sport-option").forEach(button=>button.addEventListener("click",()=>chooseSport(button.dataset.sport)));
$("inspectDeck").addEventListener("click",openDeckView);
$("inspectRelics").addEventListener("click",openRelicDetails);
$("closeDeckView").addEventListener("click",()=>{$("deckViewModal").hidden=true});
$("closeCollection").addEventListener("click",closeCollectionView);
document.querySelectorAll(".pile-view-button").forEach(button=>button.addEventListener("click",()=>openPileView(button.dataset.pile)));
$("toggleUpgradePreview").addEventListener("click",toggleUpgradePreview);
$("claimRelic").addEventListener("click",()=>claimRelicReward(false));
$("skipCardReward").addEventListener("click",()=>selectReward(null));
$("skipRelicReward").addEventListener("click",()=>claimRelicReward(true));
updateRealTime();setInterval(updateRealTime,1000);
document.addEventListener("pointerover",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target)});
document.addEventListener("pointerout",event=>{const target=event.target.closest("[data-status-help]");if(target&&!target.contains(event.relatedTarget))hideStatusTooltip()});
document.addEventListener("focusin",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target)});
document.addEventListener("focusout",event=>{if(event.target.closest("[data-status-help]"))hideStatusTooltip()});
document.addEventListener("click",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target);else hideStatusTooltip()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){hideStatusTooltip();if(!$("encyclopediaModal").hidden)closeEncyclopedia()}});
document.addEventListener("scroll",hideStatusTooltip,true);
window.addEventListener("resize",hideStatusTooltip);
