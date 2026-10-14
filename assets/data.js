// DEMONSTRATION DATA ONLY. No real customer, deal, employee or analytics information.
export const CHANNELS = Object.freeze({email:'email',telegram:'messenger',whatsapp:'messenger',bitrix:'crm',qr:'offline'});
export const SCENARIOS = Object.freeze(['initial','followup1','followup2','meeting']);
export const SECTION_LABELS = Object.freeze({executive_summary:'Главное',pain_documents:'Задачи лагеря',audit_legal:'Правовая часть',audit_ux:'Удобство сайта',solution_documents:'Документы',solution_booking:'Бронирование',integrations:'Интеграции',pricing:'Условия',next_step:'Следующий шаг'});
export const EVENT_LABELS = Object.freeze({proposal_view:'Открыта страница',qualified_view:'Признаки просмотра',section_view:'Раздел в зоне видимости',section_engaged:'Активность в разделе',modal_open:'Открыты подробности',modal_close:'Закрыты подробности',pricing_view:'Просмотр условий',cta_click:'Нажат целевой элемент',contact_click:'Нажат контакт',download_click:'Нажато скачивание',external_link_click:'Внешний переход'});
export const DEMO_PEOPLE = Object.freeze([{id:'demo-owner-1',name:'Менеджер 01'},{id:'demo-owner-2',name:'Менеджер 02'}]);
const d=(day,time='10:30')=>`2026-10-${day}T${time}:00+03:00`;
export function proposalHTML(name,variant='auditor_v13_2') {
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
export function freshDemo(){
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
