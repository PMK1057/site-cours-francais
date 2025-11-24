// Navigation
const sectionNavMap = {};
const courseSectionMap = {};
let currentSection = 'home';
let currentCourse = null;
let hashUpdateEnabled = true;

// Mapping des connexions de navigation "Vous aimerez aussi"
const relatedCoursesMap = {
    // Conjugaison et temps verbaux
    'futur-proche': ['passe-recent'],
    'passe-recent': ['futur-proche'],
    'passe-compose': ['imparfait', 'passe-compose-vs-imparfait'],
    'imparfait': ['passe-compose', 'passe-compose-vs-imparfait'],
    'passe-compose-vs-imparfait': ['passe-compose', 'imparfait'],
    'present-indicatif': ['futur-proche', 'passe-recent'],
    'subjonctif-present': ['subjonctif-passe'],
    'subjonctif-passe': ['subjonctif-present'],
    'conditionnel-present': ['conditionnel-passe'],
    'conditionnel-passe': ['conditionnel-present', 'plus-que-parfait'],
    'plus-que-parfait': ['conditionnel-passe'],
    
    // Déterminants et pronoms
    'determinants-possessifs': ['pronoms-possessifs'],
    'pronoms-possessifs': ['determinants-possessifs'],
    'determinants-demonstratifs': ['pronoms-demonstratifs'],
    'pronoms-demonstratifs': ['determinants-demonstratifs'],
    'cod-coi': ['en-y', 'exercice-cod-coi'],
    'en-y': ['cod-coi'],
    'QUIQUEDONT': ['lequelauquelduquel'],
    'lequelauquelduquel': ['QUIQUEDONT'],
    'verbes-pronominaux': ['cod-coi'],
    
    // Prépositions et grammaire
    'prepositions': ['de-des-du', 'textes-francais-prepositions'],
    'de-des-du': ['prepositions'],
    'reperes-temporels': ['reperes-spatiaux'],
    'reperes-spatiaux': ['reperes-temporels'],
    
    // Expressions et vocabulaire
    'expressions-courantes': ['expressions-idiomatiques', 'vocabulaire-familier'],
    'expressions-idiomatiques': ['expressions-courantes', 'vocabulaire-familier'],
    'vocabulaire-familier': ['expressions-courantes', 'expressions-idiomatiques'],
    'expressions-essentielles': ['expressions-courantes'],
    'faux-amis-hispanophones': ['faux-amis-anglophones'],
    'faux-amis-anglophones': ['faux-amis-hispanophones'],
    
    // Textes et progression
    'textes_francais_debutants': ['textes_passe_compose_imparfait', 'textes-francais-prepositions'],
    'textes_passe_compose_imparfait': ['textes_subjonctif_present', 'textes_francais_debutants'],
    'textes_subjonctif_present': ['textes_passe_compose_imparfait'],
    'textes-francais-prepositions': ['textes_francais_debutants', 'prepositions'],
    
    // Culture et société
    'grands_hommes_francais': ['femmes_francaises_celebres'],
    'femmes_francaises_celebres': ['grands_hommes_francais'],
    'droit-des-femmes': ['mariage-pour-tous'],
    'mariage-pour-tous': ['droit-des-femmes', 'peine-de-mort'],
    'intelligence-artificielle': ['ia-et-droit', 'ia-science'],
    'ia-et-droit': ['intelligence-artificielle', 'ia-science'],
    'ia-science': ['intelligence-artificielle', 'ia-et-droit'],
    'peine-de-mort': ['mariage-pour-tous'],
    'legalisation-cannabis': ['monarchie-europe'],
    'monarchie-europe': ['legalisation-cannabis'],
    
    // Bases et communication
    'tutoiement-vouvoiement': ['presentations'],
    'presentations': ['tutoiement-vouvoiement', 'expressions-essentielles'],
    'questions-pratiques': ['expressions-courantes'],
    
    // Exercices
    'exercice-cod-coi': ['cod-coi', 'exercice-pronoms-determinants'],
    'exercice-pronoms-determinants': ['exercice-cod-coi', 'exercice-conjugaison-mixte'],
    'exercice-conjugaison-mixte': ['exercice-pronoms-determinants', 'textes_passe_compose_imparfait'],
    
    // Connexions supplémentaires exercices-cours
    'geographie_france': ['reperes-spatiaux'],
    'textes-climafrance': ['questions-pratiques'],
    'textes-courses-supermarche': ['expressions-courantes'],
    'textes-diner-amis': ['expressions-courantes'],
    'textes-marche-noel': ['expressions-courantes'],
    'textes-premier-jour-travail': ['textes-teletravail'],
    'textes-teletravail': ['textes-premier-jour-travail'],
    'textes-vacances-mer': ['reperes-temporels'],
    'textes-voyage-train': ['questions-pratiques'],
    'textes-weekend-paris': ['reperes-spatiaux'],
    'textes-francais-et-pain': ['expressions-courantes'],
};

// Mapping des niveaux pour chaque cours (pour les cartes de navigation)
const courseLevels = {
    'tutoiement-vouvoiement': 'level-beginner',
    'conditionnel-present': 'level-beginner',
    'plus-que-parfait': 'level-advanced',
    'conditionnel-passe': 'level-advanced',
    'subjonctif-present': 'level-advanced',
    'subjonctif-passe': 'level-advanced',
    'contractions-oral': 'level-advanced',
    'expressions-idiomatiques': 'level-advanced',
    'vocabulaire-familier': 'level-advanced',
    'intelligence-artificielle': 'level-advanced',
    'ia-et-droit': 'level-advanced',
    'ia-science': 'level-advanced',
    'drones': 'level-advanced',
    'credit-social-chine': 'level-advanced',
    'femmes_francaises_celebres': 'level-advanced',
    'prepositions': 'level-orange',
    'de-des-du': 'level-orange',
    'locutions-impersonnelles': 'level-orange',
    'eux-vs-leur': 'level-orange',
    'comparaisons-francais': 'level-orange',
    'causes-francais': 'level-orange',
    'lequelauquelduquel': 'level-orange',
    'passe-compose': 'level-orange',
    'imparfait': 'level-orange',
    'passe-compose-vs-imparfait': 'level-orange',
    'faux-amis-hispanophones': 'level-orange',
    'faux-amis-anglophones': 'level-orange',
    'verbes-pronominaux': 'level-green',
    // Par défaut, level-intermediate pour tous les autres
};

// Noms des cours pour l'affichage
const courseNames = {
    'futur-proche': 'Futur Proche',
    'passe-recent': 'Passé Récent',
    'passe-compose': 'Passé Composé',
    'imparfait': 'Imparfait',
    'passe-compose-vs-imparfait': 'Passé Composé vs Imparfait',
    'present-indicatif': 'Présent de l\'Indicatif',
    'subjonctif-present': 'Subjonctif Présent',
    'subjonctif-passe': 'Subjonctif Passé',
    'conditionnel-present': 'Conditionnel Présent',
    'conditionnel-passe': 'Conditionnel Passé',
    'plus-que-parfait': 'Plus-que-Parfait',
    'determinants-possessifs': 'Déterminants Possessifs',
    'pronoms-possessifs': 'Pronoms Possessifs',
    'determinants-demonstratifs': 'Déterminants Démonstratifs',
    'pronoms-demonstratifs': 'Pronoms Démonstratifs',
    'cod-coi': 'COD/COI',
    'en-y': 'EN et Y',
    'QUIQUEDONT': 'QUI/QUE/DONT',
    'lequelauquelduquel': 'LEQUEL/AUQUEL/DUQUEL',
    'verbes-pronominaux': 'Verbes Pronominaux',
    'prepositions': 'Les Prépositions',
    'de-des-du': 'DE/DES/DU',
    'reperes-temporels': 'Repères Temporels',
    'reperes-spatiaux': 'Repères Spatiaux',
    'expressions-courantes': 'Expressions Courantes',
    'expressions-idiomatiques': 'Expressions Idiomatiques',
    'vocabulaire-familier': 'Vocabulaire Familier',
    'expressions-essentielles': 'Expressions Essentielles',
    'faux-amis-hispanophones': 'Faux Amis (Hispanophones)',
    'faux-amis-anglophones': 'Faux Amis (Anglophones)',
    'textes_francais_debutants': 'Textes Débutants',
    'textes_passe_compose_imparfait': 'Textes Passé Composé/Imparfait',
    'textes_subjonctif_present': 'Textes Subjonctif Présent',
    'textes-francais-prepositions': 'Textes Prépositions',
    'grands_hommes_francais': 'Grands Hommes Français',
    'femmes_francaises_celebres': 'Femmes Françaises Célèbres',
    'droit-des-femmes': 'Droit des Femmes',
    'mariage-pour-tous': 'Mariage pour Tous',
    'intelligence-artificielle': 'Intelligence Artificielle',
    'ia-et-droit': 'IA et le Droit',
    'ia-science': 'IA dans la Science',
    'peine-de-mort': 'Peine de Mort',
    'legalisation-cannabis': 'Légalisation du Cannabis',
    'monarchie-europe': 'Monarchie en Europe',
    'tutoiement-vouvoiement': 'Tutoiement/Vouvoiement',
    'presentations': 'Présentations',
    'questions-pratiques': 'Questions Pratiques',
    'exercice-cod-coi': 'Exercice COD/COI',
    'exercice-pronoms-determinants': 'Exercice Pronoms & Déterminants',
    'exercice-conjugaison-mixte': 'Exercice Conjugaison Mixte',
    'geographie_france': 'Géographie de la France',
    'textes-climafrance': 'Conversations Professionnelles',
    'textes-courses-supermarche': 'Courses au Supermarché',
    'textes-diner-amis': 'Dîner entre Amis',
    'textes-marche-noel': 'Marché de Noël',
    'textes-premier-jour-travail': 'Premier Jour de Travail',
    'textes-teletravail': 'Télétravail',
    'textes-vacances-mer': 'Vacances à la Mer',
    'textes-voyage-train': 'Voyage en Train',
    'textes-weekend-paris': 'Weekend à Paris',
    'textes-francais-et-pain': 'Le Français et le Pain',
    'imperatif': 'Impératif',
    'pronoms-interrogatifs': 'Pronoms Interrogatifs',
    'pronoms-toniques': 'Pronoms Toniques',
    'locutions-impersonnelles': 'Locutions Impersonnelles',
    'eux-vs-leur': 'EUX vs LEUR',
    'comparaisons-francais': 'Comparaisons',
    'causes-francais': 'La Cause',
    'chiffres-nombres': 'Chiffres & Nombres',
    'couleurs': 'Les Couleurs',
    'famille': 'La Famille',
    'nationalites': 'Nationalités',
    'phrases-utiles-cours-paul': 'Phrases Utiles Pendant les Cours',
    'contractions-oral': 'Contractions à l\'Oral',
    'vocabulaire-thematique': 'Vocabulaire Thématique',
    'uniformisation-langue': 'Uniformisation du Français',
    'separation-eglise-etat': 'Loi de 1905 — Laïcité',
    'revolution-industrielle': 'Révolution Industrielle',
    'empire-maritime-dom-tom': 'Empire Maritime & DOM-TOM',
    'drones': 'Les Drones',
    'credit-social-chine': 'Crédit Social Chine',
};

