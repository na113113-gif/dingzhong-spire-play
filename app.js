const NODE_TYPES={
  battle:{name:"上课",glyph:"课",detail:"战斗节点"},
  rest:{name:"食堂",glyph:"食",detail:"篝火节点"},
  event:{name:"超市",glyph:"超",detail:"随机节点"},
  sport:{name:"操场",glyph:"体",detail:"体育节点"},
  boss:{name:"期末",glyph:"期",detail:"本层 Boss"}
};
const ROWS=12,ROW_GAP=126,CANVAS_PAD=82;
let run={nodes:[],edges:[],current:null,visited:new Set(),id:""};
const $=id=>document.getElementById(id);

function randomType(row){
  if(row===0)return "battle";
  const n=Math.random();
  if(n<.44)return "battle";
  if(n<.64)return "rest";
  if(n<.84)return "event";
  return "sport";
}
function createMap(){
  const nodes=[],edges=[],byRow=[];
  for(let row=0;row<ROWS;row++){
    const count=row===0?3:(Math.random()<.48?3:4),rowNodes=[];
    for(let i=0;i<count;i++){
      const base=(i+1)/(count+1)*100;
      const x=Math.max(12,Math.min(88,base+(Math.random()*8-4)));
      const node={id:`${row}-${i}`,row,x,y:CANVAS_PAD+(ROWS-row)*ROW_GAP,type:randomType(row)};
      nodes.push(node);rowNodes.push(node);
    }
    byRow.push(rowNodes);
  }
  const boss={id:"boss",row:ROWS,x:50,y:CANVAS_PAD,type:"boss"};
  nodes.push(boss);byRow.push([boss]);
  for(let row=0;row<ROWS;row++){
    const from=byRow[row],to=byRow[row+1];
    from.forEach(node=>{
      const ordered=[...to].sort((a,b)=>Math.abs(a.x-node.x)-Math.abs(b.x-node.x));
      addEdge(edges,node,ordered[0]);
      if(to.length>1&&Math.random()<.48)addEdge(edges,node,ordered[1]);
    });
    to.forEach(target=>{
      if(!edges.some(edge=>edge.to===target.id)){
        const nearest=[...from].sort((a,b)=>Math.abs(a.x-target.x)-Math.abs(b.x-target.x))[0];
        addEdge(edges,nearest,target);
      }
    });
  }
  run.nodes=nodes;run.edges=edges;run.current=null;run.visited=new Set();
  renderMap();
  $("floorText").textContent="入口";$("visitedText").textContent="0";
  $("routeStatus").textContent="从教学楼入口出发";
  $("mapTip").textContent="选择底部任一亮起的节点开始。进入节点后，只能沿连线继续向上。";
  requestAnimationFrame(()=>{$("mapViewport").scrollTop=$("mapViewport").scrollHeight});
}
function addEdge(edges,a,b){
  if(!edges.some(edge=>edge.from===a.id&&edge.to===b.id))edges.push({from:a.id,to:b.id});
}
function nodeState(node){
  if(run.current===node.id)return "current";
  if(run.visited.has(node.id))return "visited";
  if(!run.current&&node.row===0)return "available";
  if(run.current&&run.edges.some(edge=>edge.from===run.current&&edge.to===node.id))return "available";
  return "locked";
}
function renderMap(){
  const height=CANVAS_PAD*2+ROWS*ROW_GAP;
  $("mapCanvas").style.height=`${height}px`;
  const lookup=Object.fromEntries(run.nodes.map(node=>[node.id,node]));
  const svg=$("routeLines");
  svg.setAttribute("viewBox",`0 0 1000 ${height}`);
  svg.innerHTML="";
  run.edges.forEach(edge=>{
    const a=lookup[edge.from],b=lookup[edge.to];
    const line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",a.x*10);line.setAttribute("y1",a.y);
    line.setAttribute("x2",b.x*10);line.setAttribute("y2",b.y);
    line.setAttribute("class",`route-line ${run.visited.has(edge.from)&&run.visited.has(edge.to)?"visited":""}`);
    svg.appendChild(line);
  });
  const holder=$("mapNodes");holder.innerHTML="";
  run.nodes.forEach(node=>{
    const type=NODE_TYPES[node.type],state=nodeState(node),button=document.createElement("button");
    button.type="button";button.className=`map-node ${node.type} ${state}`;
    button.style.left=`${node.x}%`;button.style.top=`${node.y}px`;
    button.disabled=state!=="available";
    button.setAttribute("aria-label",`${type.name}，${type.detail}${state==="available"?"，可以进入":""}`);
    button.innerHTML=`<span class="glyph">${type.glyph}</span><small>${type.name}</small>`;
    button.addEventListener("click",()=>chooseNode(node));
    holder.appendChild(button);
  });
}
function chooseNode(node){
  if(nodeState(node)!=="available")return;
  if(run.current)run.visited.add(run.current);
  run.current=node.id;run.visited.add(node.id);
  $("visitedText").textContent=run.visited.size;
  $("floorText").textContent=node.type==="boss"?"期末":`第 ${node.row+1} 阶段`;
  $("routeStatus").textContent=`当前位置：${NODE_TYPES[node.type].name}`;
  $("mapTip").textContent=`已进入${NODE_TYPES[node.type].name}。节点内容暂未开放，请沿亮起的连线继续。`;
  renderMap();
  if(node.type==="boss")setTimeout(()=>{$("finishModal").hidden=false},260);
}
function enterGame(id){
  run.id=id;$("displayId").textContent=id;
  $("startScreen").hidden=true;$("mapScreen").hidden=false;
  createMap();
}
function backToStart(){
  $("mapScreen").hidden=true;$("startScreen").hidden=false;
  $("finishModal").hidden=true;$("playerId").focus();
}

$("startForm").addEventListener("submit",event=>{
  event.preventDefault();
  const id=$("playerId").value.trim();
  if(!id){$("formError").textContent="请输入学生 ID 后开始游戏";$("playerId").focus();return}
  $("formError").textContent="";enterGame(id);
});
$("playerId").addEventListener("input",()=>{$("formError").textContent=""});
$("newRun").addEventListener("click",backToStart);
$("rerollMap").addEventListener("click",createMap);
$("restartMap").addEventListener("click",()=>{$("finishModal").hidden=true;createMap()});

if(document.modelContext?.registerTool){
  try{
    Promise.resolve(document.modelContext.registerTool({
      name:"generate_new_school_route",
      title:"生成新路线",
      description:"为当前高一第一层重新生成一张随机校园路线地图。",
      inputSchema:{type:"object",properties:{},additionalProperties:false},
      annotations:{readOnlyHint:false,untrustedContentHint:false},
      execute(){
        if($("mapScreen").hidden)throw new Error("尚未开始游戏");
        createMap();
        return {status:"generated",nodes:run.nodes.length,paths:run.edges.length};
      }
    })).catch(()=>{});
  }catch{}
}
