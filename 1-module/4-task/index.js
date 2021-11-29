function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes('1xbet') || str.includes('xxx');
  }

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');