const tests = {
"تحاليل الدم":[
"صورة دم كاملة CBC","الهيموجلوبين Hb","كرات الدم الحمراء RBC","كرات الدم البيضاء WBC","الصفائح الدموية PLT","سرعة الترسيب ESR","فصيلة الدم ABO & Rh","الهيماتوكريت HCT","مؤشرات كرات الدم MCV / MCH / MCHC","Reticulocyte Count","Peripheral Blood Film","Coombs Test Direct","Coombs Test Indirect","G6PD","Sickling Test"
],
"السكر":[
"سكر صائم FBS","سكر بعد الأكل PPBS","سكر عشوائي RBS","هيموجلوبين سكري HbA1c","اختبار تحمل الجلوكوز OGTT","إنسولين صائم","C-Peptide"
],
"وظائف الكبد":[
"ALT","AST","ALP","GGT","Total Bilirubin","Direct Bilirubin","Total Protein","Albumin","Globulin","A/G Ratio","LDH"
],
"وظائف الكلى والأملاح":[
"Creatinine","Urea","BUN","Uric Acid","Sodium Na","Potassium K","Calcium Ca","Ionized Calcium","Magnesium Mg","Phosphorus P","Chloride Cl"
],
"الدهون والقلب":[
"Total Cholesterol","Triglycerides","HDL","LDL","VLDL","Lipid Profile","CK","CK-MB","Troponin I","Troponin T","Homocysteine"
],
"الغدة الدرقية":[
"TSH","Free T3","Free T4","Total T3","Total T4","Thyroglobulin","Anti-TPO","Anti-TG","TRAb"
],
"الهرمونات":[
"FSH","LH","Prolactin","Estradiol E2","Progesterone","Total Testosterone","Free Testosterone","SHBG","DHEA-S","Cortisol","ACTH","Growth Hormone GH","IGF-1","Insulin","AMH","Beta HCG","PTH"
],
"تحاليل الحمل والخصوبة":[
"Pregnancy Test Serum","Pregnancy Test Urine","Beta HCG Quantitative","AMH","FSH","LH","Estradiol","Progesterone","Semen Analysis","Semen Culture","Sperm Count & Motility"
],
"الحديد والفيتامينات":[
"Serum Iron","Ferritin","TIBC","Transferrin","Vitamin B12","Folate","Vitamin D 25-OH","Vitamin D 1,25-OH","Zinc","Copper"
],
"السيولة والتجلط":[
"PT","INR","APTT","Fibrinogen","D-Dimer","Bleeding Time BT","Clotting Time CT","Protein C","Protein S","Antithrombin III"
],
"المناعة والحساسية":[
"CRP","hs-CRP","ASO","RF","ANA","Anti-dsDNA","C3","C4","IgA","IgG","IgM","IgE Total","Allergy Panel","ENA Profile","Anti-CCP"
],
"الفيروسات والأمراض المعدية":[
"HBsAg","HBsAb","HBcAb","HBeAg","HBeAb","HCV Ab","HCV PCR","HIV Ab","HIV Ag/Ab","CMV IgG","CMV IgM","EBV VCA IgG","EBV VCA IgM","Toxoplasma IgG","Toxoplasma IgM","Rubella IgG","Rubella IgM","HSV 1 IgG","HSV 2 IgG"
],
"تحاليل البول":[
"Urine Analysis","Urine Culture","Urine Protein","Urine Albumin","Microalbumin/Creatinine Ratio","24 Hour Urine Protein","Urine Pregnancy Test","Urine Calcium","Urine Creatinine"
],
"تحاليل البراز":[
"Stool Analysis","Stool Culture","Occult Blood in Stool","H. pylori Stool Antigen","Calprotectin","Reducing Substances","Parasites Examination"
],
"الميكروبيولوجي والمزارع":[
"Blood Culture","Urine Culture","Stool Culture","Sputum Culture","Throat Swab Culture","Wound Swab Culture","Pus Culture","Sensitivity Test"
],
"جرثومة المعدة":[
"H. pylori IgG","H. pylori Stool Antigen","H. pylori Urea Breath Test"
],
"البروتينات والإنزيمات":[
"Amylase","Lipase","Total Protein","Albumin","LDH","CK","CK-MB","Alkaline Phosphatase","Acid Phosphatase"
],
"تحاليل الروماتيزم":[
"Rheumatoid Factor RF","Anti-CCP","ASO Titer","CRP","ESR","ANA","Anti-dsDNA"
],
"تحاليل العظام":[
"Calcium","Ionized Calcium","Phosphorus","Magnesium","Vitamin D","PTH","ALP","Osteocalcin","CTX"
],
"تحاليل الأورام والمؤشرات":[
"AFP","CEA","CA 125","CA 15-3","CA 19-9","PSA Total","PSA Free","CA 72-4","Beta-2 Microglobulin"
],
"تحاليل الحساسية المتقدمة":[
"Total IgE","Specific IgE","Food Allergy Panel","Inhalant Allergy Panel"
],
"تحاليل متفرقة":[
"Electrolytes","Blood Gas Analysis ABG","Lactate","Ammonia","Bilirubin","Osmolality","Hb Electrophoresis","Thalassemia Screen","Vitamin B1","Vitamin B6","Vitamin E"
]
};

const grid=document.getElementById("testGrid");
const search=document.getElementById("search");
const empty=document.getElementById("empty");

function render(q=""){
  grid.innerHTML="";
  let count=0;
  const query=q.trim().toLowerCase();
  Object.entries(tests).forEach(([cat,items])=>{
    items.forEach(name=>{
      if(!query || name.toLowerCase().includes(query) || cat.toLowerCase().includes(query)){
        count++;
        const el=document.createElement("article");
        el.className="test";
        el.innerHTML=`<div><small style="display:block;color:#12855f;font-weight:700">${cat}</small><b>${name}</b></div><span class="price">السعر لاحقًا</span>`;
        grid.appendChild(el);
      }
    });
  });
  empty.hidden=count!==0;
}
search.addEventListener("input",e=>render(e.target.value));
render();

document.querySelector(".menu").addEventListener("click",()=>{
  document.querySelector(".nav").classList.toggle("open");
});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav").classList.remove("open");
}));