// Fonction pour créer la section "Vous aimerez aussi"
function createRelatedCoursesSection(courseId) {
    const relatedCourses = relatedCoursesMap[courseId];
    if (!relatedCourses || relatedCourses.length === 0) {
        return '';
    }
    
    const cards = relatedCourses.map(relatedId => {
        const courseName = courseNames[relatedId] || relatedId.replace(/-/g, ' ').replace(/_/g, ' ');
        // Déterminer le niveau du cours (par défaut level-intermediate)
        const levelClass = courseLevels[relatedId] || 'level-intermediate';
        return `
            <div class="related-course-card section-card ${levelClass}" onclick="showCourse('${relatedId}')" role="button" tabindex="0" aria-label="Ouvrir le cours ${courseName}">
                <h3>${courseName}</h3>
            </div>
        `;
    }).join('');
    
    return `
        <div class="related-courses-section">
            <h3 class="related-courses-title">Vous aimerez aussi</h3>
            <div class="related-courses-container">
                ${cards}
            </div>
        </div>
    `;
}

function updateURLHash({ section = null, course = null } = {}) {
    let hash = '';
    if (course) {
        hash = `#course=${course}`;
    } else if (section) {
        hash = `#section=${section}`;
    }

    const newUrl = `${window.location.pathname}${window.location.search}${hash}`;
    if (window.location.href.endsWith(hash) || window.location.hash === hash) {
        return;
    }
    history.replaceState(null, '', newUrl);
}

function initNavigationData() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const sectionId = btn.dataset.section;
        if (sectionId) {
            sectionNavMap[sectionId] = btn;
        }
    });

    document.querySelectorAll('.section').forEach(section => {
        const sectionId = section.id;
        section.querySelectorAll('.section-card').forEach(card => {
            const explicitCourseId = card.dataset.course;
            let courseId = explicitCourseId;
            if (!courseId) {
                const onclickAttr = card.getAttribute('onclick');
                if (onclickAttr) {
                    const match = onclickAttr.match(/showCourse\(['\"]([^'\"]+)['\"]\)/);
                    if (match) {
                        courseId = match[1];
                    }
                }
            }
            if (courseId) {
                courseSectionMap[courseId] = sectionId;
            }
        });
    });
}

function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash) {
        hashUpdateEnabled = false;
        showSection('home', null, false);
        hashUpdateEnabled = true;
        return;
    }

    const [key, value] = hash.split('=');
    if (key === 'course' && value) {
        hashUpdateEnabled = false;
        showCourse(value);
        hashUpdateEnabled = true;
    } else if (key === 'section' && value) {
        hashUpdateEnabled = false;
        showSection(value, null, false);
        hashUpdateEnabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigationData();
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
});

function showSection(sectionId, evt = null, updateHistory = true) {
    // Hide ALL sections and courses
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    document.querySelectorAll('.course-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        section.style.display = 'block';
    }

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const targetBtn = evt && evt.target ? evt.target : (sectionNavMap[sectionId] || document.querySelector(`.nav-btn[data-section="${sectionId}"]`));
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    currentSection = sectionId;
    currentCourse = null;

    if (updateHistory && hashUpdateEnabled) {
        updateURLHash({ section: sectionId });
    }
    
    // Initialiser les mini-jeux si on affiche la section home
    if (sectionId === 'home' && typeof initHomeGames === 'function') {
        setTimeout(() => {
            initHomeGames();
        }, 100);
    }
}

// Cache pour stocker les cours chargés
const courseCache = {};
const MAX_CACHE_AGE = 30 * 60 * 1000; // 30 minutes en millisecondes

// Fonction pour vérifier si le cache est encore valide
function isCacheValid(courseId) {
    if (!courseCache[courseId]) return false;
    const cached = courseCache[courseId];
    if (typeof cached === 'string') {
        // Ancien format, toujours valide
        return true;
    }
    if (cached.timestamp && (Date.now() - cached.timestamp) > MAX_CACHE_AGE) {
        // Cache expiré
        delete courseCache[courseId];
        return false;
    }
    return true;
}

// Fonction pour fetch avec timeout
function fetchWithTimeout(url, timeout = 10000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout: requête trop longue')), timeout)
        )
    ]);
}

// Fonction pour exécuter les scripts dans un HTML
function executeScriptsInHTML(html, container, courseId = null) {
    try {
        // Vider le container d'abord pour éviter les conflits
        container.innerHTML = '';
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Vérifier si le parsing a réussi
        const parseError = doc.querySelector('parsererror');
        if (parseError) {
            throw new Error('Erreur de parsing HTML');
        }
        
        const scripts = Array.from(doc.querySelectorAll('script'));
        
        // Sauvegarder le contenu des scripts avant de les supprimer
        const scriptsContent = scripts.map(script => ({
            innerHTML: script.innerHTML,
            attributes: Array.from(script.attributes).map(attr => ({
                name: attr.name,
                value: attr.value
            }))
        }));
        
        // Créer un HTML sans les scripts
        scripts.forEach(script => script.remove());
        container.innerHTML = doc.body.innerHTML;
        
        // Injecter la section "Vous aimerez aussi" si courseId est fourni
        if (courseId) {
            const relatedSection = createRelatedCoursesSection(courseId);
            if (relatedSection) {
                // Vérifier si la section n'existe pas déjà
                if (!container.querySelector('.related-courses-section')) {
                    container.insertAdjacentHTML('beforeend', relatedSection);
                }
            }
        }
        
        // Injecter une barre d'outils PDF si absente
        try {
            const alreadyHasPrint = container.querySelector('.print-btn');
            if (!alreadyHasPrint) {
                const toolbar = document.createElement('div');
                toolbar.className = 'course-toolbar print-hide';
                toolbar.style.textAlign = 'right';
                toolbar.style.marginBottom = '12px';
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'print-btn';
                btn.setAttribute('aria-label', 'Télécharger ce cours en PDF');
                btn.textContent = '🖨️ Télécharger en PDF';
                btn.addEventListener('click', () => window.print());
                toolbar.appendChild(btn);
                container.insertBefore(toolbar, container.firstChild);
            }
        } catch (e) {
            console.warn('Injection bouton PDF ignorée:', e);
        }
        
        // Exécuter les scripts après un court délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
            scriptsContent.forEach(scriptData => {
                try {
                    // Pour expressions-courantes, utiliser le nouveau système simplifié
                    // Ne pas utiliser new Function() car cela viole la CSP
                    // Créer un élément script à la place
                    if (scriptData.innerHTML.includes('expressions-courantes') || 
                        scriptData.innerHTML.includes('window.expressionsData')) {
                        console.log('Script expressions-courantes détecté, exécution...');
                        
                        // Créer un élément script pour exécuter le code (compatible CSP)
                        const newScript = document.createElement('script');
                        newScript.textContent = scriptData.innerHTML;
                        document.head.appendChild(newScript);
                        
                        // Attendre que le script soit exécuté
                        setTimeout(() => {
                            // Appeler la fonction d'initialisation simplifiée
                            if (typeof window.initExpressionsCourantes === 'function') {
                                console.log('Appel de initExpressionsCourantes depuis scripts.js');
                                // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
                                requestAnimationFrame(() => {
                                    setTimeout(() => {
                                        window.initExpressionsCourantes();
                                    }, 150);
                                });
                            } else {
                                console.error('initExpressionsCourantes n\'est pas définie!');
                            }
                            
                            // Retirer le script après exécution pour éviter les conflits
                            if (newScript.parentNode) {
                                newScript.parentNode.removeChild(newScript);
                            }
                        }, 50);
                    } else {
                        // Pour les autres scripts, utiliser la méthode normale
                        const newScript = document.createElement('script');
                        scriptData.attributes.forEach(attr => {
                            newScript.setAttribute(attr.name, attr.value);
                        });
                        newScript.appendChild(document.createTextNode(scriptData.innerHTML));
                        document.body.appendChild(newScript);
                        // Retirer le script après exécution pour éviter les conflits
                        setTimeout(() => {
                            if (newScript.parentNode) {
                                newScript.parentNode.removeChild(newScript);
                            }
                        }, 100);
                    }
                } catch (scriptError) {
                    console.error('Erreur lors de l\'exécution d\'un script:', scriptError);
                }
            });
        }, 150);
    } catch (error) {
        console.error('Erreur dans executeScriptsInHTML:', error);
        throw error;
    }
}

