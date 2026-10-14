/* CampBox Analytics v2.0.2 client, DEMO only. Generated. */
(()=>{'use strict';
if(new URLSearchParams(location.search).has('client')){document.body.innerHTML="<header class=\"client-header\"><a href=\"./index.html\" class=\"logo\" aria-label=\"CampBox — демо-кабинет\">C<span>•</span> <b>CampBox</b></a><div class=\"client-header-actions\"><button id=\"consentSettings\" class=\"settings-link\" hidden>Настройки аналитики</button><span class=\"demo-tag\">ДЕМО · НЕТ РЕАЛЬНЫХ УСЛОВИЙ</span></div></header><main class=\"client-main\"><div id=\"clientError\" class=\"error-panel\" hidden><div class=\"error-symbol\">⊘</div><h1 id=\"errorTitle\">Ссылка недоступна</h1><p id=\"errorText\">Обратитесь к отправителю предложения.</p><a href=\"./index.html\" class=\"btn\">Вернуться в тестовый кабинет</a></div><div id=\"proposalWrap\" hidden><div class=\"topline\"><span>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span><span id=\"clientVersion\">—</span></div><article id=\"proposalHTML\" class=\"proposal-content\"></article><div class=\"bottom-tip\">Это учебный макет. Данные о просмотрах существуют только в браузере и не передаются в Supabase.</div></div></main><div id=\"consentBar\" class=\"consent\" hidden role=\"region\" aria-label=\"Выбор аналитики\"><div><strong>Разрешить демонстрационную аналитику?</strong><p>Если согласиться, действия с этим тестовым КП будут отражаться в демо-кабинете браузера. При отказе всё КП доступно без поведенческих событий.</p></div><div class=\"consent-actions\"><button id=\"consentReject\" class=\"btn ghost\">Отклонить</button><button id=\"consentAccept\" class=\"btn\">Разрешить</button></div></div><div id=\"detailModal\" class=\"modal-backdrop\" hidden><div class=\"dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialogTitle\"><button id=\"detailClose\" class=\"close\" aria-label=\"Закрыть\">✕</button><div id=\"dialogBody\"></div></div></div><div id=\"clientToast\" role=\"status\" aria-live=\"polite\" class=\"toast\"></div>";let x=document.createElement('link');x.rel='stylesheet';x.href='./assets/client.css';document.head.append(x);}
if(document.getElementById('clientError')){
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

// Offline, consent-aware browser demonstration. NO network calls.

const $=id=>document.getElementById(id);
let secret='',resolved=null,consent='unset',session=null,modal=null,observer=null,interval=null,lastAction=Date.now(),activeDuration=0,qualified=false,pageAge=0;
const recs=new Map(),seen=new Set(),engaged=new Set();
function toast(s){$('clientToast').textContent=s;$('clientToast').classList.add('visible');setTimeout(()=>$('clientToast').classList.remove('visible'),2800);}
function errorPage(text){$('proposalWrap').hidden=true;$('consentBar').hidden=true;$('clientError').hidden=false;$('errorText').textContent=text;}
function valid(){const r=resolveLink(secret);if(r.error){errorPage(r.error);stopTracking();return false;}return true;}
function stopTracking(){if(observer){observer.disconnect();observer=null}if(interval){clearInterval(interval);interval=null}}
const canTrack=()=>consent==='accepted'&&session&&valid();
function event(name,section='',target='',durationMs=null){if(canTrack())trackEvent(session.id,name,section,target,durationMs);}
function qualify(){if(!session||qualified||document.visibilityState!=='visible')return;qualified=true;event('qualified_view');}
const currentSection=e=>e?.closest?.('[data-kp-section]')?.dataset.kpSection||'';
function observe(){if(observer||!session)return;document.querySelectorAll('[data-kp-section]').forEach(x=>recs.set(x,{ratio:0,visibleFor:0,engageFor:0}));observer=new IntersectionObserver(entries=>{for(const e of entries){const x=recs.get(e.target);if(x)x.ratio=e.intersectionRatio;}},{threshold:[0,.5,1]});for(const el of recs.keys())observer.observe(el);
 interval=setInterval(()=>{if(!canTrack()||document.visibilityState!=='visible')return;pageAge+=250;if(pageAge>=5000)qualify();if(modal)return;for(const [el,r] of recs){const key=el.dataset.kpSection;if(r.ratio>=.5){r.visibleFor+=250;if(Date.now()-lastAction<15000)r.engageFor+=250;if(r.visibleFor>=2000&&!seen.has(key)){seen.add(key);event('section_view',key);if(key==='pricing')event('pricing_view','pricing');}if(r.engageFor>=8000&&!engaged.has(key)){engaged.add(key);event('section_engaged',key,'',r.engageFor)}}else r.visibleFor=0;}},250);
}
function begin(){if(!valid()||session)return;session=startSession(resolved.link.id);event('proposal_view');observe();}
function choose(v){consent=v;try{localStorage.setItem(`kp-consent-${resolved.link.id}`,v)}catch(_){}$('consentBar').hidden=true;$('consentSettings').hidden=false;if(v==='accepted'){stopTracking();session=null;qualified=false;pageAge=0;seen.clear();engaged.clear();recs.clear();toast('Демо-события включены только в этом браузере');begin();}else{stopTracking();session=null;toast('Аналитика отклонена: события не собираются');}}
function showChoice(){$('consentBar').hidden=false;$('consentSettings').hidden=true;$('consentAccept').focus();}
function closeModal(){if(!modal)return;const {key,opener,started,section}=modal;modal=null;$('detailModal').hidden=true;$('dialogBody').replaceChildren();document.body.style.overflow='';event('modal_close',section,key,Date.now()-started);opener.focus();}
function openModal(btn){if(modal)return;const key=btn.dataset.kpModal,content=[...document.querySelectorAll('[data-kp-dialog]')].find(x=>x.dataset.kpDialog===key);if(!content)return;qualify();$('dialogBody').replaceChildren(...[...content.childNodes].map(n=>n.cloneNode(true))); /* Content already sanitized when inserted into the proposal */$('dialogBody').querySelector('h3')?.setAttribute('id','dialogTitle');$('detailModal').hidden=false;document.body.style.overflow='hidden';modal={key,section:currentSection(btn),opener:btn,started:Date.now()};$('detailClose').focus();event('modal_open',currentSection(btn),key);}
function init(){const m=new URLSearchParams(location.hash.replace(/^#/,''));secret=m.get('t')||'';resolved=resolveLink(secret);if(resolved.error){errorPage(resolved.error);return;}technicalAccess(resolved.link.id);const p=resolved.revision;$('clientVersion').textContent=p.templateVersion+' · DEMO';try{$('proposalHTML').innerHTML=sanitizeHTML(p.html).html;}catch(e){errorPage('В этой версии КП обнаружен неподдерживаемый HTML. Предложение не показано.');return;}$('proposalWrap').hidden=false;try{consent=localStorage.getItem(`kp-consent-${resolved.link.id}`)||'unset'}catch(_){consent='unset'}if(consent==='unset')showChoice();else{$('consentSettings').hidden=false;if(consent==='accepted')begin();}
 $('consentAccept').onclick=()=>choose('accepted');$('consentReject').onclick=()=>choose('declined');$('consentSettings').onclick=showChoice;$('detailClose').onclick=closeModal;$('detailModal').onclick=e=>{if(e.target===$('detailModal'))closeModal();};document.addEventListener('keydown',e=>{lastAction=Date.now();if(e.key==='Escape')closeModal();if(e.key==='Tab'&&modal){const focusables=[...$('detailModal').querySelectorAll('button:not([disabled]),a[href]')].filter(x=>x.offsetParent!==null);if(focusables.length){const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}});
 document.addEventListener('click',e=>{lastAction=Date.now();const b=e.target.closest('[data-kp-modal]');if(b){openModal(b);return;}const c=e.target.closest('[data-kp-cta]');if(c){qualify();event('cta_click',currentSection(c),c.dataset.kpCta);toast('DEMO: целевое действие зарегистрировано локально');return;}const cont=e.target.closest('[data-kp-contact]');if(cont){qualify();event('contact_click',currentSection(cont),cont.dataset.kpContact);toast('DEMO: нажатие на контакт. Реальных контактов нет.');return;}const dl=e.target.closest('[data-kp-download]');if(dl){qualify();event('download_click',currentSection(dl),dl.dataset.kpDownload);return;}const external=e.target.closest('[data-kp-external]');if(external){qualify();event('external_link_click',currentSection(external),external.dataset.kpExternal);}});
 window.addEventListener('scroll',()=>{lastAction=Date.now();if(window.scrollY>80)qualify()},{passive:true});window.addEventListener('pointerdown',()=>{lastAction=Date.now()},{passive:true});window.addEventListener('storage',e=>{if(e.key==='campbox-kp-analytics-demo-v2'){refreshState();valid();}});window.addEventListener('pagehide',()=>stopTracking());
}
init();

}
})();
