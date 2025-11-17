# 🔒 Security Checklist

## 🔴 CRITIQUE

### Comptes & Authentification
- [x] 2FA activé sur GitHub ✅
- [ ] 2FA activé sur Netlify
- [ ] 2FA activé sur Cloudinary
- [ ] 2FA activé sur Anthropic (Claude API)
- [ ] 2FA activé sur ElevenLabs
- [x] 2FA activé sur email principal (Apple ID) ✅

### Clés API
- [ ] Clé Claude API stockée en variable d'environnement (pas dans le code)
- [ ] Clé ElevenLabs stockée en variable d'environnement
- [ ] Clé Cloudinary sécurisée
- [ ] .env dans .gitignore
- [ ] Aucune clé dans l'historique Git
- [x] Recovery codes 2FA sauvegardés (clé USB + iCloud Drive avec 2FA) ✅

### Code Web
- [x] Content-Security-Policy (CSP) configuré
- [x] HTTPS activé (Netlify le fait par défaut)
- [ ] Validation inputs utilisateur
- [ ] Sanitization données affichées

## 🟡 IMPORTANT

### Monitoring
- [ ] Alertes Cloudinary quota
- [ ] Alertes ElevenLabs quota
- [ ] Alertes Claude API usage/coûts
- [ ] Uptime monitoring configuré

### Backups
- [ ] Backup automatique local OU cloud
- [x] Recovery codes 2FA sauvegardés offline ✅

### Permissions
- [ ] GitHub repo : permissions minimales pour collaborateurs
- [ ] Netlify : permissions minimales
- [ ] Firestore rules configurées (quand utilisé)

## 🟢 RECOMMANDÉ

### Best Practices
- [ ] Rate limiting sur APIs
- [ ] CORS bien configuré
- [ ] Logs d'erreurs centralisés
- [ ] Politique rotation clés API (tous les 6 mois)
- [ ] Audit sécurité mensuel

### Infrastructure
- [ ] DNS CAA records configurés
- [ ] Subdomain takeover protection
- [ ] Sécurité email (SPF, DKIM, DMARC)