function showCourse(courseId, retryCount = 0) {
    const MAX_RETRIES = 2;

    const parentSectionId = courseSectionMap[courseId];
    if (parentSectionId) {
        currentSection = parentSectionId;
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const navBtn = sectionNavMap[parentSectionId] || document.querySelector(`.nav-btn[data-section="${parentSectionId}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
        }
    }

    currentCourse = courseId;

    if (hashUpdateEnabled && retryCount === 0) {
        updateURLHash({ course: courseId });
    }
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });

    // Hide all other courses
    document.querySelectorAll('.course-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });

    // Vérifier si on a un container pour ce cours
    let container = document.getElementById('course-container');
    if (!container) {
        // Créer le container s'il n'existe pas
        container = document.createElement('div');
        container.id = 'course-container';
        container.className = 'course-content active';
        document.querySelector('.container').appendChild(container);
    } else {
        // Nettoyer le container avant de charger
        container.innerHTML = '';
        container.classList.add('active');
        container.style.display = 'block';
    }

    // Afficher un indicateur de chargement
    container.innerHTML = '<div style="text-align: center; padding: 40px;"><p>Chargement du cours...</p></div>';

    // Vérifier le cache d'abord (avec validation)
    if (isCacheValid(courseId)) {
        try {
            const cachedContent = typeof courseCache[courseId] === 'string' 
                ? courseCache[courseId] 
                : courseCache[courseId].html;
            executeScriptsInHTML(cachedContent, container, courseId);
            return;
        } catch (cacheError) {
            console.warn('Erreur avec le cache, rechargement:', cacheError);
            // Supprimer le cache invalide
            delete courseCache[courseId];
        }
    }

    // Déterminer le chemin du fichier
    let coursePath;
    if (courseId.startsWith('exercice-')) {
        coursePath = `exercices/${courseId}.html`;
    } else {
        coursePath = `cours/${courseId}.html`;
    }

    // Charger le cours avec fetch et timeout
    fetchWithTimeout(coursePath, 10000)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            // Vérifier que le HTML n'est pas vide
            if (!html || html.trim().length === 0) {
                throw new Error('Le fichier est vide');
            }
            
            // Mettre en cache avec timestamp
            courseCache[courseId] = {
                html: html,
                timestamp: Date.now()
            };
            
            executeScriptsInHTML(html, container, courseId);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du cours:', error);
            
            // Retry si on n'a pas atteint le maximum
            if (retryCount < MAX_RETRIES) {
                console.log(`Tentative ${retryCount + 1}/${MAX_RETRIES}...`);
                setTimeout(() => {
                    showCourse(courseId, retryCount + 1);
                }, 1000 * (retryCount + 1)); // Délai progressif
                return;
            }
            
            // Afficher l'erreur avec possibilité de réessayer
            container.innerHTML = `
                <button class="back-btn" onclick="backToSection('home')">← Retour à l'accueil</button>
                <div style="text-align: center; padding: 40px;">
                    <h2 style="color: #f44336;">Erreur</h2>
                    <p>Impossible de charger ce cours. Veuillez réessayer.</p>
                    <p style="color: #666; font-size: 0.9em; margin-top: 20px;">Erreur: ${error.message}</p>
                    <button onclick="showCourse('${courseId}', 0)" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em;">
                        🔄 Réessayer
                    </button>
                    <button onclick="clearCourseCache('${courseId}'); showCourse('${courseId}', 0)" style="margin-top: 10px; padding: 10px 20px; background: #ff9800; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em; display: block; margin-left: auto; margin-right: auto;">
                        🗑️ Vider le cache et réessayer
                    </button>
                </div>
            `;
        });
}

// Fonction pour vider le cache d'un cours spécifique ou de tous les cours
function clearCourseCache(courseId = null) {
    if (courseId) {
        delete courseCache[courseId];
        console.log(`Cache vidé pour: ${courseId}`);
    } else {
        Object.keys(courseCache).forEach(key => delete courseCache[key]);
        console.log('Tous les caches ont été vidés');
    }
}

function backToSection(sectionId) {
    const targetSection = sectionId || currentSection || 'home';

    const container = document.getElementById('course-container');
    if (container) {
        container.innerHTML = '';
        container.classList.remove('active');
        container.style.display = 'none';
    }

    hashUpdateEnabled = false;
    showSection(targetSection, null, false);
    hashUpdateEnabled = true;
    updateURLHash({ section: targetSection });
}

// Exercice: Déterminants Possessifs
const detPossAnswers = {
    det_poss_1: 'mon',
    det_poss_2: 'ta',
    det_poss_3: 'ses',
    det_poss_4: 'notre',
    det_poss_5: 'votre',
    det_poss_6: 'leurs',
    det_poss_7: 'mon',
    det_poss_8: 'ton'
};

function checkDetPoss() {
    let correct = 0;
    let total = Object.keys(detPossAnswers).length;

    Object.keys(detPossAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === detPossAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-det-poss');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Excellent travail !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total} - Continue comme ça !`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Continue à pratiquer !`;
    }
}

function resetDetPoss() {
    Object.keys(detPossAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-det-poss').className = 'result';
}

// Exercice: Déterminants Démonstratifs
const detDemoAnswers = {
    det_demo_1: 'ce',
    det_demo_2: 'cette',
    det_demo_3: 'ces',
    det_demo_4: 'cet',
    det_demo_5: 'cette',
    det_demo_6: 'cet',
    det_demo_7: 'ces',
    det_demo_8: 'cet'
};

function checkDetDemo() {
    let correct = 0;
    let total = Object.keys(detDemoAnswers).length;

    Object.keys(detDemoAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === detDemoAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-det-demo');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total}`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise la règle !`;
    }
}

function resetDetDemo() {
    Object.keys(detDemoAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-det-demo').className = 'result';
}

// Exercice: Pronoms Possessifs
const pronPossAnswers = {
    pron_poss_1: 'le mien',
    pron_poss_2: 'les tiennes',
    pron_poss_3: 'la sienne',
    pron_poss_4: 'la nôtre',
    pron_poss_5: 'les vôtres',
    pron_poss_6: 'le leur'
};

function checkPronPoss() {
    let correct = 0;
    let total = Object.keys(pronPossAnswers).length;

    Object.keys(pronPossAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === pronPossAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-pron-poss');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total}`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - N'oublie pas les articles !`;
    }
}

function resetPronPoss() {
    Object.keys(pronPossAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-pron-poss').className = 'result';
}

// Exercice: Passé Composé vs Imparfait
const pcImpAnswers = {
    pc_imp_1: 'faisait',
    pc_imp_2: 'suis parti',
    pc_imp_3: 'étais',
    pc_imp_4: 'avons visité',
    pc_imp_5: 'portait',
    pc_imp_6: 'dormais'
};

function checkPCImp() {
    let correct = 0;
    let total = Object.keys(pcImpAnswers).length;

    Object.keys(pcImpAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === pcImpAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-pc-imp');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Tu maîtrises bien !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise les règles !`;
    }
}

function resetPCImp() {
    Object.keys(pcImpAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-pc-imp').className = 'result';
}

// Exercice: EN et Y
const enYAnswers = {
    eny_1: 'y',
    eny_2: 'en',
    eny_3: 'lui',
    eny_4: 'en',
    eny_5: 'y',
    eny_6: 'en'
};

function checkEnY() {
    let correct = 0;
    let total = Object.keys(enYAnswers).length;

    Object.keys(enYAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === enYAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-eny');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total}`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise EN = DE, Y = À`;
    }
}

function resetEnY() {
    Object.keys(enYAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-eny').className = 'result';
}

// Exercice: COD/COI
const exCODAnswers = {
    ex_cod_1: 'le',
    ex_cod_2: 'leur',
    ex_cod_3: 'le',
    ex_cod_4: 'lui',
    ex_cod_5: 'les',
    ex_cod_6: 'l\'',
    ex_cod_7: 'lui',
    ex_cod_8: 'les',
    ex_cod_9: 'leur',
    ex_cod_10: 'les',
    ex_cod_11: 'te',
    ex_cod_12: 'lui'
};

function checkExCOD() {
    let correct = 0;
    let total = Object.keys(exCODAnswers).length;

    Object.keys(exCODAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase().replace(/'/g, '\'');

        if (answer === exCODAnswers[id] || (id === 'ex_cod_6' && answer === 'le')) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-ex-cod');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Excellent !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Continue !`;
    }
}

function resetExCOD() {
    Object.keys(exCODAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-ex-cod').className = 'result';
}

// Exercice: Pronoms & Déterminants avec traductions
const exTradAnswers = {
    ex_trad_1: 'le',
    ex_trad_2: 'leur',
    ex_trad_3: 'cet',
    ex_trad_4: 'le mien',
    ex_trad_5: 'ma',
    ex_trad_6: 'y',
    ex_trad_7: 'en',
    ex_trad_8: 'ces'
};

function checkExTrad() {
    let correct = 0;
    let total = Object.keys(exTradAnswers).length;

    Object.keys(exTradAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === exTradAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-ex-trad');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Excellent !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Continue !`;
    }
}

function resetExTrad() {
    Object.keys(exTradAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
        // Masquer les explications
        const explanationDiv = document.getElementById('explanation-' + id);
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = '';
        }
    });
    document.getElementById('result-ex-trad').className = 'result';
}

// Exercice: Conjugaison Mixte
const conjAnswers = {
    conj_1: 'a voyagé',
    conj_2: 'faisait',
    conj_3: 'a nagé',
    conj_4: 'était',
    conj_5: 'a',
    conj_6: 'était',
    conj_7: 'allait',
    conj_8: 'aimait',
    conj_9: 'a rencontré',
    conj_10: 'habite',
    conj_11: 'dormais',
    conj_12: 'a sonné',
    conj_13: 'était',
    conj_14: 'voulait',
    conj_15: 'ai dit',
    conj_16: 'avons passé'
};

function checkConj() {
    let correct = 0;
    let total = Object.keys(conjAnswers).length;

    Object.keys(conjAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === conjAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-conj');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Tu maîtrises bien les temps !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total} - Continue comme ça !`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise les règles PC vs IMP !`;
    }
}

function resetConj() {
    Object.keys(conjAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-conj').className = 'result';
}

// Exercice: Pronoms Toniques
const toniquesAnswers = {
    ton_1: 'toi',
    ton_2: 'moi',
    ton_3: 'lui',
    ton_4: 'nous',
    ton_5: 'moi',
    ton_6: 'moi',
    ton_7: 'toi',
    ton_8: 'eux'
};

function checkToniques() {
    let correct = 0;
    let total = Object.keys(toniquesAnswers).length;

    Object.keys(toniquesAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();

        if (answer === toniquesAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-toniques');
    const percentage = (correct / total) * 100;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Tu maîtrises les pronoms toniques !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total}`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise le tableau !`;
    }
}

function resetToniques() {
    Object.keys(toniquesAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-toniques').className = 'result';
}

// Exercice: Subjonctif Présent
const subjonctifAnswers = {
    subj_1: 'sois',
    subj_2: 'vienne',
    subj_3: 'finissiez',
    subj_4: 'fasses',
    subj_5: 'ayons',
    subj_6: 'sache',
    subj_7: 'partes',
    subj_8: 'réussissions',
    subj_9: 'pleuve',
    subj_10: 'alliez'
};

const subjonctifModeAnswers = {
    mode_1: 'viens',
    mode_2: 'sommes',
    mode_3: 'finissiez',
    mode_4: 'puisse',
    mode_5: 'reussira',
    mode_6: 'soient',
    mode_7: 'as',
    mode_8: 'vienne',
    mode_9: 'puissent',
    mode_10: 'faisons',
    mode_11: 'viennes',
    mode_12: 'ait',
    mode_13: 'reussit',
    mode_14: 'soyons',
    mode_15: 'etes',
    mode_16: 'finiront',
    mode_17: 'puisse',
    mode_18: 'feras',
    mode_19: 'avons',
    mode_20: 'soit'
};

function checkSubjonctif() {
    let correct = 0;
    let total = Object.keys(subjonctifAnswers).length;
    
    Object.keys(subjonctifAnswers).forEach(id => {
        const input = document.getElementById(id);
        const answer = input.value.trim().toLowerCase();
        
        if (answer === subjonctifAnswers[id]) {
            input.className = 'answer correct';
            correct++;
        } else {
            input.className = 'answer incorrect';
        }
    });

    const result = document.getElementById('result-subj');
    const percentage = (correct / total) * 100;
    
    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎉 Parfait ! ${correct}/${total} - Tu maîtrises le subjonctif !`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Très bien ! ${correct}/${total} - Continue !`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💪 ${correct}/${total} - Révise les règles du subjonctif !`;
    }
}

function resetSubjonctif() {
    Object.keys(subjonctifAnswers).forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
        input.className = 'answer';
    });
    document.getElementById('result-subj').className = 'result';
}

function checkSubjonctifMode() {
    const result = document.getElementById('result-subj-mode');
    if (!result) return;

    let correct = 0;
    let total = 0;

    Object.entries(subjonctifModeAnswers).forEach(([id, expected]) => {
        const select = document.getElementById(id);
        if (!select) return;

        total++;
        const value = normalizeAnswer(select.value);
        const expectedNormalized = normalizeAnswer(expected);

        if (!value) {
            select.className = 'answer incorrect';
            setSelectFeedback(id, false, expected, select);
            return;
        }

        if (value === expectedNormalized) {
            select.className = 'answer correct';
            correct++;
            setSelectFeedback(id, true, expected, select);
        } else {
            select.className = 'answer incorrect';
            setSelectFeedback(id, false, expected, select);
        }
    });

    const percentage = total > 0 ? (correct / total) * 100 : 0;

    if (percentage === 100) {
        result.className = 'result show success';
        result.textContent = `🎯 Parfait ! ${correct}/${total} réponses justes.`;
    } else if (percentage >= 70) {
        result.className = 'result show partial';
        result.textContent = `👍 Bien joué ! ${correct}/${total}.`;
    } else {
        result.className = 'result show partial';
        result.textContent = `💡 ${correct}/${total} - relis la règle opinion/certitude vs subjonctif.`;
    }
}

function resetSubjonctifMode() {
    Object.keys(subjonctifModeAnswers).forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.value = '';
        select.className = 'answer';
        const feedback = document.getElementById(`${id}-feedback`);
        if (feedback) {
            feedback.textContent = '';
            feedback.className = 'inline-feedback';
            feedback.style.visibility = 'hidden';
        }
    });

    const result = document.getElementById('result-subj-mode');
    if (result) {
        result.className = 'result';
        result.textContent = '';
    }
}

function setSelectFeedback(id, isCorrect, expected, selectEl) {
    const feedback = document.getElementById(`${id}-feedback`);
    if (!feedback) return;

    const explanations = {
        mode_1: "Opinion affirmée → indicatif",
        mode_2: "Certitude → indicatif",
        mode_3: "Doute → subjonctif",
        mode_4: "Possibilité → subjonctif",
        mode_5: "Opinion positive affirmée → indicatif",
        mode_6: "Incertitude → subjonctif",
        mode_7: "Certitude → indicatif",
        mode_8: "Opinion négative → subjonctif",
        mode_9: "Question sur l'opinion → subjonctif",
        mode_10: "Certitude → indicatif",
        mode_11: "Expression de conseil → subjonctif",
        mode_12: "Incertitude → subjonctif",
        mode_13: "Certitude → indicatif",
        mode_14: "Possibilité → subjonctif",
        mode_15: "Opinion affirmée → indicatif",
        mode_16: "Certitude → indicatif",
        mode_17: "Doute → subjonctif",
        mode_18: "Certitude → indicatif",
        mode_19: "Certitude → indicatif",
        mode_20: "Incertitude → subjonctif"
    };

    const expectedLabel = (() => {
        if (!selectEl) return expected;
        const match = Array.from(selectEl.options).find(option => normalizeAnswer(option.value) === normalizeAnswer(expected));
        return match ? match.textContent.trim() : expected;
    })();

    if (isCorrect) {
        feedback.textContent = `✅ ${explanations[id]}`;
        feedback.className = 'inline-feedback good';
        feedback.style.visibility = 'visible';
    } else {
        feedback.textContent = `❌ ${explanations[id]} → forme attendue : ${expectedLabel}`;
        feedback.className = 'inline-feedback bad';
        feedback.style.visibility = 'visible';
    }
}

// Cache pour les objets Audio afin d'éviter de créer plusieurs instances
const audioCache = {};

// Fonction pour jouer les audios des mots de vocabulaire
function playAudio(url) {
    if (!url) return;
    
    // Utiliser le cache si l'audio existe déjà
    if (!audioCache[url]) {
        audioCache[url] = new Audio(url);
        // Précharger l'audio pour éviter les requêtes répétées
        audioCache[url].preload = 'auto';
    }
    
    // Réinitialiser l'audio s'il est déjà en cours de lecture
    const audio = audioCache[url];
    if (audio.currentTime > 0) {
        audio.currentTime = 0;
    }
    
    audio.play().catch(err => {
        console.error('Erreur lecture audio:', err);
    });
}

// ============================================
// MINI-JEUX DE LA PAGE D'ACCUEIL
// ============================================

// Expressions courantes pour l'expression du jour
const expressionsData = [
    {
        fr: "Ça marche",
        en: "Okay, it works, we agree / That's fine with me",
        explanation: "Used to express agreement or acceptance. Common in daily conversations when confirming plans or accepting suggestions."
    },
    {
        fr: "Ça roule",
        en: "Everything is fine, no problem (more relaxed than 'ça marche')",
        explanation: "Very casual expression used among friends. More relaxed than 'ça marche'. Used to say everything is fine or to agree casually."
    },
    {
        fr: "C'est parti",
        en: "Let's go, here we go, we're starting",
        explanation: "Enthusiastic expression used to signal the start of something. Common when beginning an activity, project, or event."
    },
    {
        fr: "Vas-y",
        en: "Encouraging expression used to give permission or encourage someone to proceed. Can mean 'go ahead', 'do it', or 'I'm listening'. Very common in conversations to show you're ready to listen or support someone's action.",
        explanation: "Encouraging expression used to give permission or encourage someone to proceed. Can mean 'go ahead', 'do it', or 'I'm listening'."
    },
    {
        fr: "Allez-y",
        en: "Polite form of 'vas-y' used when speaking to someone you don't know or in formal situations. Uses the 'vous' form to show respect. Essential for proper French politeness when addressing strangers, older people, or in professional contexts.",
        explanation: "Polite form of 'vas-y' used when speaking to someone you don't know or in formal situations. Uses the 'vous' form to show respect. Essential for proper French politeness when addressing strangers, older people, or in professional contexts."
    },
    {
        fr: "Carrément",
        en: "Absolutely, totally, definitely",
        explanation: "Very casual and emphatic way to express strong agreement or to emphasize something. Used among friends and in informal settings."
    },
    {
        fr: "Nickel",
        en: "Perfect, spotless, exactly right",
        explanation: "Casual expression meaning 'perfect' or 'spotless'. Very common in spoken French to express satisfaction or approval."
    },
    {
        fr: "Impeccable",
        en: "Flawless, perfect, excellent",
        explanation: "Standard expression meaning 'flawless' or 'perfect'. Slightly more formal than 'nickel' but still commonly used in daily conversations."
    },
    {
        fr: "Pas de souci",
        en: "No worries, no problem at all",
        explanation: "Very common and friendly way to say 'no problem' or 'no worries'. Used to reassure someone or to accept a request casually."
    },
    {
        fr: "T'inquiète (pas)",
        en: "Don't worry, no stress (short form)",
        explanation: "Very casual shortened form of 'ne t'inquiète pas' (don't worry). Extremely common in spoken French, especially among friends."
    },
    {
        fr: "Laisse tomber",
        en: "Forget it, drop it, never mind",
        explanation: "Casual expression meaning 'forget it' or 'drop it'. Used when you want to abandon a topic, stop worrying about something."
    },
    {
        fr: "Tant pis",
        en: "Too bad, oh well",
        explanation: "Expression of resignation meaning 'too bad' or 'oh well'. Used when accepting a disappointing situation."
    },
    {
        fr: "Tant mieux",
        en: "So much the better, that's good, great",
        explanation: "Positive expression meaning 'so much the better' or 'that's good'. Used to express relief or satisfaction about a positive situation."
    },
    {
        fr: "Ça dépend",
        en: "It depends, depends on the situation",
        explanation: "Common expression meaning 'it depends'. Used when the answer varies according to circumstances."
    },
    {
        fr: "Ça y est",
        en: "That's it, it's done, finally",
        explanation: "Expression of completion meaning 'that's it' or 'it's done'. Can express relief after finishing something."
    },
    {
        fr: "C'est pas mal",
        en: "It's rather good, it's correct, not bad (often a moderate compliment, like a 7/10)",
        explanation: "French understatement for genuine approval: saying 'c'est pas mal' is often like giving a 7/10 — a restrained but positive way to say something is good."
    },
    {
        fr: "Pourquoi pas",
        en: "Why not",
        explanation: "Open and non-committal response meaning 'why not'. Shows openness to an idea without strong enthusiasm."
    },
    {
        fr: "Tranquille",
        en: "Chill, relaxed, calm, easy",
        explanation: "Very versatile casual word meaning 'chill', 'relaxed', or 'easy'. Can describe a person's state, a situation's difficulty level."
    },
    {
        fr: "On verra bien",
        en: "We'll see, time will tell, let's wait and see",
        explanation: "Expression of uncertainty meaning 'we'll see' or 'time will tell'. Used when you're not sure about an outcome."
    },
    {
        fr: "Ça suffit",
        en: "That's enough, stop it",
        explanation: "Firm expression meaning 'that's enough' or 'stop it'. Used to put an end to something, often with authority."
    },
    {
        fr: "Comme tu veux",
        en: "As you wish, whatever you want",
        explanation: "Expression meaning 'as you wish' or 'whatever you want'. Can be genuinely flexible and accommodating, or slightly annoyed depending on tone."
    },
    {
        fr: "Tout à l'heure",
        en: "A little while ago (past) or in a little while (future), always within the same day",
        explanation: "Temporal marker for the same day only: depending on context, can mean a few hours ago or a few hours later, but always within the current day."
    },
    {
        fr: "À tout à l'heure",
        en: "See you soon, see you in a bit",
        explanation: "Standard farewell meaning 'see you later' (same day). Used when you expect to see someone again within a few hours."
    },
    {
        fr: "À plus",
        en: "See you later, bye (casual)",
        explanation: "Very casual shortened form of 'à plus tard' (see you later). Extremely common in text messages and casual spoken French."
    },
    {
        fr: "Volontiers",
        en: "Gladly, with pleasure, I'd be happy to",
        explanation: "Polite and elegant way to accept an offer meaning 'gladly' or 'with pleasure'. More formal than 'avec plaisir' but still warm."
    },
    {
        fr: "En effet",
        en: "Indeed, in fact, that's correct",
        explanation: "Formal expression meaning 'indeed' or 'in fact'. Used to confirm or acknowledge that something is correct."
    },
    {
        fr: "Certes",
        en: "Certainly, it's true (often followed by 'mais')",
        explanation: "Formal concessive word meaning 'certainly' or 'admittedly'. Often followed by 'mais' (but) to acknowledge a point before making a counterargument."
    },
    {
        fr: "Néanmoins",
        en: "Nevertheless, however, nonetheless",
        explanation: "Formal conjunction meaning 'nevertheless' or 'however'. Used to introduce a contrast or contradiction."
    }
];

// Mapping des expressions françaises vers leurs noms de fichiers audio
const expressionToFilename = {
    "Ça marche": "ca_marche",
    "Ça roule": "ca_roule",
    "C'est parti": "cest_parti",
    "Vas-y": "vas_y",
    "Allez-y": "allez_y",
    "Carrément": "carrement",
    "Nickel": "nickel",
    "Impeccable": "impeccable",
    "Pas de souci": "pas_de_souci",
    "T'inquiète (pas)": "t_inquiete",
    "T'inquiète": "t_inquiete",
    "Laisse tomber": "laisse_tomber",
    "Tant pis": "tant_pis",
    "Tant mieux": "tant_mieux",
    "Ça dépend": "ca_depend",
    "Ça y est": "ca_y_est",
    "C'est pas mal": "cest_pas_mal",
    "Pourquoi pas": "pourquoi_pas",
    "Tranquille": "tranquille",
    "On verra bien": "on_verra_bien",
    "Ça suffit": "ca_suffit",
    "Comme tu veux": "comme_tu_veux",
    "Tout à l'heure": "tout_a_lheure",
    "À tout à l'heure": "a_tout_a_lheure",
    "À plus": "a_plus",
    "Volontiers": "volontiers",
    "En effet": "en_effet",
    "Certes": "certes",
    "Néanmoins": "neanmoins"
};

// Fallbacks audio pour les expressions
const audioFallbacks = {
    "ca_marche": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207604/cours-francais/vocabulaire/ca_marche.mp3",
    "ca_roule": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207605/cours-francais/vocabulaire/ca_roule.mp3",
    "cest_parti": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207606/cours-francais/vocabulaire/cest_parti.mp3",
    "vas_y": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207608/cours-francais/vocabulaire/vas_y.mp3",
    "allez_y": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207608/cours-francais/vocabulaire/allez_y.mp3",
    "carrement": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207609/cours-francais/vocabulaire/carrement.mp3",
    "nickel": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207610/cours-francais/vocabulaire/nickel.mp3",
    "impeccable": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207611/cours-francais/vocabulaire/impeccable.mp3",
    "pas_de_souci": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207611/cours-francais/vocabulaire/pas_de_souci.mp3",
    "t_inquiete": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207612/cours-francais/vocabulaire/t_inquiete.mp3",
    "laisse_tomber": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207613/cours-francais/vocabulaire/laisse_tomber.mp3",
    "tant_pis": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207614/cours-francais/vocabulaire/tant_pis.mp3",
    "tant_mieux": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207615/cours-francais/vocabulaire/tant_mieux.mp3",
    "ca_depend": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207616/cours-francais/vocabulaire/ca_depend.mp3",
    "ca_y_est": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207617/cours-francais/vocabulaire/ca_y_est.mp3",
    "cest_pas_mal": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207618/cours-francais/vocabulaire/cest_pas_mal.mp3",
    "pourquoi_pas": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207619/cours-francais/vocabulaire/pourquoi_pas.mp3",
    "tranquille": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207621/cours-francais/vocabulaire/tranquille.mp3",
    "on_verra_bien": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207622/cours-francais/vocabulaire/on_verra_bien.mp3",
    "ca_suffit": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207623/cours-francais/vocabulaire/ca_suffit.mp3",
    "comme_tu_veux": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207623/cours-francais/vocabulaire/comme_tu_veux.mp3",
    "tout_a_lheure": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207625/cours-francais/vocabulaire/tout_a_lheure.mp3",
    "a_tout_a_lheure": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207626/cours-francais/vocabulaire/a_tout_a_lheure.mp3",
    "a_plus": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207627/cours-francais/vocabulaire/a_plus.mp3",
    "volontiers": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207628/cours-francais/vocabulaire/volontiers.mp3",
    "en_effet": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207629/cours-francais/vocabulaire/en_effet.mp3",
    "certes": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207630/cours-francais/vocabulaire/certes.mp3",
    "neanmoins": "https://res.cloudinary.com/da9yduppr/video/upload/v1762207631/cours-francais/vocabulaire/neanmoins.mp3"
};

// Variable globale pour stocker les URLs audio
let audioUrls = {};
let currentExpressionAudioUrl = null;

// Charger les URLs audio (robuste avec fallback de chemins et vérif de type)
// Utilise un cache pour éviter les multiples tentatives
let audioUrlsLoadingPromise = null;
async function loadAudioUrls() {
    // Si déjà chargé globalement, utiliser le cache
    if (window.expressionsAudioUrls && Object.keys(window.expressionsAudioUrls).length > 0) {
        audioUrls = window.expressionsAudioUrls;
        return;
    }
    
    // Si un chargement est déjà en cours, attendre qu'il se termine
    if (audioUrlsLoadingPromise) {
        await audioUrlsLoadingPromise;
        return;
    }
    
    // Créer une promesse de chargement unique
    audioUrlsLoadingPromise = (async () => {
        // Limiter à 2 tentatives seulement pour éviter trop de requêtes
        const candidates = [
            'audio_urls.json',
            '/audio_urls.json'
        ];
        let loaded = false;
        for (const url of candidates) {
            try {
                // Utiliser le cache du navigateur au lieu de 'no-store' pour réduire les requêtes
                const response = await fetch(url, { 
                    cache: 'default',
                    // Ajouter un timeout pour éviter les requêtes qui traînent
                    signal: AbortSignal.timeout(5000)
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error(`Type de contenu inattendu: ${contentType || 'inconnu'}`);
                }
                const data = await response.json();
                if (data && typeof data === 'object') {
                    audioUrls = data;
                    loaded = true;
                    break;
                }
            } catch (err) {
                // Ne pas logger les erreurs 404 ou timeout pour éviter le spam dans la console
                if (!err.message || (!err.message.includes('404') && !err.message.includes('timeout') && !err.message.includes('aborted'))) {
                    console.warn(`Chargement audio_urls.json échoué via ${url}:`, err.message || err);
                }
                continue;
            }
        }
        if (!loaded) {
            // Utiliser uniquement les fallbacks Cloudinary
            audioUrls = {};
        }
        // Compléter avec les fallbacks (priorité aux URLs locales si présentes)
        audioUrls = { ...audioFallbacks, ...audioUrls };
        // Exposer globalement pour réutilisation entre pages/courses
        window.expressionsAudioUrls = audioUrls;
        audioUrlsLoadingPromise = null; // Réinitialiser la promesse
    })();
    
    await audioUrlsLoadingPromise;
}

// Obtenir l'URL audio pour une expression
function getAudioUrl(expression) {
    const filename = expressionToFilename[expression];
    if (!filename) return null;
    
    const audioData = audioUrls[filename];
    if (!audioData) return null;
    
    return typeof audioData === 'string' ? audioData : audioData.url;
}

// Fonction pour jouer l'audio de l'expression du jour
function playExpressionAudio() {
    if (currentExpressionAudioUrl) {
        playAudio(currentExpressionAudioUrl);
    }
}

// Expression du jour - avec localStorage
async function initExpressionOfTheDay() {
    // Utiliser requestAnimationFrame pour s'assurer que le DOM est rendu
    return new Promise((resolve) => {
        requestAnimationFrame(async () => {
            console.log('initExpressionOfTheDay appelé');
            
            // Vérifier que les éléments existent avec plusieurs tentatives
            let frElement = document.getElementById('expression-fr');
            let enElement = document.getElementById('expression-en');
            let explanationElement = document.getElementById('expression-explanation');
            
            if (!frElement || !enElement || !explanationElement) {
                // Limiter les tentatives pour éviter les boucles infinies
                if (expressionInitAttempts >= MAX_EXPRESSION_INIT_ATTEMPTS) {
                    console.error('Nombre maximum de tentatives atteint pour initExpressionOfTheDay');
                    resolve();
                    return;
                }
                expressionInitAttempts++;
                console.warn(`Éléments de l'expression du jour non trouvés, tentative ${expressionInitAttempts}/${MAX_EXPRESSION_INIT_ATTEMPTS}...`, {
                    frElement: !!frElement,
                    enElement: !!enElement,
                    explanationElement: !!explanationElement
                });
                // Nettoyer le timeout précédent s'il existe
                if (expressionInitTimeout) {
                    clearTimeout(expressionInitTimeout);
                }
                expressionInitTimeout = setTimeout(() => {
                    expressionInitTimeout = null;
                    initExpressionOfTheDay().then(resolve);
                }, 200);
                return;
            }
            
            try {
                await initExpressionOfTheDayInternal(frElement, enElement, explanationElement);
                resolve();
            } catch (error) {
                console.error('Erreur dans initExpressionOfTheDay:', error);
                // Réessayer une fois en cas d'erreur
                if (expressionInitAttempts < MAX_EXPRESSION_INIT_ATTEMPTS) {
                    expressionInitAttempts++;
                    if (expressionInitTimeout) {
                        clearTimeout(expressionInitTimeout);
                    }
                    expressionInitTimeout = setTimeout(() => {
                        expressionInitTimeout = null;
                        initExpressionOfTheDay().then(resolve);
                    }, 300);
                } else {
                    resolve();
                }
            }
        });
    });
}

