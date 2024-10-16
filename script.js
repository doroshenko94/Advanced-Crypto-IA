// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Инициализация Rellax.js
var rellax = new Rellax('.rellax', {
    speed: -3,  // Уменьшим скорость для более плавного эффекта
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

// Инициализация Swiper.js для слайдера
var headerSwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 8000,  // Увеличим задержку между слайдами
        disableOnInteraction: false,  // Слайдер не останавливается при взаимодействии
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1500,  // Увеличим время анимации для более плавного перехода
});

// Инициализация Swiper.js для отзывов
var testimonialSwiper = new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    slidesPerView: 2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Обновление AOS после инициализации Swiper.js
testimonialSwiper.on('init', function () {
    AOS.refresh();
});

// Обновление AOS при смене слайда
testimonialSwiper.on('slideChangeTransitionEnd', function () {
    AOS.refresh();
});

// Инициализация Swiper.js после добавления обработчиков событий
testimonialSwiper.init();

// Инициализация AOS с опцией once: false
AOS.init({
    duration: 1000,
    once: false,
});

// Мобильное меню
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Переключение темы день/ночь
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (rootElement.getAttribute('data-theme') === 'light') {
        rootElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        rootElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

// Переключение языков (мультиязычность)
const languageSwitcher = document.getElementById('language-switcher');

languageSwitcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    i18next.changeLanguage(lang, () => {
        updateContent();
    });
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((elem) => {
        const translationKey = elem.getAttribute('data-i18n');
        if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
            elem.setAttribute('placeholder', i18next.t(translationKey));
        } else if (elem.tagName === 'BUTTON' || elem.tagName === 'OPTION') {
            elem.textContent = i18next.t(translationKey);
        } else {
            elem.innerHTML = i18next.t(translationKey);
        }
    });
    // Обновление placeholder для полей ввода
    document.querySelectorAll('[data-i18n-placeholder]').forEach((elem) => {
        const translationKey = elem.getAttribute('data-i18n-placeholder');
        elem.setAttribute('placeholder', i18next.t(translationKey));
    });
}

