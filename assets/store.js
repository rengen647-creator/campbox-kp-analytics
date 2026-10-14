import {freshDemo,CHANNELS,SCENARIOS,DEMO_PEOPLE} from './data.js';
export const STORAGE_KEY='campbox-kp-analytics-demo-v2';
let cache;
export function getState(){if(cache)return cache;try{const raw=localStorage.getItem(STORAGE_KEY);const data=raw?JSON.parse(raw):null;cache=data?.schema===2?data:freshDemo();}catch(_){cache=freshDemo();}return cache;}
export function save(state){cache=state;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){/* demo still works in memory */}window.dispatchEvent(new CustomEvent('kp-store-updated'));return state;}
export function refreshState(){try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const data=JSON.parse(raw);if(data?.schema===2)cache=data;}}catch(_){}return getState();}
export function reset(){return save(freshDemo());}
export const uid=prefix=>`${prefix}-${token()}`;
export function token(){const bytes=new Uint8Array(24);crypto.getRandomValues(bytes);return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
export function validateUTM({source,campaign,scenario,version}){
 if(!Object.hasOwn(CHANNELS,source))throw Error('Недопустимый источник');
 if(!/^campbox_kp_20\d\dq[1-4]$/.test(campaign))throw Error('Кампания: campbox_kp_ГГГГqN');
 if(!SCENARIOS.includes(scenario))throw Error('Выбери сценарий отправки');
 if(!/^auditor_v\d{1,3}_\d{1,3}(?:_\d{1,3})?$/.test(version))throw Error('Версия: auditor_v13_2');
 return {utm_source:source,utm_medium:CHANNELS[source],utm_campaign:campaign,utm_content:`${version}_${scenario}`};
}
export function buildURL(link,revision,originURL=window.location.href){
 const parent = new URL('./',originURL);const base = new URL(window.location.protocol==='file:'?'./index.html':'./client.html',parent);if(window.location.protocol==='file:')base.searchParams.set('client','1');
 const utm=validateUTM({source:link.source,campaign:link.campaign,scenario:link.scenario,version:revision.templateVersion});
 Object.entries(utm).forEach(([k,v])=>base.searchParams.set(k,v));
 base.hash=`t=${encodeURIComponent(link.token)}`;
 return base.href;
}
export function byProposal(state,pid){const rs=state.revisions.filter(r=>r.proposalId===pid);const ids=new Set(rs.map(r=>r.id));const links=state.links.filter(l=>ids.has(l.revisionId));const lid=new Set(links.map(l=>l.id));const sessions=state.sessions.filter(s=>lid.has(s.linkId));const sid=new Set(sessions.map(s=>s.id));return {revisions:rs,links,sessions,events:state.events.filter(e=>sid.has(e.sessionId)),outcome:state.outcomes.find(o=>o.proposalId===pid)};}
export function countsFor(state,pid){const d=byProposal(state,pid);const qualified=new Set(d.events.filter(e=>e.name==='qualified_view').map(e=>e.sessionId));const interaction=new Set(d.events.filter(e=>['modal_open','cta_click','contact_click'].includes(e.name)).map(e=>e.sessionId));return {links:d.links.length,sent:d.links.filter(l=>l.sentAt).length,qualified:qualified.size,interaction:interaction.size,requests:state.technical.filter(t=>d.links.some(l=>l.id===t.linkId)).length};}
export function templateMetrics(state){
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
export function checkProposalDetails(title,ownerId){
 if(typeof title!=='string'||!title.trim()||title.trim().length>110)throw Error('Название: от 1 до 110 символов');
 if(!DEMO_PEOPLE.some(person=>person.id===ownerId))throw Error('Неизвестный владелец КП');
 return title.trim();
}
export function createProposal(title,ownerId){const clean=checkProposalDetails(title,ownerId);const s=getState(),p={id:uid('p'),title:clean,ownerId,createdAt:new Date().toISOString(),status:'draft',dealId:null};s.proposals.unshift(p);save(s);return p;}
export function updateProposal(pid,{title,ownerId}){
 const clean=checkProposalDetails(title,ownerId),s=getState(),p=s.proposals.find(x=>x.id===pid);
 if(!p)throw Error('КП не найдено');p.title=clean;p.ownerId=ownerId;p.updatedAt=new Date().toISOString();save(s);return p;
}
export function deleteProposal(pid){
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
export function sanitizeHTML(html){
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
export async function createRevision(pid,version,html){if(!/^auditor_v\d{1,3}_\d{1,3}(?:_\d{1,3})?$/.test(version))throw Error('Формат версии: auditor_v13_2');const s=getState();if(!s.proposals.find(p=>p.id===pid))throw Error('КП не найдено');const cleaned=sanitizeHTML(html);const content=new TextEncoder().encode(cleaned.html);const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',content))).map(x=>x.toString(16).padStart(2,'0')).join('');const r={id:uid('r'),proposalId:pid,templateVersion:version,html:cleaned.html,contentHash:hash,publishedAt:new Date().toISOString(),manifest:cleaned.manifest};s.revisions.push(r);s.proposals.find(p=>p.id===pid).status='published';save(s);return r;}
export function createLink(revisionId,{source,scenario,campaign,role,days}){const s=getState(),r=s.revisions.find(r=>r.id===revisionId);if(!r)throw Error('Сначала создай версию КП');validateUTM({source,campaign,scenario,version:r.templateVersion});if(!Number.isInteger(days)||days<1||days>365)throw Error('Срок должен быть от 1 до 365 дней');const l={id:uid('l'),revisionId,source,scenario,campaign,role:role?.trim().slice(0,60)||'Не указана',sentAt:null,expiresAt:new Date(Date.now()+days*86400000).toISOString(),revokedAt:null,token:token()};s.links.unshift(l);save(s);return l;}
export function markSent(id){const s=getState(),l=s.links.find(x=>x.id===id);if(!l)throw Error('Ссылка не найдена');if(l.revokedAt)throw Error('Ссылка отозвана');l.sentAt=new Date().toISOString();save(s);}
export function revoke(id){const s=getState(),l=s.links.find(x=>x.id===id);if(!l)throw Error('Ссылка не найдена');l.revokedAt=new Date().toISOString();save(s);}
export function saveOutcome(pid,data){const s=getState();let o=s.outcomes.find(x=>x.proposalId===pid);if(!o){o={proposalId:pid};s.outcomes.push(o);}o.nextMeeting=!!data.nextMeeting;o.discussion=!!data.discussion;o.contract=!!data.contract;o.updatedAt=new Date().toISOString();o.source='manual-demo';save(s);return o;}
export function resolveLink(secret){const s=getState();const link=s.links.find(x=>x.token===secret);if(!link)return {error:'Ссылка не найдена (демонстрационный режим)'};if(link.revokedAt)return {error:'Ссылка отозвана'};if(Date.parse(link.expiresAt)<Date.now())return {error:'Срок действия ссылки истёк'};const revision=s.revisions.find(x=>x.id===link.revisionId);if(!revision)return {error:'Версия документа недоступна'};return {link,revision,state:s};}
export function technicalAccess(linkId){const s=getState();s.technical.push({id:uid('t'),linkId,time:new Date().toISOString(),kind:'browser-request-demo'});save(s);}
export function startSession(linkId){const s=getState(),link=s.links.find(x=>x.id===linkId);if(!link||link.revokedAt||!Number.isFinite(Date.parse(link.expiresAt))||Date.parse(link.expiresAt)<=Date.now())throw Error('Ссылка недействительна');const session={id:uid('s'),linkId,startedAt:new Date().toISOString(),consent:'accepted',kind:'local-demo'};s.sessions.push(session);save(s);return session;}
const ONCE=new Set(['proposal_view','qualified_view','pricing_view']);const SECTION_ONCE=new Set(['section_view','section_engaged']);
export function trackEvent(sessionId,name,section='',target='',durationMs=null){const s=getState();const session=s.sessions.find(x=>x.id===sessionId&&x.consent==='accepted');if(!session)return false;const link=s.links.find(l=>l.id===session.linkId);if(!link||link.revokedAt||Date.parse(link.expiresAt)<Date.now())return false;const ev=s.events.filter(e=>e.sessionId===sessionId);if(ONCE.has(name)&&ev.some(e=>e.name===name))return false;if(SECTION_ONCE.has(name)&&ev.some(e=>e.name===name&&e.section===section))return false;const revision=s.revisions.find(r=>r.id===link.revisionId);if(!revision)return false;if(section&&!revision.manifest?.sections?.includes(section))return false;if(['modal_open','modal_close'].includes(name)&&!revision.manifest?.modals?.includes(target))return false;if(name==='cta_click'&&!revision.manifest?.ctas?.includes(target))return false;if(name==='pricing_view'&&section!=='pricing')return false;if(name==='section_engaged'&&(!Number.isFinite(durationMs)||durationMs<8000))return false;if(name==='modal_close'&&ev.filter(e=>e.name==='modal_open'&&e.target===target).length<=ev.filter(e=>e.name==='modal_close'&&e.target===target).length)return false;if([section,target].some(x=>x&&!/^[a-z][a-z0-9_]{0,63}$/.test(x)))return false;if(durationMs!==null&&(!Number.isFinite(durationMs)||durationMs<0||durationMs>1800000))return false;const allowed=new Set(['proposal_view','qualified_view','section_view','section_engaged','modal_open','modal_close','pricing_view','cta_click','contact_click','download_click','external_link_click']);if(!allowed.has(name))return false;s.events.push({id:uid('e'),sessionId,linkId:session.linkId,name,section,target,durationMs,time:new Date().toISOString(),origin:'browser-demo'});save(s);return true;}
export function fmt(t){if(!t)return '—';const date=new Date(t);return Number.isNaN(date.getTime())?'—':date.toLocaleDateString('ru-RU',{day:'2-digit',month:'short',year:'numeric'});}
export function percent(num,den){return den?`${Math.round(num/den*100)}%`:'—';}