// Fonction pour forcer l'affichage de l'expression du jour
function forceInitExpressionOfTheDay() {
    const frElement = document.getElementById('expression-fr');
    const enElement = document.getElementById('expression-en');
    const explanationElement = document.getElementById('expression-explanation');
    
    // Vérifier si les éléments existent mais sont vides
    if (frElement && enElement && explanationElement) {
        const isEmpty = (!frElement.textContent || frElement.textContent.trim() === '') &&
                       (!enElement.textContent || enElement.textContent.trim() === '');
        
        if (isEmpty) {
            console.log('Forçage de l\'affichage de l\'expression du jour');
            // Réinitialiser les tentatives pour permettre un nouveau cycle
            expressionInitAttempts = 0;
            initExpressionOfTheDay();
        }
    } else if (!frElement || !enElement || !explanationElement) {
        // Les éléments n'existent pas encore, réessayer
        if (expressionInitAttempts < MAX_EXPRESSION_INIT_ATTEMPTS) {
            setTimeout(forceInitExpressionOfTheDay, 100);
        }
    }
}

// Exposer la fonction globalement
window.forceInitExpressionOfTheDay = forceInitExpressionOfTheDay;

// Fonction interne pour l'initialisation de l'expression
async function initExpressionOfTheDayInternal(frElement, enElement, explanationElement) {
    
    // Vérifier que expressionsData est défini et non vide AVANT de charger les audio
    // Utiliser window.expressionsData si expressionsData global n'est pas défini
    let dataSource = window.expressionsData || expressionsData;
    
    // Si les données ne sont pas disponibles, attendre un peu et réessayer
    if (!dataSource || !Array.isArray(dataSource) || dataSource.length === 0) {
        console.warn('expressionsData non disponible, attente de 200ms...', {
            windowExpressionsData: window.expressionsData ? window.expressionsData.length : 'undefined',
            expressionsData: expressionsData ? expressionsData.length : 'undefined'
        });
        
        // Attendre un peu et réessayer une fois
        await new Promise(resolve => setTimeout(resolve, 200));
        dataSource = window.expressionsData || expressionsData;
        
        if (!dataSource || !Array.isArray(dataSource) || dataSource.length === 0) {
            console.error('expressionsData toujours non disponible après attente');
            // Afficher un message de fallback pour éviter l'encart blanc
            if (frElement) frElement.textContent = 'Chargement...';
            if (enElement) enElement.textContent = 'Loading...';
            if (explanationElement) explanationElement.textContent = 'Les expressions sont en cours de chargement.';
            return;
        }
    }
    
    // Charger les URLs audio si ce n'est pas déjà fait (non bloquant)
    try {
        // Préférer le cache global si disponible
        if (window.expressionsAudioUrls && Object.keys(window.expressionsAudioUrls).length > 0) {
            audioUrls = window.expressionsAudioUrls;
        } else {
            await loadAudioUrls();
        }
    } catch (error) {
        console.warn('Erreur lors du chargement des URLs audio, continuons quand même:', error);
    }
    
    const today = new Date().toDateString();
    const storageKey = `expressionOfTheDay_${today}`;
    
    let expressionData = localStorage.getItem(storageKey);
    
    if (!expressionData) {
        // Utiliser la source de données disponible (window.expressionsData ou expressionsData)
        const dataSource = window.expressionsData || expressionsData;
        
        // Sélectionner une expression aléatoire
        const randomIndex = Math.floor(Math.random() * dataSource.length);
        const selectedExpression = dataSource[randomIndex];
        
        if (!selectedExpression || !selectedExpression.fr) {
            console.error('Expression sélectionnée invalide:', selectedExpression);
            return;
        }
        
        // Sauvegarder dans localStorage
        localStorage.setItem(storageKey, JSON.stringify({
            expression: selectedExpression,
            date: today
        }));
        
        expressionData = localStorage.getItem(storageKey);
    }
    
    try {
        const data = JSON.parse(expressionData);
        const expression = data.expression;
        
        if (!expression || !expression.fr) {
            console.error('Données d\'expression invalides:', expression);
            return;
        }
        
        console.log('Affichage de l\'expression:', expression.fr);
        
        // Vérifier à nouveau que les éléments existent avant de les modifier
        // (ils peuvent avoir été supprimés ou modifiés pendant le traitement)
        frElement = document.getElementById('expression-fr');
        enElement = document.getElementById('expression-en');
        explanationElement = document.getElementById('expression-explanation');
        
        if (!frElement || !enElement || !explanationElement) {
            console.error('Éléments DOM perdus pendant le traitement');
            return;
        }
        
        if (frElement) {
            frElement.textContent = expression.fr || '';
            // Forcer le reflow pour s'assurer que le texte est rendu
            frElement.offsetHeight;
            // Vérifier que le texte a bien été défini
            if (!frElement.textContent || frElement.textContent.trim() === '') {
                console.warn('Le texte FR est vide après assignation');
                frElement.textContent = expression.fr || 'Expression française';
            }
            console.log('Texte FR défini:', frElement.textContent);
        } else {
            console.error('Élément expression-fr non trouvé au moment de l\'affichage');
        }
        
        if (enElement) {
            const enText = expression.en ? `🇬🇧 ${expression.en}` : '';
            enElement.textContent = enText;
            // Forcer le reflow
            enElement.offsetHeight;
            // Vérifier que le texte a bien été défini
            if (!enElement.textContent || enElement.textContent.trim() === '') {
                console.warn('Le texte EN est vide après assignation');
                enElement.textContent = expression.en ? `🇬🇧 ${expression.en}` : '🇬🇧 English translation';
            }
            console.log('Texte EN défini:', enElement.textContent);
        } else {
            console.error('Élément expression-en non trouvé au moment de l\'affichage');
        }
        
        if (explanationElement) {
            explanationElement.textContent = expression.explanation || '';
            // Forcer le reflow
            explanationElement.offsetHeight;
            // Vérifier que le texte a bien été défini
            if (!explanationElement.textContent || explanationElement.textContent.trim() === '') {
                console.warn('L\'explication est vide après assignation');
                explanationElement.textContent = expression.explanation || 'Context and usage explanation.';
            }
            console.log('Explication définie:', explanationElement.textContent.substring(0, 50) + '...');
        } else {
            console.error('Élément expression-explanation non trouvé au moment de l\'affichage');
        }
        
        // Marquer comme initialisé
        expressionInitialized = true;
        
        // Gérer le bouton audio
        const audioBtn = document.getElementById('expression-audio-btn');
        const audioUrl = getAudioUrl(expression.fr);
        currentExpressionAudioUrl = audioUrl;
        
        if (audioBtn) {
            if (audioUrl) {
                audioBtn.style.display = 'flex';
            } else {
                audioBtn.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('Erreur lors du parsing de l\'expression:', error);
        // Réessayer une fois en cas d'erreur, mais seulement si on n'a pas dépassé la limite
        if (expressionInitAttempts < MAX_EXPRESSION_INIT_ATTEMPTS) {
            expressionInitAttempts++;
            // Nettoyer le timeout précédent s'il existe
            if (expressionInitTimeout) {
                clearTimeout(expressionInitTimeout);
            }
            expressionInitTimeout = setTimeout(() => {
                expressionInitTimeout = null;
                initExpressionOfTheDay();
            }, 300);
        } else {
            console.error('Nombre maximum de tentatives atteint, arrêt des réessais');
        }
    }
}


// Conjugaisons complètes pour le jeu
const conjugaisons = {
    "être": {
        "présent": {
            "je": { 
                reponse: "suis", 
                explication: "Verbe être au présent : je suis. Le verbe être est irrégulier au présent." 
            },
            "tu": { 
                reponse: "es", 
                explication: "Verbe être au présent : tu es. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "est", 
                explication: "Verbe être au présent : il/elle est. Forme irrégulière." 
            },
            "nous": { 
                reponse: "sommes", 
                explication: "Verbe être au présent : nous sommes. Forme irrégulière." 
            },
            "vous": { 
                reponse: "êtes", 
                explication: "Verbe être au présent : vous êtes. Forme irrégulière." 
            },
            "ils": { 
                reponse: "sont", 
                explication: "Verbe être au présent : ils/elles sont. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai été", 
                explication: "Passé composé avec auxiliaire avoir : j'ai été. Le participe passé du verbe être est 'été'." 
            },
            "tu": { 
                reponse: "as été", 
                explication: "Passé composé : tu as été. Auxiliaire avoir + participe passé 'été'." 
            },
            "il/elle": { 
                reponse: "a été", 
                explication: "Passé composé : il/elle a été. Auxiliaire avoir + participe passé 'été'." 
            },
            "nous": { 
                reponse: "avons été", 
                explication: "Passé composé : nous avons été. Auxiliaire avoir + participe passé 'été'." 
            },
            "vous": { 
                reponse: "avez été", 
                explication: "Passé composé : vous avez été. Auxiliaire avoir + participe passé 'été'." 
            },
            "ils": { 
                reponse: "ont été", 
                explication: "Passé composé : ils/elles ont été. Auxiliaire avoir + participe passé 'été'." 
            }
        }
    },
    "avoir": {
        "présent": {
            "je": { 
                reponse: "ai", 
                explication: "Verbe avoir au présent : j'ai. Le verbe avoir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "as", 
                explication: "Verbe avoir au présent : tu as. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "a", 
                explication: "Verbe avoir au présent : il/elle a. Forme irrégulière." 
            },
            "nous": { 
                reponse: "avons", 
                explication: "Verbe avoir au présent : nous avons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "avez", 
                explication: "Verbe avoir au présent : vous avez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "ont", 
                explication: "Verbe avoir au présent : ils/elles ont. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai eu", 
                explication: "Passé composé avec auxiliaire avoir : j'ai eu. Le participe passé du verbe avoir est 'eu'." 
            },
            "tu": { 
                reponse: "as eu", 
                explication: "Passé composé : tu as eu. Auxiliaire avoir + participe passé 'eu'." 
            },
            "il/elle": { 
                reponse: "a eu", 
                explication: "Passé composé : il/elle a eu. Auxiliaire avoir + participe passé 'eu'." 
            },
            "nous": { 
                reponse: "avons eu", 
                explication: "Passé composé : nous avons eu. Auxiliaire avoir + participe passé 'eu'." 
            },
            "vous": { 
                reponse: "avez eu", 
                explication: "Passé composé : vous avez eu. Auxiliaire avoir + participe passé 'eu'." 
            },
            "ils": { 
                reponse: "ont eu", 
                explication: "Passé composé : ils/elles ont eu. Auxiliaire avoir + participe passé 'eu'." 
            }
        }
    },
    "aller": {
        "présent": {
            "je": { 
                reponse: "vais", 
                explication: "Verbe aller au présent : je vais. Le verbe aller est irrégulier au présent." 
            },
            "tu": { 
                reponse: "vas", 
                explication: "Verbe aller au présent : tu vas. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "va", 
                explication: "Verbe aller au présent : il/elle va. Forme irrégulière." 
            },
            "nous": { 
                reponse: "allons", 
                explication: "Verbe aller au présent : nous allons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "allez", 
                explication: "Verbe aller au présent : vous allez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "vont", 
                explication: "Verbe aller au présent : ils/elles vont. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "suis allé", 
                explication: "Passé composé avec auxiliaire être : je suis allé(e). Le participe passé du verbe aller est 'allé' et s'accorde avec le sujet." 
            },
            "tu": { 
                reponse: "es allé", 
                explication: "Passé composé : tu es allé(e). Auxiliaire être + participe passé 'allé' (accord avec le sujet)." 
            },
            "il/elle": { 
                reponse: "est allé", 
                explication: "Passé composé : il est allé / elle est allée. Auxiliaire être + participe passé 'allé' (accord avec le sujet)." 
            },
            "nous": { 
                reponse: "sommes allés", 
                explication: "Passé composé : nous sommes allé(e)s. Auxiliaire être + participe passé 'allé' (accord avec le sujet)." 
            },
            "vous": { 
                reponse: "êtes allés", 
                explication: "Passé composé : vous êtes allé(e)s. Auxiliaire être + participe passé 'allé' (accord avec le sujet)." 
            },
            "ils": { 
                reponse: "sont allés", 
                explication: "Passé composé : ils sont allés. Auxiliaire être + participe passé 'allé' (accord avec le sujet masculin pluriel)." 
            }
        }
    },
    "faire": {
        "présent": {
            "je": { 
                reponse: "fais", 
                explication: "Verbe faire au présent : je fais. Le verbe faire est irrégulier au présent." 
            },
            "tu": { 
                reponse: "fais", 
                explication: "Verbe faire au présent : tu fais. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "fait", 
                explication: "Verbe faire au présent : il/elle fait. Forme irrégulière." 
            },
            "nous": { 
                reponse: "faisons", 
                explication: "Verbe faire au présent : nous faisons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "faites", 
                explication: "Verbe faire au présent : vous faites. Forme irrégulière." 
            },
            "ils": { 
                reponse: "font", 
                explication: "Verbe faire au présent : ils/elles font. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai fait", 
                explication: "Passé composé avec auxiliaire avoir : j'ai fait. Le participe passé de faire est 'fait'." 
            },
            "tu": { 
                reponse: "as fait", 
                explication: "Passé composé : tu as fait. Auxiliaire avoir + participe passé 'fait'." 
            },
            "il/elle": { 
                reponse: "a fait", 
                explication: "Passé composé : il/elle a fait. Auxiliaire avoir + participe passé 'fait'." 
            },
            "nous": { 
                reponse: "avons fait", 
                explication: "Passé composé : nous avons fait. Auxiliaire avoir + participe passé 'fait'." 
            },
            "vous": { 
                reponse: "avez fait", 
                explication: "Passé composé : vous avez fait. Auxiliaire avoir + participe passé 'fait'." 
            },
            "ils": { 
                reponse: "ont fait", 
                explication: "Passé composé : ils/elles ont fait. Auxiliaire avoir + participe passé 'fait'." 
            }
        }
    },
    "pouvoir": {
        "présent": {
            "je": { 
                reponse: "peux", 
                explication: "Verbe pouvoir au présent : je peux (ou je puis). Le verbe pouvoir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "peux", 
                explication: "Verbe pouvoir au présent : tu peux. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "peut", 
                explication: "Verbe pouvoir au présent : il/elle peut. Forme irrégulière." 
            },
            "nous": { 
                reponse: "pouvons", 
                explication: "Verbe pouvoir au présent : nous pouvons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "pouvez", 
                explication: "Verbe pouvoir au présent : vous pouvez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "peuvent", 
                explication: "Verbe pouvoir au présent : ils/elles peuvent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai pu", 
                explication: "Passé composé avec auxiliaire avoir : j'ai pu. Le participe passé de pouvoir est 'pu'." 
            },
            "tu": { 
                reponse: "as pu", 
                explication: "Passé composé : tu as pu. Auxiliaire avoir + participe passé 'pu'." 
            },
            "il/elle": { 
                reponse: "a pu", 
                explication: "Passé composé : il/elle a pu. Auxiliaire avoir + participe passé 'pu'." 
            },
            "nous": { 
                reponse: "avons pu", 
                explication: "Passé composé : nous avons pu. Auxiliaire avoir + participe passé 'pu'." 
            },
            "vous": { 
                reponse: "avez pu", 
                explication: "Passé composé : vous avez pu. Auxiliaire avoir + participe passé 'pu'." 
            },
            "ils": { 
                reponse: "ont pu", 
                explication: "Passé composé : ils/elles ont pu. Auxiliaire avoir + participe passé 'pu'." 
            }
        }
    },
    "vouloir": {
        "présent": {
            "je": { 
                reponse: "veux", 
                explication: "Verbe vouloir au présent : je veux. Le verbe vouloir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "veux", 
                explication: "Verbe vouloir au présent : tu veux. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "veut", 
                explication: "Verbe vouloir au présent : il/elle veut. Forme irrégulière." 
            },
            "nous": { 
                reponse: "voulons", 
                explication: "Verbe vouloir au présent : nous voulons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "voulez", 
                explication: "Verbe vouloir au présent : vous voulez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "veulent", 
                explication: "Verbe vouloir au présent : ils/elles veulent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai voulu", 
                explication: "Passé composé avec auxiliaire avoir : j'ai voulu. Le participe passé de vouloir est 'voulu'." 
            },
            "tu": { 
                reponse: "as voulu", 
                explication: "Passé composé : tu as voulu. Auxiliaire avoir + participe passé 'voulu'." 
            },
            "il/elle": { 
                reponse: "a voulu", 
                explication: "Passé composé : il/elle a voulu. Auxiliaire avoir + participe passé 'voulu'." 
            },
            "nous": { 
                reponse: "avons voulu", 
                explication: "Passé composé : nous avons voulu. Auxiliaire avoir + participe passé 'voulu'." 
            },
            "vous": { 
                reponse: "avez voulu", 
                explication: "Passé composé : vous avez voulu. Auxiliaire avoir + participe passé 'voulu'." 
            },
            "ils": { 
                reponse: "ont voulu", 
                explication: "Passé composé : ils/elles ont voulu. Auxiliaire avoir + participe passé 'voulu'." 
            }
        }
    },
    "devoir": {
        "présent": {
            "je": { 
                reponse: "dois", 
                explication: "Verbe devoir au présent : je dois. Le verbe devoir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "dois", 
                explication: "Verbe devoir au présent : tu dois. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "doit", 
                explication: "Verbe devoir au présent : il/elle doit. Forme irrégulière." 
            },
            "nous": { 
                reponse: "devons", 
                explication: "Verbe devoir au présent : nous devons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "devez", 
                explication: "Verbe devoir au présent : vous devez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "doivent", 
                explication: "Verbe devoir au présent : ils/elles doivent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai dû", 
                explication: "Passé composé avec auxiliaire avoir : j'ai dû. Le participe passé de devoir est 'dû' (avec accent circonflexe)." 
            },
            "tu": { 
                reponse: "as dû", 
                explication: "Passé composé : tu as dû. Auxiliaire avoir + participe passé 'dû' (avec accent circonflexe)." 
            },
            "il/elle": { 
                reponse: "a dû", 
                explication: "Passé composé : il/elle a dû. Auxiliaire avoir + participe passé 'dû' (avec accent circonflexe)." 
            },
            "nous": { 
                reponse: "avons dû", 
                explication: "Passé composé : nous avons dû. Auxiliaire avoir + participe passé 'dû' (avec accent circonflexe)." 
            },
            "vous": { 
                reponse: "avez dû", 
                explication: "Passé composé : vous avez dû. Auxiliaire avoir + participe passé 'dû' (avec accent circonflexe)." 
            },
            "ils": { 
                reponse: "ont dû", 
                explication: "Passé composé : ils/elles ont dû. Auxiliaire avoir + participe passé 'dû' (avec accent circonflexe)." 
            }
        }
    },
    "savoir": {
        "présent": {
            "je": { 
                reponse: "sais", 
                explication: "Verbe savoir au présent : je sais. Le verbe savoir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "sais", 
                explication: "Verbe savoir au présent : tu sais. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "sait", 
                explication: "Verbe savoir au présent : il/elle sait. Forme irrégulière." 
            },
            "nous": { 
                reponse: "savons", 
                explication: "Verbe savoir au présent : nous savons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "savez", 
                explication: "Verbe savoir au présent : vous savez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "savent", 
                explication: "Verbe savoir au présent : ils/elles savent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai su", 
                explication: "Passé composé avec auxiliaire avoir : j'ai su. Le participe passé de savoir est 'su'." 
            },
            "tu": { 
                reponse: "as su", 
                explication: "Passé composé : tu as su. Auxiliaire avoir + participe passé 'su'." 
            },
            "il/elle": { 
                reponse: "a su", 
                explication: "Passé composé : il/elle a su. Auxiliaire avoir + participe passé 'su'." 
            },
            "nous": { 
                reponse: "avons su", 
                explication: "Passé composé : nous avons su. Auxiliaire avoir + participe passé 'su'." 
            },
            "vous": { 
                reponse: "avez su", 
                explication: "Passé composé : vous avez su. Auxiliaire avoir + participe passé 'su'." 
            },
            "ils": { 
                reponse: "ont su", 
                explication: "Passé composé : ils/elles ont su. Auxiliaire avoir + participe passé 'su'." 
            }
        }
    },
    "venir": {
        "présent": {
            "je": { 
                reponse: "viens", 
                explication: "Verbe venir au présent : je viens. Le verbe venir est irrégulier au présent." 
            },
            "tu": { 
                reponse: "viens", 
                explication: "Verbe venir au présent : tu viens. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "vient", 
                explication: "Verbe venir au présent : il/elle vient. Forme irrégulière." 
            },
            "nous": { 
                reponse: "venons", 
                explication: "Verbe venir au présent : nous venons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "venez", 
                explication: "Verbe venir au présent : vous venez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "viennent", 
                explication: "Verbe venir au présent : ils/elles viennent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "suis venu", 
                explication: "Passé composé avec auxiliaire être : je suis venu(e). Le participe passé de venir est 'venu' et s'accorde avec le sujet." 
            },
            "tu": { 
                reponse: "es venu", 
                explication: "Passé composé : tu es venu(e). Auxiliaire être + participe passé 'venu' (accord avec le sujet)." 
            },
            "il/elle": { 
                reponse: "est venu", 
                explication: "Passé composé : il est venu / elle est venue. Auxiliaire être + participe passé 'venu' (accord avec le sujet)." 
            },
            "nous": { 
                reponse: "sommes venus", 
                explication: "Passé composé : nous sommes venu(e)s. Auxiliaire être + participe passé 'venu' (accord avec le sujet)." 
            },
            "vous": { 
                reponse: "êtes venus", 
                explication: "Passé composé : vous êtes venu(e)s. Auxiliaire être + participe passé 'venu' (accord avec le sujet)." 
            },
            "ils": { 
                reponse: "sont venus", 
                explication: "Passé composé : ils sont venus / elles sont venues. Auxiliaire être + participe passé 'venu' (accord avec le sujet)." 
            }
        }
    },
    "prendre": {
        "présent": {
            "je": { 
                reponse: "prends", 
                explication: "Verbe prendre au présent : je prends. Le verbe prendre est irrégulier au présent." 
            },
            "tu": { 
                reponse: "prends", 
                explication: "Verbe prendre au présent : tu prends. Forme irrégulière." 
            },
            "il/elle": { 
                reponse: "prend", 
                explication: "Verbe prendre au présent : il/elle prend. Forme irrégulière." 
            },
            "nous": { 
                reponse: "prenons", 
                explication: "Verbe prendre au présent : nous prenons. Forme irrégulière." 
            },
            "vous": { 
                reponse: "prenez", 
                explication: "Verbe prendre au présent : vous prenez. Forme irrégulière." 
            },
            "ils": { 
                reponse: "prennent", 
                explication: "Verbe prendre au présent : ils/elles prennent. Forme irrégulière." 
            }
        },
        "passé composé": {
            "je": { 
                reponse: "ai pris", 
                explication: "Passé composé avec auxiliaire avoir : j'ai pris. Le participe passé de prendre est 'pris'." 
            },
            "tu": { 
                reponse: "as pris", 
                explication: "Passé composé : tu as pris. Auxiliaire avoir + participe passé 'pris'." 
            },
            "il/elle": { 
                reponse: "a pris", 
                explication: "Passé composé : il/elle a pris. Auxiliaire avoir + participe passé 'pris'." 
            },
            "nous": { 
                reponse: "avons pris", 
                explication: "Passé composé : nous avons pris. Auxiliaire avoir + participe passé 'pris'." 
            },
            "vous": { 
                reponse: "avez pris", 
                explication: "Passé composé : vous avez pris. Auxiliaire avoir + participe passé 'pris'." 
            },
            "ils": { 
                reponse: "ont pris", 
                explication: "Passé composé : ils/elles ont pris. Auxiliaire avoir + participe passé 'pris'." 
            }
        }
    }
};

// Variables globales pour le jeu de conjugaison
let currentConjugation = null;
let conjugationTimer = null;
let conjugationTimerInterval = null;
let conjugationQuestionCount = 0;
let conjugationTimeLeft = 20;

// Jeu de conjugaison rapide
function initConjugationGame() {
    conjugationQuestionCount = 0;
    
    // Arrêter le timer s'il est en cours (IMPORTANT: éviter les fuites)
    if (conjugationTimerInterval) {
        clearInterval(conjugationTimerInterval);
        conjugationTimerInterval = null;
    }
    
    // Réinitialiser le temps restant
    conjugationTimeLeft = 20;
    
    nextConjugation();
    
    // Permettre la validation avec Enter (supprimer les anciens listeners)
    const answerInput = document.getElementById('conjugation-answer');
    if (answerInput) {
        // Cloner et remplacer pour supprimer les anciens listeners
        const newInput = answerInput.cloneNode(true);
        answerInput.parentNode.replaceChild(newInput, answerInput);
        
        newInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !newInput.disabled) {
                validateConjugation();
            }
        });
    }
}

