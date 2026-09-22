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
const TYPE_LABEL={attack:"攻击",skill:"技能",power:"天赋"};
const RARITY_LABEL={basic:"基础",common:"普通",uncommon:"罕见",rare:"稀有"};
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
  grade_star:{name:"年级之星",type:"power",rarity:"rare",cost:2,text:"若本回合打出过攻击牌和技能牌，下一回合获得1点行动力并额外抽1张牌。每回合最多触发1次。",colorless:true}
};
const RELICS={
  ring:{name:"戒指",rarity:"common",text:"每场战斗中，专注首次降至上限的50%或以下时，获得12点防御。"},
  rose:{name:"玫瑰花",rarity:"common",text:"在宿舍选择休息时，额外恢复专注上限的5%。"},
  pen:{name:"小米巨能写",rarity:"common",text:"每场战斗首次在同一回合打出第3张牌时，抽1张牌。"},
  gaokao_guide:{name:"新高掌",rarity:"uncommon",text:"战斗开始时，查看抽牌堆顶3张牌，选择1张加入手牌。"},
  mp4:{name:"mp4",rarity:"uncommon",text:"每场战斗第1回合额外抽1张牌。"},
  certificate:{name:"奖状",rarity:"uncommon",text:"完成战斗节点后，额外获得10点饭卡价值。"},
  water_card:{name:"无限水卡",rarity:"rare",text:"每场战斗首次在打出卡牌后行动力变为0时，获得1点行动力。"},
  iphone:{name:"iPhone18promax",rarity:"rare",text:"可以同时查看敌人本回合与下回合的意图。"},
  transcript:{name:"成绩单",rarity:"rare",text:"每完成3个战斗节点，随机升级牌组中1张尚未升级的卡牌。"}
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
let uid=0;
let deckUid=0;
let run={nodes:[],edges:[],current:null,visited:new Set(),id:"",deck:[],hp:80,maxHp:80,meal:400,strength:0,dexterity:0,relics:[],battleCount:0,pendingNode:null,dormVisits:0,bingeCount:0,shop:null};
let battle=null,selection=null,pendingReward=null,pendingRelic=null,deckAction=null,utilityChoice=null,upgradePreview=false;
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
  const n=Math.random();
  if(n<.34)return "battle";if(n<.44)return "exam";if(n<.58)return "dorm";if(n<.72)return "canteen";if(n<.86)return "event";return "sport";
}
function createMap(){
  const nodes=[],edges=[],byRow=[];
  for(let row=0;row<ROWS;row++){
    const count=row===0?3:(Math.random()<.48?3:4),rowNodes=[];
    for(let i=0;i<count;i++){
      const base=(i+1)/(count+1)*100;
      const node={id:row+"-"+i,row,x:Math.max(12,Math.min(88,base+(Math.random()*8-4))),y:CANVAS_PAD+(ROWS-row)*ROW_GAP,type:randomType(row)};
      nodes.push(node);rowNodes.push(node);
    }
    byRow.push(rowNodes);
  }
  const boss={id:"boss",row:ROWS,x:50,y:CANVAS_PAD,type:"boss"};nodes.push(boss);byRow.push([boss]);
  for(let row=0;row<ROWS;row++){
    const from=byRow[row],to=byRow[row+1];
    from.forEach(node=>{
      const ordered=[...to].sort((a,b)=>Math.abs(a.x-node.x)-Math.abs(b.x-node.x));
      addEdge(edges,node,ordered[0]);if(to.length>1&&Math.random()<.48)addEdge(edges,node,ordered[1]);
    });
    to.forEach(target=>{
      if(!edges.some(edge=>edge.to===target.id)){
        const nearest=[...from].sort((a,b)=>Math.abs(a.x-target.x)-Math.abs(b.x-target.x))[0];addEdge(edges,nearest,target);
      }
    });
  }
  run.nodes=nodes;run.edges=edges;run.current=null;run.visited=new Set();
  renderMap();updateRunHud();
  $("floorText").textContent="入口";$("routeStatus").textContent="从教学楼入口出发";
  $("mapTip").textContent="选择底部任一亮起的节点开始。进入上课节点将触发随堂小测。";
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
  const svg=$("routeLines");svg.setAttribute("viewBox","0 0 1000 "+height);svg.innerHTML="";
  run.edges.forEach(edge=>{
    const a=lookup[edge.from],b=lookup[edge.to],line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",a.x*10);line.setAttribute("y1",a.y);line.setAttribute("x2",b.x*10);line.setAttribute("y2",b.y);
    line.setAttribute("class","route-line "+(run.visited.has(edge.from)&&run.visited.has(edge.to)?"visited":""));svg.appendChild(line);
  });
  const holder=$("mapNodes");holder.innerHTML="";
  run.nodes.forEach(node=>{
    const type=NODE_TYPES[node.type],state=nodeState(node),button=document.createElement("button");
    button.type="button";button.className="map-node "+node.type+" "+state;button.style.left=node.x+"%";button.style.top=node.y+"px";
    button.disabled=state!=="available";button.setAttribute("aria-label",type.name+"，"+type.detail+(state==="available"?"，可以进入":""));
    button.innerHTML='<span class="glyph">'+type.glyph+"</span><small>"+type.name+"</small>";
    button.addEventListener("click",()=>chooseNode(node));holder.appendChild(button);
  });
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
  if(node.type==="dorm"){setTimeout(openDorm,180);return}
  if(node.type==="canteen"){setTimeout(openCanteen,180);return}
  if(node.type==="event"){setTimeout(openEvent,180);return}
  if(node.type==="sport"){setTimeout(openSport,180);return}
  $("mapTip").textContent="已进入"+NODE_TYPES[node.type].name+"。节点内容暂未开放，请沿亮起的连线继续。";
  if(node.type==="boss")setTimeout(()=>{$("finishModal").hidden=false},260);
}
function updateRunHud(){
  $("visitedText").textContent=run.visited.size;$("mealText").textContent=run.meal;$("deckCount").textContent=run.deck.length;
  $("strengthText").textContent=run.strength;$("dexterityText").textContent=run.dexterity;
  $("relicCount").textContent=run.relics.length;renderRunRelics();
  const hpText=document.querySelector(".profile-panel .status-line b"),hpBar=document.querySelector(".profile-panel .status-bar i");
  if(hpText)hpText.textContent=run.hp+" / "+run.maxHp;if(hpBar)hpBar.style.width=(run.hp/run.maxHp*100)+"%";
}
function enterGame(id){
  run.id=id;run.deck=STARTER_DECK.map(makeDeckEntry);run.hp=80;run.maxHp=80;run.meal=400;run.strength=0;run.dexterity=0;run.relics=[];run.battleCount=0;run.dormVisits=0;run.bingeCount=0;run.shop=null;
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
    const preview=upgradePreview&&!entry.upgraded,inst=makeCard({...entry,upgraded:entry.upgraded||upgradePreview}),card=createCardElement(inst,false);
    if(preview){card.classList.add("previewing");const label=document.createElement("span");label.className="preview-label";label.textContent="升级预览";card.querySelector(".card-text").appendChild(label)}
    card.disabled=false;holder.appendChild(card);
  });
}
function toggleUpgradePreview(){
  upgradePreview=!upgradePreview;$("toggleUpgradePreview").setAttribute("aria-pressed",String(upgradePreview));
  $("toggleUpgradePreview").textContent=upgradePreview?"显示当前效果":"显示升级后效果";renderDeckView();
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
  $("chooseRest").textContent="开始"+name;$("chooseUpgrade").disabled=!run.deck.some(card=>!card.upgraded);
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
  const entries=mode==="upgrade"?run.deck.filter(card=>!card.upgraded):run.deck,holder=$("deckActionCards");holder.innerHTML="";
  if(!entries.length){holder.innerHTML='<p class="deck-empty">没有可以选择的卡牌。</p>'}
  entries.forEach(entry=>{const card=createCardElement(makeCard(entry),false);card.disabled=false;card.addEventListener("click",()=>completeDeckAction(entry.deckUid));holder.appendChild(card)});
  $("deckActionModal").hidden=false;
}
function completeDeckAction(targetUid){
  if(!deckAction)return;
  if(deckAction.mode==="upgrade"){
    const entry=run.deck.find(card=>card.deckUid===targetUid);if(!entry)return;entry.upgraded=true;run.dormVisits++;$("deckActionModal").hidden=true;deckAction=null;
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
  const relicPool=shuffle(Object.keys(RELICS).filter(id=>!hasRelic(id))).slice(0,3);
  run.shop={cards,colorless,relics:relicPool.map(id=>({id,price:340+Math.floor(Math.random()*21),sold:false})),foods:Array.from({length:3},(_,index)=>({name:"食物槽位 "+(index+1)}))};
}
function openCanteen(){generateShop();showOnly("canteenScreen");renderShop()}
function renderShop(){
  $("shopMeal").textContent=run.meal;
  const cardHolder=$("classShopCards");cardHolder.innerHTML="";
  run.shop.cards.forEach(item=>{
    const def=CARDS[item.id],box=document.createElement("article");box.className="shop-item"+(item.sold?" sold":"");
    box.innerHTML='<span class="rarity-tag">'+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</span><h3>'+def.name+'</h3><p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';
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
  run.shop.colorless.forEach(item=>{const def=CARDS[item.id],box=document.createElement("article");box.className="shop-item colorless-card"+(item.sold?" sold":"");box.innerHTML='<small>'+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</small><h3>'+def.name+'</h3><p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';const button=box.querySelector("button");button.disabled=item.sold||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;run.deck.push(makeDeckEntry(item.id));item.sold=true;renderShop()});holder.appendChild(box)});
}
function renderRelicShop(){
  const holder=$("relicShopItems");holder.innerHTML="";
  run.shop.relics.forEach(item=>{const relic=RELICS[item.id],box=document.createElement("article");box.className="shop-item relic-item"+(item.sold?" sold":"");box.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h3>'+relic.name+'</h3><p>'+relic.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已获得":"购买")+'</button></div>';const button=box.querySelector("button");button.disabled=item.sold||hasRelic(item.id)||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;grantRelic(item.id);item.sold=true;renderShop()});holder.appendChild(box)});
}

function openEvent(){
  const slot=String(1+Math.floor(Math.random()*6)).padStart(2,"0");
  $("eventTitle").textContent="未命名事件 "+slot;showOnly("eventScreen");
}
function openSport(){showOnly("sportScreen")}
function chooseSport(type){
  if(type==="run"){run.maxHp+=5;finishNode("完成跑步训练，最大专注增加 5。");return}
  if(type==="basketball"){run.strength++;finishNode("完成篮球训练，获得 1 点力量。");return}
  run.dexterity++;finishNode("完成羽毛球训练，获得 1 点敏捷。");
}

function startBattle(kind){
  const elite=kind==="exam";
  battle={
    kind:elite?"exam":"battle",turn:1,energy:3,nextEnergy:0,nextDraw:0,block:0,playerHp:run.hp,enemyHp:elite?90:52,maxEnemyHp:elite?90:52,enemyBlock:0,enemyThought:0,intents:elite?EXAM_INTENTS:ENEMY_INTENTS,
    draw:shuffle(run.deck.map(makeCard)),discard:[],exhaust:[],hand:[],powers:{},doubleNext:false,nextAttackBonus:0,
    exhaustedCount:0,locked:false,over:false,exhaustTriggered:false,delayTriggered:false,prototypeTriggered:false,thoughtAttackTriggers:0,
    nextCardDiscount:0,cardsPlayedTurn:0,penTriggered:false,waterTriggered:false,ringTriggered:false,keepBlockOnce:false,skillPowerTriggered:false,starTriggered:false,typesPlayed:new Set(),playingDamageBonus:0
  };
  $("quizTitle").textContent=elite?"月考试卷":"随堂小测";$("battleEncounterTitle").textContent=elite?"月考":"随堂小测";
  showOnly("battleScreen");startPlayerTurn(true);battleLog(elite?"月考试卷已经发下，题量和压力明显提升。":"试卷已经发下，先观察题型。");
  if(hasRelic("gaokao_guide"))setTimeout(openGuideChoice,180);
}
function startPlayerTurn(first){
  if(!first){if(battle.keepBlockOnce)battle.keepBlockOnce=false;else battle.block=0}
  battle.energy=3+battle.nextEnergy;battle.nextEnergy=0;battle.exhaustTriggered=false;battle.delayTriggered=false;
  battle.prototypeTriggered=false;battle.thoughtAttackTriggers=0;battle.cardsPlayedTurn=0;battle.skillPowerTriggered=false;battle.starTriggered=false;battle.typesPlayed=new Set();
  if(battle.powers.inertia)battle.enemyThought+=battle.powers.inertia;
  drawCards(5+battle.nextDraw+(first&&hasRelic("mp4")?1:0));battle.nextDraw=0;renderBattle();
}
function drawCards(count){
  for(let i=0;i<count;i++){
    if(!battle.draw.length){if(!battle.discard.length)break;battle.draw=shuffle(battle.discard);battle.discard=[]}
    battle.hand.push(battle.draw.pop());
  }
}
function getCost(inst){
  let cost=inst.upgraded&&["myth","review","restart","borrowed_notes"].includes(inst.id)?0:(inst.upgraded&&["universal_method","grade_star"].includes(inst.id)?1:CARDS[inst.id].cost);
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
function gainCardBlock(amount){gainBlock(amount+run.dexterity)}
function loseHp(amount,fromCard){
  battle.playerHp=Math.max(0,battle.playerHp-amount);
  if(fromCard&&battle.powers.contest_body)battle.nextAttackBonus+=battle.powers.contest_body;
  checkRing();
}
function checkRing(){if(hasRelic("ring")&&!battle.ringTriggered&&battle.playerHp<=run.maxHp*.5){battle.ringTriggered=true;battle.keepBlockOnce=true;gainBlock(12);battleLog("戒指触发，获得12点防御。")}}
function dealAttack(base,hits){
  hits=hits||1;
  const thought=battle.enemyThought>0,multiplier=(thought?1.5:1)*(battle.doubleNext?2:1),bonus=battle.nextAttackBonus;
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
function currentIntent(offset){return battle.intents[(battle.turn-1+(offset||0))%battle.intents.length]}
function endPlayerTurn(){
  if(battle.locked||battle.over)return;battle.locked=true;
  const delayed=battle.hand.filter(inst=>CARDS[inst.id].delay);
  delayed.forEach(inst=>{battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);exhaustCard(inst,{delay:true})});
  battle.hand.forEach(inst=>{inst.tempCost=null;inst.forcedExhaust=false;battle.discard.push(inst)});battle.hand=[];
  if(battle.enemyHp<=0){winBattle();return}
  renderBattle();setTimeout(enemyTurn,420);
}
function enemyTurn(){
  const intent=currentIntent();battle.enemyBlock=0;
  let total=0;
  for(let i=0;i<intent.hits;i++){
    const absorbed=Math.min(battle.block,intent.damage);battle.block-=absorbed;
    const taken=intent.damage-absorbed;battle.playerHp=Math.max(0,battle.playerHp-taken);total+=taken;
  }
  checkRing();
  if(intent.block)battle.enemyBlock+=intent.block;
  animateBattle(total?"压力 -"+total:"完全防住");
  battleLog("“"+intent.name+"”造成"+total+"点实际压力。");
  if(battle.enemyThought>0){battle.enemyThought--;if(battle.powers.thought_loop)dealEffectDamage(battle.powers.thought_loop)}
  if(battle.enemyHp<=0){winBattle();return}
  if(battle.playerHp<=0){loseBattle();return}
  battle.turn++;battle.locked=false;startPlayerTurn(false);
}
function renderBattle(){
  if(!battle)return;
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
}
function renderPowers(){
  const names={defense:"公开答辩",inertia:"思维惯性",waste_value:"废案价值",contest_body:"竞赛体质",deadline:"截止效应",recycle_power:"化废为宝",thought_loop:"思路闭环",prototype:"原型迭代",duty_schedule:"值日安排",grade_star:"年级之星"};
  const holder=$("powerList"),entries=Object.keys(battle.powers).filter(id=>names[id]);holder.innerHTML="";
  if(!entries.length){holder.innerHTML="<small>暂无天赋</small>";return}
  entries.forEach(id=>{const span=document.createElement("span");span.textContent=names[id];holder.appendChild(span)});
}
function renderHand(){
  const holder=$("battleHand");holder.innerHTML="";
  battle.hand.forEach(inst=>{
    const card=createCardElement(inst,false);card.disabled=!cardPlayable(inst);card.addEventListener("click",()=>prepareCardPlay(inst.uid));holder.appendChild(card);
  });
}
function createCardElement(inst,reward){
  const def=CARDS[inst.id],button=document.createElement("button");button.type="button";
  button.className="battle-card "+(def.colorless?"colorless-card ":"class-card ")+def.type+(reward?" reward-card":"")+(inst.upgraded?" upgraded":"");
  const rarity='<span class="rarity-'+def.rarity+'">'+RARITY_LABEL[def.rarity]+"</span>";
  button.innerHTML='<span class="card-cost">'+(reward?def.cost:getCost(inst))+'</span><p class="card-meta">'+TYPE_LABEL[def.type]+" · "+rarity+"</p><h3>"+def.name+(inst.upgraded?"+":"")+'</h3><p class="card-text">'+(inst.upgraded?UPGRADES[inst.id]:def.text)+(def.keyword?'<span class="keyword">'+def.keyword+"</span>":"")+"</p>";
  return button;
}
function battleLog(text){$("battleLog").textContent=text}
function animateEnemy(text){const enemy=$("quizEnemy");enemy.classList.remove("hit");void enemy.offsetWidth;enemy.classList.add("hit");animateBattle(text)}
function animateBattle(text){const el=$("battleFloat");el.textContent=text;el.classList.remove("show");void el.offsetWidth;el.classList.add("show")}
function winBattle(){
  if(battle.over)return;battle.over=true;battle.locked=true;run.hp=battle.playerHp;renderBattle();
  battleLog("随堂小测完成，正在结算奖励。");setTimeout(showRewards,600);
}
function loseBattle(){
  battle.over=true;battle.locked=true;run.hp=0;renderBattle();$("defeatModal").hidden=false;
}
function rollRarity(){const n=Math.random();return n<.7?"common":n<.9?"uncommon":"rare"}
function generateRewardCards(){
  const ids=[];
  while(ids.length<3){
    const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===rarity&&!ids.includes(id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)ids.push(id);
  }
  return ids;
}
function showRewards(){
  if(!pendingReward){const meal=10+Math.floor(Math.random()*21)+(hasRelic("certificate")?10:0);run.meal+=meal;pendingReward={cards:[],meal,picksRemaining:battle.kind==="exam"?2:1,round:1,elite:battle.kind==="exam"}}
  pendingReward.cards=generateRewardCards();$("mealReward").textContent=pendingReward.meal;
  $("rewardEyebrow").textContent=pendingReward.elite?"月考节点完成":"上课节点完成";$("rewardTitle").textContent=pendingReward.elite?"第"+pendingReward.round+"次卡牌奖励":"选择1张卡牌";
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
  run.deck.push(makeDeckEntry(id));pendingReward.picksRemaining--;
  if(pendingReward.picksRemaining>0){pendingReward.round++;showRewards();return}
  if(pendingReward.elite){showRelicReward();return}
  const cardName=CARDS[id].name;pendingReward=null;completeBattleRewards("已将“"+cardName+"”加入牌组，并获得饭卡价值。");
}
function rollRelicRarity(){return rollRarity()}
function showRelicReward(){
  const rarity=rollRelicRarity(),available=Object.keys(RELICS).filter(id=>!hasRelic(id)),matching=available.filter(id=>RELICS[id].rarity===rarity),pool=matching.length?matching:available;
  pendingRelic=pool[Math.floor(Math.random()*pool.length)]||null;const holder=$("relicRewardCard");holder.innerHTML="";
  if(pendingRelic){const relic=RELICS[pendingRelic];holder.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h2>'+relic.name+'</h2><p>'+relic.text+'</p>'}
  else holder.innerHTML="<h2>圣遗物已收集完毕</h2><p>当前版本中的圣遗物已经全部拥有。</p>";
  showOnly("relicRewardScreen");
}
function grantRelic(id){if(id&&!hasRelic(id))run.relics.push(id);updateRunHud()}
function claimRelicReward(){
  const name=pendingRelic?RELICS[pendingRelic].name:"无";grantRelic(pendingRelic);pendingRelic=null;pendingReward=null;completeBattleRewards(name==="无"?"已完成月考奖励结算。":"获得圣遗物“"+name+"”。");
}
function completeBattleRewards(message){
  run.battleCount++;let extra="";
  if(hasRelic("transcript")&&run.battleCount%3===0){const pool=run.deck.filter(card=>!card.upgraded);if(pool.length){const card=pool[Math.floor(Math.random()*pool.length)];card.upgraded=true;extra=" 成绩单将“"+CARDS[card.id].name+"”升级了。"}}
  finishNode(message+extra);
}

$("startForm").addEventListener("submit",event=>{event.preventDefault();const id=$("playerId").value.trim();if(!id){$("formError").textContent="请输入学生 ID 后开始游戏";$("playerId").focus();return}$("formError").textContent="";enterGame(id)});
$("playerId").addEventListener("input",()=>{$("formError").textContent=""});
$("newRun").addEventListener("click",backToStart);$("rerollMap").addEventListener("click",createMap);
$("restartMap").addEventListener("click",()=>{$("finishModal").hidden=true;createMap()});
$("battleEndTurn").addEventListener("click",endPlayerTurn);
$("cancelSelection").addEventListener("click",cancelSelection);$("confirmSelection").addEventListener("click",confirmSelection);
$("retryBattle").addEventListener("click",()=>{$("defeatModal").hidden=true;run.hp=run.maxHp;startBattle(run.pendingNode?.type==="exam"?"exam":"battle")});
$("chooseRest").addEventListener("click",restAtDorm);
$("chooseUpgrade").addEventListener("click",()=>openDeckAction("upgrade"));
$("cancelDeckAction").addEventListener("click",cancelDeckAction);
$("leaveCanteen").addEventListener("click",()=>finishNode("已离开食堂。"));
$("bingeButton").addEventListener("click",()=>openDeckAction("remove"));
$("leaveEvent").addEventListener("click",()=>finishNode("已离开超市，事件内容等待设计。"));
document.querySelectorAll(".sport-option").forEach(button=>button.addEventListener("click",()=>chooseSport(button.dataset.sport)));
$("inspectDeck").addEventListener("click",openDeckView);
$("inspectRelics").addEventListener("click",openRelicDetails);
$("closeDeckView").addEventListener("click",()=>{$("deckViewModal").hidden=true});
$("closeCollection").addEventListener("click",closeCollectionView);
document.querySelectorAll(".pile-view-button").forEach(button=>button.addEventListener("click",()=>openPileView(button.dataset.pile)));
$("toggleUpgradePreview").addEventListener("click",toggleUpgradePreview);
$("claimRelic").addEventListener("click",claimRelicReward);
updateRealTime();setInterval(updateRealTime,1000);

if(document.modelContext?.registerTool){
  try{Promise.resolve(document.modelContext.registerTool({
    name:"generate_new_school_route",title:"生成新路线",description:"为当前高一第一层重新生成随机校园路线地图。",
    inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute(){if($("mapScreen").hidden)throw new Error("当前不在地图界面");createMap();return {status:"generated",nodes:run.nodes.length,paths:run.edges.length}}
  })).catch(()=>{})}catch{}
}
