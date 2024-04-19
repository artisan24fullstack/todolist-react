export function activeClassIf(condition, className) {
  if (!condition) {
    return className
  }
  if (!className) {
    return 'active';
  }
  return `active ${className}`
}

{/* 

<a className={`nav-link ${page === 'home' ? 'active' : '' }`} aria-current="page" href="#">Home</a>

<a className={activeClassIf(page === 'home', 'nav-link')} aria-current="page" href="#">Home</a>

*/}

export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


export function truncateTxt(txt, txtLength, substringTx, separator) {
  return txt?.length > txtLength ? `${txt.substring(0, substringTx)}${separator}` : txt;
}