function nextConjugation() {
    // Réinitialiser l'état
    const resultDiv = document.getElementById('conjugation-result');
    const timerDiv = document.getElementById('conjugation-timer');
    const answerDisplayDiv = document.getElementById('conjugation-answer-display');
    const questionDiv = document.getElementById('conjugation-question');
    const answerInput = document.getElementById('conjugation-answer');
    const validateBtn = document.getElementById('conjugation-validate');
    
    if (resultDiv) resultDiv.style.display = 'none';
    if (answerDisplayDiv) answerDisplayDiv.style.display = 'none';
    if (answerInput) {
        answerInput.value = '';
        answerInput.disabled = false;
    }
    if (validateBtn) validateBtn.disabled = false;
    
    // Arrêter le timer s'il est en cours
    if (conjugationTimerInterval) {
        clearInterval(conjugationTimerInterval);
        conjugationTimerInterval = null;
    }
    
    // Sélectionner un verbe, un temps et une personne aléatoires
    const verbes = Object.keys(conjugaisons);
    const temps = ["présent", "passé composé"];
    const personnes = ["je", "tu", "il/elle", "nous", "vous", "ils"];
    
    const verbe = verbes[Math.floor(Math.random() * verbes.length)];
    const tempsChoisi = temps[Math.floor(Math.random() * temps.length)];
    const personne = personnes[Math.floor(Math.random() * personnes.length)];
    
    currentConjugation = {
        verbe: verbe,
        temps: tempsChoisi,
        personne: personne,
        data: conjugaisons[verbe][tempsChoisi][personne]
    };
    
    // Afficher la question - utiliser "je/j'" pour éviter les incohérences avec "avoir"
    let displayPersonne = personne;
    
    // Pour le verbe "avoir" avec "je", afficher "je/j'" pour éviter "JE AI"
    if (verbe === "avoir" && personne === "je") {
        displayPersonne = "je/j'";
    } else {
        // Capitaliser la première lettre de la personne
        displayPersonne = displayPersonne.charAt(0).toUpperCase() + displayPersonne.slice(1);
    }
    
    // Afficher la question
    if (questionDiv) {
        questionDiv.textContent = `${verbe.toUpperCase()} - ${tempsChoisi.charAt(0).toUpperCase() + tempsChoisi.slice(1)} - ${displayPersonne}`;
    }
    
    // Incrémenter le compteur de questions
    conjugationQuestionCount++;
    
    // Afficher le timer seulement à partir de la deuxième question
    if (conjugationQuestionCount > 1) {
        if (timerDiv) {
            timerDiv.style.display = 'block';
            conjugationTimeLeft = 20;
            updateTimerDisplay();
            startConjugationTimer();
        }
    } else {
        if (timerDiv) timerDiv.style.display = 'none';
    }
    
    // Focus sur l'input
    if (answerInput) answerInput.focus();
}

