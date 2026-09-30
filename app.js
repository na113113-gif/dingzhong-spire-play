const NODE_TYPES={
  battle:{name:"上课",glyph:"课",detail:"战斗节点"},exam:{name:"月考",glyph:"月",detail:"精英战斗节点"},dorm:{name:"宿舍",glyph:"舍",detail:"休整节点"},
  canteen:{name:"食堂",glyph:"食",detail:"采购节点"},
  event:{name:"超市",glyph:"超",detail:"随机节点"},sport:{name:"操场",glyph:"体",detail:"体育节点"},
  boss:{name:"期末",glyph:"期",detail:"本层 Boss"},choice:{name:"抉择，抉择",glyph:"择",detail:"新学年抉择"},
  blank:{name:"待设计",glyph:"·",detail:"此节点的内容等待后续设计"},
  mid_choice:{name:"抉择",glyph:"择",detail:"一轮复习开始了"},pending_boss:{name:"期末·待设计",glyph:"期",detail:"高二期末Boss待设计，暂不开放"}
};
const UPGRADES={
  quick:"造成9点伤害。",brainstorm:"造成10点伤害，给予3层思路。",continuous:"造成4点伤害4次。",research:"造成12点伤害。",
  solve:"造成10点伤害。若目标拥有思路，获得5点防御。",catch_gap:"造成9点伤害。若目标已有思路，给予2层思路；否则给予1层。",
  rebuild:"造成7点伤害。可以消耗1张其他手牌，若如此做，额外造成10点伤害。",combo:"造成5点伤害3次。本场每消耗4张牌，额外攻击1次，最多额外攻击2次。",
  showcase:"造成18点伤害。消耗牌堆每有1张牌，额外造成2点伤害，最多24点。",ultimate:"造成30点伤害，给予3层思路。",
  conjecture:"移除目标全部思路。造成15点伤害，每移除1层额外造成7点伤害，最多计算3层。",
  organize:"获得8点防御。",myth:"失去2点专注。下一张攻击牌造成的伤害翻倍。费用变为0。",
  tradeoff:"消耗1张其他手牌，获得8点防御。",backup:"获得11点防御。若因拖延被消耗，获得7点防御。",
  seminar:"给予所有敌人3层思路。",review:"将弃牌堆中1张攻击牌放入手牌，其本回合费用减少1。费用变为0。",
  recycle_draft:"消耗1张其他手牌，抽3张牌。",restart:"消耗任意数量其他手牌，再抽取等量牌，然后额外抽1张牌。费用变为0。",
  overtime:"失去2点专注，获得2点行动力。",emergency:"获得18点防御。选择弃牌堆中最多2张牌消耗。",
  negation:"将消耗牌堆中1张任意牌放入手牌。其本回合费用变为0并获得消耗。",
  defense:"每回合前2次使用攻击牌攻击拥有思路的敌人时，抽1张牌。",inertia:"每回合开始时，给予所有敌人2层思路。",
  waste_value:"每回合首次消耗卡牌时，获得7点防御。",contest_body:"每当卡牌使你失去专注，下一张攻击牌额外造成6点伤害。",
  deadline:"每回合首张因拖延被消耗的牌，使你在下回合获得1点行动力并多抽1张牌。",
  recycle_power:"每当消耗1张牌，对所有敌人造成4点伤害。",thought_loop:"敌人的思路层数减少时，对其造成8点伤害。",
  prototype:"每回合首次消耗攻击牌时，将其0费消耗的升级复制品加入手牌。",
  draft_paper:"抽2张牌。消耗。",standard_steps:"造成10点伤害。若敌人意图包含攻击，获得4点防御。",
  temporary_barrier:"获得10点防御。若手牌中没有其他技能牌，额外获得3点防御。",borrowed_notes:"选择弃牌堆中的1张牌，将其放到抽牌堆顶，然后抽1张牌。费用变为0。",
  break_bell:"本回合打出的下一张牌费用减少2。消耗。",duty_schedule:"每回合首次打出技能牌时，获得4点防御。",
  mock_drill:"抽3张牌，然后选择1张手牌放到抽牌堆顶。",sideline_guidance:"选择手牌中的1张攻击牌。本场战斗中，该牌每段攻击伤害增加2。消耗。",
  universal_method:"从抽牌堆选择1张牌加入手牌。该牌本回合费用变为0。费用变为1。消耗。",
  grade_star:"若本回合打出过攻击牌和技能牌，下一回合获得1点行动力并额外抽1张牌。每回合最多触发1次。费用变为1。",
  dark_descent:"免疫下一次专注降低。",pleasant_journey:"打出后，下2张牌的费用变为0。",roach_swarm:"本回合你造成的每段伤害+6。",
  without_blame:"本场战斗获得15点刚毅。",
  high_noon:"本回合你造成的伤害翻倍。回合结束时，失去15点专注。费用变为1。",
  tear_draft:"造成10点伤害。可以消耗1张其他手牌，若如此，再造成7点伤害。",
  assault_final:"造成12点伤害。若本回合消耗过牌，给予2层思路。",
  paper_ball:"造成7点伤害。本场每消耗3张牌，额外造成2点伤害，最多6点。",
  overturn_answer:"消耗最多2张其他手牌。造成9点伤害，每消耗1张，额外造成4点伤害。",
  never_lose:"造成16点伤害，获得6点刚毅。若当前专注不高于0，再造成16点伤害。",
  archive_errors:"消耗1张其他手牌，抽3张牌。",
  until_bell:"获得11点防御。若本回合消耗过牌，额外获得4点防御。",
  keep_draft:"获得7点防御。若因拖延被消耗，抽1张牌。",
  clear_desktop:"消耗所有其他手牌。每消耗1张，获得3点防御；每消耗2张，获得1点行动力。",
  recover_scrap:"从消耗牌堆选择1张非厄运牌加入手牌，本回合其费用变为0。费用变为0。",
  still_write:"获得15点刚毅，消耗最多2张其他手牌。每消耗1张，抽1张牌。",
  steadfast:"每回合第1次消耗牌时，获得7点防御。",
  march_forward:"每回合第1次消耗攻击牌时，本回合下一张攻击牌每次造成的伤害增加5点。",
  infer_again:"每回合第1次消耗技能牌时，抽2张牌。",
  never_blank:"每回合第1次消耗牌时，获得4点刚毅。每场战斗第1次触发刚毅时，获得2点力量和2点敏捷。"
};
const TYPE_LABEL={attack:"攻击",skill:"技能",power:"天赋",curse:"厄运"};
const DIVISION_LABEL={a:"A部",b:"B部",c:"C部",neutral:"无色"};
const RARITY_LABEL={basic:"基础",common:"普通",uncommon:"罕见",rare:"稀有",curse:"厄运"};
const CARD_TERMS={
  固有:"每场战斗开始时，这张牌必定进入起始手牌，占用通常的抽牌数量。",
  保留:"回合结束时，这张牌不会自动进入弃牌堆，而是留在手牌中。",
  刚毅:"本场专注降至0或以下后，仍可承受最多刚毅值的伤害；低于负刚毅值才失败。触发后若战斗胜利，专注恢复至刚毅值（不超过上限）。",
  消耗:"打出后进入消耗牌堆，而非弃牌堆；通常本场战斗不会再抽到。其他效果也可能消耗卡牌。",
  拖延:"回合结束时若这张牌仍在手牌中，将其消耗。",
  思路:"敌方减益。敌人受到的攻击牌伤害增加50%；层数表示持续时间，敌方行动后减少1层，不叠加增伤倍率。",
  力量:"每点使攻击牌的每段基础伤害增加1。",
  敏捷:"每次通过卡牌获得防御时，每点额外增加1点防御。",
  防御:"抵挡等量攻击压力，通常在下个玩家回合开始时清空。",
  行动力:"打出卡牌所需的资源；通常每回合恢复至3点。",
  分心:"攻击伤害降低25%，持续回合数由层数表示。",
  疲惫:"通过卡牌获得的防御降低25%，持续回合数由层数表示。",
  紧张:"受到的攻击伤害增加50%，持续回合数由层数表示。",
  厄运:"不能打出的负面卡牌；不同厄运会在抽到、回合结束或战斗结算时生效。"
};
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
  myth:{name:"竞赛神话",type:"skill",rarity:"basic",cost:1,text:"失去2点专注。下一张攻击牌造成的伤害翻倍。"},
  tradeoff:{name:"取舍",type:"skill",rarity:"common",cost:0,text:"消耗1张其他手牌，获得5点防御。"},
  backup:{name:"备份方案",type:"skill",rarity:"common",cost:1,text:"获得8点防御。若因拖延被消耗，获得5点防御。",keyword:"拖延",delay:true},
  seminar:{name:"集中研讨",type:"skill",rarity:"common",cost:1,text:"给予所有敌人2层思路。",keyword:"消耗",exhaust:true},
  review:{name:"复盘",type:"skill",rarity:"common",cost:1,text:"将弃牌堆中1张攻击牌放入手牌，其本回合费用减少1。"},
  recycle_draft:{name:"草稿回收",type:"skill",rarity:"uncommon",cost:1,text:"消耗1张其他手牌，抽2张牌。"},
  restart:{name:"推倒重来",type:"skill",rarity:"uncommon",cost:1,text:"消耗任意数量其他手牌，再抽取等量牌，然后额外抽1张牌。"},
  overtime:{name:"熬夜赶工",type:"skill",rarity:"uncommon",cost:0,text:"失去3点专注，获得2点行动力。",keyword:"消耗",exhaust:true},
  emergency:{name:"抢救进度",type:"skill",rarity:"rare",cost:2,text:"获得14点防御。选择弃牌堆中最多2张牌消耗。"},
  negation:{name:"否定之否定",type:"skill",rarity:"rare",cost:1,text:"将消耗牌堆中1张攻击牌放入手牌。其本回合费用变为0并获得消耗。",keyword:"消耗",exhaust:true},
  defense:{name:"公开答辩",type:"power",rarity:"uncommon",cost:1,text:"每回合首次使用攻击牌攻击拥有思路的敌人时，抽1张牌。"},
  inertia:{name:"思维惯性",type:"power",rarity:"uncommon",cost:1,text:"每回合开始时，给予随机敌人1层思路。"},
  waste_value:{name:"废案价值",type:"power",rarity:"uncommon",cost:1,text:"每回合首次消耗卡牌时，获得5点防御。"},
  contest_body:{name:"竞赛体质",type:"power",rarity:"uncommon",cost:1,text:"每当卡牌使你失去专注，下一张攻击牌额外造成4点伤害。"},
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
  high_noon:{name:"午时已到",type:"skill",rarity:"rare",cost:2,text:"本回合你造成的伤害翻倍。回合结束时，失去15点专注。",colorless:true,exhaust:true,keyword:"消耗"},
  wrong_question:{name:"错题",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时占据1个手牌位置；战斗后留在本局牌组。可在宿舍订正移除。",keyword:"厄运"},
  missing_paper:{name:"卷子失踪",type:"curse",rarity:"curse",cost:0,text:"不能打出。抽到时，本回合下一张牌费用增加1。",keyword:"厄运"},
  forgotten_homework:{name:"没带作业",type:"curse",rarity:"curse",cost:"—",text:"不能打出。回合结束时若仍在手牌中，失去3专注。",keyword:"厄运"},
  sleepy:{name:"失眠症",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时失去2专注。",keyword:"厄运"},
  spilled_ink:{name:"墨泻千里",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时随机弃掉另外1张手牌。",keyword:"厄运"},
  brain_knot:{name:"脑子打结",type:"curse",rarity:"curse",cost:"—",text:"不能打出。抽到时获得1层紧张。",keyword:"厄运"},
  lost_meal_card:{name:"饭卡无了",type:"curse",rarity:"curse",cost:"—",text:"不能打出。只要留在牌组中，每次战斗胜利获得的饭卡减少10，最低减至0。",keyword:"厄运"},
  dark_descent:{name:"黑暗降临",type:"skill",rarity:"rare",cost:1,text:"免疫下一次专注降低。",eventOnly:true,colorless:true},
  pleasant_journey:{name:"旅途愉快",type:"skill",rarity:"rare",cost:0,text:"打出后，下2张牌的费用变为0。",keyword:"固有 · 消耗 · 保留",innate:true,exhaust:true,retain:true,eventOnly:true,colorless:true},
  roach_swarm:{name:"蟑螂群",type:"skill",rarity:"rare",cost:1,text:"本回合你造成的每段伤害+6。",eventOnly:true,colorless:true},
  without_blame:{name:"不受其咎",type:"skill",rarity:"rare",cost:1,text:"本场战斗获得15点刚毅。",eventOnly:true,artBlank:true,colorless:true},
  tear_draft:{"name":"撕掉草稿","type":"attack","rarity":"common","cost":1,"text":"造成7点伤害。可以消耗1张其他手牌，若如此，再造成5点伤害。"},
  assault_final:{"name":"猛攻压轴","type":"attack","rarity":"common","cost":1,"text":"造成9点伤害。若本回合消耗过牌，给予2层思路。"},
  paper_ball:{"name":"废纸团","type":"attack","rarity":"common","cost":0,"text":"造成4点伤害。本场每消耗3张牌，额外造成2点伤害，最多6点。","exhaust":true,"keyword":"消耗"},
  overturn_answer:{"name":"推倒重来","type":"attack","rarity":"uncommon","cost":1,"text":"消耗最多2张其他手牌。造成6点伤害，每消耗1张，额外造成4点伤害。"},
  never_lose:{"name":"我不会输","type":"attack","rarity":"rare","cost":1,"text":"造成12点伤害，获得4点刚毅。若当前专注不高于0，再造成12点伤害。","exhaust":true,"keyword":"消耗"},
  archive_errors:{"name":"错题归档","type":"skill","rarity":"common","cost":1,"text":"消耗1张其他手牌，抽2张牌。"},
  until_bell:{"name":"撑到下课","type":"skill","rarity":"common","cost":1,"text":"获得8点防御。若本回合消耗过牌，额外获得4点防御。"},
  keep_draft:{"name":"留张底稿","type":"skill","rarity":"common","cost":0,"text":"获得4点防御。若因拖延被消耗，抽1张牌。","delay":true,"keyword":"拖延"},
  clear_desktop:{"name":"桌面清扫","type":"skill","rarity":"uncommon","cost":0,"text":"消耗所有其他手牌。每消耗1张，获得2点防御；每消耗2张，获得1点行动力。","exhaust":true,"keyword":"消耗"},
  recover_scrap:{"name":"废稿回收","type":"skill","rarity":"uncommon","cost":1,"text":"从消耗牌堆选择1张非厄运牌加入手牌，本回合其费用变为0。","exhaust":true,"keyword":"消耗"},
  still_write:{"name":"我还能写","type":"skill","rarity":"rare","cost":3,"text":"获得10点刚毅，消耗最多2张其他手牌。每消耗1张，抽1张牌。","exhaust":true,"keyword":"消耗"},
  steadfast:{"name":"岿然不动","type":"power","rarity":"uncommon","cost":1,"text":"每回合第1次消耗牌时，获得5点防御。"},
  march_forward:{"name":"高歌猛进","type":"power","rarity":"uncommon","cost":1,"text":"每回合第1次消耗攻击牌时，本回合下一张攻击牌每次造成的伤害增加3点。"},
  infer_again:{"name":"举一反三","type":"power","rarity":"uncommon","cost":1,"text":"每回合第1次消耗技能牌时，抽1张牌。"},
  never_blank:{"name":"绝不空卷","type":"power","rarity":"rare","cost":3,"text":"每回合第1次消耗牌时，获得3点刚毅。每场战斗第1次触发刚毅时，获得2点力量和2点敏捷。"}
};
const CARD_ART=Object.fromEntries(Object.keys(CARDS).filter(id=>!CARDS[id].artBlank).map(id=>[id,"./assets/cards/"+id+".webp"]));
function cardArtMarkup(id){return CARD_ART[id]?'<span class="card-art card-art-painted"><img src="'+CARD_ART[id]+'" alt="" width="512" height="512" loading="lazy" decoding="async" draggable="false"></span>':'<span class="card-art card-art-blank" aria-hidden="true"></span>'}
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
  grade1_relic:{name:"高一专属圣遗物",rarity:"rare",grade1:true,text:"每场战斗开始时，选择在本场战斗中获得3点力量或3点敏捷。"},
  endless_pen:{name:"永不断墨的钢笔",rarity:"rare",choiceOnly:true,text:"若你以至少1点行动力结束回合，下回合获得2点行动力。"},
  sun_moon:{name:"日月同辉",rarity:"rare",choiceOnly:true,text:"每场战斗中每打出7张牌，本场获得1点力量和1点敏捷。"},
  sprint:{name:"冲刺！",rarity:"rare",choiceOnly:true,text:"每场战斗开始时，失去2点专注，本场获得1点力量。"},
  clock_delivery:{name:"上面开摆下面寄",rarity:"rare",choiceOnly:true,text:"每场战斗胜利结束时，回复2点专注。期末与月考敌人的专注上限及伤害提升10%（向下取整）。"}
}
const RELIC_ART=Object.fromEntries(Object.keys(RELICS).filter(id=>!RELICS[id].artBlank).map(id=>[id,"./assets/relics/"+id+".webp"]));
function relicArtMarkup(id){return RELIC_ART[id]?'<img class="relic-art" src="'+RELIC_ART[id]+'" alt="" width="512" height="512" loading="lazy" decoding="async" draggable="false">':""};
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
  dictation:{kind:"battle",name:"突击默写",hp:46,note:"抽查让你紧张；核对答案时会留下1张错题，可在宿舍订正。",moves:[{name:"随机点名",damage:4,hits:1,debuff:"vulnerable",stacks:1},{name:"连续默写",damage:4,hits:2},{name:"核对答案",block:8,debuff:"weak",stacks:1,mistake:1}]},
  exam_chain:{kind:"exam",name:"月考·连问主考",hp:98,note:"多段攻击。追问与压轴每段压力更高，预备卷先设防，追问叠加紧张。",moves:[{name:"预备卷",damage:7,hits:1,block:8},{name:"步步追问",damage:5,hits:3,debuff:"vulnerable",stacks:1},{name:"压轴连问",damage:7,hits:3},{name:"回收答卷",block:12,debuff:"weak",stacks:1}]},
  exam_wall:{kind:"exam",name:"月考·铁壁审题官",hp:112,note:"高防御。封卷复查会留下1张错题，留意疲惫后的重击。",moves:[{name:"严密审题",block:18,debuff:"frail",stacks:2},{name:"扣分红笔",damage:13,hits:1,block:5},{name:"封卷复查",block:15,mistake:1},{name:"一锤定分",damage:22,hits:1}]},
  exam_clock:{kind:"exam",name:"月考·倒计时监考",hp:94,note:"最后倒计时获得1点力量，后续每段攻击持续增强；强制收卷前仍有整理考场的空档。",moves:[{name:"巡场提醒",damage:8,hits:1,debuff:"weak",stacks:1},{name:"最后倒计时",block:8,strength:1,debuff:"vulnerable",stacks:1},{name:"强制收卷",damage:16,hits:1},{name:"整理考场",block:10,debuff:"frail",stacks:1}]},
  boss_wen:{kind:"boss",name:"期末·文海长卷",hp:140,growth:1,note:"主课＋文科：阅读设防、论述施加分心、材料题制造紧张，作文收束爆发。每轮循环每段攻击增加1。",moves:[{name:"主课·基础统考",damage:10,hits:1},{name:"文科·阅读壁垒",block:16,debuff:"weak",stacks:2},{name:"主课·材料连问",damage:5,hits:2,debuff:"vulnerable",stacks:1},{name:"文科·长篇论述",damage:18,hits:1},{name:"阅卷间隙",block:8}]},
  boss_li:{kind:"boss",name:"期末·压轴演算核心",hp:155,growth:1,note:"主课＋理科：模型构建获得高防御，推导叠加疲惫，蓄力后释放压轴证明。每轮循环每段攻击增加1。",moves:[{name:"主课·基础运算",damage:6,hits:2},{name:"理科·模型构建",block:20},{name:"主课·连锁推导",damage:10,hits:1,debuff:"frail",stacks:2},{name:"理科·证明蓄力",block:10},{name:"理科·压轴证明",damage:26,hits:1}]},
  boss_sport:{kind:"boss",name:"期末·全能体测官",hp:130,growth:1,note:"主课＋体育：体能连击配合疲惫，口试制造紧张后发动冲刺，调整呼吸是反击窗口。每轮循环每段攻击增加1。",moves:[{name:"主课·口试点名",damage:8,hits:1,debuff:"vulnerable",stacks:1},{name:"体育·折返冲刺",damage:4,hits:4},{name:"体育·耐力加练",damage:7,hits:1,debuff:"frail",stacks:2},{name:"调整呼吸",block:14},{name:"主课·终点抢答",damage:18,hits:1}]}
};
Object.assign(ENCOUNTERS,{
  g2_monday:{floor:2,kind:"battle",name:"周一摸底卷",hp:62,note:"基础题、多段攻击和背面的重击交替。",moves:[{name:"先做前面的",damage:9,hits:1},{name:"基础不能丢",damage:5,hits:2,block:8},{name:"怎么还有背面",damage:17,hits:1}]},
  g2_timed:{floor:2,kind:"battle",name:"限时练习",hp:58,note:"首回合设防并施加分心，倒计时后集中收卷。",moves:[{name:"开始计时",block:10,debuff:"weak",stacks:1},{name:"还剩5分钟",damage:6,hits:2},{name:"到点交卷",damage:20,hits:1}]},
  g2_double:{floor:2,kind:"battle",name:"连堂讲评",hp:76,note:"疲惫削弱防守，连堂攻击不给太多喘息时间。",moves:[{name:"这道题讲过",damage:11,hits:1,debuff:"frail",stacks:1},{name:"再看一道同类题",damage:7,hits:2},{name:"下课再讲2分钟",damage:16,hits:1,block:8}]},
  g2_errors:{floor:2,kind:"battle",name:"错题返场",hp:70,note:"先设防，再施加紧张；换个数字再来时留下1张错题。",moves:[{name:"熟悉的题目",damage:10,hits:1,block:12},{name:"怎么还是错",damage:14,hits:1,debuff:"vulnerable",stacks:1},{name:"换个数字再来",damage:6,hits:3,mistake:1}]},
  g2_weekend:{floor:2,kind:"battle",name:"周末作业包",hp:84,note:"多科作业累积，答案回合只设防，交卷回合重击。",moves:[{name:"每科就留一点",damage:4,hits:3},{name:"里面夹着答案",block:18},{name:"周一早读前交",damage:22,hits:1}]},
  g2_chain:{floor:2,kind:"exam",name:"周测三连",hp:134,note:"语文先考压力提升；每轮收尾获得2点力量，连续考试会越拖越难。",moves:[{name:"语文先考",damage:14,hits:1,debuff:"weak",stacks:1},{name:"数学接上",damage:8,hits:2,block:10},{name:"英语收尾",damage:5,hits:4},{name:"下周继续",block:18,strength:2}]},
  g2_final:{floor:2,kind:"exam",name:"压轴题组",hp:152,note:"第3问造成30点压力，第2问防御更高；讲解回合可调整牌序。",moves:[{name:"第1问送分",damage:10,hits:1},{name:"第2问还行",damage:16,hits:1,block:14},{name:"第3问另起一页",damage:30,hits:1},{name:"老师开始讲解",block:22,debuff:"frail",stacks:1}]},
  g2_check:{floor:2,kind:"exam",name:"错题检查",hp:126,startBlock:20,correction:8,note:"带20点开场防御；本子拿出来时留下1张错题。每回合首次消耗牌移除8点防御。",moves:[{name:"本子拿出来",damage:13,hits:1,debuff:"frail",stacks:1,mistake:1},{name:"过程呢",damage:7,hits:2,block:14},{name:"再做一遍",damage:18,hits:1,debuff:"vulnerable",stacks:1}]},
  g2_bell:{floor:2,kind:"boss",name:"无终之铃",hp:260,cycleStrength:1,mechanism:"连考：每完成4回合的1轮循环，获得1点力量；短暂收卷还会获得1点力量，均持续到战斗结束。力量增加每段攻击的压力。",note:"上一张卷子的订正还没写完，下一场开考铃已经响了。多段攻击与持续加压交替。",moves:[{name:"铃声骤起",damage:6,hits:3},{name:"无缝续考",damage:16,hits:1,debuff:"weak",stacks:1},{name:"短暂收卷",block:18,strength:1},{name:"终铃不至",damage:8,hits:3}]},
  g2_unity:{floor:2,kind:"boss",name:"万题归一",hp:280,breakBlock:10,mechanism:"破题：每回合首次同时打出攻击牌和技能牌时，移除10点敌方防御。不足时扣至0，不转化为伤害；天赋不计入条件。",note:"函数、实验、材料与图表被缝进同一张联考卷。输出与防守都不可缺席。",moves:[{name:"条件交织",damage:14,hits:1,block:12},{name:"跨章设问",damage:8,hits:2,debuff:"frail",stacks:1},{name:"综合推演",block:24,debuff:"vulnerable",stacks:1},{name:"最终作答",damage:30,hits:1}]},
  g2_ranking:{floor:2,kind:"boss",name:"名次之渊",hp:250,ranking:true,mechanism:"坠榜：专注首次降至上限的50%或以下且仍存活时，获得2点力量；此后每轮第4回合永久改为“榜单压顶”（基础28点压力）。只触发1次，不立即追加攻击，意图即时更新。",note:"你刚找到自己的名字，旁边的人已经开始算下一次要超过多少人。",moves:[{name:"榜上无名",damage:12,hits:1,debuff:"vulnerable",stacks:1},{name:"差距显现",damage:18,hits:1},{name:"无声追赶",block:16,strength:1},{name:"重排座次",damage:7,hits:3}]}
});
const ENEMY_ART=Object.fromEntries(Object.keys(ENCOUNTERS).map(id=>[id,"./assets/enemies/"+id+".webp"]));
function rollEncounter(kind){const ids=Object.keys(ENCOUNTERS).filter(id=>ENCOUNTERS[id].kind===kind&&(ENCOUNTERS[id].floor||1)===run.floor);return ids.length?ids[Math.floor(Math.random()*ids.length)]:null}
let uid=0;
let deckUid=0;
let run={nodes:[],edges:[],current:null,visited:new Set(),floor:1,id:"",deck:[],hp:80,maxHp:80,meal:400,strength:0,dexterity:0,relics:[],battleCount:0,pendingNode:null,dormVisits:0,bingeCount:0,shop:null,eventSeen:[],nextBattleDraw:0,nextBattleFrail:0};
let battle=null,selection=null,pendingReward=null,pendingRelic=null,deckAction=null,utilityChoice=null,upgradePreview=false,currentEvent=null;
let encyclopediaTab="cards",encyclopediaFilter="all",encyclopediaTypeFilter="all",encyclopediaRarityFilter="all",encyclopediaUpgrade=false;
let shakeTimer=null;
let playtimeElapsedMs=0,playtimeStartedAt=null,playtimeRunning=false;
const $=id=>document.getElementById(id);
const makeDeckEntry=id=>({id,upgraded:!!CARDS[id].eventOnly,deckUid:++deckUid});
const makeCard=source=>{const entry=typeof source==="string"?{id:source,upgraded:false}:source;return{id:entry.id,upgraded:!!entry.upgraded,deckUid:entry.deckUid,uid:++uid,tempCost:null,forcedExhaust:false,damageBonus:entry.damageBonus||0}};
const shuffle=list=>{const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const hasRelic=id=>run.relics.includes(id);
const isDebugRun=()=>run.id==="dzzx";
let navigationEpoch=0;
function scheduleNodeAction(action){const epoch=navigationEpoch;setTimeout(()=>{if(epoch===navigationEpoch)action()},180)}
function scheduleBattleAction(action,delay){const session=battle;setTimeout(()=>{if(session&&battle===session)action()},delay)}
function updateDebugControls(screen){
  $("debugControls").hidden=!isDebugRun();$("debugFloor").value=String(run.floor);
  $("debugReturnMap").hidden=!isDebugRun()||screen==="mapScreen"||screen==="startScreen";
}
function debugReturnToMap(){
  if(!isDebugRun())return;
  navigationEpoch++;
  if(battle&&!battle.over)run.hp=Math.max(0,battle.playerHp);
  battle=null;selection=null;pendingReward=null;pendingRelic=null;deckAction=null;utilityChoice=null;currentEvent=null;
  document.querySelectorAll(".modal").forEach(modal=>{modal.hidden=true});
  hideStatusTooltip();showOnly("mapScreen");renderMap();updateRunHud();
  $("mapTip").textContent="调试模式：可重复进入任意节点；离开战斗不会结算奖励。";
}
function debugSelectFloor(value){
  const floor=Number(value);if(!isDebugRun()||![1,2,3].includes(floor))return;
  debugReturnToMap();run.floor=floor;run.eventSeen=[];run.shop=null;createMap();updateDebugControls("mapScreen");
  $("mapTip").textContent="调试模式：已进入第"+floor+"层，可直接点击任意节点。未设计内容只显示占位提示。";
}

function showOnly(id){
  ["startScreen","mapScreen","battleScreen","rewardScreen","relicRewardScreen","dormScreen","canteenScreen","eventScreen","sportScreen","decisionScreen"].forEach(screen=>{$(screen).hidden=screen!==id});
  updateDebugControls(id);
}
function randomType(row,supermarketRow,examRow,sportRow){
  if(run.floor===2&&row===0)return "choice";
  if(run.floor===2&&row===Math.floor(ROWS/2))return "mid_choice";
  if(row===0)return "battle";
  if(row<3)return row===supermarketRow?"event":"battle";
  if(row===ROWS-2)return "canteen";
  if(row===ROWS-1)return "dorm";
  if(row===examRow)return "exam";
  if(row===sportRow)return "sport";
  const weighted=[["battle",3],["exam",2],["dorm",1],["canteen",1],["event",1],["sport",run.floor===2?.5:1]];
  let roll=Math.random()*weighted.reduce((sum,[,weight])=>sum+weight,0);
  for(const [type,weight] of weighted){roll-=weight;if(roll<0)return type}return "sport";
}
function createFutureFloorMap(){
  $("mapScreen").classList.add("floor-stub");
  const start={id:"0-0",row:0,x:50,y:CANVAS_PAD+ROW_GAP,type:"choice"};
  const branches=[25,50,75].map((x,index)=>({id:"1-"+index,row:1,x,y:CANVAS_PAD,type:"blank"}));
  run.nodes=[start,...branches];run.edges=branches.map(node=>({from:start.id,to:node.id}));
  run.current=null;run.visited=new Set();run.pendingNode=null;
  const year=run.floor===2?"高二":"高三";
  $("mapFloorLabel").textContent=year+"学年";$("mapSchoolYear").textContent="第"+run.floor+"层 · "+year;
  $("bossPreview").textContent="后续节点内容待设计";
  delete $("bossPreview").dataset.statusName;delete $("bossPreview").dataset.statusHelp;$("bossPreview").classList.remove("status-help");$("bossPreview").removeAttribute("tabindex");
  renderMap();updateRunHud();$("floorText").textContent="入口";
  $("routeStatus").textContent=year+"学年入口";
  $("mapTip").textContent="先进入“抉择，抉择”；后面3个空白节点待设计。";
  requestAnimationFrame(()=>{$("mapViewport").scrollTop=$("mapViewport").scrollHeight});
}
function createMap(){
  if(run.floor>=3){createFutureFloorMap();return}
  $("mapScreen").classList.remove("floor-stub");
  const nodes=[],edges=[],byRow=[];
  const supermarketRow=1+Math.floor(Math.random()*2);
  const guaranteedRows=shuffle(Array.from({length:ROWS-5},(_,index)=>index+3).filter(row=>run.floor!==2||row!==Math.floor(ROWS/2)));
  const [examRow,sportRow]=guaranteedRows;
  for(let row=0;row<ROWS;row++){
    const count=run.floor===2&&(row===0||row===Math.floor(ROWS/2))?1:run.floor===2&&(row===1||row===Math.floor(ROWS/2)+1)?3:row===0?3:(Math.random()<.48?3:4),rowNodes=[];
    for(let i=0;i<count;i++){
      const base=(i+1)/(count+1)*100;
      const node={id:row+"-"+i,row,x:count===1?50:Math.max(12,Math.min(88,base+(Math.random()*8-4))),y:CANVAS_PAD+(ROWS-row)*ROW_GAP,type:randomType(row,supermarketRow,examRow,sportRow)};
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
  $("mapFloorLabel").textContent=run.floor===2?"高二学年":"高一学年";$("mapSchoolYear").textContent="第"+run.floor+"层 · "+(run.floor===2?"高二":"高一");
  $("bossPreview").textContent="本层期末："+ENCOUNTERS[boss.encounterId].name;
  setStatusHelp($("bossPreview"),ENCOUNTERS[boss.encounterId].name+" · 机制",ENCOUNTERS[boss.encounterId].mechanism||ENCOUNTERS[boss.encounterId].note);
  renderMap();updateRunHud();
  $("floorText").textContent="入口";$("routeStatus").textContent="从教学楼入口出发";
  $("mapTip").textContent=run.floor===2?"先进入“抉择，抉择”；中途进入一轮复习，最终迎战本层联考期末。":"底部的起点均为上课，选择任意一条路线开始战斗。";
  requestAnimationFrame(()=>{$("mapViewport").scrollTop=$("mapViewport").scrollHeight});
}
function addEdge(edges,a,b){if(!edges.some(edge=>edge.from===a.id&&edge.to===b.id))edges.push({from:a.id,to:b.id})}
function nodeState(node){
  if(isDebugRun())return "available";
  if(["blank","pending_boss"].includes(node.type))return "locked";
  if(run.current===node.id)return "current";
  if(run.visited.has(node.id))return "visited";
  if(!run.current&&node.row===0)return "available";
  if(run.current&&run.edges.some(edge=>edge.from===run.current&&edge.to===node.id))return "available";
  return "locked";
}
function renderMap(){
  const height=run.floor>=3?CANVAS_PAD*2+ROW_GAP:CANVAS_PAD*2+ROWS*ROW_GAP,lookup=Object.fromEntries(run.nodes.map(node=>[node.id,node]));
  $("mapCanvas").style.height=height+"px";
  const svg=$("routeLines");svg.setAttribute("viewBox","0 0 1000 "+height);svg.setAttribute("preserveAspectRatio","none");svg.innerHTML="";
  run.edges.forEach(edge=>{
    const a=lookup[edge.from],b=lookup[edge.to],line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",a.x*10);line.setAttribute("y1",a.y);line.setAttribute("x2",b.x*10);line.setAttribute("y2",b.y);
    const state=run.visited.has(edge.from)&&run.visited.has(edge.to)?"visited":edge.from===run.current&&nodeState(b)==="available"?"available":"";
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
    if(node.type==="boss"){const enemy=ENCOUNTERS[node.encounterId];setStatusHelp(button,enemy.name+" · 机制",enemy.mechanism||enemy.note)}
    button.dataset.node=node.id;button.setAttribute("aria-label",label+"，"+button.title+(state==="available"?"，可以进入":"，查看连接"));
    button.innerHTML='<span class="glyph">'+type.glyph+"</span><small>"+label+"</small>";
    button.addEventListener("pointerenter",()=>highlightRoute(node.id));
    button.addEventListener("pointerleave",()=>highlightRoute(null));
    button.addEventListener("focus",()=>highlightRoute(node.id));
    button.addEventListener("blur",()=>highlightRoute(null));
    button.addEventListener("click",()=>{if(nodeState(node)==="available")chooseNode(node);else highlightRoute(node.id)});holder.appendChild(button);
  });
  if(inspectedNodeType)highlightNodeType(inspectedNodeType);
}
let inspectedNodeType=null;
function highlightNodeType(type){
  inspectedNodeType=type;
  if(type)highlightRoute(null);
  $("mapCanvas").classList.toggle("type-inspecting",!!type);
  $("mapNodes").querySelectorAll(".map-node").forEach(node=>node.classList.toggle("type-focused",!!type&&node.classList.contains(type)));
  document.querySelectorAll(".legend-list [data-node-type]").forEach(item=>item.classList.toggle("type-active",item.dataset.nodeType===type));
}
function highlightRoute(id){
  if(id&&inspectedNodeType)highlightNodeType(null);
  const connected=new Set([id]);
  run.edges.forEach(edge=>{if(edge.from===id||edge.to===id){connected.add(edge.from);connected.add(edge.to)}});
  $("mapCanvas").classList.toggle("route-inspecting",!!id);
  $("routeLines").querySelectorAll("[data-from]").forEach(line=>line.classList.toggle("route-focused",line.dataset.from===id||line.dataset.to===id));
  $("mapNodes").querySelectorAll("[data-node]").forEach(node=>node.classList.toggle("route-focused",connected.has(node.dataset.node)));
}
function chooseNode(node){
  if(nodeState(node)!=="available")return;
  navigationEpoch++;
  if(run.current)run.visited.add(run.current);
  run.current=node.id;run.visited.add(node.id);run.pendingNode=node;
  $("floorText").textContent=node.type==="boss"?"期末":"第"+(node.row+1)+"阶段";
  $("routeStatus").textContent="当前位置："+NODE_TYPES[node.type].name;
  renderMap();updateRunHud();
  if(node.type==="battle"){scheduleNodeAction(()=>startBattle("battle"));return}
  if(node.type==="exam"){scheduleNodeAction(()=>startBattle("exam"));return}
  if(node.type==="boss"){scheduleNodeAction(()=>startBattle("boss"));return}
  if(node.type==="dorm"){scheduleNodeAction(openDorm);return}
  if(node.type==="canteen"){scheduleNodeAction(openCanteen);return}
  if(node.type==="event"){scheduleNodeAction(openEvent);return}
  if(node.type==="sport"){scheduleNodeAction(openSport);return}
  if(node.type==="choice"){scheduleNodeAction(openDecision);return}
  if(node.type==="mid_choice"){scheduleNodeAction(openMidDecision);return}
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
  navigationEpoch++;battle=null;selection=null;pendingReward=null;pendingRelic=null;deckAction=null;utilityChoice=null;currentEvent=null;run.pendingNode=null;
  startPlayTime();
  run.practiceExam=false;
  run.id=id;run.floor=1;run.deck=STARTER_DECK.map(makeDeckEntry);run.hp=80;run.maxHp=80;run.meal=400;run.strength=0;run.dexterity=0;run.relics=[];run.battleCount=0;run.dormVisits=0;run.bingeCount=0;run.shop=null;run.eventSeen=[];run.nextBattleDraw=0;run.nextBattleFrail=0;run.nextBattleEnergy=0;run.nextBattleBlock=0;run.nextBattleWeak=0;$("midDecisionModal").hidden=true;
  $("displayId").textContent=id;$("battlePlayerId").textContent=id;$("dormPlayerId").textContent=id;$("eventPlayerId").textContent=id;$("sportPlayerId").textContent=id;showOnly("mapScreen");createMap();
}
function startExamPreview(){
  const id=$("playerId").value.trim()||"试玩学生";
  $("examPreviewResult").textContent="";
  enterGame(id);run.floor=2;run.practiceExam=true;
  run.pendingNode={type:"exam",encounterId:"g2_final"};
  startBattle("exam");
}
function backToStart(){navigationEpoch++;battle=null;stopPlayTime();showOnly("startScreen");$("finishModal").hidden=true;$("playerId").focus()}

function updateRealTime(){
  const now=new Date(),pad=value=>String(value).padStart(2,"0");
  $("realTime").textContent=pad(now.getHours())+":"+pad(now.getMinutes())+":"+pad(now.getSeconds());
  $("realDate").textContent=now.getFullYear()+"年"+pad(now.getMonth()+1)+"月"+pad(now.getDate())+"日";
}
function updatePlayTime(){
  const elapsed=playtimeElapsedMs+(playtimeStartedAt===null?0:performance.now()-playtimeStartedAt);
  const seconds=Math.floor(elapsed/1000),pad=value=>String(value).padStart(2,"0");
  $("playTime").textContent=pad(Math.floor(seconds/3600))+":"+pad(Math.floor(seconds/60)%60)+":"+pad(seconds%60);
}
function pausePlayTime(){
  if(playtimeStartedAt!==null){playtimeElapsedMs+=performance.now()-playtimeStartedAt;playtimeStartedAt=null}
  updatePlayTime();
}
function resumePlayTime(){
  if(playtimeRunning&&!document.hidden&&document.hasFocus()&&playtimeStartedAt===null)playtimeStartedAt=performance.now();
}
function startPlayTime(){playtimeElapsedMs=0;playtimeStartedAt=null;playtimeRunning=true;resumePlayTime();updatePlayTime()}
function stopPlayTime(){pausePlayTime();playtimeRunning=false}
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
  encyclopediaTab="cards";encyclopediaUpgrade=false;
  resetEncyclopediaFilters();
  renderEncyclopedia();$("encyclopediaModal").hidden=false;$("closeEncyclopedia").focus();
}
function closeEncyclopedia(){
  $("encyclopediaModal").hidden=true;$("openEncyclopedia").focus();
}
function resetEncyclopediaFilters(){
  encyclopediaFilter=encyclopediaTypeFilter=encyclopediaRarityFilter="all";
  ["encyclopediaCardFilter","encyclopediaTypeFilter","encyclopediaRarityFilter"].forEach(id=>$(id).value="all");
}
function encyclopediaDivision(def){return def.type==="curse"?"curse":cardDivision(def)}
function encyclopediaCardIds(){
  const order=["a","b","c","neutral","curse"];
  return Object.keys(CARDS).filter(id=>{
    const def=CARDS[id];
    return (encyclopediaFilter==="all"||encyclopediaDivision(def)===encyclopediaFilter)
      &&(encyclopediaTypeFilter==="all"||def.type===encyclopediaTypeFilter)
      &&(encyclopediaRarityFilter==="all"||def.rarity===encyclopediaRarityFilter);
  }).sort((a,b)=>order.indexOf(encyclopediaDivision(CARDS[a]))-order.indexOf(encyclopediaDivision(CARDS[b])));
}
function renderEncyclopedia(){
  const showCards=encyclopediaTab==="cards";
  $("encyclopediaCardsTab").setAttribute("aria-selected",String(showCards));
  $("encyclopediaRelicsTab").setAttribute("aria-selected",String(!showCards));
  $("encyclopediaCardsPanel").hidden=!showCards;$("encyclopediaRelicsPanel").hidden=showCards;
  $("encyclopediaUpgrade").setAttribute("aria-pressed",String(encyclopediaUpgrade));
  $("encyclopediaUpgrade").textContent=encyclopediaUpgrade?"显示当前效果":"显示升级后效果";
  const cardIds=encyclopediaCardIds();
  $("encyclopediaCardCount").textContent="显示"+cardIds.length+" / "+Object.keys(CARDS).length+"张卡牌 · 筛选条件可组合 · 厄运卡不能升级";
  const cards=$("encyclopediaCards");cards.innerHTML="";
  let previousDivision=null;
  if(!cardIds.length){const empty=document.createElement("p");empty.className="encyclopedia-empty";empty.textContent="没有符合筛选条件的卡牌。A部与B部卡牌尚待设计，可调整条件或重置筛选。";cards.appendChild(empty)}
  cardIds.forEach(id=>{
    const def=CARDS[id],upgraded=def.eventOnly||encyclopediaUpgrade&&def.type!=="curse";
    const division=encyclopediaDivision(def);
    if(division!==previousDivision){const heading=document.createElement("h3");heading.className="encyclopedia-group";heading.textContent=(division==="curse"?"厄运卡":DIVISION_LABEL[division])+" · "+cardIds.filter(cardId=>encyclopediaDivision(CARDS[cardId])===division).length+"张";cards.appendChild(heading);previousDivision=division}
    cards.appendChild(createCardElement(makeCard({id,upgraded}),false,true));
  });
  const relics=$("encyclopediaRelics");relics.innerHTML="";
  const relicIds=Object.keys(RELICS);
  $("encyclopediaRelicCount").textContent="共"+relicIds.length+"件圣遗物";
  relicIds.forEach(id=>{
    const def=RELICS[id],item=document.createElement("article");item.className="relic-detail-item";
    item.innerHTML='<small>'+RARITY_LABEL[def.rarity]+' · '+(def.grade1?"高一专属圣遗物":"圣遗物")+'</small><h3>'+def.name+'</h3>'+relicArtMarkup(id)+'<p>'+def.text+'</p>';
    relics.appendChild(item);
  });
}

function finishNode(message){
  updateRunHud();showOnly("mapScreen");renderMap();$("mapTip").textContent=message+(run.floor<=2?" 请选择下一节点。":"");
}
function renderRunRelics(){
  const holder=$("relicList");holder.innerHTML="";
  if(!run.relics.length){holder.innerHTML="<small>暂无圣遗物</small>";return}
  run.relics.forEach(id=>{const span=document.createElement("span");span.innerHTML=relicArtMarkup(id)+RELICS[id].name;span.title=RELICS[id].text;holder.appendChild(span)});
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
  run.relics.forEach(id=>{const relic=RELICS[id],item=document.createElement("article");item.className="relic-detail-item";item.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h3>'+relic.name+'</h3>'+relicArtMarkup(id)+'<p>'+relic.text+'</p>';holder.appendChild(item)});
  $("collectionModal").hidden=false;
}
function openDorm(){
  const isNoon=run.dormVisits%2===0,name=isNoon?"午休":"晚休",percent=(isNoon?25:35)+(hasRelic("rose")?5:0),heal=Math.floor(run.maxHp*percent/100);
  $("restCycleTitle").textContent=name;$("restCycleLabel").textContent=name;$("restPercent").textContent=percent+"%";
  $("restPreview").textContent="预计恢复 "+Math.min(heal,run.maxHp-run.hp)+" 点专注";
  $("chooseRest").textContent="开始"+name;$("chooseUpgrade").disabled=!run.deck.some(card=>!card.upgraded&&CARDS[card.id].type!=="curse");
  const wrongCount=run.deck.filter(card=>card.id==="wrong_question").length;
  $("chooseRevise").disabled=wrongCount===0;$("revisePreview").textContent="当前有 "+wrongCount+" 张错题；订正后永久移除1张。";
  $("dormStatus").textContent="当前专注 "+run.hp+" / "+run.maxHp+"，本次为"+name+"；牌组中有"+wrongCount+"张错题。";showOnly("dormScreen");
}
function restAtDorm(){
  const isNoon=run.dormVisits%2===0,name=isNoon?"午休":"晚休",percent=(isNoon?25:35)+(hasRelic("rose")?5:0),amount=Math.floor(run.maxHp*percent/100),before=run.hp;
  run.hp=Math.min(run.maxHp,run.hp+amount);run.dormVisits++;
  finishNode(name+"结束，恢复了 "+(run.hp-before)+" 点专注。");
}
function openDeckAction(mode){
  deckAction={mode,returnTo:mode==="upgrade"||mode==="revise"?"dorm":"canteen"};
  $("deckActionTitle").textContent=mode==="upgrade"?"挑灯修读":mode==="revise"?"订正错题":"暴食";
  $("deckActionHint").textContent=mode==="upgrade"?"选择1张尚未升级的非厄运卡牌。":mode==="revise"?"选择1张错题永久移出本次牌组。":"选择1张卡牌永久移出本次牌组。";
  const entries=mode==="upgrade"?run.deck.filter(card=>!card.upgraded&&CARDS[card.id].type!=="curse"):mode==="revise"?run.deck.filter(card=>card.id==="wrong_question"):run.deck,holder=$("deckActionCards");holder.innerHTML="";
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
    const entry=run.deck.find(card=>card.deckUid===targetUid);if(!entry||entry.upgraded||CARDS[entry.id].type==="curse")return;entry.upgraded=true;run.dormVisits++;$("deckActionModal").hidden=true;deckAction=null;
    finishNode("“"+CARDS[entry.id].name+"”已升级为“"+CARDS[entry.id].name+"+”。");return;
  }
  if(deckAction.mode==="revise"){
    const entry=run.deck.find(card=>card.deckUid===targetUid&&card.id==="wrong_question");if(!entry)return;
    run.deck=run.deck.filter(card=>card.deckUid!==targetUid);run.dormVisits++;$("deckActionModal").hidden=true;deckAction=null;
    finishNode("已订正并移除1张错题；牌组还剩"+run.deck.filter(card=>card.id==="wrong_question").length+"张错题。");return;
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
    const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===rarity&&!CARDS[id].eventOnly&&!cards.some(item=>item.id===id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)cards.push({id,rarity,price:priceFor(rarity),sold:false});
  }
  const colorless=[];
  while(colorless.length<2){const rarity=rollRarity(),pool=Object.keys(CARDS).filter(id=>CARDS[id].colorless&&CARDS[id].rarity===rarity&&!CARDS[id].eventOnly&&!colorless.some(item=>item.id===id));const id=pool[Math.floor(Math.random()*pool.length)];if(id)colorless.push({id,rarity,price:priceFor(rarity,50),sold:false})}
  const relicPool=shuffle(Object.keys(RELICS).filter(id=>!hasRelic(id)&&!RELICS[id].grade1&&!RELICS[id].choiceOnly)).slice(0,3);
  run.shop={cards,colorless,relics:relicPool.map(id=>({id,price:340+Math.floor(Math.random()*21),sold:false})),foods:Array.from({length:3},(_,index)=>({name:"食物槽位 "+(index+1)}))};
}
function openCanteen(){generateShop();showOnly("canteenScreen");renderShop()}
function renderShop(){
  $("shopMeal").textContent=run.meal;
  const cardHolder=$("classShopCards");cardHolder.innerHTML="";
  run.shop.cards.forEach(item=>{
    const def=CARDS[item.id],division=cardDivision(def),box=document.createElement("article");box.className="shop-item division-"+division+" type-"+def.type+" rarity-item-"+item.rarity+(item.sold?" sold":"");
    box.innerHTML='<span class="rarity-tag">'+DIVISION_LABEL[division]+' · '+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</span><h3>'+def.name+'</h3>'+cardArtMarkup(item.id)+'<p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';
    setCardTermHelp(box,{id:item.id,upgraded:false});
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
  run.shop.colorless.forEach(item=>{const def=CARDS[item.id],division=cardDivision(def),box=document.createElement("article");box.className="shop-item colorless-card division-"+division+" type-"+def.type+" rarity-item-"+item.rarity+(item.sold?" sold":"");box.innerHTML='<small>'+DIVISION_LABEL[division]+' · '+RARITY_LABEL[item.rarity]+' · '+TYPE_LABEL[def.type]+'</small><h3>'+def.name+'</h3>'+cardArtMarkup(item.id)+'<p>'+def.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已购买":"购买")+'</button></div>';setCardTermHelp(box,{id:item.id,upgraded:false});const button=box.querySelector("button");button.disabled=item.sold||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;run.deck.push(makeDeckEntry(item.id));item.sold=true;renderShop()});holder.appendChild(box)});
}
function renderRelicShop(){
  const holder=$("relicShopItems");holder.innerHTML="";
  run.shop.relics.forEach(item=>{const relic=RELICS[item.id],box=document.createElement("article");box.className="shop-item relic-item"+(item.sold?" sold":"");box.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h3>'+relic.name+'</h3>'+relicArtMarkup(item.id)+'<p>'+relic.text+'</p><div class="shop-bottom"><span class="shop-price">'+item.price+'</span><button class="shop-buy" type="button">'+(item.sold?"已获得":"购买")+'</button></div>';const button=box.querySelector("button");button.disabled=item.sold||hasRelic(item.id)||run.meal<item.price;button.addEventListener("click",()=>{if(button.disabled)return;run.meal-=item.price;grantRelic(item.id);item.sold=true;renderShop()});holder.appendChild(box)});
}

const CURSE_IDS=["forgotten_homework","sleepy","spilled_ink","brain_knot","lost_meal_card"];
const randomFrom=list=>list[Math.floor(Math.random()*list.length)];
const randomCards=(rarity,count=3,filter=()=>true)=>shuffle(Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===rarity&&!CARDS[id].eventOnly&&filter(CARDS[id]))).slice(0,count);
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
const EVENT_GAME_ICONS={genshin:"./assets/event-icons/genshin-paimon.jpg",wuthering:"./assets/event-icons/wuthering-xuanling.jpg",arknights:"./assets/event-icons/arknights-amiya.jpg"};
function renderEvent(){
  $("eventTitle").textContent=currentEvent.title;
  $("eventDescription").textContent=currentEvent.story;
  $("eventArt").hidden=!EVENT_ART[currentEvent.id];if(EVENT_ART[currentEvent.id])$("eventArt").src=EVENT_ART[currentEvent.id];else $("eventArt").removeAttribute("src");$("eventArt").alt=currentEvent.title+"插画";
  $("eventBalance").textContent="专注 "+run.hp+" / "+run.maxHp+" · 饭卡 "+run.meal;
  const holder=$("eventChoices");holder.innerHTML="";
  currentEvent.choices.forEach(option=>{
    const button=document.createElement("button");button.type="button";button.className="event-option";
    const name=document.createElement("strong"),detail=document.createElement("span");name.textContent=option.name;detail.textContent=option.detail;
    if(option.icon){const icon=document.createElement("span"),copy=document.createElement("span");button.classList.add("has-game-icon");icon.className="event-game-icon game-icon-"+option.icon;icon.innerHTML='<img src="'+EVENT_GAME_ICONS[option.icon]+'" alt="" width="44" height="44" loading="lazy" decoding="async">';copy.className="event-option-copy";copy.append(name,detail);button.append(icon,copy)}else button.append(name,detail);button.disabled=!option.available();button.addEventListener("click",()=>chooseEventOption(option));holder.appendChild(button);
  });
}
function openEvent(){
  const pool=run.floor===2?FLOOR2_EVENTS:run.floor===1?EVENTS:[];if(!pool.length)return;
  const unused=pool.filter(event=>!run.eventSeen.includes(event.id));
  if(!unused.length)run.eventSeen=[];
  const picked=randomFrom(unused.length?unused:pool);run.eventSeen.push(picked.id);
  currentEvent=picked;renderEvent();showOnly("eventScreen");
}
const eventOption=(name,detail,runOption,available=()=>true,icon=null)=>({name,detail,run:runOption,available,icon});
const EVENTS=[
  {id:"gacha_debate",title:"有关二游问题的大谈论",story:"晚自习前，走廊里3位同学聊起最近在玩的二游，越聊越大声，非要你选1边。",choices:[
    eventOption("原神牛逼","获得已升级的技能牌“黑暗降临”。",()=>eventDone("获得已升级的“"+addEventCard("dark_descent")+"”。"),()=>true,"genshin"),
    eventOption("鸣潮牛逼","获得已升级的技能牌“旅途愉快”。",()=>eventDone("获得已升级的“"+addEventCard("pleasant_journey")+"”。"),()=>true,"wuthering"),
    eventOption("明日方舟牛逼","获得已升级的技能牌“蟑螂群”。",()=>eventDone("获得已升级的“"+addEventCard("roach_swarm")+"”。"),()=>true,"arknights")]},
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
const upgradeable=type=>entry=>!entry.upgraded&&CARDS[entry.id].type!=="curse"&&(!type||CARDS[entry.id].type===type);
function grade2Upgrade(title,{type=null,hp=0,meal=0,curse=null}={}){
  const filter=upgradeable(type);
  return eventOption("挑灯研习",(hp?"失去"+hp+"点专注，":"")+(meal?"支付"+meal+"饭卡价值，":"")+"升级1张"+(type?TYPE_LABEL[type]:"")+"牌"+(curse?"，获得厄运“"+CARDS[curse].name+"”":"")+"。",()=>openEventDeckChoice(title,"选择1张牌升级。",filter,entry=>{run.hp-=hp;run.meal-=meal;entry.upgraded=true;if(curse)addEventCard(curse);eventDone("升级了“"+CARDS[entry.id].name+"”。")}),()=>canLoseEventHp(hp)&&run.meal>=meal&&run.deck.some(filter));
}
function grade2Heal(name,meal,hp){return eventOption(name,(meal?"支付"+meal+"饭卡价值，":"")+"恢复"+hp+"点专注。",()=>{run.meal-=meal;eventDone("恢复"+healEventHp(hp)+"点专注。")},()=>run.meal>=meal)}
const FLOOR2_EVENTS=[
  {id:"g2_trials",title:"无尽试炼",story:"黑板上又写了考试安排。你盯了一会儿，确认不是上周忘擦的。",choices:[
    {...grade2Upgrade("无尽试炼",{type:"attack",hp:6}),name:"先补最不会的"},
    {...grade2Upgrade("无尽试炼",{type:"skill",hp:6}),name:"把基础过一遍"},grade2Heal("先去接水",0,5)]},
  {id:"g2_lost",title:"遗失的战书",story:"老师说下午讲卷子，你把桌洞翻了3遍，只找到上周的。",choices:[
    eventOption("去复印","支付35饭卡价值，获得1张随机普通C部卡。",()=>{run.meal-=35;const id=randomFrom(randomCards("common",99));eventDone("获得“"+addEventCard(id)+"”。")},()=>run.meal>=35),
    eventOption("借同桌的看","下一场战斗首回合额外抽2张牌。",()=>{run.nextBattleDraw+=2;eventDone("下一场战斗首回合额外抽2张牌。")}),
    eventOption("凭记忆听","获得厄运“卷子失踪”。",()=>eventDone("获得“"+addEventCard("missing_paper")+"”。"))]},
  {id:"g2_night",title:"长夜共研",story:"晚自习结束了，同桌还在盯着最后一道题。你凑过去看了一眼，发现自己也不会。",choices:[
    eventOption("再研究一会儿","失去8点专注，从3张随机罕见C部卡中选1张。",()=>offerEventCards("uncommon",()=>true,()=>{loseEventHp(8);return "，失去8点专注"}),()=>canLoseEventHp(8)),
    eventOption("留待明日","获得未升级的“留张底稿”。",()=>eventDone("获得“"+addEventCard("keep_draft")+"”。")),grade2Heal("一起回宿舍",0,6)]},
  {id:"g2_meal",title:"余烬之宴",story:"你做完题才发现已经很晚。跑到食堂，窗口里只剩下几份饭。",choices:[grade2Heal("剩什么吃什么",25,14),grade2Heal("再加一份",45,22),grade2Heal("买点垫着",10,5)]},
  {id:"g2_scores",title:"方寸裁决",story:"成绩条很窄，你折起来塞进笔袋，过了一会儿又拿出来看。",choices:[
    {...grade2Upgrade("方寸裁决",{hp:5}),name:"找出失分之处"},
    eventOption("请教同桌","下一场战斗首回合获得1点额外行动力。",()=>{run.nextBattleEnergy=(run.nextBattleEnergy||0)+1;eventDone("下一场战斗首回合额外获得1点行动力。")}),
    eventOption("不看了，先吃饭","移除1张厄运；没有厄运时恢复5点专注。",()=>{if(run.deck.some(entry=>CARDS[entry.id].type==="curse"))openEventDeckChoice("方寸裁决","选择1张厄运移除。",entry=>CARDS[entry.id].type==="curse",entry=>{run.deck=run.deck.filter(c=>c.deckUid!==entry.deckUid);eventDone("移除了“"+CARDS[entry.id].name+"”。")});else eventDone("恢复"+healEventHp(5)+"点专注。")})]},
  {id:"g2_noise",title:"梦境失守",story:"你刚躺下，外面就开始响。停了几秒，你以为结束了，然后又响了。",choices:[
    grade2Heal("拿校服盖住头",0,8),{...grade2Upgrade("梦境失守",{curse:"sleepy"}),name:"起来做两道题"},
    eventOption("去走廊站一会儿","失去3点专注，最大专注增加3。",()=>{loseEventHp(3);run.maxHp+=3;eventDone("最大专注增加3，失去3点专注。")},()=>canLoseEventHp(3))]},
  {id:"g2_ink",title:"墨尽之刻",story:"写到关键一步，笔断墨了。你在草稿纸上划出一片沟，它还是不肯写。",choices:[
    eventOption("买支新的","支付20饭卡价值，下一场战斗首回合额外抽1张牌。",()=>{run.meal-=20;run.nextBattleDraw++;eventDone("下一场战斗首回合额外抽1张牌。")},()=>run.meal>=20),
    eventOption("使劲甩两下","失去4点专注，将1张已升级牌恢复为未升级版。",()=>openEventDeckChoice("墨尽之刻","选择1张已升级牌恢复为未升级版。",entry=>entry.upgraded&&CARDS[entry.id].type!=="curse",entry=>{loseEventHp(4);entry.upgraded=false;eventDone("“"+CARDS[entry.id].name+"”恢复为未升级版，失去4点专注。")}),()=>canLoseEventHp(4)&&run.deck.some(entry=>entry.upgraded&&CARDS[entry.id].type!=="curse")),
    eventOption("借一支，下课还","获得未升级的“草稿纸”。",()=>eventDone("获得“"+addEventCard("draft_paper")+"”。"))]},
  {id:"g2_sunday",title:"静谧之隙",story:"教室里没几个人，风扇还开着。你第一次觉得这里有点安静。",choices:[
    eventOption("整理桌洞","支付60饭卡价值，移除1张非厄运牌。",()=>openEventDeckChoice("静谧之隙","选择1张非厄运牌移除。",entry=>CARDS[entry.id].type!=="curse",entry=>{run.meal-=60;run.deck=run.deck.filter(c=>c.deckUid!==entry.deckUid);eventDone("移除了“"+CARDS[entry.id].name+"”。")}),()=>run.meal>=60&&run.deck.some(entry=>CARDS[entry.id].type!=="curse")),
    {...grade2Upgrade("静谧之隙"),name:"慢慢补一道题"},grade2Heal("趴一会儿",0,12)]},
  {id:"g2_answers",title:"真解歧途",story:"你和同桌算出来的答案不一样。你俩各讲了一遍，现在更不一样了。",choices:[
    eventOption("从第1步重新算","失去7点专注，获得未升级的“推倒重来”（攻击）。",()=>{loseEventHp(7);eventDone("获得攻击牌“"+addEventCard("overturn_answer")+"”。")},()=>canLoseEventHp(7)),
    {...grade2Upgrade("真解歧途",{meal:30}),name:"去找老师问"},
    eventOption("暂留两种写法","下一场战斗首回合额外抽2张牌，并获得1回合分心。",()=>{run.nextBattleDraw+=2;run.nextBattleWeak=(run.nextBattleWeak||0)+1;eventDone("下一场战斗首回合多抽2张牌，并获得1回合分心。")})]},
  {id:"g2_sudden",title:"骤临之试",story:"通知来得很突然：“今晚自习改考试。”教室里先安静了2秒，然后有人开始翻书。",choices:[
    eventOption("现在就做准备","失去10点专注，从3张随机稀有C部卡中选1张。",()=>offerEventCards("rare",()=>true,()=>{loseEventHp(10);return "，失去10点专注"}),()=>canLoseEventHp(10)),
    eventOption("先把会的稳住","下一场战斗开始时获得12点防御。",()=>{run.nextBattleBlock=(run.nextBattleBlock||0)+12;eventDone("下一场战斗开始时获得12点防御。")}),
    eventOption("我真没准备好","获得30饭卡价值及厄运“脑子打结”。",()=>{run.meal+=30;eventDone("获得30饭卡价值和“"+addEventCard("brain_knot")+"”。")})]}
];
const EVENT_ART=Object.fromEntries(FLOOR2_EVENTS.map(event=>[event.id,"./assets/events/"+event.id+".webp"]));
function openMidDecision(){
  [["midSprint","sprint"],["midClockDelivery","clock_delivery"]].forEach(([buttonId,id])=>{const button=$(buttonId);button.disabled=hasRelic(id);button.title=button.disabled?"已经拥有这件圣遗物":"";$(buttonId+"Art").innerHTML=relicArtMarkup(id)});
  $("midDecisionModal").hidden=false;
}
function continueMidDecision(id="none"){
  if(run.pendingNode?.type!=="mid_choice"||$("midDecisionModal").hidden)return;
  if(!["none","sprint","clock_delivery"].includes(id)||id!=="none"&&hasRelic(id))return;
  if(id!=="none")grantRelic(id);
  $("midDecisionModal").hidden=true;finishNode(id==="none"?"保持现状，继续前进。":"获得圣遗物“"+RELICS[id].name+"”。");
}
function openSport(){showOnly("sportScreen")}
function chooseSport(type){
  if(type==="run"){run.maxHp+=5;finishNode("完成跑步训练，最大专注增加 5。");return}
  if(type==="basketball"){run.strength++;finishNode("完成篮球训练，获得 1 点力量。");return}
  run.dexterity++;finishNode("完成羽毛球训练，获得 1 点敏捷。");
}
function openDecision(){
  const year=run.floor===2?"高二":"高三";
  $("decisionYear").textContent=year+" · 学年入口";
  $("decisionPlayerId").textContent=run.id;
  $("decisionStory").textContent="我我我我我我去我我我我我我靠，我还啥也没学呢怎么就"+year+"了😭";
  [["decisionPen","endless_pen"],["decisionSunMoon","sun_moon"]].forEach(([buttonId,relicId])=>{
    const button=$(buttonId);button.disabled=hasRelic(relicId);button.title=button.disabled?"已经拥有这件圣遗物":"";
    $(buttonId+"Art").innerHTML=relicArtMarkup(relicId);
  });
  showOnly("decisionScreen");
}
function chooseDecision(id){
  if(run.pendingNode?.type!=="choice"||$("decisionScreen").hidden)return;
  if(id==="without_blame"){
    run.deck.push(makeDeckEntry(id));
    finishNode("获得已升级的无色技能牌“不受其咎”。");
    return;
  }
  if(!["endless_pen","sun_moon"].includes(id)||hasRelic(id))return;
  grantRelic(id);finishNode("获得圣遗物“"+RELICS[id].name+"”。");
}

function startBattle(kind){
  const grade1Choice=hasRelic("grade1_relic");
  const encounterId=run.pendingNode?.encounterId||rollEncounter(kind);
  const practiceExam=!!run.practiceExam&&encounterId==="g2_final";
  const enemy=practiceExam?{...ENCOUNTERS.g2_final,name:"限时月考 · 交卷试行",hp:90,note:"完成40%后可以交卷；越晚交卷，奖励越好，但攻击压力会逐渐增加。",moves:[{name:"审题",damage:6,hits:1},{name:"题量增加",damage:8,hits:1,block:6},{name:"时间提醒",damage:10,hits:1},{name:"最后一页",damage:12,hits:1}]}:ENCOUNTERS[encounterId];if(!enemy)return;
  const examSubmission=enemy.kind==="exam"&&[1,2].includes(run.floor);
  const enemyMultiplier=hasRelic("clock_delivery")&&["exam","boss"].includes(enemy.kind)?1.1:1;
  const enemyHp=enemyMultiplier===1?enemy.hp:Math.floor(enemy.hp*11/10);
  pendingReward=null;pendingRelic=null;
  const startingDeck=run.deck.map(makeCard);
  const innateCards=shuffle(startingDeck.filter(inst=>CARDS[inst.id].innate));
  const regularCards=shuffle(startingDeck.filter(inst=>!CARDS[inst.id].innate));
  battle={
    kind:enemy.kind,encounterId,enemy,enemyMultiplier,examSubmission,submissionTier:null,weak:0,frail:0,vulnerable:0,turn:1,energy:3,nextEnergy:0,nextDraw:0,block:0,playerHp:run.hp,enemyHp,maxEnemyHp:enemyHp,enemyBlock:0,enemyThought:0,intents:enemy.moves,
    draw:[...regularCards,...innateCards],openingInnateCount:innateCards.length,discard:[],exhaust:[],hand:[],powers:{},doubleNext:false,nextAttackBonus:0,
    exhaustedCount:0,locked:grade1Choice,over:false,relicStrength:0,relicDexterity:0,exhaustTriggered:false,delayTriggered:false,prototypeTriggered:false,thoughtAttackTriggers:0,
    nextCardDiscount:0,freeNextCards:0,avoidNextHpLoss:0,turnDamageBonus:0,cardsPlayedTurn:0,cardsPlayedTotal:0,fortitude:0,fortitudeTriggered:false,penTriggered:false,waterTriggered:false,ringTriggered:false,keepBlockOnce:false,skillPowerTriggered:false,starTriggered:false,typesPlayed:new Set(),playingDamageBonus:0
  };
  $("quizTitle").textContent=enemy.name;$("battleEncounterTitle").textContent=NODE_TYPES[enemy.kind].name;
  $("enemyArt").src=ENEMY_ART[encounterId];$("enemyArt").alt=enemy.name+"插画";
  $("enemyDescription").textContent=enemy.note+(examSubmission?" 完成40%后可提前交卷；第3回合起，每2回合敌方每段攻击压力+1，最多+4。":"");$("battleNodeLabel").textContent=NODE_TYPES[enemy.kind].name+" · 战斗节点";
  battle.frail=run.nextBattleFrail;run.nextBattleFrail=0;
  battle.enemyBlock=enemy.startBlock||0;battle.enemyStrength=0;
  battle.weak=run.nextBattleWeak||0;run.nextBattleWeak=0;
  battle.nextEnergy=run.nextBattleEnergy||0;run.nextBattleEnergy=0;
  battle.block=run.nextBattleBlock||0;run.nextBattleBlock=0;
  showOnly("battleScreen");startPlayerTurn(true);battleLog("遭遇“"+enemy.name+"”，请查看本回合意图。");
  if(hasRelic("sprint")){battle.relicStrength++;loseHp(2,false);battleLog("冲刺！：失去2点专注，本场获得1点力量。");renderBattle();if(isDefeated()){loseBattle();return}}
  if(battle.over)return;
  if(grade1Choice){$("grade1RelicArt").innerHTML=relicArtMarkup("grade1_relic");$("grade1ChoiceModal").hidden=false;$("chooseGrade1Strength").focus()}
  else if(hasRelic("gaokao_guide"))scheduleBattleAction(openGuideChoice,180);
}
function chooseGrade1Boost(type){
  if(!battle||battle.over||$("grade1ChoiceModal").hidden||!["strength","dexterity"].includes(type))return;
  battle.relicStrength+=type==="strength"?3:0;
  battle.relicDexterity+=type==="dexterity"?3:0;
  $("grade1ChoiceModal").hidden=true;battle.locked=false;
  battleLog("高一专属圣遗物：本场战斗获得3点"+(type==="strength"?"力量":"敏捷")+"。");renderBattle();
  if(hasRelic("gaokao_guide"))scheduleBattleAction(openGuideChoice,180);
}
function totalStrength(){return run.strength+(battle?.relicStrength||0)}
function totalDexterity(){return run.dexterity+(battle?.relicDexterity||0)}
function startPlayerTurn(first){
  battle.exhaustedTurn=0;battle.steadfastTriggered=false;battle.marchTriggered=false;battle.inferTriggered=false;battle.neverBlankTurn=false;battle.marchBonus=0;battle.playingMarchBonus=0;battle.noonStacks=0;battle.correctionTriggered=false;battle.nextCardSurcharge=0;
  battle.breakTriggered=false;
  if(!first){if(battle.keepBlockOnce)battle.keepBlockOnce=false;else battle.block=0}
  battle.energy=3+battle.nextEnergy;battle.nextEnergy=0;battle.exhaustTriggered=false;battle.delayTriggered=false;
  battle.turnDamageBonus=0;battle.prototypeTriggered=false;battle.thoughtAttackTriggers=0;battle.cardsPlayedTurn=0;battle.skillPowerTriggered=false;battle.starTriggered=false;battle.typesPlayed=new Set();
  if(battle.powers.inertia)battle.enemyThought+=battle.powers.inertia;
  const drawCount=5+battle.nextDraw+(first&&hasRelic("mp4")?1:0)+(first?run.nextBattleDraw:0);
  drawCards(first?Math.max(drawCount,battle.openingInnateCount):drawCount);if(first)run.nextBattleDraw=0;battle.nextDraw=0;renderBattle();if(isDefeated())loseBattle();
}
function drawCards(count){
  for(let i=0;i<count;i++){
    if(!battle.draw.length){if(!battle.discard.length)break;battle.draw=shuffle(battle.discard);battle.discard=[]}
    const card=battle.draw.pop();battle.hand.push(card);
    if(card.id==="sleepy"){const lost=applyHpLoss(2);shakeScreen(lost);checkRing()}
    if(card.id==="brain_knot")battle.vulnerable++;
    if(card.id==="missing_paper")battle.nextCardSurcharge=(battle.nextCardSurcharge||0)+1;
    if(card.id==="spilled_ink"){
      const others=battle.hand.filter(other=>other.uid!==card.uid);
      if(others.length){const discarded=others[Math.floor(Math.random()*others.length)];battle.hand=battle.hand.filter(other=>other.uid!==discarded.uid);battle.discard.push(discarded)}
    }
    if(isDefeated())break;
  }
}
function printedCost(inst){
  if(CARDS[inst.id].type==="curse")return "—";
  return inst.upgraded&&["myth","review","restart","borrowed_notes","recover_scrap"].includes(inst.id)?0:(inst.upgraded&&["universal_method","grade_star","high_noon"].includes(inst.id)?1:CARDS[inst.id].cost);
}
function getCost(inst){
  if(CARDS[inst.id].type==="curse")return "—";
  let cost=printedCost(inst);
  if(inst.tempCost!=null)cost=inst.tempCost;
  if(battle&&battle.freeNextCards>0)return 0;
  cost+=battle?.nextCardSurcharge||0;
  if(battle&&battle.nextCardDiscount&&inst.id!=="break_bell")cost=Math.max(0,cost-battle.nextCardDiscount);
  return cost;
}
function selectionConfig(card){
  const id=typeof card==="string"?card:card.id,isUpgraded=typeof card==="object"&&card.upgraded;
  if(id==="tear_draft")return {zone:"hand",min:0,max:1,title:"撕掉草稿",hint:"可消耗1张其他手牌，追加1次攻击。"};
  if(["overturn_answer","still_write"].includes(id))return {zone:"hand",min:0,max:2,title:CARDS[id].name,hint:"选择最多2张其他手牌消耗，也可以不选。"};
  if(id==="archive_errors")return {zone:"hand",min:1,max:1,title:"错题归档",hint:"消耗1张其他手牌，然后抽牌。"};
  if(id==="recover_scrap")return {zone:"exhaust",min:1,max:1,filter:inst=>CARDS[inst.id].type!=="curse",title:"废稿回收",hint:"选择1张非厄运牌，本回合0费；不会额外添加消耗。"};
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
  battle.energy-=cost;battle.nextCardSurcharge=0;if(usedDiscount)battle.nextCardDiscount=0;if(battle.freeNextCards>0)battle.freeNextCards--;battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);
  battle.playingDamageBonus=inst.damageBonus||0;
  battle.playingMarchBonus=def.type==="attack"?(battle.marchBonus||0):0;if(def.type==="attack")battle.marchBonus=0;
  let selectedUsed=false,postAction=null;
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
    case"dark_descent":battle.avoidNextHpLoss++;break;
    case"pleasant_journey":battle.freeNextCards+=2;break;
    case"roach_swarm":battle.turnDamageBonus+=6;break;
    case"high_noon":battle.noonStacks=(battle.noonStacks||0)+1;break;
    case"without_blame":battle.fortitude+=15;break;
    case"tear_draft":{const doubled=battle.doubleNext;dealAttack(inst.upgraded?10:7);if(selected.length){exhaustSelected(selected,"hand");battle.doubleNext=doubled;dealAttack(inst.upgraded?7:5)}break}
    case"assault_final":dealAttack(inst.upgraded?12:9);if(battle.exhaustedTurn>0)battle.enemyThought+=2;break;
    case"paper_ball":dealAttack((inst.upgraded?7:4)+Math.min(6,Math.floor(battle.exhaustedCount/3)*2));break;
    case"overturn_answer":exhaustSelected(selected,"hand");dealAttack((inst.upgraded?9:6)+selected.length*4);break;
    case"never_lose":{const repeat=battle.playerHp<=0;battle.fortitude+=inst.upgraded?6:4;dealAttack(inst.upgraded?16:12,repeat?2:1);break}
    case"archive_errors":exhaustSelected(selected,"hand");drawCards(inst.upgraded?3:2);break;
    case"until_bell":gainCardBlock((inst.upgraded?11:8)+(battle.exhaustedTurn>0?4:0));break;
    case"keep_draft":gainCardBlock(inst.upgraded?7:4);break;
    case"clear_desktop":{const targets=[...battle.hand],count=targets.length;exhaustSelected(targets,"hand");if(count)gainCardBlock(count*(inst.upgraded?3:2));battle.energy+=Math.floor(count/2);break}
    case"recover_scrap":{const chosen=selected[0];if(chosen){battle.exhaust=battle.exhaust.filter(card=>card.uid!==chosen.uid);chosen.tempCost=0;chosen.forcedExhaust=false;battle.hand.push(chosen)}break}
    case"still_write":battle.fortitude+=inst.upgraded?15:10;exhaustSelected(selected,"hand");drawCards(selected.length);break;
    default:applyPower(inst.id,inst.upgraded);
  }
  battle.playingDamageBonus=0;battle.playingMarchBonus=0;
  if(def.type==="power"){}
  else if(def.exhaust||inst.forcedExhaust)exhaustCard(inst,{played:true});
  else{inst.tempCost=null;inst.forcedExhaust=false;battle.discard.push(inst)}
  battle.cardsPlayedTurn++;battle.cardsPlayedTotal++;battle.typesPlayed.add(def.type);
  if(battle.enemy?.breakBlock&&!battle.breakTriggered&&battle.typesPlayed.has("attack")&&battle.typesPlayed.has("skill")){battle.breakTriggered=true;const removed=Math.min(battle.enemyBlock,battle.enemy.breakBlock);battle.enemyBlock-=removed;battleLog("破题：移除"+removed+"点敌方防御。");}
  if(hasRelic("sun_moon")&&battle.cardsPlayedTotal%7===0){battle.relicStrength++;battle.relicDexterity++;battleLog("日月同辉：本场获得1点力量和1点敏捷。")}
  if(hasRelic("pen")&&!battle.penTriggered&&battle.cardsPlayedTurn===3){battle.penTriggered=true;drawCards(1)}
  if(hasRelic("water_card")&&!battle.waterTriggered&&beforeEnergy>0&&battle.energy===0){battle.waterTriggered=true;battle.energy++}
  if(def.type==="skill"&&battle.powers.duty_schedule&&!battle.skillPowerTriggered){battle.skillPowerTriggered=true;gainBlock(battle.powers.duty_schedule)}
  if(battle.powers.grade_star&&!battle.starTriggered&&battle.typesPlayed.has("attack")&&battle.typesPlayed.has("skill")){battle.starTriggered=true;battle.nextEnergy+=battle.powers.grade_star;battle.nextDraw+=battle.powers.grade_star}
  if(isDefeated()){loseBattle();return}
  if(battle.enemyHp<=0){winBattle();return}
  battleLog("使用“"+def.name+"”。");renderBattle();if(postAction)scheduleBattleAction(postAction,80);
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
function gainCardBlock(amount){gainBlock(Math.max(0,Math.floor((amount+totalDexterity())*(battle.frail>0?.75:1))))}
function applyHpLoss(amount){
  if(amount<=0)return 0;
  if(battle.avoidNextHpLoss>0){battle.avoidNextHpLoss--;battleLog("黑暗降临抵消了下一次专注降低。");return 0}
  const lost=battle.fortitude>0?amount:Math.min(amount,Math.max(0,battle.playerHp));
  battle.playerHp-=lost;
  if(battle.playerHp<=0&&battle.fortitude>0){
    const first=!battle.fortitudeTriggered;battle.fortitudeTriggered=true;
    if(first&&battle.powers.never_blank){battle.relicStrength+=2*battle.powers.never_blank_stacks;battle.relicDexterity+=2*battle.powers.never_blank_stacks;battleLog("绝不空卷：触发刚毅，获得力量和敏捷。")}
  }
  return lost;
}
function isDefeated(){const fortitude=battle.fortitude||0;return battle.playerHp<=0&&(fortitude<=0||battle.playerHp < -fortitude)}
function loseHp(amount,fromCard){
  const lost=applyHpLoss(amount);shakeScreen(lost);
  if(lost&&fromCard&&battle.powers.contest_body)battle.nextAttackBonus+=battle.powers.contest_body;
  checkRing();return lost;
}
function shakeScreen(damage){
  if(damage<=0||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return 0;
  const screen=$("battleScreen"),strength=Math.min(7,2+Math.sqrt(damage)*.8),vertical=Math.floor(strength*.4);
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
    let damage=(Math.floor((base+totalStrength()+battle.playingDamageBonus+(battle.playingMarchBonus||0)+(i===0?bonus:0))*multiplier)+(battle.turnDamageBonus||0))*Math.pow(2,battle.noonStacks||0);
    const absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
    battle.enemyHp=Math.max(0,battle.enemyHp-damage);total+=damage;checkBossThreshold();
  }
  battle.doubleNext=false;battle.nextAttackBonus=0;animateEnemy("-"+total);
  if(thought&&battle.powers.defense&&battle.thoughtAttackTriggers<battle.powers.defense){battle.thoughtAttackTriggers++;drawCards(1)}
}
function applyPower(id,upgraded){
  const added={steadfast:upgraded?7:5,march_forward:upgraded?5:3,infer_again:upgraded?2:1,never_blank:upgraded?4:3};
  if(id in added){battle.powers[id]=(battle.powers[id]||0)+added[id];if(id==="never_blank")battle.powers.never_blank_stacks=(battle.powers.never_blank_stacks||0)+1;return}
  const values={defense:upgraded?2:1,inertia:upgraded?2:1,waste_value:upgraded?7:5,contest_body:upgraded?6:4,deadline:1,recycle_power:upgraded?4:3,thought_loop:upgraded?8:6,prototype:1,duty_schedule:upgraded?4:3,grade_star:1};
  battle.powers[id]=(battle.powers[id]||0)+values[id];if(id==="deadline"&&upgraded)battle.powers.deadline_draw=(battle.powers.deadline_draw||0)+1;if(id==="prototype"&&upgraded)battle.powers.prototype_upgraded=1;
}
function exhaustCard(inst,context){
  inst.tempCost=null;inst.forcedExhaust=false;battle.exhaust.push(inst);battle.exhaustedCount++;
  battle.exhaustedTurn=(battle.exhaustedTurn||0)+1;
  if(battle.enemy?.correction&&!battle.correctionTriggered){battle.correctionTriggered=true;battle.enemyBlock=Math.max(0,battle.enemyBlock-battle.enemy.correction);battleLog("订正：敌方防御减少"+battle.enemy.correction+"。");}
  if(!battle.steadfastTriggered&&battle.powers.steadfast){battle.steadfastTriggered=true;gainBlock(battle.powers.steadfast)}
  if(!battle.neverBlankTurn&&battle.powers.never_blank){battle.neverBlankTurn=true;battle.fortitude+=battle.powers.never_blank}
  if(CARDS[inst.id].type==="attack"&&!battle.marchTriggered&&battle.powers.march_forward){battle.marchTriggered=true;battle.marchBonus=(battle.marchBonus||0)+battle.powers.march_forward}
  if(CARDS[inst.id].type==="skill"&&!battle.inferTriggered&&battle.powers.infer_again){battle.inferTriggered=true;drawCards(battle.powers.infer_again)}
  if(context.delay&&inst.id==="keep_draft")drawCards(1);
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
  let damage=(amount+(battle.turnDamageBonus||0))*Math.pow(2,battle.noonStacks||0),absorbed=Math.min(battle.enemyBlock,damage);battle.enemyBlock-=absorbed;damage-=absorbed;
  battle.enemyHp=Math.max(0,battle.enemyHp-damage);checkBossThreshold();animateEnemy("-"+damage);
}
function checkBossThreshold(){
  if(battle.enemy?.ranking&&!battle.rankingTriggered&&battle.enemyHp>0&&battle.enemyHp*2<=battle.maxEnemyHp){battle.rankingTriggered=true;battle.enemyStrength=(battle.enemyStrength||0)+2;battleLog("坠榜：获得2点力量，重排座次永久替换为榜单压顶。");}
}
function bossMechanismHelp(){
  const enemy=battle.enemy;
  return (enemy.mechanism||enemy.note)+"\n当前敌方力量："+(battle.enemyStrength||0)+"。"+(enemy.breakBlock?"\n本回合破题："+(battle.breakTriggered?"已触发":"未触发")+"。":"")+(enemy.ranking?"\n坠榜："+(battle.rankingTriggered?"已触发":"未触发，阈值为"+Math.floor(battle.maxEnemyHp/2)+"点专注")+"。":"")+(battle.enemyMultiplier>1?"\n上面开摆下面寄：敌方专注上限与伤害增加10%，向下取整。":"");
}
function currentIntent(offset=0){
  const turn=battle.turn-1+offset,intent={...(battle.enemy.ranking&&battle.rankingTriggered&&turn%battle.intents.length===3?{name:"榜单压顶",damage:28,hits:1}:battle.intents[turn%battle.intents.length])};
  let vulnerable=battle.vulnerable;
  for(let step=0;step<offset;step++){const previous=battle.intents[(battle.turn-1+step)%battle.intents.length];vulnerable=Math.max(0,vulnerable-1)+(previous.debuff==="vulnerable"?previous.stacks:0)}
  let strength=battle.enemyStrength||0;for(let step=0;step<offset;step++){const index=(battle.turn-1+step)%battle.intents.length;strength+=battle.intents[index].strength||0;if(index===battle.intents.length-1)strength+=battle.enemy.cycleStrength||0}
  if(intent.damage){let damage=intent.damage+strength+Math.floor(turn/battle.intents.length)*(battle.enemy.growth||0);if(battle.examSubmission)damage+=examPressure(turn);if(battle.enemyMultiplier>1)damage=Math.floor(damage*11/10);intent.damage=Math.floor(damage*(vulnerable>0?1.5:1))}
  const parts=[];
  if(intent.damage)parts.push("造成"+intent.damage+"点压力"+(intent.hits>1?"×"+intent.hits:""));
  if(intent.block)parts.push("获得"+intent.block+"点防御");
  if(intent.strength)parts.push("获得"+intent.strength+"点力量");
  if(intent.debuff)parts.push("施加"+intent.stacks+"回合"+DEBUFFS[intent.debuff].name);
  if(intent.mistake)parts.push(run.deck.filter(card=>card.id==="wrong_question").length>=3?"错题已达3张上限":"将"+intent.mistake+"张错题加入弃牌堆");
  intent.text=parts.join("；");return intent;
}
function addWrongQuestions(count){
  let added=0;
  for(let i=0;i<count&&run.deck.filter(card=>card.id==="wrong_question").length<3;i++){
    const entry=makeDeckEntry("wrong_question");run.deck.push(entry);battle.discard.push(makeCard(entry));added++;
  }
  return added;
}
function examPressure(turnIndex=battle.turn-1){return Math.min(4,Math.floor(turnIndex/2))}
function examProgress(){return Math.floor((battle.maxEnemyHp-Math.max(0,battle.enemyHp))*100/battle.maxEnemyHp)}
function examMealRange(tier){
  const bonus=hasRelic("certificate")?10:0;
  const penalty=run.deck.filter(entry=>entry.id==="lost_meal_card").length*10;
  const low=tier==="pass"?8:15,high=tier==="pass"?12:25;
  return [Math.max(0,low+bonus-penalty),Math.max(0,high+bonus-penalty)];
}
function submitExam(){
  if(!battle||!battle.examSubmission||battle.over||battle.locked||examProgress()<40)return;
  battle.submissionTier=examProgress()>=70?"good":"pass";
  winBattle();
}
function endPlayerTurn(){
  if(battle.locked||battle.over)return;battle.locked=true;
  const homework=battle.hand.filter(inst=>inst.id==="forgotten_homework").length;
  if(homework){for(let i=0;i<homework;i++){const lost=applyHpLoss(3);shakeScreen(lost);checkRing()}}
  const delayed=battle.hand.filter(inst=>CARDS[inst.id].delay);
  delayed.forEach(inst=>{battle.hand=battle.hand.filter(card=>card.uid!==inst.uid);exhaustCard(inst,{delay:true})});
  const retained=[];
  battle.hand.forEach(inst=>{inst.tempCost=null;inst.forcedExhaust=false;if(CARDS[inst.id].retain)retained.push(inst);else battle.discard.push(inst)});battle.hand=retained;
  for(let i=0;i<(battle.noonStacks||0);i++){loseHp(15,true);if(isDefeated())break}
  battle.noonStacks=0;battle.turnDamageBonus=0;
  if(isDefeated()){loseBattle();return}
  if(battle.enemyHp<=0){winBattle();return}
  if(hasRelic("endless_pen")&&battle.energy>0)battle.nextEnergy+=2;
  renderBattle();scheduleBattleAction(enemyTurn,420);
}
function enemyTurn(){
  const intent=currentIntent();battle.enemyBlock=0;
  let total=0;
  for(let i=0;i<intent.hits;i++){
    const absorbed=Math.min(battle.block,intent.damage);battle.block-=absorbed;
    const taken=applyHpLoss(intent.damage-absorbed);total+=taken;
  }
  if(total)shakeScreen(total);
  checkRing();
  if(intent.block)battle.enemyBlock+=intent.block;
  if(intent.strength)battle.enemyStrength=(battle.enemyStrength||0)+intent.strength;
  const wrongAdded=intent.mistake?addWrongQuestions(intent.mistake):0;
  if(battle.enemy.cycleStrength&&battle.turn%battle.intents.length===0){battle.enemyStrength+=battle.enemy.cycleStrength;battleLog("连考：本轮循环结束，敌方获得"+battle.enemy.cycleStrength+"点力量。");}
  Object.keys(DEBUFFS).forEach(key=>{battle[key]=Math.max(0,battle[key]-1)});
  if(intent.debuff)battle[intent.debuff]+=intent.stacks;
  animateBattle(total?"压力 -"+total:"完全防住");
  battleLog("“"+intent.name+"”造成"+total+"点实际压力。"+(wrongAdded?"新增"+wrongAdded+"张错题，进入弃牌堆并留在本局牌组。":""));
  if(battle.enemyThought>0){battle.enemyThought--;if(battle.powers.thought_loop)dealEffectDamage(battle.powers.thought_loop)}
  if(battle.enemyHp<=0){winBattle();return}
  if(isDefeated()){loseBattle();return}
  battle.turn++;battle.locked=false;startPlayerTurn(false);
}
function renderBattle(){
  if(!battle)return;
  hideStatusTooltip();
  const enemyBox=$("quizEnemy");
  if(battle.kind==="boss")setStatusHelp(enemyBox,battle.enemy.name+" · Boss机制",bossMechanismHelp());
  else{delete enemyBox.dataset.statusName;delete enemyBox.dataset.statusHelp;enemyBox.removeAttribute("tabindex");enemyBox.classList.remove("status-help")}
  run.hp=Math.max(0,battle.playerHp);
  $("battleTurn").textContent="第"+battle.turn+"回合";$("battleHpText").textContent=battle.playerHp+" / "+run.maxHp;
  $("battleHpBar").style.width=(Math.max(0,battle.playerHp)/run.maxHp*100)+"%";$("battleBlock").textContent=battle.block;
  $("battleStrength").textContent=totalStrength();$("battleDexterity").textContent=totalDexterity();
  $("nextAttackState").textContent=[battle.doubleNext?"双倍":"",battle.nextAttackBonus?"首段+"+battle.nextAttackBonus:"",battle.marchBonus?"每段+"+battle.marchBonus:""].filter(Boolean).join(" · ")||"无";
  $("quizHpLabel").textContent=battle.examSubmission?"剩余题量":"测验进度";$("quizHpText").textContent=battle.enemyHp+" / "+battle.maxEnemyHp;$("quizHpBar").style.width=(battle.enemyHp/battle.maxEnemyHp*100)+"%";
  const examPanel=$("examSubmitPanel");examPanel.hidden=!battle.examSubmission;
  if(battle.examSubmission){
    const progress=examProgress(),range=progress<70?examMealRange("pass"):examMealRange("good");
    const tier=progress<40?"完成40%后可交卷":progress<70?"勉强交卷："+range.join("～")+"饭卡价值，无选卡及圣遗物":progress<100?"正常交卷："+range.join("～")+"饭卡价值，1次三选一卡牌":"完整完成：月考全部奖励";
    $("examProgress").textContent=progress+"%";$("examPressure").textContent="+"+examPressure();$("examSubmitHint").textContent=tier;
    $("examSubmitButton").disabled=battle.over||battle.locked||progress<40;
  }
  $("battleEnergy").textContent=battle.energy;$("battleDraw").textContent=battle.draw.length;$("battleDiscard").textContent=battle.discard.length;$("battleExhaust").textContent=battle.exhaust.length;
  const thought=$("enemyThought");thought.hidden=battle.enemyThought===0;thought.querySelector("b").textContent=battle.enemyThought;
  const enemyBlock=$("enemyBlock");enemyBlock.hidden=battle.enemyBlock===0;enemyBlock.querySelector("b").textContent=battle.enemyBlock;
  const intent=currentIntent(),nextIntent=currentIntent(1);$("intentName").textContent=intent.name;$("intentText").textContent=intent.text+(hasRelic("iphone")?"；下回合："+nextIntent.name+"（"+nextIntent.text+"）":"");
  $("battleEndTurn").disabled=battle.locked||battle.over;
  renderPowers();renderHand();
  const statuses=$("playerDebuffs");statuses.innerHTML="";
  if(battle.nextCardSurcharge){const tag=document.createElement("span");tag.textContent="卷子失踪 +"+battle.nextCardSurcharge+"费";setStatusHelp(tag,"卷子失踪","本回合下一张牌费用增加"+battle.nextCardSurcharge+"，打出牌后清除。回合结束未使用也会清除；旅途愉快的0费效果优先。");statuses.appendChild(tag)}
  if(battle.noonStacks){const tag=document.createElement("span");tag.className="event-buff";tag.textContent="午时已到 ×"+Math.pow(2,battle.noonStacks);setStatusHelp(tag,"午时已到","本回合所有攻击段及效果伤害在其他增幅结算后乘以"+Math.pow(2,battle.noonStacks)+"，再抵扣敌方防御。回合结束时逐次失去15点专注，共"+battle.noonStacks+"次；不受防御抵挡。战斗结束则不再结算未到来的回合结束效果。");statuses.appendChild(tag)}
  Object.entries(DEBUFFS).forEach(([key,def])=>{if(battle[key]>0){const tag=document.createElement("span");tag.textContent=def.name+" "+battle[key];setStatusHelp(tag,def.name,def.text+"，计算结果向下取整。剩余"+battle[key]+"回合；敌方行动后减少1回合。重复施加增加持续回合，不提高百分比。" );statuses.appendChild(tag)}});
  [["黑暗降临 "+battle.avoidNextHpLoss,battle.avoidNextHpLoss>0,"每层抵消1次会使专注降低的效果。不会被完全挡住的攻击消耗。当前"+battle.avoidNextHpLoss+"层。"],["旅途愉快 "+battle.freeNextCards,battle.freeNextCards>0,"接下来"+battle.freeNextCards+"张牌费用变为0，跨回合保留。"],["蟑螂群 +"+battle.turnDamageBonus,battle.turnDamageBonus>0,"本回合你造成的每段攻击和每次效果伤害增加"+battle.turnDamageBonus+"。"],["刚毅 "+battle.fortitude,battle.fortitude>0,"本场可在专注降至0或以下后继续承受最多"+battle.fortitude+"点伤害；降到 -"+battle.fortitude+" 时仍存活，再低则失败。触发后若战斗胜利，专注恢复至"+battle.fortitude+"（不超过上限）。"]].forEach(([label,active,help])=>{if(active){const tag=document.createElement("span");tag.className="event-buff";tag.textContent=label;setStatusHelp(tag,label,help);statuses.appendChild(tag)}});
  setStatusHelp($("battleStrength").parentElement,"力量","当前"+totalStrength()+"点（本局"+run.strength+"点，本场圣遗物加成"+battle.relicStrength+"点）。每点使攻击牌的每段基础伤害增加1，再计算思路、分心与双倍等倍率。操场获得的力量保留到本局结束。");
  setStatusHelp($("battleDexterity").parentElement,"敏捷","当前"+totalDexterity()+"点（本局"+run.dexterity+"点，本场圣遗物加成"+battle.relicDexterity+"点）。每次卡牌获得防御时额外增加等量防御，再计算疲惫。不增加圣遗物和天赋触发的防御。");
  setStatusHelp($("battleBlock").parentElement,"防御","抵挡等量攻击压力，不能抵挡卡牌主动失去的专注。通常在下个玩家回合开始时清空；戒指触发时可保留1次。当前"+battle.block+"点。");
  setStatusHelp($("nextAttackState").parentElement,"思路增幅","下一次攻击结算："+(battle.doubleNext?"所有攻击段伤害翻倍。":"没有双倍效果。")+"首段额外基础伤害+"+battle.nextAttackBonus+"。高歌猛进每段额外基础伤害+"+(battle.marchBonus||0)+"，仅本回合有效。攻击结算后清除；其他未使用的增幅跨回合保留。");
  setStatusHelp($("enemyThought"),"思路（敌方减益）","敌人受到的攻击牌伤害增加50%，不增加天赋直接伤害。当前"+battle.enemyThought+"层；敌方行动后减少1层。层数表示持续时间，不叠加增伤倍率。");
  setStatusHelp($("enemyBlock"),"敌方防御","抵挡等量伤害，当前"+battle.enemyBlock+"点。在敌人下一次行动开始时清空，再获得该次意图提供的新防御。");
}
function setStatusHelp(element,name,text){
  element.dataset.statusName=name;element.dataset.statusHelp=text;element.tabIndex=0;element.classList.add("status-help");
}
function setCardTermHelp(element,inst){
  const def=CARDS[inst.id],description=(inst.upgraded?UPGRADES[inst.id]:def.text)+" "+(def.keyword||"");
  const terms=Object.entries(CARD_TERMS).filter(([term])=>description.includes(term));
  if(terms.length)setStatusHelp(element,def.name+" · 名词解释",terms.map(([term,help])=>term+"："+help).join("\n"));
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
    contest_body:`每次卡牌使你失去专注时，下一次攻击的首段额外增加${n}点基础伤害。可累计，攻击后清除。`,
    deadline:`每回合首次因拖延消耗卡牌时，下回合额外获得${n}点行动力`+(p.deadline_draw?`并多抽${p.deadline_draw}张牌`:"")+`。本回合${battle.delayTriggered?"已":"未"}触发。`,
    recycle_power:`每消耗1张牌，对敌人造成${n}点伤害。可被敌方防御抵挡，不受力量、思路、分心或双倍影响。`,
    thought_loop:`敌方行动后思路层数减少时，造成${n}点伤害。可被防御抵挡，不受攻击倍率影响；主动移除思路目前不触发。`,
    prototype:`每回合首次消耗攻击牌时，获得${n}张该牌的0费消耗复制品。复制品${p.prototype_upgraded?"为升级版":"为未升级版"}，0费仅限本回合。本回合${battle.prototypeTriggered?"已":"未"}触发。`,
    duty_schedule:`每回合首次打出技能牌时，获得${n}点防御。本回合${battle.skillPowerTriggered?"已":"未"}触发。`,
    grade_star:`同一回合打出过攻击和技能牌后，下回合额外获得${n}点行动力并多抽${n}张牌。每回合最多触发1次；本回合${battle.starTriggered?"已":"未"}触发。`,
    steadfast:`每回合首次消耗牌时获得${n}点防御。本回合${battle.steadfastTriggered?"已":"未"}触发。`,
    march_forward:`每回合首次消耗攻击牌时，本回合下一张攻击牌每段伤害增加${n}。本回合${battle.marchTriggered?"已":"未"}触发。`,
    infer_again:`每回合首次消耗技能牌时抽${n}张牌。本回合${battle.inferTriggered?"已":"未"}触发。`,
    never_blank:`每回合首次消耗牌时获得${n}点刚毅；本回合${battle.neverBlankTurn?"已":"未"}触发。首次触发刚毅时获得${2*p.never_blank_stacks}点力量和敏捷；本场${battle.fortitudeTriggered?"已":"未"}触发刚毅。`
  };
  return descriptions[id]+" 天赋持续到本场战斗结束，数值已计入叠加效果。";
}
function renderPowers(){
  const names={defense:"公开答辩",inertia:"思维惯性",waste_value:"废案价值",contest_body:"竞赛体质",deadline:"截止效应",recycle_power:"化废为宝",thought_loop:"思路闭环",prototype:"原型迭代",duty_schedule:"值日安排",grade_star:"年级之星",steadfast:"岿然不动",march_forward:"高歌猛进",infer_again:"举一反三",never_blank:"绝不空卷"};
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
  button.innerHTML='<span class="card-cost">'+(staticPreview?printedCost(inst):reward?printedCost(inst):getCost(inst))+'</span><span class="card-division">'+DIVISION_LABEL[division]+'</span><p class="card-meta"><span class="card-type-label">'+TYPE_LABEL[def.type]+'</span><span class="card-rarity">'+rarity+'</span></p><h3>'+def.name+(inst.upgraded?"+":"")+'</h3>'+cardArtMarkup(inst.id)+'<p class="card-text">'+(inst.upgraded?UPGRADES[inst.id]:def.text)+(def.keyword?'<span class="keyword">'+def.keyword+"</span>":"")+"</p>";
  setCardTermHelp(button,inst);
  return button;
}
function battleLog(text){$("battleLog").textContent=text}
function animateEnemy(text){const enemy=$("quizEnemy");enemy.classList.remove("hit");void enemy.offsetWidth;enemy.classList.add("hit");animateBattle(text)}
function animateBattle(text){const el=$("battleFloat");el.textContent=text;el.classList.remove("show");void el.offsetWidth;el.classList.add("show")}
function winBattle(){
  if(battle.over)return;
  if(battle.fortitudeTriggered)battle.playerHp=Math.min(run.maxHp,battle.fortitude);
  if(hasRelic("clock_delivery"))battle.playerHp=Math.min(run.maxHp,battle.playerHp+2);
  battle.over=true;battle.locked=true;run.hp=battle.playerHp;renderBattle();
  battleLog(battle.enemy.name+"已完成，正在结算奖励。");scheduleBattleAction(showRewards,600);
}
function loseBattle(){
  battle.over=true;battle.locked=true;run.hp=0;renderBattle();$("defeatModal").hidden=false;$("returnAfterDefeat").focus();
}
function returnFromDefeat(){$("defeatModal").hidden=true;battle=null;backToStart()}
function rollRarity(){const n=Math.random();return n<.7?"common":n<.9?"uncommon":"rare"}
function generateRewardCards(rarity=null,count=3){
  const ids=[];
  while(ids.length<count){
    const pickedRarity=rarity||rollRarity(),pool=Object.keys(CARDS).filter(id=>!CARDS[id].colorless&&CARDS[id].rarity===pickedRarity&&!CARDS[id].eventOnly&&!ids.includes(id));
    const id=pool[Math.floor(Math.random()*pool.length)];if(id)ids.push(id);
  }
  return ids;
}
function showRewards(){
  if(battle.examSubmission&&battle.submissionTier){
    const base=battle.submissionTier==="pass"?8+Math.floor(Math.random()*5):15+Math.floor(Math.random()*11);
    const penalty=run.deck.filter(entry=>entry.id==="lost_meal_card").length*10;
    const meal=Math.max(0,base+(hasRelic("certificate")?10:0)-penalty);run.meal+=meal;
    if(battle.submissionTier==="pass"){completeBattleRewards("勉强交卷：获得"+meal+"饭卡价值，无选卡或圣遗物。");return}
    pendingReward={cards:[],meal,picksRemaining:1,round:1,elite:false,boss:false};
  }
  if(!pendingReward){const penalty=run.deck.filter(entry=>entry.id==="lost_meal_card").length*10,meal=Math.max(0,10+Math.floor(Math.random()*21)+(hasRelic("certificate")?10:0)-penalty);run.meal+=meal;pendingReward={cards:[],meal,picksRemaining:battle.kind==="battle"?1:2,round:1,elite:battle.kind!=="battle",boss:battle.kind==="boss"}}
  pendingReward.cards=pendingReward.boss?(pendingReward.round===1?generateRewardCards("rare",3):generateRewardCards("common",1)):generateRewardCards();$("mealReward").textContent=pendingReward.meal;
  $("rewardEyebrow").textContent=battle.enemy.name+(battle.submissionTier?" · 正常交卷":" · 胜利");$("rewardTitle").textContent=pendingReward.boss?(pendingReward.round===1?"期末奖励：稀有卡3选1":"期末奖励：1张普通卡"):(pendingReward.elite?"第"+pendingReward.round+"次卡牌奖励":"选择1张卡牌");
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
  const rarity=rollRelicRarity(),available=Object.keys(RELICS).filter(id=>!hasRelic(id)&&!RELICS[id].grade1&&!RELICS[id].choiceOnly),matching=available.filter(id=>RELICS[id].rarity===rarity),pool=matching.length?matching:available;
  pendingRelic=pendingReward.boss&&run.floor===1?"grade1_relic":pool[Math.floor(Math.random()*pool.length)]||null;const holder=$("relicRewardCard");holder.innerHTML="";
  if(pendingRelic){const relic=RELICS[pendingRelic];holder.innerHTML='<small>'+RARITY_LABEL[relic.rarity]+' · 圣遗物</small><h2>'+relic.name+'</h2>'+relicArtMarkup(pendingRelic)+'<p>'+relic.text+'</p>'}
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
  if(run.practiceExam){backToStart();$("examPreviewResult").textContent="交卷试玩完成："+message+extra+" 本次奖励不保存。";return}
  finishNode(message+extra);
  if(battle.kind==="boss"&&run.floor<=2){$("finishTitle").textContent=(run.floor===1?"高一":"高二")+"学年通关";$("finishSummary").textContent="你击败了“"+battle.enemy.name+"”，完成了本层期末考试。";$("restartMap").textContent=run.floor===1?"进入高二":"进入高三（待设计）";$("finishModal").hidden=false}
}
function advanceToNextFloor(){
  if($("finishModal").hidden||![1,2].includes(run.floor))return;
  $("finishModal").hidden=true;run.floor++;battle=null;showOnly("mapScreen");createMap();
}

$("startForm").addEventListener("submit",event=>{event.preventDefault();const id=$("playerId").value.trim();if(!id){$("formError").textContent="请输入学生 ID 后开始游戏";$("playerId").focus();return}$("formError").textContent="";enterGame(id)});
$("playerId").addEventListener("input",()=>{$("formError").textContent=""});
$("openEncyclopedia").addEventListener("click",openEncyclopedia);
$("tryExamSubmit").addEventListener("click",startExamPreview);
$("closeEncyclopedia").addEventListener("click",closeEncyclopedia);
$("encyclopediaCardsTab").addEventListener("click",()=>{encyclopediaTab="cards";renderEncyclopedia()});
$("encyclopediaRelicsTab").addEventListener("click",()=>{encyclopediaTab="relics";renderEncyclopedia()});
$("encyclopediaCardFilter").addEventListener("change",event=>{encyclopediaFilter=event.target.value;renderEncyclopedia()});
$("encyclopediaTypeFilter").addEventListener("change",event=>{encyclopediaTypeFilter=event.target.value;renderEncyclopedia()});
$("encyclopediaRarityFilter").addEventListener("change",event=>{encyclopediaRarityFilter=event.target.value;renderEncyclopedia()});
$("encyclopediaReset").addEventListener("click",()=>{resetEncyclopediaFilters();renderEncyclopedia()});
$("encyclopediaUpgrade").addEventListener("click",()=>{encyclopediaUpgrade=!encyclopediaUpgrade;renderEncyclopedia()});
$("newRun").addEventListener("click",backToStart);
$("restartMap").addEventListener("click",advanceToNextFloor);
document.querySelectorAll("[data-decision]").forEach(button=>button.addEventListener("click",()=>chooseDecision(button.dataset.decision)));
$("battleEndTurn").addEventListener("click",endPlayerTurn);
$("examSubmitButton").addEventListener("click",submitExam);
$("debugFloor").addEventListener("change",event=>debugSelectFloor(event.target.value));
$("debugReturnMap").addEventListener("click",debugReturnToMap);
$("continueMidDecision").addEventListener("click",()=>continueMidDecision());
$("midSprint").addEventListener("click",()=>continueMidDecision("sprint"));
$("midClockDelivery").addEventListener("click",()=>continueMidDecision("clock_delivery"));
$("chooseGrade1Strength").addEventListener("click",()=>chooseGrade1Boost("strength"));
$("chooseGrade1Dexterity").addEventListener("click",()=>chooseGrade1Boost("dexterity"));
$("cancelSelection").addEventListener("click",cancelSelection);$("confirmSelection").addEventListener("click",confirmSelection);
$("returnAfterDefeat").addEventListener("click",returnFromDefeat);
$("chooseRest").addEventListener("click",restAtDorm);
$("chooseUpgrade").addEventListener("click",()=>openDeckAction("upgrade"));
$("chooseRevise").addEventListener("click",()=>openDeckAction("revise"));
$("cancelDeckAction").addEventListener("click",cancelDeckAction);
$("leaveCanteen").addEventListener("click",()=>finishNode("已离开食堂。"));
$("bingeButton").addEventListener("click",()=>openDeckAction("remove"));
document.querySelectorAll(".sport-option").forEach(button=>button.addEventListener("click",()=>chooseSport(button.dataset.sport)));
document.querySelectorAll(".legend-list [data-node-type]").forEach(item=>{
  item.addEventListener("pointerenter",()=>highlightNodeType(item.dataset.nodeType));
  item.addEventListener("pointerleave",()=>highlightNodeType(null));
  item.addEventListener("focus",()=>highlightNodeType(item.dataset.nodeType));
  item.addEventListener("blur",()=>highlightNodeType(null));
});
$("inspectDeck").addEventListener("click",openDeckView);
$("inspectRelics").addEventListener("click",openRelicDetails);
$("closeDeckView").addEventListener("click",()=>{$("deckViewModal").hidden=true});
$("closeCollection").addEventListener("click",closeCollectionView);
document.querySelectorAll(".pile-view-button").forEach(button=>button.addEventListener("click",()=>openPileView(button.dataset.pile)));
$("toggleUpgradePreview").addEventListener("click",toggleUpgradePreview);
$("claimRelic").addEventListener("click",()=>claimRelicReward(false));
$("skipCardReward").addEventListener("click",()=>selectReward(null));
$("skipRelicReward").addEventListener("click",()=>claimRelicReward(true));
updateRealTime();updatePlayTime();setInterval(()=>{updateRealTime();updatePlayTime()},1000);
document.addEventListener("visibilitychange",()=>{if(document.hidden)pausePlayTime();else resumePlayTime()});
window.addEventListener("blur",pausePlayTime);
window.addEventListener("focus",resumePlayTime);
document.addEventListener("pointerover",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target)});
document.addEventListener("pointerout",event=>{const target=event.target.closest("[data-status-help]");if(target&&!target.contains(event.relatedTarget))hideStatusTooltip()});
document.addEventListener("focusin",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target)});
document.addEventListener("focusout",event=>{if(event.target.closest("[data-status-help]"))hideStatusTooltip()});
document.addEventListener("click",event=>{const target=event.target.closest("[data-status-help]");if(target)showStatusTooltip(target);else hideStatusTooltip()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){hideStatusTooltip();if(!$("encyclopediaModal").hidden)closeEncyclopedia()}});
document.addEventListener("scroll",hideStatusTooltip,true);
window.addEventListener("resize",hideStatusTooltip);
