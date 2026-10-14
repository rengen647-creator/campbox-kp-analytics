/* Text-only CSV export. This module is bundled with the DEMO admin UI. */
// Spreadsheet engines may ignore initial whitespace/control characters when
// interpreting a CSV cell as a formula. Neutralize the value BEFORE quoting.
// Applies to every exported cell, including columns added in the future.
const CSV_FORMULA_START=/^[\u0000-\u0020\u007F\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]*[=+\-@]/u;
function csvSafeCell(value){
  const raw=String(value??'');
  const safe=CSV_FORMULA_START.test(raw)?"'"+raw:raw;
  return '"'+safe.replace(/"/g,'""')+'"';
}
function csvSerialize(columns,rows){
  return '\uFEFF'+[columns,...rows].map(row=>row.map(csvSafeCell).join(',')).join('\r\n');
}