// Инициализация i18next
i18next.init({
    lng: 'it', // Язык по умолчанию
    debug: false,
    resources: {
        en: {
            translation: {
                title: "Modern Landing Page",
                logo: "Company",
                nav: {
                    home: "Home",
                    services: "Services",
                    market: "Market",
                    testimonials: "Testimonials",
                    registration: "Registration",
                    contact: "Contact"
                },
                slide1: {
                    title: "Welcome to our company",
                    subtitle: "We offer innovative solutions for your business.",
                    button: "Our Services"
                },
                slide2: {
                    title: "We enhance your potential",
                    subtitle: "Professional approach and best solutions.",
                    button: "Learn More"
                },
                services: {
                    title: "What we offer",
                    service1: {
                        title: "Service 1",
                        description: "Description of service 1."
                    },
                    service2: {
                        title: "Service 2",
                        description: "Description of service 2."
                    },
                    service3: {
                        title: "Service 3",
                        description: "Description of service 3."
                    }
                },
                profile: {
                    title: "Client Profiles",
                    incomeLast30Days: "Income for the last 30 days",
                    platform: "Advanced Crypto IA"
                },
                profile1: {
                    username: "@giovanni",
                    name: "Giovanni Rossi",
                    income: "€10,984.38",
                    totalIncome: "Total income: €33,197.60",
                    daysOnPlatform: "Days on platform: 73"
                },
                profile2: {
                    username: "@anna_b",
                    name: "Anna Bianchi",
                    income: "€12,042.52",
                    totalIncome: "Total income: €24,853.46",
                    daysOnPlatform: "Days on platform: 56"
                },
                profile3: {
                    username: "@giovrizzo",
                    name: "Giovanni Rizzi",
                    income: "€14,204.71",
                    totalIncome: "Total income: €40,163.32",
                    daysOnPlatform: "Days on platform: 96"
                },
                profile4: {
                    username: "@ele_grima",
                    name: "Eleonora Grimaldi",
                    income: "€10,894.92",
                    totalIncome: "Total income: €17,071.46",
                    daysOnPlatform: "Days on platform: 36"
                },
                market: {
                    title: "Market Quotes",
                    currency: "Currency Rates",
                    crypto: "Cryptocurrencies",
                    commodities: "Commodities"
                },
                testimonials: {
                    title: "Our Clients' Feedback",
                    testimonial1: {
                        text: "\"Società fantastica , ero scettica ma devo ricredermi dopo il lavoro svolto negli ultimi 4 anni , grazie !! \"",
                        name: "Luca Moretti",
                        position: "CEO"
                    },
                    testimonial2: {
                        text: "\"Consulenza eccellente , il mio consulente Gianfranco mi ha seguita in tutto e per tutto e mi ha aiutata ad avere un secondo stipendio al mese \"",
                        name: "Giulia Ferrari",
                        position: "Marketer"
                    },
                    testimonial3: {
                        text: "\"Ho provato molte compagnie , ma devo dire che per professionalità e serietà sono imbattibili\"",
                        name: "Matteo Russo",
                        position: "Project Manager"
                    }
                },
                registration: {
                    title: "Registration",
                    form: {
                        name: "Name",
                        surname: "Surname",
                        birthyear: "Year of Birth",
                        phone: "Phone Number",
                        email: "Email",
                        emailConfirm: "Confirm Email",
                        password: "Password",
                        passwordConfirm: "Confirm Password",
                        button: "Register"
                    },
                    formMessages: {
                        success: "Registration successful!",
                        error: "Please fill in all fields.",
                        emailMismatch: "Emails do not match.",
                        passwordMismatch: "Passwords do not match.",
                        passwordRequirements: "Password must be at least 8 characters, including a number and a letter.",
                        failure: "Registration failed. Please try again."
                    }
                },
                contact: {
                    title: "Contact Us",
                    phone: "Phone: +7 (123) 456-7890"
                }
            }
        },
        it: {
            translation: {
                title: "Pagina di atterraggio moderna",
                logo: "Azienda",
                nav: {
                    home: "Home",
                    services: "Servizi",
                    market: "Mercato",
                    testimonials: "Testimonianze",
                    registration: "Registrazione",
                    contact: "Contatti"
                },
                slide1: {
                    title: "Benvenuti nella nostra azienda",
                    subtitle: "Offriamo soluzioni innovative per il tuo business.",
                    button: "I nostri servizi"
                },
                slide2: {
                    title: "Sviluppiamo il tuo potenziale",
                    subtitle: "Approccio professionale e le migliori soluzioni.",
                    button: "Per saperne di più"
                },
                services: {
                    title: "Cosa offriamo",
                    service1: {
                        title: "Servizio 1",
                        description: "Descrizione del servizio 1."
                    },
                    service2: {
                        title: "Servizio 2",
                        description: "Descrizione del servizio 2."
                    },
                    service3: {
                        title: "Servizio 3",
                        description: "Descrizione del servizio 3."
                    }
                },
                profile: {
                    title: "Profili dei clienti",
                    incomeLast30Days: "Entrate negli ultimi 30 giorni",
                    platform: "Advanced Crypto IA"
                },
                profile1: {
                    username: "@giovanni",
                    name: "Giovanni Rossi",
                    income: "€10,984.38",
                    totalIncome: "Entrate totali: €33,197.60",
                    daysOnPlatform: "Giorni sulla piattaforma: 73"
                },
                profile2: {
                    username: "@anna_b",
                    name: "Anna Bianchi",
                    income: "€12,042.52",
                    totalIncome: "Entrate totali: €24,853.46",
                    daysOnPlatform: "Giorni sulla piattaforma: 56"
                },
                profile3: {
                    username: "@giovrizzo",
                    name: "Giovanni Rizzi",
                    income: "€14,204.71",
                    totalIncome: "Entrate totali: €40,163.32",
                    daysOnPlatform: "Giorni sulla piattaforma: 96"
                },
                profile4: {
                    username: "@ele_grima",
                    name: "Eleonora Grimaldi",
                    income: "€10,894.92",
                    totalIncome: "Entrate totali: €17,071.46",
                    daysOnPlatform: "Giorni sulla piattaforma: 36"
                },
                market: {
                    title: "Quotazioni di Mercato",
                    currency: "Tassi di Cambio",
                    crypto: "Criptovalute",
                    commodities: "Materie Prime"
                },
                testimonials: {
                    title: "Feedback dei nostri clienti",
                    testimonial1: {
                        text: "\"Società fantastica , ero scettica ma devo ricredermi dopo il lavoro svolto negli ultimi 4 anni , grazie !! \"",
                        name: "Luca Moretti",
                        position: "CEO"
                    },
                    testimonial2: {
                        text: "\"Consulenza eccellente , il mio consulente Gianfranco mi ha seguita in tutto e per tutto e mi ha aiutata ad avere un secondo stipendio al mese \"",
                        name: "Giulia Ferrari",
                        position: "Marketing"
                    },
                    testimonial3: {
                        text: "\"Ho provato molte compagnie , ma devo dire che per professionalità e serietà sono imbattibili\"",
                        name: "AMatteo Russo",
                        position: "Project Manager"
                    }
                },
                registration: {
                    title: "Registrazione",
                    form: {
                        name: "Nome",
                        surname: "Cognome",
                        birthyear: "Anno di Nascita",
                        phone: "Numero di Telefono",
                        email: "Email",
                        emailConfirm: "Conferma Email",
                        password: "Password",
                        passwordConfirm: "Conferma Password",
                        button: "Registrati"
                    },
                    formMessages: {
                        success: "Registrazione avvenuta con successo!",
                        error: "Per favore, compila tutti i campi.",
                        emailMismatch: "Le email non corrispondono.",
                        passwordMismatch: "Le password non corrispondono.",
                        passwordRequirements: "La password deve contenere almeno 8 caratteri, inclusi un numero e una lettera.",
                        failure: "Registrazione fallita. Riprova."
                }
            },
                contact: {
                    title: "Contattaci",
                    phone: "Telefono: +39 (123) 456-7890"
                }
            }
        },
    }
}, function(err, t) {
    updateContent();
});

