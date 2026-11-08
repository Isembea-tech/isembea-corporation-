const translations = {
  en: {
    navHome:"Home",navAbout:"About",navProjects:"Projects",navTechnology:"Technology",navUpdates:"Updates",navContact:"Contact",
    eyebrow:"INDEPENDENT TECHNOLOGY INITIATIVE",heroTitle:"Building ideas.<br>Engineering possibilities.",
    heroLead:"An independent technology initiative exploring software, web-based operating systems, AI, and thoughtful digital experiences.",
    explore:"Explore projects",discover:"Discover Isembea",scroll:"SCROLL TO EXPLORE",
    intro:"A place for ideas to become experiments, products, and new ways to interact with technology.",
    who:"WHO WE ARE",aboutTitle:"Curiosity drives<br>what comes next.",
    aboutText:"ISEMBEA is an independent technology initiative focused on exploring ideas through software, interface design, and practical experimentation.",
    aboutText2:"We believe useful technology begins with curiosity, clear thinking, and the willingness to build, test, and improve.",
    selected:"SELECTED PROJECTS",projectsTitle:"Made to explore.<br>Built to evolve.",projectsLead:"A growing collection of experiments and digital products.",
    osDesc:"A web-based operating system interface experiment.",labDesc:"Experiments, prototypes, and ongoing development.",
    approach:"OUR APPROACH",techTitle:"Technology with<br>room to think.",
    tech1:"Building useful digital tools and connected experiences.",tech2:"Exploring clarity, usability, and expressive visual design.",tech3:"Testing ideas, learning from results, and iterating.",
    updatesKicker:"LATEST DIRECTION",updatesTitle:"The next chapter<br>starts with a question.",updatesText:"Follow the work as ideas turn into prototypes, interfaces, and new releases.",
    follow:"Follow development",contactKicker:"GET IN TOUCH",contactTitle:"Have an idea?<br>Let's connect.",
    contactText:"For project updates and development, visit our public GitHub space.",backTop:"BACK TO TOP ↑"
  },
  th: {
    navHome:"หน้าแรก",navAbout:"เกี่ยวกับเรา",navProjects:"โปรเจกต์",navTechnology:"เทคโนโลยี",navUpdates:"อัปเดต",navContact:"ติดต่อ",
    eyebrow:"โครงการเทคโนโลยีอิสระ",heroTitle:"สร้างสรรค์แนวคิด<br>ต่อยอดความเป็นไปได้",
    heroLead:"โครงการเทคโนโลยีอิสระที่สำรวจซอฟต์แวร์ ระบบปฏิบัติการบนเว็บ AI และประสบการณ์ดิจิทัลที่ใส่ใจผู้ใช้",
    explore:"สำรวจโปรเจกต์",discover:"รู้จัก Isembea",scroll:"เลื่อนเพื่อสำรวจ",
    intro:"พื้นที่ที่เปลี่ยนแนวคิดให้กลายเป็นการทดลอง ผลิตภัณฑ์ และวิธีใหม่ในการใช้งานเทคโนโลยี",
    who:"เราเป็นใคร",aboutTitle:"ความสงสัยใคร่รู้<br>ขับเคลื่อนสิ่งใหม่",
    aboutText:"ISEMBEA เป็นโครงการเทคโนโลยีอิสระที่มุ่งสำรวจแนวคิดผ่านซอฟต์แวร์ การออกแบบอินเทอร์เฟซ และการทดลองที่นำไปใช้ได้จริง",
    aboutText2:"เราเชื่อว่าเทคโนโลยีที่มีประโยชน์เริ่มต้นจากความอยากรู้อยากเห็น การคิดอย่างชัดเจน และความตั้งใจที่จะสร้าง ทดสอบ และพัฒนา",
    selected:"โปรเจกต์ที่คัดสรร",projectsTitle:"ทดลองเพื่อค้นพบ<br>พัฒนาเพื่อก้าวต่อ",projectsLead:"คอลเลกชันการทดลองและผลิตภัณฑ์ดิจิทัลที่กำลังเติบโต",
    osDesc:"การทดลองอินเทอร์เฟซระบบปฏิบัติการบนเว็บ",labDesc:"การทดลอง ต้นแบบ และงานพัฒนาที่กำลังดำเนินอยู่",
    approach:"แนวทางของเรา",techTitle:"เทคโนโลยีที่เปิดพื้นที่<br>ให้ความคิด",
    tech1:"สร้างเครื่องมือดิจิทัลและประสบการณ์ที่เชื่อมต่อกัน",tech2:"สำรวจความชัดเจน การใช้งานง่าย และการออกแบบที่มีเอกลักษณ์",tech3:"ทดสอบแนวคิด เรียนรู้จากผลลัพธ์ และพัฒนาต่อ",
    updatesKicker:"ทิศทางล่าสุด",updatesTitle:"บทต่อไป<br>เริ่มต้นจากคำถาม",updatesText:"ติดตามการเปลี่ยนแนวคิดให้เป็นต้นแบบ อินเทอร์เฟซ และการเปิดตัวใหม่",
    follow:"ติดตามการพัฒนา",contactKicker:"ติดต่อเรา",contactTitle:"มีไอเดียไหม?<br>มาพูดคุยกัน",
    contactText:"ติดตามข่าวสารและการพัฒนาได้ที่ GitHub สาธารณะของเรา",backTop:"กลับขึ้นด้านบน ↑"
  }
};
let language = localStorage.getItem("isembea-language") || "en";
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

function applyLanguage(){
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[language][key]) el.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === "en" ? "TH" : "EN";
  localStorage.setItem("isembea-language", language);
}
languageToggle.addEventListener("click",()=>{language = language === "en" ? "th" : "en";applyLanguage();});

function applyTheme(theme){
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☼" : "☾";
  localStorage.setItem("isembea-theme",theme);
}
const savedTheme = localStorage.getItem("isembea-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
applyTheme(savedTheme || preferredTheme);
themeToggle.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click",()=>{
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage();

const sections = [...document.querySelectorAll("main section[id]")];
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>observer.observe(section));
