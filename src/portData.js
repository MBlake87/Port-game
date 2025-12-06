export const PORT_QUESTIONS = [
  // Core networking
  { port: 20, description: "FTP — Data Transfer" },
  { port: 21, description: "FTP — Control (Command)" },
  { port: 22, description: "SSH — Secure Shell Remote Access" },
  { port: 23, description: "Telnet — Unsecured Remote Login" },
  { port: 25, description: "SMTP — Mail Transfer" },
  { port: 53, description: "DNS — Domain Name System" },
  { port: 67, description: "DHCP — Server" },
  { port: 68, description: "DHCP — Client" },
  { port: 69, description: "TFTP — Trivial File Transfer" },
  { port: 80, description: "HTTP — Web Traffic" },
  { port: 123, description: "NTP — Network Time Protocol" },
  { port: 161, description: "SNMP — Monitoring / Query" },
  { port: 162, description: "SNMP — Trap Notification" },

  // File + directory services
  { port: 389, description: "LDAP — Directory Services" },
  { port: 445, description: "SMB — Windows File Sharing" },

  // Secure variants
  { port: 443, description: "HTTPS — Secure Web Traffic" },
  { port: 465, description: "SMTPS — Secure Mail Transfer" },
  { port: 587, description: "SMTP Submission (TLS)" },
  { port: 636, description: "LDAPS — Secure LDAP" },
  { port: 993, description: "IMAPS — Secure IMAP" },
  { port: 995, description: "POP3S — Secure POP3" },

  // Email protocols
  { port: 110, description: "POP3 — Email Retrieval" },
  { port: 143, description: "IMAP — Email Retrieval" },

  // Remote access
  { port: 389, description: "LDAP — Directory Service Lookup" },
  { port: 3389, description: "RDP — Remote Desktop Protocol" },
  { port: 5900, description: "VNC — Remote Desktop" },

  // VPN + tunnelling
  { port: 500, description: "ISAKMP / IKE — VPN Negotiation" },
  { port: 1701, description: "L2TP — VPN Tunneling" },
  { port: 1723, description: "PPTP — VPN" },
  { port: 1194, description: "OpenVPN" },

  // Databases (very common)
  { port: 3306, description: "MySQL Database" },
  { port: 5432, description: "PostgreSQL Database" },
  { port: 1433, description: "MSSQL — Microsoft SQL Server" },

  // Popular developer / proxy ports
  { port: 8080, description: "HTTP Alternate / Proxy" },
  { port: 8443, description: "HTTPS Alternate" },
];
