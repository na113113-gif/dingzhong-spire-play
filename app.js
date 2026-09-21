const CARD_LIBRARY = {
  answer: { id:"answer", name:"快速作答", type:"attack", label:"攻击", cost:1, value:6, text:"推进 <b>6</b> 点测验进度。" },
  outline: { id:"outline", name:"整理思路", type:"defend", label:"防御", cost:1, value:5, text:"获得 <b>5</b> 点思路防御。" }
};
const enemyMoves = [
  {name:"基础题", damage:7, quote:"“请独立作答，时间十五分钟。”"},
  {name:"连续追问", damage:9, quote:"“写出过程，只有答案不计分。”"},
  {name:"压轴题", damage:12, quote:"“最后一题，请合理安排时间。”"}
];
let state;
const $ = id => document.getElementById(id);

function freshState(){
  const deck = [...Array(5).fill("answer"), ...Array(5).fill("outline")];
  return { playerHp:40, maxPlayerHp:40, block:0, enemyHp:46, maxEnemyHp:46, energy:3, turn:1, move:0, draw:shuffle(deck), discard:[], hand:[], over:false, locked:false };
}
function shuffle(cards){
  const a=[...cards];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function drawCards(count){
  for(let i=0;i<count;i++){
    if(!state.draw.length){state.draw=shuffle(state.discard);state.discard=[]}
    if(state.draw.length) state.hand.push(state.draw.pop());
  }
}
function startGame(){
  state=freshState(); drawCards(5); $("resultModal").hidden=true; log("铃声响起，试卷落在桌面上。"); render();
}
function playCard(index){
  if(state.over||state.locked) return;
  const id=state.hand[index], card=CARD_LIBRARY[id];
  if(!card||state.energy<card.cost) return;
  state.energy-=card.cost;
  state.hand.splice(index,1); state.discard.push(id);
  if(card.type==="attack"){
    state.enemyHp=Math.max(0,state.enemyHp-card.value);
    animateHit(`-${card.value}`); log(`你使用“${card.name}”，测验进度推进 ${card.value} 点。`);
  } else {
    state.block+=card.value; animateFloat(`防 +${card.value}`); log(`你使用“${card.name}”，理清了 ${card.value} 点思路。`);
  }
  if(state.enemyHp<=0){finish(true);return}
  render();
}
function endTurn(){
  if(state.over||state.locked) return;
  state.locked=true; render();
  const move=enemyMoves[state.move];
  const absorbed=Math.min(state.block,move.damage), taken=move.damage-absorbed;
  state.playerHp=Math.max(0,state.playerHp-taken);
  animateFloat(taken?`压力 -${taken}`:`完全防住`);
  log(absorbed ? `“${move.name}”造成 ${move.damage} 点压力，思路抵消 ${absorbed} 点。` : `“${move.name}”造成 ${move.damage} 点压力。`);
  state.block=0;
  render();
  setTimeout(()=>{
    if(state.playerHp<=0){finish(false);return}
    state.discard.push(...state.hand); state.hand=[];
    state.turn++; state.move=(state.move+1)%enemyMoves.length; state.energy=3; drawCards(5); state.locked=false;
    log(`第 ${state.turn} 回合：重新组织答案。`); render();
  },520);
}
function finish(won){
  state.over=true; state.locked=true; render();
  $("resultKicker").textContent=won?"关卡完成":"专注耗尽";
  $("resultTitle").textContent=won?"下课铃响了":"需要重新作答";
  $("resultText").textContent=won?`你用 ${state.turn} 回合完成了第一次随堂测验。`:"这次压力超过了承受范围，调整攻防节奏再试一次。";
  setTimeout(()=>{$("resultModal").hidden=false;$("restartModal").focus()},450);
}
function render(){
  $("playerHpText").textContent=`${state.playerHp} / ${state.maxPlayerHp}`;
  $("playerHpBar").style.width=`${100*state.playerHp/state.maxPlayerHp}%`;
  $("playerBlock").textContent=state.block; $("playerBlockLine").classList.toggle("active",state.block>0);
  $("enemyHpText").textContent=`${state.enemyHp} / ${state.maxEnemyHp}`;
  $("enemyHpBar").style.width=`${100*state.enemyHp/state.maxEnemyHp}%`;
  $("energyNow").textContent=state.energy; $("turnLabel").textContent=`第 ${state.turn} 回合`;
  const move=enemyMoves[state.move];
  $("intentText").textContent=`${move.name} · 造成 ${move.damage} 点压力`;
  $("enemyQuote").textContent=move.quote;
  $("drawCount").textContent=state.draw.length; $("discardCount").textContent=state.discard.length;
  $("endTurn").disabled=state.locked;
  const hand=$("hand"); hand.innerHTML="";
  state.hand.forEach((id,index)=>{
    const card=CARD_LIBRARY[id], button=document.createElement("button");
    button.type="button"; button.className=`game-card ${card.type}`; button.disabled=state.locked||state.energy<card.cost;
    button.setAttribute("aria-label",`${card.name}，消耗${card.cost}点行动力`);
    button.innerHTML=`<span class="cost">${card.cost}</span><p class="type">${card.label}</p><h3>${card.name}</h3><p>${card.text}</p>`;
    button.addEventListener("click",()=>playCard(index)); hand.appendChild(button);
  });
}
function log(text){$("combatLog").textContent=text}
function animateFloat(text){const el=$("floatText");el.textContent=text;el.classList.remove("show");void el.offsetWidth;el.classList.add("show")}
function animateHit(text){$("enemyCard").classList.remove("hit");void $("enemyCard").offsetWidth;$("enemyCard").classList.add("hit");animateFloat(text)}

$("endTurn").addEventListener("click",endTurn);
$("restartTop").addEventListener("click",startGame);
$("restartModal").addEventListener("click",startGame);
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="e")endTurn()});

if(document.modelContext?.registerTool){
  const tool={name:"restart_classroom_battle",title:"重新开始战斗",description:"重置当前单关卡卡牌战斗并回到第一回合。",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(){startGame();return {status:"restarted",turn:state.turn}}};
  try{Promise.resolve(document.modelContext.registerTool(tool)).catch(()=>{})}catch{}
}
startGame();
