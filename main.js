const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const themeIcon=document.getElementById("themeIcon");
const languageToggle=document.getElementById("languageToggle");
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");

const translations={
  th:{
    navHome:"หน้าหลัก",navAbout:"เกี่ยวกับเรา",navProjects:"โปรเจกต์",navTechnology:"เทคโนโลยี",navUpdates:"อัปเดต",navContact:"ติดต่อ",
    eyebrow:"โครงการเทคโนโลยีอิสระ",heroLine1:"สร้างสรรค์แนวคิด",heroLine2:"ต่อยอดความเป็นไปได้",heroDescription:"โครงการเทคโนโลยีอิสระที่สำรวจการพัฒนาซอฟต์แวร์ ระบบปฏิบัติการบนเว็บ AI และประสบการณ์ดิจิทัลที่ใส่ใจผู้ใช้",
    exploreProjects:"สำรวจโปรเจกต์",discoverIsembea:"รู้จัก Isembea",scroll:"เลื่อนเพื่อสำรวจ",introStrip:"พื้นที่ที่แนวคิดกลายเป็นการทดลอง ผลงาน และวิธีใหม่ในการใช้เทคโนโลยี",
    aboutKicker:"เราเป็นใคร",aboutTitle:"ความสงสัยนำทาง<br><span class=\"muted-heading\">สู่สิ่งที่กำลังจะเกิดขึ้น</span>",aboutText:"Isembea เป็นโครงการเทคโนโลยีอิสระที่เน้นการเรียนรู้ผ่านการลงมือสร้าง เราสำรวจแนวคิดด้านซอฟต์แวร์ การออกแบบอินเทอร์เฟซ และเครื่องมือดิจิทัล พร้อมพัฒนาแนวคิดให้เป็นการทดลองที่ใช้งานได้",
    principleOne:"สำรวจ",principleOneText:"เปิดรับความสงสัย ทดลองความเป็นไปได้ และทำความเข้าใจเทคโนโลยี",principleTwo:"สร้าง",principleTwoText:"เปลี่ยนแนวคิดให้เป็นต้นแบบ อินเทอร์เฟซ และโปรเจกต์ซอฟต์แวร์",principleThree:"พัฒนา",principleThreeText:"เรียนรู้จากการปรับปรุงแต่ละครั้ง เพื่อให้ผลงานมีประโยชน์ยิ่งขึ้น",
    projectsKicker:"ผลงานที่เลือก",projectsTitle:"แนวคิดที่กำลัง <span class=\"gradient-text\">พัฒนา</span>",projectsText:"คอลเลกชันของการทดลองและโปรเจกต์ที่กำลังเติบโต แต่ละชิ้นเป็นอีกก้าวในการสำรวจความเป็นไปได้ของเทคโนโลยี",
    osDescription:"อินเทอร์เฟซ Web OS สไตล์ Glass ที่พัฒนาด้วย HTML, CSS และ JavaScript",aiDescription:"แนวคิดแอปพลิเคชัน AI ที่สำรวจการโต้ตอบซึ่งเข้าถึงง่ายและใช้งานได้จริง",inDevelopment:"กำลังพัฒนา",researchTitle:"ห้องทดลองวิจัย",researchDescription:"การทดลอง ต้นแบบ และการสำรวจเทคโนโลยีดิจิทัล",ongoing:"ดำเนินการต่อเนื่อง",
    technologyKicker:"เครื่องมือของเรา",technologyTitle:"สร้างด้วย <span class=\"muted-heading\">จุดมุ่งหมาย</span>",technologyText:"เราเลือกเครื่องมือที่ช่วยเปลี่ยนแนวคิดให้เป็นประสบการณ์ที่ใช้งานได้ โดยให้ความสำคัญกับเทคโนโลยีเว็บที่เข้าถึงได้",
    techStructure:"โครงสร้างและความหมาย",techDesign:"ระบบภาพและ Responsive Design",techInteraction:"การโต้ตอบและฟังก์ชัน",techWorkflow:"ควบคุมเวอร์ชันและเผยแพร่",
    updatesKicker:"จากพื้นที่ทำงาน",updatesTitle:"สำรวจต่อไป",updatesText:"ติดตามโปรเจกต์และดูพัฒนาการของผลงานได้ที่นี่",visitGithub:"ไปที่ GitHub",
    contactKicker:"เชื่อมต่อ",contactTitle:"มีแนวคิดอยู่ไหม?<br><span class=\"gradient-text\">มาสำรวจไปด้วยกัน</span>",contactText:"พบกับ Isembea บนโลกออนไลน์และติดตามโปรเจกต์ระหว่างการพัฒนา",connectOnGithub:"เชื่อมต่อบน GitHub",
    footerLine:"แนวคิดอิสระ การทดลองที่ใช้งานได้ และประสบการณ์ดิจิทัลที่ดียิ่งขึ้น",rights:"สงวนลิขสิทธิ์",backTop:"กลับขึ้นด้านบน ↑"
  }
};

let currentLanguage="en";
languageToggle.addEventListener("click",()=>{
  currentLanguage=currentLanguage==="en"?"th":"en";
  document.documentElement.lang=currentLanguage;
  languageToggle.textContent=currentLanguage==="en"?"TH":"EN";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(currentLanguage==="th"&&translations.th[key]) el.innerHTML=translations.th[key];
    else if(currentLanguage==="en") location.reload();
  });
});

function setTheme(theme){
  root.dataset.theme=theme;
  themeIcon.textContent=theme==="dark"?"☼":"☾";
  document.querySelector('meta[name="theme-color"]').content=theme==="dark"?"#071411":"#f3f8f5";
}
const preferred=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";
setTheme(preferred);
themeToggle.addEventListener("click",()=>setTheme(root.dataset.theme==="dark"?"light":"dark"));

menuToggle.addEventListener("click",()=>{
  const open=mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent=new Date().getFullYear();
