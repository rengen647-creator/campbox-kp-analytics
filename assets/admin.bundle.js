/* CampBox Analytics v2.0.2 standalone admin, DEMO only. Generated. */
(()=>{'use strict';
// DEMONSTRATION DATA ONLY. No real customer, deal, employee or analytics information.
const CHANNELS = Object.freeze({email:'email',telegram:'messenger',whatsapp:'messenger',bitrix:'crm',qr:'offline'});
const SCENARIOS = Object.freeze(['initial','followup1','followup2','meeting']);
const SECTION_LABELS = Object.freeze({executive_summary:'Главное',pain_documents:'Задачи лагеря',audit_legal:'Правовая часть',audit_ux:'Удобство сайта',solution_documents:'Документы',solution_booking:'Бронирование',integrations:'Интеграции',pricing:'Условия',next_step:'Следующий шаг'});
const EVENT_LABELS = Object.freeze({proposal_view:'Открыта страница',qualified_view:'Признаки просмотра',section_view:'Раздел в зоне видимости',section_engaged:'Активность в разделе',modal_open:'Открыты подробности',modal_close:'Закрыты подробности',pricing_view:'Просмотр условий',cta_click:'Нажат целевой элемент',contact_click:'Нажат контакт',download_click:'Нажато скачивание',external_link_click:'Внешний переход'});
const DEMO_PEOPLE = Object.freeze([{id:'demo-owner-1',name:'Менеджер 01'},{id:'demo-owner-2',name:'Менеджер 02'}]);
const d=(day,time='10:30')=>`2026-10-${day}T${time}:00+03:00`;
function proposalHTML(name,variant='auditor_v13_2') {
 const label=escapeText(name);
 const A=variant==='auditor_v13_1';
 return `<section data-kp-section="executive_summary"><p class="eyebrow">DEMO · коммерческое предложение</p><h1>${label}</h1><p class="lead">Персональный сценарий автоматизации лагеря: меньше ручной работы при оформлении путёвок, больше прозрачности для команды.</p></section>
 <section data-kp-section="pain_documents"><h2>Какие задачи решаем</h2><p>Анкеты, списки и документы могут собираться в разных местах. Для теста используются только вымышленные описания задач.</p><div class="note">Приоритет: понятный путь родителя и контроль полноты документов.</div></section>
 <section data-kp-section="solution_documents"><h2>${A?'Переходим к единому процессу':'Как помогает CampBox'}</h2><p>Единое место для данных путёвки, заполнения анкеты и подготовки документов.</p><button type="button" data-kp-modal="details_documents">Что входит в сценарий <span aria-hidden="true">↗</span></button><div data-kp-dialog="details_documents"><h3>Документы без лишних действий</h3><p>Родитель заполняет сведения в личном кабинете, сотрудники видят статус документов и могут подготовить выгрузку.</p><ul><li>Прозрачные статусы</li><li>Контроль обязательных полей</li><li>Массовая подготовка комплектов</li></ul></div></section>
 <section data-kp-section="solution_booking"><h2>Управление заявками</h2><p>Статусы бронирования, оплаты и подготовки к смене собраны в одной логике без ручного переноса между таблицами.</p></section>
 <section data-kp-section="pricing"><h2>Условия сотрудничества</h2><p>Демонстрационный раздел. Здесь будет только утверждённое персональное предложение — никаких реальных цен или договоров в текущей сборке.</p><div class="note">Без реальных коммерческих условий · макет</div></section>
 <section data-kp-section="next_step"><h2>Следующий шаг</h2><p>Обсудим, как запустить удобный процесс к началу продаж.</p><button type="button" data-kp-cta="request_meeting">Обсудить подключение ↗</button><button type="button" data-kp-contact="manager_contact">Контакт менеджера ↗</button></section>`;
}
function escapeText(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function freshDemo(){
 const titles=['Демо · Лагерь «Северный»','Демо · Лагерь «Радуга»','Демо · Лагерь «Лесной»','Демо · Лагерь «Спутник»','Демо · Лагерь «Маяк»'];
 const vers=['auditor_v13_1','auditor_v13_2','auditor_v13_2','auditor_v13_1','auditor_v13_2'];
 const proposals=titles.map((title,i)=>({id:`demo-p${i+1}`,title,ownerId:i===3?'demo-owner-2':i===1?'demo-owner-2':'demo-owner-1',createdAt:d(String(2+i*2).padStart(2,'0')),status:i===4?'draft':'published',dealId:null}));
 const revisions=proposals.slice(0,4).map((p,i)=>({id:`demo-r${i+1}`,proposalId:p.id,templateVersion:vers[i],html:proposalHTML(p.title,vers[i]),contentHash:`DEMO-HASH-${i+1}`,publishedAt:d(String(3+i*2).padStart(2,'0')),manifest:{schema_version:1,sections:['executive_summary','pain_documents','solution_documents','solution_booking','pricing','next_step'],modals:['details_documents'],ctas:['request_meeting','manager_contact']}}));
 revisions.push({id:'demo-r5',proposalId:'demo-p1',templateVersion:'auditor_v13_2',html:proposalHTML(titles[0],'auditor_v13_2'),contentHash:'DEMO-HASH-5',publishedAt:d('12'),manifest:{schema_version:1,sections:['executive_summary','pain_documents','solution_documents','solution_booking','pricing','next_step'],modals:['details_documents'],ctas:['request_meeting','manager_contact']}});
 const expiry=new Date(Date.now()+90*86400000).toISOString();
 const links=[
  {id:'demo-l1',revisionId:'demo-r1',source:'telegram',scenario:'initial',campaign:'campbox_kp_2026q4',role:'Руководитель',sentAt:d('04'),expiresAt:expiry,revokedAt:null,token:'demolink001'},
  {id:'demo-l2',revisionId:'demo-r2',source:'email',scenario:'initial',campaign:'campbox_kp_2026q4',role:'Руководитель',sentAt:d('06'),expiresAt:expiry,revokedAt:null,token:'demolink002'},
  {id:'demo-l3',revisionId:'demo-r3',source:'whatsapp',scenario:'followup1',campaign:'campbox_kp_2026q4',role:'Администратор',sentAt:d('08'),expiresAt:expiry,revokedAt:null,token:'demolink003'},
  {id:'demo-l4',revisionId:'demo-r4',source:'bitrix',scenario:'initial',campaign:'campbox_kp_2026q4',role:'Руководитель',sentAt:d('10'),expiresAt:expiry,revokedAt:null,token:'demolink004'},
  {id:'demo-l5',revisionId:'demo-r5',source:'email',scenario:'followup1',campaign:'campbox_kp_2026q4',role:'Руководитель',sentAt:null,expiresAt:expiry,revokedAt:null,token:'demolink005'}
 ];
 const sessions=[
  {id:'demo-s1',linkId:'demo-l1',startedAt:d('05','10:15'),consent:'accepted',kind:'seed'},
  {id:'demo-s2',linkId:'demo-l1',startedAt:d('06','11:10'),consent:'accepted',kind:'seed'},
  {id:'demo-s3',linkId:'demo-l2',startedAt:d('08','12:30'),consent:'accepted',kind:'seed'},
  {id:'demo-s4',linkId:'demo-l3',startedAt:d('09','09:50'),consent:'accepted',kind:'seed'},
  {id:'demo-s5',linkId:'demo-l4',startedAt:d('11','14:20'),consent:'accepted',kind:'seed'}
 ];
 const ev=[];
 function add(s,types){types.forEach((entry,i)=>{const [name,section,target,duration]=entry;ev.push({id:`demo-e${ev.length+1}`,sessionId:s.id,linkId:s.linkId,name,section:section||'',target:target||'',durationMs:duration||null,time:new Date(new Date(s.startedAt).getTime()+1000*(i+1)*9).toISOString(),origin:'seed'})})}
 add(sessions[0],[['proposal_view'],['qualified_view'],['section_view','executive_summary'],['section_view','pricing'],['pricing_view','pricing'],['modal_open','solution_documents','details_documents'],['modal_close','solution_documents','details_documents',12000],['cta_click','next_step','request_meeting']]);
 add(sessions[1],[['proposal_view'],['qualified_view'],['section_view','pain_documents'],['section_engaged','pain_documents','',10000],['section_view','pricing'],['pricing_view','pricing']]);
 add(sessions[2],[['proposal_view'],['qualified_view'],['section_view','solution_documents'],['section_view','pricing'],['pricing_view','pricing'],['modal_open','solution_documents','details_documents']]);
 add(sessions[3],[['proposal_view'],['qualified_view'],['section_view','executive_summary'],['section_view','next_step'],['cta_click','next_step','request_meeting']]);
 add(sessions[4],[['proposal_view']]);
 const outcomes=[{proposalId:'demo-p1',nextMeeting:true,discussion:true,contract:false,updatedAt:d('11'),source:'demo-manager'},{proposalId:'demo-p2',nextMeeting:true,discussion:false,contract:false,updatedAt:d('12'),source:'demo-manager'},{proposalId:'demo-p3',nextMeeting:false,discussion:false,contract:false,updatedAt:d('12'),source:'demo-manager'}];
 return {schema:2,demo:true,proposals,revisions,links,sessions,events:ev,outcomes,technical:[],demoStartedAt:'2026-10-13T13:00:00Z'};
}


const STORAGE_KEY='campbox-kp-analytics-demo-v2';
let cache;
function getState(){if(cache)return cache;try{const raw=localStorage.getItem(STORAGE_KEY);const data=raw?JSON.parse(raw):null;cache=data?.schema===2?data:freshDemo();}catch(_){cache=freshDemo();}return cache;}
function save(state){cache=state;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){/* demo still works in memory */}window.dispatchEvent(new CustomEvent('kp-store-updated'));return state;}
function refreshState(){try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const data=JSON.parse(raw);if(data?.schema===2)cache=data;}}catch(_){}return getState();}
function reset(){return save(freshDemo());}
const uid=prefix=>`${prefix}-${token()}`;
function token(){const bytes=new Uint8Array(24);crypto.getRandomValues(bytes);return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
function validateUTM({source,campaign,scenario,version}){
 if(!Object.hasOwn(CHANNELS,source))throw Error('Недопустимый источник');
 if(!/^campbox_kp_20\d\dq[1-4]$/.test(campaign))throw Error('Кампания: campbox_kp_ГГГГqN');
 if(!SCENARIOS.includes(scenario))throw Error('Выбери сценарий отправки');
 if(!/^auditor_v\d{1,3}_\d{1,3}(?:_\d{1,3})?$/.test(version))throw Error('Версия: auditor_v13_2');
 return {utm_source:source,utm_medium:CHANNELS[source],utm_campaign:campaign,utm_content:`${version}_${scenario}`};
}
function buildURL(link,revision,originURL=window.location.href){
 const parent = new URL('./',originURL);const base = new URL(window.location.protocol==='file:'?'./index.html':'./client.html',parent);if(window.location.protocol==='file:')base.searchParams.set('client','1');
 const utm=validateUTM({source:link.source,campaign:link.campaign,scenario:link.scenario,version:revision.templateVersion});
 Object.entries(utm).forEach(([k,v])=>base.searchParams.set(k,v));
 base.hash=`t=${encodeURIComponent(link.token)}`;
 return base.href;
}
function byProposal(state,pid){const rs=state.revisions.filter(r=>r.proposalId===pid);const ids=new Set(rs.map(r=>r.id));const links=state.links.filter(l=>ids.has(l.revisionId));const lid=new Set(links.map(l=>l.id));const sessions=state.sessions.filter(s=>lid.has(s.linkId));const sid=new Set(sessions.map(s=>s.id));return {revisions:rs,links,sessions,events:state.events.filter(e=>sid.has(e.sessionId)),outcome:state.outcomes.find(o=>o.proposalId===pid)};}
function countsFor(state,pid){const d=byProposal(state,pid);const qualified=new Set(d.events.filter(e=>e.name==='qualified_view').map(e=>e.sessionId));const interaction=new Set(d.events.filter(e=>['modal_open','cta_click','contact_click'].includes(e.name)).map(e=>e.sessionId));return {links:d.links.length,sent:d.links.filter(l=>l.sentAt).length,qualified:qualified.size,interaction:interaction.size,requests:state.technical.filter(t=>d.links.some(l=>l.id===t.linkId)).length};}
function templateMetrics(state){
 const revisionsById=new Map(state.revisions.map(r=>[r.id,r]));
 const actuallySent=new Map();
 for(const l of state.links){if(!l.sentAt)continue;const r=revisionsById.get(l.revisionId);if(!r)continue;
  if(!actuallySent.has(r.proposalId))actuallySent.set(r.proposalId,new Set());actuallySent.get(r.proposalId).add(r.templateVersion);
 }
 const versions=[...new Set(state.revisions.map(r=>r.templateVersion))].sort();
 return versions.map(v=>{const rs=state.revisions.filter(r=>r.templateVersion===v);const rid=new Set(rs.map(r=>r.id));
  const ls=state.links.filter(l=>rid.has(l.revisionId));const sentLinks=ls.filter(l=>l.sentAt),sentIds=new Set(sentLinks.map(l=>l.id));
  const sessions=state.sessions.filter(s=>sentIds.has(s.linkId)),sessionIds=new Set(sessions.map(x=>x.id));
  const events=state.events.filter(e=>sessionIds.has(e.sessionId));
  const qualified=new Set(events.filter(e=>e.name==='qualified_view').map(e=>e.sessionId));
  const engaged=new Set(events.filter(e=>['modal_open','cta_click','section_engaged'].includes(e.name)).map(e=>e.sessionId));
  const attributed=state.outcomes.filter(o=>{const sent=actuallySent.get(o.proposalId);return sent?.size===1&&sent.has(v);});
  const ambiguous=state.outcomes.filter(o=>{const hasRev=rs.some(r=>r.proposalId===o.proposalId);return hasRev&&actuallySent.get(o.proposalId)?.size>1;}).length;
  return {version:v,revisions:rs.length,sent:sentLinks.length,qualified:qualified.size,measured:sessions.length,engaged:engaged.size,
   meetings:attributed.filter(o=>o.nextMeeting).length,contracts:attributed.filter(o=>o.contract).length,unattributed:ambiguous,
   notes:'DEMO · результат относится к одной отправленной версии; неоднозначные КП не включены в исходы'};
 });
}
function checkProposalDetails(title,ownerId){
 if(typeof title!=='string'||!title.trim()||title.trim().length>110)throw Error('Название: от 1 до 110 символов');
 if(!DEMO_PEOPLE.some(person=>person.id===ownerId))throw Error('Неизвестный владелец КП');
 return title.trim();
}
function createProposal(title,ownerId){const clean=checkProposalDetails(title,ownerId);const s=getState(),p={id:uid('p'),title:clean,ownerId,createdAt:new Date().toISOString(),status:'draft',dealId:null};s.proposals.unshift(p);save(s);return p;}
function updateProposal(pid,{title,ownerId}){
 const clean=checkProposalDetails(title,ownerId),s=getState(),p=s.proposals.find(x=>x.id===pid);
 if(!p)throw Error('КП не найдено');p.title=clean;p.ownerId=ownerId;p.updatedAt=new Date().toISOString();save(s);return p;
}
function deleteProposal(pid){
 const s=getState(),p=s.proposals.find(x=>x.id===pid);if(!p)throw Error('КП не найдено');
 const revisions=new Set(s.revisions.filter(x=>x.proposalId===pid).map(x=>x.id));
 const links=new Set(s.links.filter(x=>revisions.has(x.revisionId)).map(x=>x.id));
 const sessions=new Set(s.sessions.filter(x=>links.has(x.linkId)).map(x=>x.id));
 s.proposals=s.proposals.filter(x=>x.id!==pid);s.revisions=s.revisions.filter(x=>!revisions.has(x.id));
 s.links=s.links.filter(x=>!links.has(x.id));s.sessions=s.sessions.filter(x=>!sessions.has(x.id));
 s.events=s.events.filter(x=>!sessions.has(x.sessionId)&&!links.has(x.linkId));
 s.technical=s.technical.filter(x=>!links.has(x.linkId));s.outcomes=s.outcomes.filter(x=>x.proposalId!==pid);
 save(s);return {proposal:p,deletedRevisions:revisions.size,deletedLinks:links.size};
}
const ALLOWED_TAGS=new Set(['SECTION','DIV','P','H1','H2','H3','H4','UL','OL','LI','STRONG','EM','SPAN','SMALL','BUTTON','A','BLOCKQUOTE','BR']);
const A= new Set(['data-kp-section','data-kp-modal','data-kp-dialog','data-kp-cta','data-kp-contact','data-kp-download','data-kp-external','type','class','href']);
function sanitizeHTML(html){
 if(typeof html!=='string'||html.length>120000)throw Error('HTML не должен превышать 120 КБ');
 if(/<(?:script|iframe|object|embed|style|svg|img|form|video|audio|link|meta|base)\b/i.test(html))throw Error('Небезопасные или неподдерживаемые элементы HTML');
 const doc=new DOMParser().parseFromString(`<div id="kp-root">${html}</div>`,'text/html');const root=doc.getElementById('kp-root');
 for(const node of [...root.querySelectorAll('*')]){
  if(!ALLOWED_TAGS.has(node.tagName))throw Error(`Неподдерживаемый элемент: ${node.tagName.toLowerCase()}`);
  for(const a of [...node.attributes]){if(!A.has(a.name))node.removeAttribute(a.name);}
  if(node.hasAttribute('href')){
   const href=node.getAttribute('href')?.trim()||'';
   if(href.startsWith('#')){if(!/^#[a-zA-Z0-9_-]*$/.test(href))throw Error('Недопустимый якорь ссылки');}
   else {let u;try{u=new URL(href);}catch(_){throw Error('Недопустимая внешняя ссылка');}
    if(u.protocol!=='https:'||u.hostname!=='camp-box.ru'||u.username||u.password||u.port||u.search||u.hash)throw Error('В демо разрешены ссылки camp-box.ru без параметров и идентификаторов');}
  }
 }
 const sections=[...root.querySelectorAll('[data-kp-section]')].map(x=>x.dataset.kpSection);const modals=[...root.querySelectorAll('[data-kp-dialog]')].map(x=>x.dataset.kpDialog);const calls=[...root.querySelectorAll('[data-kp-modal]')].map(x=>x.dataset.kpModal);const ctas=[...root.querySelectorAll('[data-kp-cta]')].map(x=>x.dataset.kpCta);
 for(const [vals,label] of [[sections,'разделов'],[modals,'модальных окон'],[ctas,'CTA']])if(new Set(vals).size!==vals.length)throw Error(`Есть повторяющиеся ключи ${label}`);
 if(!sections.length)throw Error('Добавь хотя бы один data-kp-section');
 for(const c of calls)if(!modals.includes(c))throw Error(`Нет содержимого для модального окна ${c}`);
 const key=/^[a-z][a-z0-9_]{0,63}$/;
 if([...sections,...modals,...calls,...ctas].some(x=>!key.test(x)))throw Error('Ключи должны состоять из латиницы и подчёркивания');
 return {html:root.innerHTML,manifest:{schema_version:1,sections,modals,ctas}};
}
async function createRevision(pid,version,html){if(!/^auditor_v\d{1,3}_\d{1,3}(?:_\d{1,3})?$/.test(version))throw Error('Формат версии: auditor_v13_2');const s=getState();if(!s.proposals.find(p=>p.id===pid))throw Error('КП не найдено');const cleaned=sanitizeHTML(html);const content=new TextEncoder().encode(cleaned.html);const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',content))).map(x=>x.toString(16).padStart(2,'0')).join('');const r={id:uid('r'),proposalId:pid,templateVersion:version,html:cleaned.html,contentHash:hash,publishedAt:new Date().toISOString(),manifest:cleaned.manifest};s.revisions.push(r);s.proposals.find(p=>p.id===pid).status='published';save(s);return r;}
function createLink(revisionId,{source,scenario,campaign,role,days}){const s=getState(),r=s.revisions.find(r=>r.id===revisionId);if(!r)throw Error('Сначала создай версию КП');validateUTM({source,campaign,scenario,version:r.templateVersion});if(!Number.isInteger(days)||days<1||days>365)throw Error('Срок должен быть от 1 до 365 дней');const l={id:uid('l'),revisionId,source,scenario,campaign,role:role?.trim().slice(0,60)||'Не указана',sentAt:null,expiresAt:new Date(Date.now()+days*86400000).toISOString(),revokedAt:null,token:token()};s.links.unshift(l);save(s);return l;}
function markSent(id){const s=getState(),l=s.links.find(x=>x.id===id);if(!l)throw Error('Ссылка не найдена');if(l.revokedAt)throw Error('Ссылка отозвана');l.sentAt=new Date().toISOString();save(s);}
function revoke(id){const s=getState(),l=s.links.find(x=>x.id===id);if(!l)throw Error('Ссылка не найдена');l.revokedAt=new Date().toISOString();save(s);}
function saveOutcome(pid,data){const s=getState();let o=s.outcomes.find(x=>x.proposalId===pid);if(!o){o={proposalId:pid};s.outcomes.push(o);}o.nextMeeting=!!data.nextMeeting;o.discussion=!!data.discussion;o.contract=!!data.contract;o.updatedAt=new Date().toISOString();o.source='manual-demo';save(s);return o;}
function resolveLink(secret){const s=getState();const link=s.links.find(x=>x.token===secret);if(!link)return {error:'Ссылка не найдена (демонстрационный режим)'};if(link.revokedAt)return {error:'Ссылка отозвана'};if(Date.parse(link.expiresAt)<Date.now())return {error:'Срок действия ссылки истёк'};const revision=s.revisions.find(x=>x.id===link.revisionId);if(!revision)return {error:'Версия документа недоступна'};return {link,revision,state:s};}
function technicalAccess(linkId){const s=getState();s.technical.push({id:uid('t'),linkId,time:new Date().toISOString(),kind:'browser-request-demo'});save(s);}
function startSession(linkId){const s=getState(),link=s.links.find(x=>x.id===linkId);if(!link||link.revokedAt||!Number.isFinite(Date.parse(link.expiresAt))||Date.parse(link.expiresAt)<=Date.now())throw Error('Ссылка недействительна');const session={id:uid('s'),linkId,startedAt:new Date().toISOString(),consent:'accepted',kind:'local-demo'};s.sessions.push(session);save(s);return session;}
const ONCE=new Set(['proposal_view','qualified_view','pricing_view']);const SECTION_ONCE=new Set(['section_view','section_engaged']);
function trackEvent(sessionId,name,section='',target='',durationMs=null){const s=getState();const session=s.sessions.find(x=>x.id===sessionId&&x.consent==='accepted');if(!session)return false;const link=s.links.find(l=>l.id===session.linkId);if(!link||link.revokedAt||Date.parse(link.expiresAt)<Date.now())return false;const ev=s.events.filter(e=>e.sessionId===sessionId);if(ONCE.has(name)&&ev.some(e=>e.name===name))return false;if(SECTION_ONCE.has(name)&&ev.some(e=>e.name===name&&e.section===section))return false;const revision=s.revisions.find(r=>r.id===link.revisionId);if(!revision)return false;if(section&&!revision.manifest?.sections?.includes(section))return false;if(['modal_open','modal_close'].includes(name)&&!revision.manifest?.modals?.includes(target))return false;if(name==='cta_click'&&!revision.manifest?.ctas?.includes(target))return false;if(name==='pricing_view'&&section!=='pricing')return false;if(name==='section_engaged'&&(!Number.isFinite(durationMs)||durationMs<8000))return false;if(name==='modal_close'&&ev.filter(e=>e.name==='modal_open'&&e.target===target).length<=ev.filter(e=>e.name==='modal_close'&&e.target===target).length)return false;if([section,target].some(x=>x&&!/^[a-z][a-z0-9_]{0,63}$/.test(x)))return false;if(durationMs!==null&&(!Number.isFinite(durationMs)||durationMs<0||durationMs>1800000))return false;const allowed=new Set(['proposal_view','qualified_view','section_view','section_engaged','modal_open','modal_close','pricing_view','cta_click','contact_click','download_click','external_link_click']);if(!allowed.has(name))return false;s.events.push({id:uid('e'),sessionId,linkId:session.linkId,name,section,target,durationMs,time:new Date().toISOString(),origin:'browser-demo'});save(s);return true;}
function fmt(t){if(!t)return '—';const date=new Date(t);return Number.isNaN(date.getTime())?'—':date.toLocaleDateString('ru-RU',{day:'2-digit',month:'short',year:'numeric'});}
function percent(num,den){return den?`${Math.round(num/den*100)}%`:'—';}

/* Text-only CSV export. This module is bundled with the DEMO admin UI. */
// Spreadsheet engines may ignore initial whitespace/control characters when
// interpreting a CSV cell as a formula. Neutralize the value BEFORE quoting.
// Applies to every exported cell, including columns added in the future.
const CSV_FORMULA_START=/^[\u0000-\u0020\u007F\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]*[=+\-@]/u;
function csvSafeCell(value){
  const raw=String(value??'');
  const safe=CSV_FORMULA_START.test(raw)?"'"+raw:raw;
  return '"'+safe.replace(/"/g,'""')+'"';
}
function csvSerialize(columns,rows){
  return '\uFEFF'+[columns,...rows].map(row=>row.map(csvSafeCell).join(',')).join('\r\n');
}

if(!new URLSearchParams(location.search).has('client')){


const $=id=>document.getElementById(id);const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let currentView='overview',selected=null,lastGeneratedLink='',modalOpener=null,noticeTimeout;
const nameOf=id=>DEMO_PEOPLE.find(p=>p.id===id)?.name||'Не назначен';
const isLead=()=>$('roleSelect').value==='lead';
const visibleProposals=s=>isLead()?s.proposals:s.proposals.filter(p=>p.ownerId==='demo-owner-1');
const detailsFor=(s,p)=>byProposal(s,p.id);
function notify(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(noticeTimeout);noticeTimeout=setTimeout(()=>t.classList.remove('show'),3500);}
function navigate(view){currentView=view;document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===`view-${view}`));document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('crumbText').textContent={overview:'Обзор аналитики',proposals:'Предложения',detail:'Карточка КП',templates:'Версии Аудитора',activity:'События',about:'Методика'}[view];$('sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'instant'});render();}
function getActive(){const s=getState();const p=s.proposals.find(x=>x.id===selected&&visibleProposals(s).some(q=>q.id===x.id));return {s,p};}
function fmtTime(time){const d=new Date(time);return Number.isNaN(d.getTime())?'—':d.toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});}
function pill(text,type=''){return `<span class="status-pill ${type}">${esc(text)}</span>`;}
function kpi(s){const visible=visibleProposals(s),all=new Set(visible.map(x=>x.id)),sent=visible.filter(p=>countsFor(s,p.id).sent>0),qualified=sent.filter(p=>countsFor(s,p.id).qualified>0),engaged=sent.filter(p=>countsFor(s,p.id).interaction>0),meeting=sent.filter(p=>s.outcomes.find(o=>o.proposalId===p.id)?.nextMeeting);$('kpiSent').textContent=sent.length;$('kpiQualified').textContent=`${qualified.length} / ${sent.length}`;$('kpiEngaged').textContent=engaged.length;$('kpiMeeting').textContent=meeting.length;
 const rows=[['Отправка КП',sent.length],['Признаки просмотра',qualified.length],['Взаимодействия',engaged.length],['Следующая встреча',meeting.length]];const max=Math.max(...rows.map(x=>x[1]),1);$('funnel').innerHTML=rows.map(([label,n])=>`<div class="funnel-row"><span class="funnel-label">${label}</span><div class="funnel-track"><div class="funnel-fill" style="width:${n/max*100}%"></div></div><b class="funnel-number">${n}</b></div>`).join('');
 const ids=new Set(s.links.filter(l=>s.revisions.some(r=>r.id===l.revisionId&&all.has(r.proposalId))).map(l=>l.id));let bars=Object.create(null);s.events.filter(e=>e.name==='section_view'&&ids.has(e.linkId)).forEach(e=>bars[e.section]=(bars[e.section]||0)+1);const values=Object.entries(bars).sort((a,b)=>b[1]-a[1]).slice(0,5),top=Math.max(1,...values.map(x=>x[1]));$('overviewSections').innerHTML=values.length?values.map(([key,n])=>`<div><div class="bar-heading"><span>${esc(SECTION_LABELS[key]||key)}</span><b>${n}</b></div><div class="bar-track"><div class="bar-fill" style="width:${n/top*100}%"></div></div></div>`).join(''):'<p class="small-print">Разрешённых событий разделов пока нет.</p>';
 $('overviewList').innerHTML=visible.slice(0,4).map(p=>{const c=countsFor(s,p.id);return `<div class="compact-row"><div><div class="name">${esc(p.title)}</div><div class="meta">${esc(nameOf(p.ownerId))} · ${c.sent} отправок · ${c.qualified} сессий</div></div><div class="button-row">${pill(c.qualified?'Есть признаки просмотра':c.sent?'Отправлено, нет данных':'Не отправлено',c.qualified?'success':c.sent?'warn':'muted')}<button class="text-button" data-open="${esc(p.id)}">Открыть →</button></div></div>`}).join('');}
function renderProposals(s){const value=$('searchInput').value.toLowerCase().trim(),status=$('statusFilter').value,act=$('activityFilter').value;const list=visibleProposals(s).filter(p=>{const c=countsFor(s,p.id);return p.title.toLowerCase().includes(value)&&(status==='all'||status===p.status)&&(act==='all'||(act==='qualified'?c.qualified>0:c.qualified===0));});$('proposalsBody').innerHTML=list.map(p=>{const d=detailsFor(s,p),c=countsFor(s,p.id),o=d.outcome;return `<tr><td><div class="table-title">${esc(p.title)}</div><div class="table-sub">${esc(nameOf(p.ownerId))} · ${esc(fmt(p.createdAt))}</div></td><td>${d.revisions.length}</td><td>${c.sent} / ${c.links}</td><td>${c.qualified?pill(`${c.qualified} сессий`,'success'):pill('Нет данных','muted')}</td><td>${o?.contract?pill('Договор','success'):o?.nextMeeting?pill('Встреча',''):pill('Не отмечен','muted')}</td><td><button class="link-action" data-open="${esc(p.id)}">Открыть →</button></td></tr>`;}).join('');$('noProposals').hidden=list.length>0;}
function renderDetail(s,p){if(!p){navigate('proposals');return;}const d=detailsFor(s,p),c=countsFor(s,p.id);$('detailTitle').textContent=p.title;$('detailSub').textContent=`${nameOf(p.ownerId)} · создано ${fmt(p.createdAt)} · ${d.revisions.length} версий · ${c.links} ссылок`;$('detailBadge').textContent=p.status==='draft'?'Черновик':'Есть опубликованная версия';$('editProposalTitle').value=p.title;$('editProposalOwner').value=p.ownerId;$('detailBadge').className=`status-pill ${p.status==='draft'?'muted':'success'}`;
 $('revisionList').innerHTML=d.revisions.length?d.revisions.slice().reverse().map(r=>`<div class="stack-row"><div><strong>${esc(r.templateVersion)} ${pill('Неизменяемая','success')}</strong><small>${esc(fmt(r.publishedAt))} · SHA-256: ${esc(r.contentHash.slice(0,18))}… · ${r.manifest?.sections?.length||0} разделов</small></div><div class="button-row"><button class="btn secondary" data-revision-preview="${esc(r.id)}">Предпросмотр ↗</button></div></div>`).join(''):'<div class="empty">Пока нет версий. Добавьте утверждённый тестовый HTML.</div>';
 $('linkRevision').innerHTML=d.revisions.slice().reverse().map(r=>`<option value="${esc(r.id)}">${esc(r.templateVersion)} · ${esc(fmt(r.publishedAt))}</option>`).join('');$('generateLink').disabled=!d.revisions.length;
 $('linksList').innerHTML=d.links.length?d.links.slice().reverse().map(l=>{const r=s.revisions.find(x=>x.id===l.revisionId);const status=l.revokedAt?pill('Отозвана','muted'):Date.parse(l.expiresAt)<Date.now()?pill('Истекла','muted'):l.sentAt?pill('Отправлено','success'):pill('Не отправлена','warn');return `<div class="stack-row"><div><strong>${esc(l.source)} · ${esc(l.role)} ${status}</strong><small>${esc(r?.templateVersion||'—')}_${esc(l.scenario)} · до ${fmt(l.expiresAt)}<br>UTM: ${esc(l.campaign)} · тех. запросов: ${s.technical.filter(t=>t.linkId===l.id).length}</small></div><div class="button-row"><button class="btn secondary" data-preview="${esc(l.id)}" ${l.revokedAt?'disabled':''}>Открыть ↗</button>${!l.sentAt&&!l.revokedAt?`<button class="btn secondary" data-sent="${esc(l.id)}">Отправлено</button>`:''}${!l.revokedAt?`<button class="btn secondary" data-revoke="${esc(l.id)}">Отозвать</button>`:''}</div></div>`}).join(''):'<p class="small-print">Ссылок ещё нет. Создайте первую ссылку ниже.</p>';
 const outcome=d.outcome||{};$('outMeeting').checked=!!outcome.nextMeeting;$('outDiscussion').checked=!!outcome.discussion;$('outContract').checked=!!outcome.contract;
 $('detailEventList').innerHTML=d.events.length?d.events.slice().reverse().slice(0,25).map(e=>`<div class="event-row"><div><strong>${esc(EVENT_LABELS[e.name]||e.name)}</strong><small>${esc(SECTION_LABELS[e.section]||e.section||e.target||'По ссылке')} · ${e.origin==='seed'?'подготовленный DEMO':'событие браузерного DEMO'}</small></div><time>${fmtTime(e.time)}</time></div>`).join(''):'<p class="small-print">Разрешённых событий нет. Это не означает, что предложение не открывали.</p>';
 const words=c.qualified?`Зафиксировано ${c.qualified} разрешённых сессий с признаками просмотра. Предложи уточнить, понятен ли состав работ и следующий шаг.`:c.sent?'Ссылка отправлена, но разрешённой активности нет. Это не означает, что КП не открывали.':'Нет подтверждённых отправок. Сначала отправь КП, затем уточни удобное время обсуждения.';$('detailInsight').textContent=words;renderUTMPreview(s);
}
function renderUTMPreview(s){try{const r=s.revisions.find(x=>x.id===$('linkRevision').value);if(!r){$('utmPreview').textContent='Сначала зафиксируйте версию';return;}const v=validateUTM({source:$('linkSource').value,campaign:$('linkCampaign').value.trim(),scenario:$('linkScenario').value,version:r.templateVersion});$('utmPreview').textContent='?'+new URLSearchParams(v).toString();}catch(e){$('utmPreview').textContent=e.message;}}
function renderTemplates(s){const visible=new Set(visibleProposals(s).map(p=>p.id));const filtered={...s,proposals:s.proposals.filter(p=>visible.has(p.id)),revisions:s.revisions.filter(r=>visible.has(r.proposalId)),outcomes:s.outcomes.filter(o=>visible.has(o.proposalId))};const ms=templateMetrics(filtered);$('templateCards').innerHTML=ms.map(m=>`<div class="template-card"><div class="eyebrow">ВЕРСИЯ ШАБЛОНА · ДЕМО</div><div class="version">${esc(m.version)}</div><p>${m.revisions} ревизий · ${m.sent} отправленных ссылок</p><div class="template-stats"><div><strong>${m.qualified}</strong><span>сессий с признаками</span></div><div><strong>${m.engaged}</strong><span>сессий с действиями</span></div><div><strong>${m.meetings}</strong><span>следующих встреч*</span></div></div></div>`).join('');const metric=$('metricFilter').value,max=Math.max(1,...ms.map(x=>x[metric]));$('templateBars').innerHTML=ms.map(m=>`<div class="compare-row"><span>${esc(m.version)}</span><div class="compare-track"><div class="compare-fill" style="width:${m[metric]/max*100}%"></div></div><strong>${m[metric]}</strong></div>`).join('');$('templateBody').innerHTML=ms.map(m=>`<tr><td class="table-title">${esc(m.version)}</td><td>${m.sent}</td><td>${m.qualified}</td><td>${m.engaged}</td><td>${m.meetings}</td><td>${m.contracts}</td></tr>`).join('');}
function eventsVisible(s){const valid=new Set(visibleProposals(s).map(p=>p.id));const vers=new Set(s.revisions.filter(r=>valid.has(r.proposalId)).map(r=>r.templateVersion));return s.events.map(e=>{const link=s.links.find(x=>x.id===e.linkId),r=s.revisions.find(x=>x.id===link?.revisionId),p=s.proposals.find(x=>x.id===r?.proposalId);return {e,r,p};}).filter(x=>x.p&&valid.has(x.p.id));}
function renderActivity(s){let rows=eventsVisible(s);const select=$('eventVersion'),sel=select.value;select.innerHTML='<option value="all">Все версии</option>'+[...new Set(rows.map(x=>x.r.templateVersion))].sort().map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');select.value=[...select.options].some(x=>x.value===sel)?sel:'all';const evFilter=$('eventFilter').value;rows=rows.filter(x=>(evFilter==='all'||x.e.name===evFilter)&&(select.value==='all'||x.r.templateVersion===select.value)).sort((a,b)=>Date.parse(b.e.time)-Date.parse(a.e.time));$('activityCount').textContent=`${rows.length} событий · DEMO`;$('activityBody').innerHTML=rows.slice(0,150).map(({e,r,p})=>`<tr><td class="table-title">${esc(EVENT_LABELS[e.name]||e.name)}<div class="table-sub">${e.origin==='seed'?'Синтетическая история':'Создано в демо-браузере'}</div></td><td>${esc(p.title)}</td><td>${esc(r.templateVersion)}</td><td>${esc(SECTION_LABELS[e.section]||e.section||e.target||'—')}</td><td>${esc(fmtTime(e.time))}</td></tr>`).join('');$('activityEmpty').hidden=rows.length>0;}
function render(){const s=getState();if(currentView==='overview')kpi(s);else if(currentView==='proposals')renderProposals(s);else if(currentView==='detail'){const p=s.proposals.find(x=>x.id===selected&&visibleProposals(s).some(q=>q.id===x.id));if(p)renderDetail(s,p);else navigate('proposals');}else if(currentView==='templates')renderTemplates(s);else if(currentView==='activity')renderActivity(s);}
function openDetail(id){selected=id;lastGeneratedLink='';$('generatedBlock').hidden=true;$('revisionEditor').hidden=true;$('editProposalPanel').hidden=true;navigate('detail');}
function createModal(){modalOpener=document.activeElement;$('newProposalModal').hidden=false;$('newProposalTitle').value='';$('newProposalTitle').focus();}
function dismissModal(){$('newProposalModal').hidden=true;modalOpener?.focus();}
function resetDemo(){if(confirm('Восстановить исходные демонстрационные данные? Твои тестовые изменения в браузере будут удалены.')){reset();selected=null;lastGeneratedLink='';navigate('overview');notify('Демо-данные восстановлены');}}
function csvExport(){const s=getState(),rows=eventsVisible(s),columns=['event_name','time','proposal_demo','template_version','section','target','origin'];const text=csvSerialize(columns,rows.map(x=>[x.e.name,x.e.time,x.p.title,x.r.templateVersion,x.e.section,x.e.target,x.e.origin]));const blob=new Blob([text],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='campbox_kp_demo_events.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);notify('Сохранена демо-выгрузка');}
function openURL(link){const s=getState(),r=s.revisions.find(x=>x.id===link?.revisionId);if(!r)return notify('Версия не найдена');window.open(buildURL(link,r),'_blank','noopener,noreferrer');}
function previewRevision(r){
 let safe;try{safe=sanitizeHTML(r.html).html.replace(/<button\b([^>]*)>/g,'<button disabled$1>');}catch(e){notify('Не удалось показать HTML: '+e.message);return;}
 const doc='<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="robots" content="noindex"><title>DEMO · '+esc(r.templateVersion)+'</title><style>body{font:15px/1.65 Arial;max-width:740px;margin:30px auto;padding:20px;background:#f6f8fb}section{background:white;padding:25px;margin:15px 0;border-radius:12px}h1,h2{color:#1d2c48}button{padding:9px}[data-kp-dialog]{display:none}</style><p>DEMO · только просмотр версии без сбора событий</p>'+safe+'</html>';
 const url=URL.createObjectURL(new Blob([doc],{type:'text/html;charset=utf-8'}));window.open(url,'_blank','noopener,noreferrer');setTimeout(()=>URL.revokeObjectURL(url),30000);
}
document.addEventListener('click',async e=>{const view=e.target.closest('[data-view]');if(view){navigate(view.dataset.view);return;}const open=e.target.closest('[data-open]');if(open){openDetail(open.dataset.open);return;}const preview=e.target.closest('[data-preview]');if(preview){const l=getState().links.find(x=>x.id===preview.dataset.preview);if(l)openURL(l);return;}const revPreview=e.target.closest('[data-revision-preview]');if(revPreview){const r=getState().revisions.find(x=>x.id===revPreview.dataset.revisionPreview);if(r)previewRevision(r);return;}const sent=e.target.closest('[data-sent]');if(sent){try{markSent(sent.dataset.sent);render();notify('Отправка отмечена вручную · DEMO');}catch(error){notify(error.message)}return;}const rev=e.target.closest('[data-revoke]');if(rev){if(confirm('Отозвать ссылку? Новые открытия в демо будут заблокированы.')){revoke(rev.dataset.revoke);render();notify('Ссылка отозвана · DEMO')}return;}});
$('roleSelect').addEventListener('change',()=>{if(currentView==='detail')navigate('proposals');else render();notify('Режим интерфейса переключён · права доступа имитируются');});$('mobileMenu').onclick=()=>$('sidebar').classList.toggle('open');$('closeSidebar').onclick=()=>$('sidebar').classList.remove('open');document.querySelectorAll('.create-action').forEach(x=>x.onclick=createModal);$('newProposalForm').onsubmit=e=>{e.preventDefault();try{const p=createProposal($('newProposalTitle').value,$('newOwner').value);dismissModal();if(!isLead()&&p.ownerId!=='demo-owner-1')$('roleSelect').value='lead';openDetail(p.id);notify('Создан тестовый объект КП');}catch(error){notify(error.message)}};$('modalClose').onclick=dismissModal;$('modalCancel').onclick=dismissModal;$('newProposalModal').onclick=e=>{if(e.target.id==='newProposalModal')dismissModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('newProposalModal').hidden)dismissModal();});$('searchInput').oninput=render;$('statusFilter').onchange=render;$('activityFilter').onchange=render;$('clearFilters').onclick=()=>{$('searchInput').value='';$('statusFilter').value='all';$('activityFilter').value='all';render()};$('detailBack').onclick=()=>navigate('proposals');
 $('editProposal').onclick=()=>{$('editProposalPanel').hidden=!$('editProposalPanel').hidden;};
 $('cancelProposalEdit').onclick=()=>{$('editProposalPanel').hidden=true;render();};
 $('saveProposalEdit').onclick=()=>{try{const p=updateProposal(selected,{title:$('editProposalTitle').value,ownerId:$('editProposalOwner').value});$('editProposalPanel').hidden=true;if(!isLead()&&p.ownerId!=='demo-owner-1')navigate('proposals');else render();notify('Карточка КП обновлена · DEMO');}catch(error){notify(error.message)}};
 $('deleteProposal').onclick=()=>{const {p}=getActive();if(!p)return;const d=byProposal(getState(),p.id);const msg=d.revisions.length?('Удалить тестовое КП «'+p.title+'» со всеми '+d.revisions.length+' версиями, '+d.links.length+' ссылками и событиями? Это необратимо в DEMO. В рабочей версии будет архивирование.'):'Удалить тестовый черновик «'+p.title+'»?';if(!confirm(msg))return;deleteProposal(p.id);selected=null;lastGeneratedLink='';navigate('proposals');notify('Тестовое КП удалено вместе со связанными данными');};$('toggleRevision').onclick=()=>$('revisionEditor').hidden=!$('revisionEditor').hidden;$('cancelRevision').onclick=()=>$('revisionEditor').hidden=true;$('fillSample').onclick=()=>{$('revisionHTML').value=proposalHTML(getActive().p?.title||'Демо КП',$('revisionVersion').value);notify('Подставлен безопасный тестовый шаблон')};$('saveRevision').onclick=async()=>{try{const r=await createRevision(selected,$('revisionVersion').value.trim(),$('revisionHTML').value);$('revisionEditor').hidden=true;$('revisionHTML').value='';render();notify(`Версия ${r.templateVersion} зафиксирована · SHA-256`);}catch(error){notify(error.message)}};['linkRevision','linkSource','linkScenario','linkCampaign'].forEach(id=>$(id).addEventListener(id==='linkCampaign'?'input':'change',()=>renderUTMPreview(getState())));
$('generateLink').onclick=()=>{try{const link=createLink($('linkRevision').value,{source:$('linkSource').value,scenario:$('linkScenario').value,campaign:$('linkCampaign').value.trim(),role:$('linkRole').value,days:Number($('linkDays').value)});const r=getState().revisions.find(x=>x.id===link.revisionId);lastGeneratedLink=buildURL(link,r);render();$('generatedBlock').hidden=false;$('generatedUrl').value=lastGeneratedLink;notify('Создана новая демо-ссылка');}catch(error){notify(error.message)}};
$('copyLink').onclick=async()=>{try{await navigator.clipboard.writeText(lastGeneratedLink);notify('Ссылка скопирована');}catch(error){$('generatedUrl').focus();$('generatedUrl').select();notify('Ссылка выделена — скопируй Ctrl+C');}};$('openLink').onclick=()=>{if(lastGeneratedLink)window.open(lastGeneratedLink,'_blank','noopener,noreferrer')};$('saveOutcome').onclick=()=>{saveOutcome(selected,{nextMeeting:$('outMeeting').checked,discussion:$('outDiscussion').checked,contract:$('outContract').checked});render();notify('Коммерческий итог отмечен вручную · DEMO')};$('metricFilter').onchange=render;$('eventFilter').onchange=render;$('eventVersion').onchange=render;$('downloadEvents').onclick=csvExport;$('resetDemo').onclick=resetDemo;$('resetSide').onclick=resetDemo;window.addEventListener('storage',e=>{if(e.key==='campbox-kp-analytics-demo-v2'){refreshState();render()}});navigate('overview');

}
})();
