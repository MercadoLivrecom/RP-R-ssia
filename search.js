function normalizar(t){
 return t.toLowerCase()
 .normalize("NFD")
 .replace(/[\u0300-\u036f]/g,"");
}

function buscar(termo){
 const t=normalizar(termo);
 return BASE_CONHECIMENTO.filter(i=>
   i.palavras.some(p=>normalizar(p).includes(t) || t.includes(normalizar(p)))
   || normalizar(i.titulo).includes(t)
 );
}
