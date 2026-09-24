const cards=[
 {bank:"HDFC",name:"HDFC Bank Credit Card",sub:"Demo offer — rewards & everyday spending",fee:"₹0* / year",tag:"Annual Fee",reward:"Rewards",url:"https://www.sales.gromo.in/hpx/zrJ0MqLPOC/"},
 {bank:"ICICI",name:"ICICI Bank Credit Card",sub:"Demo offer — shopping & lifestyle",fee:"₹0* / year",tag:"Annual Fee",reward:"Cashback",url:"https://www.icicibank.com/"},
 {bank:"AXIS",name:"Axis Bank Credit Card",sub:"Demo offer — travel & dining",fee:"₹0* / year",tag:"Annual Fee",reward:"Benefits",url:"https://www.axisbank.com/"}
];
const loans=[
 {bank:"HDFC",name:"HDFC Bank Personal Loan",sub:"Demo offer — unsecured personal finance",fee:"From 10.5%*",tag:"Indicative APR",reward:"Flexible",url:"https://www.hdfcbank.com/"},
 {bank:"ICICI",name:"ICICI Bank Personal Loan",sub:"Demo offer — online application",fee:"From 10.8%*",tag:"Indicative APR",reward:"Digital",url:"https://www.icicibank.com/"},
 {bank:"AXIS",name:"Axis Bank Personal Loan",sub:"Demo offer — quick application",fee:"From 11%*",tag:"Indicative APR",reward:"Online",url:"https://www.axisbank.com/"}
];
function cardHTML(p){return `<article class="product"><div class="product-logo">${p.bank}</div><h3>${p.name}</h3><div class="sub">${p.sub}</div><div class="meta"><div><b>${p.fee}</b><span>${p.tag}</span></div><div><b>${p.reward}</b><span>Key feature</span></div></div><a class="apply" href="${p.url}" target="_blank" rel="noopener noreferrer">Apply Now →</a><div class="fine">*Demo text only. Verify current fees, rates, eligibility and terms on the lender's website.</div></article>`}
document.getElementById("cardGrid").innerHTML=cards.map(cardHTML).join("");
document.getElementById("loanGrid").innerHTML=loans.map(cardHTML).join("");
document.querySelectorAll(".choice").forEach(btn=>btn.addEventListener("click",()=>document.getElementById(btn.dataset.target).scrollIntoView({behavior:"smooth"})));
function openModal(type){
 const c=type==="privacy"
 ? `<h2>Privacy</h2><p>This demo does not collect or store personal information. Before launch, add a proper privacy notice, consent language, data retention policy and contact details appropriate to your actual business.</p>`
 : `<h2>Disclosure</h2><p>FinCompare Demo is a demonstration website. It is not a bank, NBFC, lender, card issuer or financial institution. Offers, rates, fees and eligibility shown here are placeholders for testing. Replace them with verified information and approved lender links before publishing.</p>`;
 document.getElementById("modalContent").innerHTML=c;document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
