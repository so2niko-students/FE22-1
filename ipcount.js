function ipsBetween(ip1, ip2) {
    ip1 = ip1.split('.');
    return ip2.split('.').reduce(function(count, num, i) {
      return (count * 256) + Number(num) - Number(ip1[i])
    }, 0);
}

console.log(199, ipsBetween('192.168.1.1', '192.168.1.200'));
console.log(455, ipsBetween('192.168.1.1', '192.168.2.200'));
console.log(455, ipsBetween('192.168.1.1', '192.169.2.200'));