// Глобальное хранилище рыночных данных
let marketData = {
    bitcoin: null,
    sp500: null,
    gold: null
};

// Информация по начальным вложениям и дням
const clients = {
    giovanni: {
        investment: 150000,
        daysOnPlatform: 73,
        market: 'bitcoin',
        initialPrice: null // Добавляем поле для хранения начальной цены
    },
    anna_b: {
        investment: 200000,
        daysOnPlatform: 56,
        market: 'sp500',
        initialPrice: null
    },
    ele_grima: {
        investment: 125000,
        daysOnPlatform: 96,
        market: 'gold',
        initialPrice: null
    }
};

// Функция для получения текущих котировок
function fetchMarketData(asset) {
    const price = parseFloat(document.querySelector(`#${asset}-list`).dataset.price);
    return price;
}

// Функция для расчета профита
function calculateProfit(investment, marketPrice, initialPrice) {
    return ((marketPrice - initialPrice) / initialPrice) * investment;
}


// Функция для расчета профита
function calculateProfit(investment, marketPrice, initialPrice) {
    return ((marketPrice - initialPrice) / initialPrice) * investment;
}
// Обновляем данные для каждого клиента
// Обновляем данные для каждого клиента
function updateClientData() {
    const today = new Date().setHours(0, 0, 0, 0); // Текущая дата без времени (полночь)
    Object.keys(clients).forEach(client => {
        const clientData = clients[client];

        // Получаем текущую цену актива
        const marketPrice = fetchMarketData(clientData.market);

        // Проверяем, что получили корректную цену
        if (isNaN(marketPrice)) {
            console.error(`Не удалось получить текущую цену для ${clientData.market}`);
            return;
        }

        // Получаем или устанавливаем дату начала
        let storedStartDate = localStorage.getItem(`${client}-startDate`);
        let startDate;
        if (storedStartDate === null) {
            // Вычисляем дату начала
            startDate = new Date();
            startDate.setDate(startDate.getDate() - clientData.daysOnPlatform);

            // Сохраняем дату начала
            localStorage.setItem(`${client}-startDate`, startDate.toISOString());
        } else {
            startDate = new Date(storedStartDate);
        }

        // Получаем сохраненную дату последнего обновления
        const storedLastUpdatedDate = localStorage.getItem(`${client}-lastUpdatedDate`);
        const lastUpdatedDate = storedLastUpdatedDate ? new Date(storedLastUpdatedDate).setHours(0, 0, 0, 0) : null;

        // Проверяем, наступил ли новый день
        if (!lastUpdatedDate || lastUpdatedDate < today) {
            // Увеличиваем количество дней на платформе
            clientData.daysOnPlatform++;
            localStorage.setItem(`${client}-daysOnPlatform`, clientData.daysOnPlatform);

            // Обновляем дату последнего обновления
            localStorage.setItem(`${client}-lastUpdatedDate`, new Date().toISOString());
        }

        // Обновляем отображение количества дней
        document.getElementById(`${client}-days`).textContent = clientData.daysOnPlatform;

        // Если начальная цена не установлена, устанавливаем ее
        if (clientData.initialPrice === null) {
            const storedInitialPrice = localStorage.getItem(`${client}-initialPrice`);
            if (storedInitialPrice !== null) {
                clientData.initialPrice = parseFloat(storedInitialPrice);
            } else {
                // Получаем исторические данные актива
                const dataItems = marketData[clientData.market];

                if (!dataItems) {
                    console.error(`Данные для актива ${clientData.market} не найдены.`);
                    return;
                }

                // Дата инвестирования
                const dateOfInvestment = new Date(startDate);

                // Ищем ближайшую дату к дате инвестирования
                let closestData = null;
                let minDateDiff = Infinity;

                for (let item of dataItems) {
                    const dataDate = new Date(item.date * 1000);
                    const dateDiff = Math.abs(dataDate - dateOfInvestment);

                    if (dateDiff < minDateDiff) {
                        minDateDiff = dateDiff;
                        closestData = item;
                    }
                }

                if (closestData) {
                    clientData.initialPrice = closestData.close;
                    localStorage.setItem(`${client}-initialPrice`, clientData.initialPrice);
                } else {
                    console.error(`Не удалось найти данные для даты инвестирования клиента ${client}`);
                    return;
                }
            }
        }

        // Расчет прибыли
        const profit = calculateProfit(clientData.investment, marketPrice, clientData.initialPrice);

        // Обновляем DOM
        document.getElementById(`${client}-profit`).textContent = `€${profit.toFixed(2)}`;
    });
}

