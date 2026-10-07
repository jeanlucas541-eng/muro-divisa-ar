const walkLink=document.createElement('a');
walkLink.href='./?walk=1';
walkLink.textContent='Caminhar pelo muro →';
walkLink.style.cssText='display:block;margin:12px 22px;padding:16px;background:#067b94;color:white;border-radius:8px;text-align:center;text-decoration:none;font-weight:bold';
document.querySelector('header').after(walkLink);
const tip=document.createElement('p');
tip.textContent='Caminhada virtual com setas na tela, sem usar a câmera. Para maquete na superfície, use a opção AR abaixo.';
tip.style.cssText='margin:8px 22px;color:#657985;font-size:13px;line-height:1.5';
walkLink.after(tip);
