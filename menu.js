/* Creator Hub shared navigation: edit NAV_ITEMS to add pages. */
(()=>{
'use strict';
if(document.getElementById('creator-hub-nav'))return;
const NAV_ITEMS=[
 ['ホーム','https://koyukitai.github.io/creator-hub/','⌂'],
 ['プロフィール','https://koyukitai.github.io/creator-hub/profile/','♙'],
 ['制作実績','https://koyukitai.github.io/creator-hub/portfolio/','▣'],
 ['制作依頼','https://koyukitai.github.io/creator-hub/commission/','✎'],
 ['提携イラストレーター','https://koyukitai.github.io/creator-hub/partners/','✧'],
 ['FAギャラリー','https://koyukitai.github.io/creator-hub/fan-art/','▧'],
 ['FAガイドライン','https://koyukitai.github.io/creator-hub/fa-guidelines/','◇'],
 ['リンク','https://koyukitai.github.io/creator-hub/links/','↗'],
 ['制作利用規約','https://koyukitai.github.io/creator-hub/terms.html','▤']
];
const css=`
:root{--creator-hub-width:232px}
#creator-hub-nav{position:fixed;inset:0 auto 0 0;width:var(--creator-hub-width);z-index:9990;box-sizing:border-box;padding:23px 14px;background:#151d2a;color:#eaf0fa;border-right:1px solid #344157;display:flex;flex-direction:column;gap:7px;font-family:system-ui,'Noto Sans JP',sans-serif;box-shadow:2px 0 16px #0001}
#creator-hub-nav .hub-brand{padding:8px 9px 18px;margin-bottom:7px;border-bottom:1px solid #354157;font-size:17px;font-weight:750;color:#fff}
#creator-hub-nav a{display:flex;gap:11px;align-items:center;color:#cbd6e6;text-decoration:none;padding:12px 13px;border-radius:10px;font-size:14px;font-weight:600;line-height:1.4}
#creator-hub-nav a:hover,#creator-hub-nav a:focus-visible{background:#2a3950;color:#fff}
#creator-hub-nav a[aria-current=page]{background:#324761;color:#fff}
#creator-hub-nav .hub-foot{margin-top:auto;padding:12px;color:#92a2b9;font-size:11px}
body{padding-left:var(--creator-hub-width)!important}
#creator-hub-toggle{display:none}
@media(max-width:760px){
 body{padding-left:0!important}
 #creator-hub-nav{width:min(270px,85vw);transform:translateX(-105%);transition:transform .2s ease;box-shadow:12px 0 30px #0004}
 #creator-hub-nav.hub-open{transform:translateX(0)}
 #creator-hub-toggle{display:block;position:fixed;top:12px;left:12px;z-index:9992;background:#24344b!important;color:#fff!important;border:1px solid #61718b!important;border-radius:10px!important;padding:10px 13px!important;font:600 18px/1 system-ui!important;box-shadow:0 3px 15px #0003;cursor:pointer}
 #creator-hub-backdrop{display:none;position:fixed;inset:0;z-index:9989;background:#0009}
 #creator-hub-backdrop.hub-open{display:block}
 body>header{padding-top:65px}
}
`;
const style=document.createElement('style');style.id='creator-hub-style';style.textContent=css;document.head.append(style);
const nav=document.createElement('nav');nav.id='creator-hub-nav';nav.setAttribute('aria-label','KOYUKI PORTAL メニュー');
const brand=document.createElement('div');brand.className='hub-brand';brand.textContent='🔍🤍 KOYUKI PORTAL';nav.append(brand);
const path=location.pathname.replace(/index\.html$/,'').replace(/\/?$/,'/');
NAV_ITEMS.forEach(([label,url,icon])=>{const a=document.createElement('a');a.href=url;const u=new URL(url);if(path===u.pathname)a.setAttribute('aria-current','page');const span=document.createElement('span');span.setAttribute('aria-hidden','true');span.textContent=icon;a.append(span,document.createTextNode(label));nav.append(a)});
const foot=document.createElement('div');foot.className='hub-foot';foot.textContent='小幸たい / Tai Koyuki';nav.append(foot);
const backdrop=document.createElement('div');backdrop.id='creator-hub-backdrop';
const toggle=document.createElement('button');toggle.id='creator-hub-toggle';toggle.type='button';toggle.textContent='☰';toggle.setAttribute('aria-label','メニューを開閉');toggle.setAttribute('aria-controls','creator-hub-nav');toggle.setAttribute('aria-expanded','false');
function setOpen(open){nav.classList.toggle('hub-open',open);backdrop.classList.toggle('hub-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'}
toggle.addEventListener('click',()=>setOpen(!nav.classList.contains('hub-open')));backdrop.addEventListener('click',()=>setOpen(false));document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
document.body.prepend(backdrop,nav,toggle);
})();
