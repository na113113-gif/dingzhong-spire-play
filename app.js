const NODE_TYPES={
  battle:{name:"上课",glyph:"课",detail:"战斗节点"},rest:{name:"食堂",glyph:"食",detail:"篝火节点"},
  event:{name:"超市",glyph:"超",detail:"随机节点"},sport:{name:"操场",glyph:"体",detail:"体育节点"},
  boss:{name:"期末",glyph:"期",detail:"本层 Boss"}
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
  prototype:{name:"原型迭代",type:"power",rarity:"rare",cost:2,text:"每回合首次消耗攻击牌时，将其0费消耗复制品加入手牌。"}
};
const STARTER_DECK=[..."quick,quick,quick,quick,organize,organize,organize,organize,brainstorm,myth".split(",")];
const ENEMY_INTENTS=[
  {name:"基础题",damage:6,hits:1,text:"造成6点压力"},
  {name:"连续小问",damage:4,hits:2,text:"造成4点压力2次"},
  {name:"重点检查",damage:10,hits:1,text:"造成10点压力"},
  {name:"限时作答",damage:6,hits:1,block:5,text:"造成6点压力，获得5点防御"},
  {name:"压轴小题",damage:14,hits:1,text:"造成14点压力"}
];
const ROWS=12,ROW_GAP=126,CANVAS_PAD=82;
let uid=0;
let run={nodes:[],edges:[],current:null,visited:new Set(),id:"",deck:[],hp:40,maxHp:40,meal:0,pendingNode:null};
let battle=null,selection=null,pendingReward=null;
const $=id=>document.getElementById(id);
const makeCard=id=>({id,uid:++uid,tempCost:null,forcedExhaust:false});
const shuffle=list=>{const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

function showOnly(id){
  ["startScreen","mapScreen","battleScreen","rewardScreen"].forEach(screen=>{$(screen).hidden=screen!==id});
}
function randomType(row){
  if(row===0)return "battle";
  const n=Math.random();
  if(n<.44)return "battle";if(n<.64)return "rest";if(n<.84)return "event";return "sport";
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
  if(node.type==="battle"){setTimeout(startBattle,180);return}
  $("mapTip").textContent="已进入"+NODE_TYPES[node.type].name+"。节点内容暂未开放，请沿亮起的连线继续。";
  if(node.type==="boss")setTimeout(()=>{$("finishModal").hidden=false},260);
}
function updateRunHud(){
  $("visitedText").textContent=run.visited.size;$("mealText").textContent=run.meal;$("deckCount").textContent=run.deck.length;
}
function enterGame(id){
  run.id=id;run.deck=[...STARTER_DECK];run.hp=40;run.maxHp=40;run.meal=0;
  $("displayId").textContent=id;$("battlePlayerId").textContent=id;showOnly("mapScreen");createMap();
}
function backToStart(){showOnly("startScreen");$("finishModal").hidden=true;$("playerId").focus()}

function startBattle(){
  battle={
    turn:1,energy:3,nextEnergy:0,block:0,playerHp:run.hp,enemyHp:52,maxEnemyHp:52,enemyBlock:0,enemyThought:0,
    draw:shuffle(run.deck.map(makeCard)),discard:[],exhaust:[],hand:[],powers:{},doubleNext:false,nextAttackBonus:0,
    exhaustedCount:0,locked:false,over:false,exhaustTriggered:false,delayTriggered:false,prototypeTriggered:false,thoughtAttackTriggers:0
  };
  showOnly("battleScreen");startPlayerTurn(true);battleLog("试卷已经发下，先观察题型。");
}
function startPlayerTurn(first){
  if(!first)battle.block=0;
  battle.energy=3+battle.nextEnergy;battle.nextEnergy=0;battle.exhaustTriggered=false;battle.delayTriggered=false;
  battle.prototypeTriggered=false;battle.thoughtAttackTriggers=0;
  if(battle.powers.inertia)battle.enemyThought+=battle.powers.inertia;
  drawCards(5);renderBattle();
}
function drawCards(count){
  for(let i=0;i<count;i++){
    if(!battle.draw.length){if(!battle.discard.length)break;battle.draw=shuffle(battle.discard);battle.discard=[]}
    battle.hand.push(battle.draw.pop());
  }
}
function getCost(inst){return inst.tempCost==null?CARDS[inst.id].cost:inst.tempCost}
function selectionConfig(id){
  if(id==="rebuild")return {zone:"hand",min:0,max:1,title:"选择1张手牌作为废案",hint:"也可以不消耗，直接造成基础伤害。"};
  if(id==="tradeoff")return {zone:"hand",min:1,max:1,title:"选择1张手牌消耗",hint:"消耗后获得5点防御。"};
  if(id==="recycle_draft")return {zone:"hand",min:1,max:1,title:"选择1张手牌回收",hint:"消耗后抽2张牌。"};
  if(id==="restart")return {zone:"hand",min:0,max:99,title:"选择要推倒的手牌",hint:"重新抽取等量牌，并额外抽1张。"};
  if(id==="review")return {zone:"discard",min:1,max:1,filter:inst=>CARDS[inst.id].type==="attack",title:"选择1张攻击牌复盘",hint:"将其放入手牌，本回合费用减少1。"};
  if(id==="emergency")return {zone:"discard",min:0,max:2,title:"选择最多2张弃牌消耗",hint:"不选择也可以获得14点防御。"};
  if(id==="negation")return {zone:"exhaust",min:1,max:1,filter:inst=>CARDS[inst.id].type==="attack",title:"选择1张已消耗的攻击牌",hint:"将其0费放入手牌，并再次获得消耗。"};
  return null;
}
function cardPlayable(inst){
  if(battle.locked||battle.over||battle.energy<getCost(inst))return false;
  if(inst.id==="myth"&&battle.playerHp<=2)return false;
  if(inst.id==="overtime"&&battle.playerHp<=3)return false;
  const config=selectionConfig(inst.id);
  if(config&&config.min>0){
    const zone=battle[config.zone],candidates=zone.filter(other=>other.uid!==inst.uid&&(!config.filter||config.filter(other)));
    if(candidates.length<config.min)return false;
  }
  return true;
}
function prepareCardPlay(uidValue){
  const inst=battle.hand.find(card=>card.uid===uidValue);if(!inst||!cardPlayable(inst))return;
  const config=selectionConfig(inst.id);
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

function resolveCardPlay(inst,selected){
  const def=CARDS[inst.id],cost=getCost(inst);if(battle.energy<cost)return;
  battle.energy-=cost;battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);
  let selectedUsed=false;
  switch(inst.id){
    case"quick":dealAttack(6);break;
    case"brainstorm":dealAttack(8);battle.enemyThought+=2;break;
    case"continuous":dealAttack(3,4);break;
    case"research":dealAttack(9);break;
    case"solve":{const active=battle.enemyThought>0;dealAttack(7);if(active)gainBlock(4);break}
    case"catch_gap":{const active=battle.enemyThought>0;dealAttack(6);battle.enemyThought+=active?2:1;break}
    case"rebuild":if(selected.length){exhaustSelected(selected,"hand");selectedUsed=true;dealAttack(13)}else dealAttack(5);break;
    case"combo":dealAttack(4,3+Math.min(2,Math.floor(battle.exhaustedCount/4)));break;
    case"showcase":dealAttack(14+Math.min(20,battle.exhaust.length*2));break;
    case"ultimate":dealAttack(24);battle.enemyThought+=3;break;
    case"conjecture":{const layers=Math.min(3,battle.enemyThought);battle.enemyThought=0;dealAttack(12+layers*6);break}
    case"organize":gainBlock(5);break;
    case"myth":loseHp(2,true);battle.doubleNext=true;break;
    case"tradeoff":exhaustSelected(selected,"hand");selectedUsed=true;gainBlock(5);break;
    case"backup":gainBlock(8);break;
    case"seminar":battle.enemyThought+=2;break;
    case"review":returnFromDiscard(selected[0]);selectedUsed=true;break;
    case"recycle_draft":exhaustSelected(selected,"hand");selectedUsed=true;drawCards(2);break;
    case"restart":{const count=selected.length;exhaustSelected(selected,"hand");selectedUsed=true;drawCards(count+1);break}
    case"overtime":loseHp(3,true);battle.energy+=2;break;
    case"emergency":exhaustSelected(selected,"discard");selectedUsed=true;gainBlock(14);break;
    case"negation":returnFromExhaust(selected[0]);selectedUsed=true;break;
    default:applyPower(inst.id);
  }
  if(def.type==="power"){}
  else if(def.exhaust||inst.forcedExhaust)exhaustCard(inst,{played:true});
  else{inst.tempCost=null;inst.forcedExhaust=false;battle.discard.push(inst)}
  if(battle.playerHp<=0){loseBattle();return}
  if(battle.enemyHp<=0){winBattle();return}
  battleLog("使用“"+def.name+"”。");renderBattle();
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
function loseHp(amount,fromCard){
  battle.playerHp=Math.max(0,battle.playerHp-amount);
  if(fromCard&&battle.powers.contest_body)battle.nextAttackBonus+=battle.powers.contest_body;
}
function dealAttack(base,hits){
  hits=hits||1;
  const thought=battle.enemyThought>0,multiplier=(thought?1.5:1)*(battle.doubleNext?2:1),bonus=battle.nextAttackBonus;
  let total=0;
  for(let i=0;i<hits;i++){
    let damage=Math.floor((base+(i===0?bonus:0))*multiplier);
    const absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
    battle.enemyHp=Math.max(0,battle.enemyHp-damage);total+=damage;
  }
  battle.doubleNext=false;battle.nextAttackBonus=0;animateEnemy("-"+total);
  if(thought&&battle.powers.defense&&battle.thoughtAttackTriggers<battle.powers.defense){battle.thoughtAttackTriggers++;drawCards(1)}
}
function applyPower(id){
  const values={defense:1,inertia:1,waste_value:5,contest_body:4,deadline:1,recycle_power:3,thought_loop:6,prototype:1};
  battle.powers[id]=(battle.powers[id]||0)+values[id];
}
function exhaustCard(inst,context){
  inst.tempCost=null;inst.forcedExhaust=false;battle.exhaust.push(inst);battle.exhaustedCount++;
  if(!battle.exhaustTriggered&&battle.powers.waste_value){battle.exhaustTriggered=true;gainBlock(battle.powers.waste_value)}
  if(battle.powers.recycle_power)dealEffectDamage(battle.powers.recycle_power);
  if(context.delay&&!battle.delayTriggered&&battle.powers.deadline){battle.delayTriggered=true;battle.nextEnergy+=battle.powers.deadline}
  if(context.delay&&inst.id==="backup")gainBlock(5);
  if(CARDS[inst.id].type==="attack"&&!battle.prototypeTriggered&&battle.powers.prototype){
    battle.prototypeTriggered=true;
    for(let i=0;i<battle.powers.prototype;i++){const copy=makeCard(inst.id);copy.tempCost=0;copy.forcedExhaust=true;battle.hand.push(copy)}
  }
}
function dealEffectDamage(amount){
  let damage=amount,absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
  battle.enemyHp=Math.max(0,battle.enemyHp-damage);animateEnemy("-"+damage);
}
function currentIntent(){return ENEMY_INTENTS[(battle.turn-1)%ENEMY_INTENTS.length]}
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
  $("nextAttackState").textContent=battle.doubleNext?"双倍":(battle.nextAttackBonus?"+"+battle.nextAttackBonus:"无");
  $("quizHpText").textContent=battle.enemyHp+" / "+battle.maxEnemyHp;$("quizHpBar").style.width=(battle.enemyHp/battle.maxEnemyHp*100)+"%";
  $("battleEnergy").textContent=battle.energy;$("battleDraw").textContent=battle.draw.length;$("battleDiscard").textContent=battle.discard.length;$("battleExhaust").textContent=battle.exhaust.length;
  const thought=$("enemyThought");thought.hidden=battle.enemyThought===0;thought.querySelector("b").textContent=battle.enemyThought;
  const enemyBlock=$("enemyBlock");enemyBlock.hidden=battle.enemyBlock===0;enemyBlock.querySelector("b").textContent=battle.enemyBlock;
  const intent=currentIntent();$("intentName").textContent=intent.name;$("intentText").textContent=intent.text;
  $("battleEndTurn").disabled=battle.locked||battle.over;
  renderPowers();renderHand();
}
function renderPowers(){
  const names={defense:"公开答辩",inertia:"思维惯性",waste_value:"废案价值",contest_body:"竞赛体质",deadline:"截止效应",recycle_power:"化废为宝",thought_loop:"思路闭环",prototype:"原型迭代"};
  const holder=$("powerList"),entries=Object.keys(battle.powers);holder.innerHTML="";
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
  button.className="battle-card "+def.type+(reward?" reward-card":"");
  const rarity='<span class="rarity-'+def.rarity+'">'+RARITY_LABEL[def.rarity]+"</span>";
  button.innerHTML='<span class="card-cost">'+(reward?def.cost:getCost(inst))+'</span><p class="card-meta">'+TYPE_LABEL[def.type]+" · "+rarity+"</p><h3>"+def.name+'</h3><p class="card-text">'+def.text+(def.keyword?'<span class="keyword">'+def.keyword+"</span>":"")+"</p>";
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
    const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>CARDS[id].rarity===rarity&&!ids.includes(id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)ids.push(id);
  }
  return ids;
}
function showRewards(){
  const meal=10+Math.floor(Math.random()*21);run.meal+=meal;
  pendingReward={cards:generateRewardCards(),meal};$("mealReward").textContent=meal;
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
  run.deck.push(id);pendingReward=null;updateRunHud();showOnly("mapScreen");renderMap();
  $("mapTip").textContent="已将“"+CARDS[id].name+"”加入牌组，并获得饭卡价值。请选择下一节点。";
}

