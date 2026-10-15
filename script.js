const valid=/^0x[0-9a-fA-F]{40}$/.test(CONTRACT_ADDRESS);
const buy="https://app.uniswap.org/swap?chain=ethereum"+(valid?"&outputCurrency="+CONTRACT_ADDRESS:"");
document.querySelectorAll(".buy").forEach(a=>{a.href=buy;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".xlink").forEach(a=>{a.href=X_LINK});
document.querySelectorAll(".tglink").forEach(a=>{a.href=TELEGRAM_LINK});
document.querySelectorAll(".chain").forEach(e=>{e.textContent=e.closest(".alertbar")?CHAIN.toUpperCase():CHAIN});
document.querySelectorAll(".ca").forEach(e=>e.textContent=CONTRACT_ADDRESS);
document.querySelectorAll(".copy").forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(CONTRACT_ADDRESS);const t=b.textContent;b.textContent="Copied!";setTimeout(()=>b.textContent=t,1500)});
document.querySelectorAll(".scan").forEach(a=>{if(valid){a.href="https://etherscan.io/token/"+CONTRACT_ADDRESS;a.target="_blank";a.rel="noopener"}else{a.style.display="none"}});