// Запускаем функции при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    Promise.all([fetchBitcoinData(), fetchSP500Data(), fetchGoldData()])
        .then(() => {
            updateClientData();
        })
        .catch(error => {
            console.error('Ошибка при получении рыночных данных:', error);
        });
});

// Обработчик формы регистрации
const registrationForm = document.getElementById('registration-form');
const headerText = document.getElementById('header-text'); // Элемент с текстом в шапке

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Остановим стандартное поведение формы

    // Собираем данные формы
    const formData = new FormData(registrationForm);

    // Получение значений полей
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const birthyear = document.getElementById('birthyear').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailConfirm = document.getElementById('email-confirm').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordConfirm = document.getElementById('password-confirm').value.trim();

    // Валидация email
    if (email !== emailConfirm) {
        alert('L`e-mail e la sua conferma non corrispondono.');
        return;
    }

    // Валидация паролей
    if (password !== passwordConfirm) {
        alert('La password e la sua conferma non corrispondono.');
        return;
    }

    // Валидация длины пароля
    const passwordPattern = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
    if (!passwordPattern.test(password)) {
        alert('La password deve contenere almeno 8 caratteri, tra cui un numero e una lettera.');
        return;
    }

    // Отправляем данные через fetch
    fetch('http://tets/register.php', {
        method: 'POST',
        body: formData // Отправляем данные в формате FormData
    })
    .then(response => {
        if (response.ok) {
            // Показать сообщение об успешной регистрации
            showSuccessMessage();

            // Скрыть форму регистрации
            registrationForm.style.display = 'none';

            // Изменить текст в шапке
            headerText.textContent = "Benvenuti a  Advanced Crypto IA";
        } else {
            alert('Errore di registrazione. Riprovare.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Errore di registrazione. Riprovare.');
    });
});

// Функция для показа сообщения об успешной регистрации
function showSuccessMessage() {
    // Создание элемента для сообщения
    const successMessage = document.createElement('div');
    successMessage.textContent = "La registrazione è avvenuta con successo! Sarai contattato a breve";
    successMessage.style.position = 'fixed';
    successMessage.style.top = '50%';
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translate(-50%, -50%)';
    successMessage.style.backgroundColor = '#28a745';
    successMessage.style.color = '#fff';
    successMessage.style.padding = '20px';
    successMessage.style.borderRadius = '5px';
    successMessage.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    successMessage.style.zIndex = '1000';

    document.body.appendChild(successMessage);

    // Скрытие сообщения через 7 секунд
    setTimeout(() => {
        successMessage.remove();
    }, 7000);
}

const rapidApiKey = '2842df072dmshbbebd0093f9e137p1c987cjsn752911cc1b4e'; // Замените на ваш RapidAPI ключ

// Funzione per ottenere i dati di Bitcoin
function fetchBitcoinData() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=BTC-USD', options)
        .then(response => response.json())
        .then(data => {
            console.log('Dati Bitcoin:', data);
            if (data.prices && data.prices.length > 0) {
                processData('bitcoin', data.prices);
            } else {
                console.error('Dati Bitcoin non disponibili');
            }
        })
        .catch(error => {
            console.error('Errore nel recupero dei dati Bitcoin:', error);
        });
}