function startConjugationTimer() {
    conjugationTimerInterval = setInterval(() => {
        conjugationTimeLeft--;
        updateTimerDisplay();
        
        if (conjugationTimeLeft <= 0) {
            clearInterval(conjugationTimerInterval);
            conjugationTimerInterval = null;
            // Temps écoulé, valider automatiquement avec réponse vide
            validateConjugation(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerDiv = document.getElementById('conjugation-timer');
    if (!timerDiv) return;
    
    timerDiv.textContent = `⏱️ ${conjugationTimeLeft}s`;
    
    // Changer la couleur si < 3 secondes
    if (conjugationTimeLeft < 3) {
        timerDiv.classList.add('warning');
    } else {
        timerDiv.classList.remove('warning');
    }
}

function validateConjugation(timeout = false) {
    // Arrêter le timer
    if (conjugationTimerInterval) {
        clearInterval(conjugationTimerInterval);
        conjugationTimerInterval = null;
    }
    
    const answerInput = document.getElementById('conjugation-answer');
    const resultDiv = document.getElementById('conjugation-result');
    const resultExplanation = document.getElementById('conjugation-result-explanation');
    const validateBtn = document.getElementById('conjugation-validate');
    
    if (!answerInput || !resultDiv || !resultExplanation || !currentConjugation) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentConjugation.data.reponse.toLowerCase();
    
    // Désactiver l'input et le bouton
    answerInput.disabled = true;
    if (validateBtn) validateBtn.disabled = true;
    
    // Vérifier la réponse (tolérer les accents et espaces)
    const normalizedUserAnswer = userAnswer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedCorrectAnswer = correctAnswer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Supprimer les pronoms sujets courants au début de la réponse de l'utilisateur
    // pour accepter "vous avez voulu" comme "avez voulu"
    const pronouns = ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'on'];
    let cleanedUserAnswer = normalizedUserAnswer;
    for (const pronoun of pronouns) {
        const regex = new RegExp(`^${pronoun}\\s+`, 'i');
        if (regex.test(cleanedUserAnswer)) {
            cleanedUserAnswer = cleanedUserAnswer.replace(regex, '').trim();
            break;
        }
    }
    
    // Si timeout, la réponse est toujours incorrecte
    let isCorrect = false;
    if (!timeout) {
        // Accepter la réponse exacte OU la réponse sans pronom
        isCorrect = normalizedUserAnswer === normalizedCorrectAnswer || 
                   userAnswer === correctAnswer ||
                   cleanedUserAnswer === normalizedCorrectAnswer ||
                   cleanedUserAnswer === correctAnswer;
    }
    
    // Cacher le timer
    const timerDiv = document.getElementById('conjugation-timer');
    if (timerDiv) timerDiv.style.display = 'none';
    
    // Formater la bonne réponse avec l'apostrophe si nécessaire pour "je"
    let formattedAnswer = currentConjugation.data.reponse;
    if (currentConjugation.personne === 'je') {
        // Cas où on doit utiliser "j'" au lieu de "je" (verbes commençant par une voyelle)
        // Vérifier si la réponse commence par "ai", "aime", "ai", etc.
        const needsApostrophe = /^(ai|aime|aimes|aimez|aiment|ai|as|a|avons|avez|ont)\s/i.test(formattedAnswer);
        
        if (needsApostrophe) {
            // Remplacer "ai pris" par "j'ai pris", etc.
            formattedAnswer = "j'" + formattedAnswer;
        } else {
            // Sinon, ajouter "je " au début si ce n'est pas déjà présent
            if (!formattedAnswer.toLowerCase().startsWith('je ')) {
                formattedAnswer = "je " + formattedAnswer;
            }
        }
    }
    
    // Afficher la bonne réponse dans l'encadré du timer
    const answerDisplayDiv = document.getElementById('conjugation-answer-display');
    if (answerDisplayDiv) {
        if (isCorrect) {
            answerDisplayDiv.textContent = `✅ ${formattedAnswer}`;
            answerDisplayDiv.className = 'timer correct-answer-timer';
        } else {
            if (timeout) {
                answerDisplayDiv.textContent = `⏱️ Temps écoulé`;
            } else {
                answerDisplayDiv.textContent = `💪 Presque !`;
            }
            answerDisplayDiv.className = 'timer incorrect-answer-timer';
        }
        answerDisplayDiv.style.display = 'block';
    }
    
    // Définir la classe du résultat (pour le style si nécessaire)
    if (isCorrect) {
        resultDiv.className = 'conjugation-result correct';
    } else {
        resultDiv.className = 'conjugation-result incorrect';
    }
    
    // Afficher l'explication (sans la bonne réponse qui est déjà dans l'encadré)
    resultExplanation.innerHTML = `
        ${currentConjugation.data.explication}
    `;
    
    resultDiv.style.display = 'block';
}

// Variable pour suivre si l'expression a été initialisée avec succès
let expressionInitialized = false;
let expressionInitAttempts = 0;
const MAX_EXPRESSION_INIT_ATTEMPTS = 10;
let expressionInitTimeout = null; // Pour nettoyer les timeouts
let homeGamesTimeoutIds = []; // Pour nettoyer tous les timeouts de initHomeGames
let homeGamesObserver = null; // Pour nettoyer l'observer

// Initialiser tous les mini-jeux quand la section home est affichée
async function initHomeGames() {
    console.log('initHomeGames appelé');
    
    // NETTOYER LES RESSOURCES PRÉCÉDENTES
    // Nettoyer tous les timeouts précédents
    homeGamesTimeoutIds.forEach(id => clearTimeout(id));
    homeGamesTimeoutIds = [];
    
    // Nettoyer l'observer précédent s'il existe
    if (homeGamesObserver) {
        homeGamesObserver.disconnect();
        homeGamesObserver = null;
    }
    
    // Nettoyer le timeout d'expression s'il existe
    if (expressionInitTimeout) {
        clearTimeout(expressionInitTimeout);
        expressionInitTimeout = null;
    }
    
    // Vérifier que nous sommes sur la page d'accueil
    const homeSection = document.getElementById('home');
    if (!homeSection || !homeSection.classList.contains('active')) {
        console.log('Section home non active, abandon');
        return;
    }
    
    // Réinitialiser le flag d'initialisation
    expressionInitialized = false;
    expressionInitAttempts = 0;
    
    // S'assurer que les éléments ont un contenu par défaut pour éviter l'encart blanc
    const frElement = document.getElementById('expression-fr');
    const enElement = document.getElementById('expression-en');
    const explanationElement = document.getElementById('expression-explanation');
    
    if (frElement && (!frElement.textContent || frElement.textContent.trim() === '')) {
        frElement.textContent = 'Chargement...';
    }
    if (enElement && (!enElement.textContent || enElement.textContent.trim() === '')) {
        enElement.textContent = 'Loading...';
    }
    if (explanationElement && (!explanationElement.textContent || explanationElement.textContent.trim() === '')) {
        explanationElement.textContent = 'Les expressions sont en cours de chargement.';
    }
    
    // Attendre un peu que le DOM soit rendu
    await new Promise(resolve => {
        const timeoutId = setTimeout(resolve, 100);
        homeGamesTimeoutIds.push(timeoutId);
    });
    
    // Initialiser les mini-jeux (expression du jour est async)
    try {
        await initExpressionOfTheDay();
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'expression du jour:', error);
    }
    
    initConjugationGame();
    
    // Vérifications multiples pour forcer l'affichage si nécessaire
    const checkAndRetry = () => {
        const frElement = document.getElementById('expression-fr');
        const enElement = document.getElementById('expression-en');
        const explanationElement = document.getElementById('expression-explanation');
        
        // Vérifier si tous les éléments existent et ont du contenu
        const hasContent = frElement && frElement.textContent && frElement.textContent.trim() !== '' &&
                          enElement && enElement.textContent && enElement.textContent.trim() !== '';
        
        if (!hasContent) {
            if (expressionInitAttempts < MAX_EXPRESSION_INIT_ATTEMPTS) {
                expressionInitAttempts++;
                console.warn(`L'expression n'est toujours pas affichée (tentative ${expressionInitAttempts}/${MAX_EXPRESSION_INIT_ATTEMPTS}), nouvelle tentative...`);
                // Réinitialiser les tentatives pour initExpressionOfTheDay
                expressionInitAttempts = 0;
                initExpressionOfTheDay();
                // Aussi forcer l'initialisation
                forceInitExpressionOfTheDay();
            }
        } else {
            expressionInitialized = true;
            console.log('Expression du jour initialisée avec succès');
        }
    };
    
    // Vérifications à intervalles multiples (tous stockés pour nettoyage)
    [200, 400, 600, 800, 1000, 1500, 2000, 2500, 3000].forEach(delay => {
        const timeoutId = setTimeout(() => {
            checkAndRetry();
            forceInitExpressionOfTheDay();
        }, delay);
        homeGamesTimeoutIds.push(timeoutId);
    });
    
    // Observer les mutations du DOM pour détecter quand les éléments sont ajoutés
    homeGamesObserver = new MutationObserver((mutations) => {
        const frElement = document.getElementById('expression-fr');
        const enElement = document.getElementById('expression-en');
        const isEmpty = frElement && (!frElement.textContent || frElement.textContent.trim() === '') &&
                       enElement && (!enElement.textContent || enElement.textContent.trim() === '');
        
        if (isEmpty && expressionInitAttempts < MAX_EXPRESSION_INIT_ATTEMPTS) {
            checkAndRetry();
            forceInitExpressionOfTheDay();
        }
    });
    
    // Observer le container de l'expression
    const observerTimeoutId = setTimeout(() => {
        const expressionContent = document.getElementById('expression-content');
        if (expressionContent && homeGamesObserver) {
            homeGamesObserver.observe(expressionContent, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
    }, 100);
    homeGamesTimeoutIds.push(observerTimeoutId);
    
    // Nettoyer l'observer après 5 secondes
    const cleanupTimeoutId = setTimeout(() => {
        if (homeGamesObserver) {
            homeGamesObserver.disconnect();
            homeGamesObserver = null;
        }
    }, 5000);
    homeGamesTimeoutIds.push(cleanupTimeoutId);
}

// Écouter les changements de section pour réinitialiser les jeux
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les jeux si la section home est déjà active
    const homeSection = document.getElementById('home');
    if (homeSection && homeSection.classList.contains('active')) {
        setTimeout(() => {
            initHomeGames();
        }, 100);
    }
    
    // Observer les changements de section
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.id === 'home' && target.classList.contains('active')) {
                    setTimeout(() => {
                        initHomeGames();
                    }, 100);
                }
            }
        });
    });
    
    if (homeSection) {
        observer.observe(homeSection, { attributes: true, attributeFilter: ['class'] });
    }
});

