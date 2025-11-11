// Navigation
function showSection(sectionId) {
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
    event.target.classList.add('active');
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
function executeScriptsInHTML(html, container) {
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
        
        // Exécuter les scripts après un court délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
            scriptsContent.forEach(scriptData => {
                try {
                    const newScript = document.createElement('script');
                    scriptData.attributes.forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    newScript.appendChild(document.createTextNode(scriptData.innerHTML));
                    container.appendChild(newScript);
                } catch (scriptError) {
                    console.error('Erreur lors de l\'exécution d\'un script:', scriptError);
                }
            });
        }, 10);
    } catch (error) {
        console.error('Erreur dans executeScriptsInHTML:', error);
        throw error;
    }
}

function showCourse(courseId, retryCount = 0) {
    const MAX_RETRIES = 2;
    
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
            executeScriptsInHTML(cachedContent, container);
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
            
            executeScriptsInHTML(html, container);
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
    // Hide all courses
    document.querySelectorAll('.course-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });

    // Hide all sections first
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });

    // Show the main section
    const mainSection = document.getElementById(sectionId);
    if (mainSection) {
        mainSection.style.display = 'block';
        mainSection.classList.add('active');
    }
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

// Fonction pour jouer les audios des mots de vocabulaire
function playAudio(url) {
    const audio = new Audio(url);
    audio.play().catch(err => {
        console.error('Erreur lecture audio:', err);
    });
}