// Funzione per ottenere i dati di S&P 500
function fetchSP500Data() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5EGSPC', options)
        .then(response => response.json())
        .then(data => {
            console.log('Dati S&P 500:', data);
            if (data.prices && data.prices.length > 0) {
                processData('sp500', data.prices);
            } else {
                console.error('Dati S&P 500 non disponibili');
            }
        })
        .catch(error => {
            console.error('Errore nel recupero dei dati S&P 500:', error);
        });
}

// Funzione per ottenere i dati dell'oro
function fetchGoldData() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=GC%3DF', options)
        .then(response => response.json())
        .then(data => {
            console.log('Dati Oro:', data);
            if (data.prices && data.prices.length > 0) {
                processData('gold', data.prices);
            } else {
                console.error('Dati Oro non disponibili');
            }
        })
        .catch(error => {
            console.error('Errore nel recupero dei dati Oro:', error);
        });
}


// Funzione di elaborazione dei dati
function processData(asset, dataItems) {
    // Сохраняем данные в глобальной переменной
    marketData[asset] = dataItems;

    // Otteniamo il prezzo attuale (prima voce dell'array)
    const currentData = dataItems[0];
    const currentDate = new Date(currentData.date * 1000);
    const currentPrice = currentData.close;

    // Cerchiamo il prezzo esattamente un anno fa o il più vicino
    const oneYearAgoDate = new Date();
    oneYearAgoDate.setFullYear(oneYearAgoDate.getFullYear() - 1);

    let closestData = null;
    let minDateDiff = Infinity;

    for (let item of dataItems) {
        const dataDate = new Date(item.date * 1000);
        const dateDiff = Math.abs(dataDate - oneYearAgoDate);

        if (dateDiff < minDateDiff) {
            minDateDiff = dateDiff;
            closestData = item;
        }
    }

    if (closestData) {
        const pastPrice = closestData.close;
        const pastDate = new Date(closestData.date * 1000);

        // Calcoliamo la variazione percentuale
        const percentageChange = ((currentPrice - pastPrice) / pastPrice) * 100;

        // Mostriamo i dati
        displayData(asset, {
            currentPrice,
            currentDate,
            pastPrice,
            pastDate,
            percentageChange
        });

        // Mostriamo il grafico
        displayChart(asset, dataItems);
    } else {
        console.error(`Non è stato possibile trovare i dati di un anno fa per ${asset}`);
    }
}

// Funzione per visualizzare i dati
function displayData(asset, data) {
    const container = document.getElementById(`${asset}-list`);
    container.dataset.price = data.currentPrice; // Сохраняем цену для fetchMarketData
    container.innerHTML = `
        <p style="color: #FF6666;">Prezzo un anno fa (${data.pastDate.toLocaleDateString('it-IT')}): $${data.pastPrice.toFixed(2)}</p>
        <p style="color: green; font-weight: bold;">Prezzo attuale (${data.currentDate.toLocaleDateString('it-IT')}): $${data.currentPrice.toFixed(2)}</p>
        <p>Variazione rispetto a un anno fa: ${data.percentageChange.toFixed(2)}%</p>
    `;
}

    // Сохраняем текущую цену в data-price для использования в расчётах
    // document.querySelector(`#${asset}-list`).dataset.price = data.currentPrice;


// Funzione per visualizzare il grafico
function displayChart(asset, dataItems) {
    const ctx = document.getElementById(`${asset}-chart`).getContext('2d');

    // Prepariamo i dati per il grafico
    const labels = [];
    const prices = [];

    dataItems.reverse().forEach(item => {
        const date = new Date(item.date * 1000);
        labels.push(date.toLocaleDateString('it-IT'));
        prices.push(item.close);
    });

    // Creiamo il grafico
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Prezzo',
                data: prices,
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 2,
                pointRadius: 0, // Rimuove i punti dati
            }]
        },
        options: {
            responsive: true,
            elements: {
                line: {
                    tension: 0.3 // Linea più morbida
                }
            },
            plugins: {
                legend: {
                    display: false // Nasconde la legenda
                }
            },
            scales: {
                x: {
                    display: false // Nasconde le etichette sull'asse X
                },
                y: {
                    display: false // Nasconde le etichette sull'asse Y
                }
            }
        }
    });
}