$("startForm").addEventListener("submit",event=>{event.preventDefault();const id=$("playerId").value.trim();if(!id){$("formError").textContent="请输入学生 ID 后开始游戏";$("playerId").focus();return}$("formError").textContent="";enterGame(id)});
$("playerId").addEventListener("input",()=>{$("formError").textContent=""});
$("newRun").addEventListener("click",backToStart);$("rerollMap").addEventListener("click",createMap);
$("restartMap").addEventListener("click",()=>{$("finishModal").hidden=true;createMap()});
$("battleEndTurn").addEventListener("click",endPlayerTurn);
$("cancelSelection").addEventListener("click",cancelSelection);$("confirmSelection").addEventListener("click",confirmSelection);
$("retryBattle").addEventListener("click",()=>{$("defeatModal").hidden=true;run.hp=run.maxHp;startBattle()});

if(document.modelContext?.registerTool){
  try{Promise.resolve(document.modelContext.registerTool({
    name:"generate_new_school_route",title:"生成新路线",description:"为当前高一第一层重新生成随机校园路线地图。",
    inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute(){if($("mapScreen").hidden)throw new Error("当前不在地图界面");createMap();return {status:"generated",nodes:run.nodes.length,paths:run.edges.length}}
  })).catch(()=>{})}catch{}
}
