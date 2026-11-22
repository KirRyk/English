import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direction: "Мини-группы (подготовка к ЦТ / ЦЭ)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setIsSubmitted(true);
  };

  const handleSelectDirection = (directionValue) => {
    setFormData((prev) => ({ ...prev, direction: directionValue }));
    const signupSection = document.getElementById("signup");
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const workSteps = [
    {
      title: "Разбираем логику тестов",
      description:
        "Я учу видеть «ловушки» составителей и обходить их, а не угадывать правильный вариант.",
    },
    {
      title: "Убираем лишнее",
      description:
        "В книгах для подготовки к ЦТ слишком много теории. Мы берём только то, что реально спрашивают на тесте, и раскладываем всё по простым схемам.",
    },
    {
      title: "Учимся по актуальным материалам",
      description:
        "Я сама повышаю квалификацию у ведущего эксперта ЦТ. Поэтому мои ученики первыми получают все свежие фишки и базы этого сезона.",
    },
    {
      title: "Закрываем пробелы",
      description:
        "Мы не бежим дальше по программе, пока сложная тема не отложится в голове на 100%.",
    },
  ];

  const painPoints = [
    {
      icon: "heart",
      quote: "Без стресса",
      title: "Спокойствие вместо паники",
      description:
        "Моя задача — чтобы ребенок пришел на экзамен спокойным. Чтобы знал: мы это проходили, это не страшно, и у нас есть четкий план действий.",
    },
    {
      icon: "alert",
      quote: "Видим капканы",
      title: "Рефлекс на подвохи теста",
      description:
        "Я знаю, где составители спрятали подвох. Мы разбираем эти места по несколько раз, пока у ребенка не выработается рефлекс: «Ага, тут меня хотят обмануть».",
    },
    {
      icon: "clock",
      quote: "Запас времени",
      title: "Специальный алгоритм скорости",
      description:
        "Если переводить каждое слово — не успеть. Тренируемся читать тест быстро, сразу видеть проверяемое правило и оставлять время на сложные задания.",
    },
    {
      icon: "book",
      quote: "Только суть",
      title: "Готовая выжимка без воды",
      description:
        "Интернет полон материалов, в которых ребенок тонет. Я даю четкий список тем от ведущего эксперта ЦТ — только то, что реально встретится в тесте.",
    },
  ];

  const directions = [
    {
      title: "Мини-группы",
      selectValue: "Мини-группы (подготовка к ЦТ / ЦЭ)",
      features: [
        "2 раза в неделю по 90 минут",
        "Небольшие группы, поддерживающая атмосфера и совместный разбор «ловушек» тестов.",
      ],
    },
    {
      title: "Индивидуально",
      selectValue: "Индивидуально (ЦТ / ЦЭ или школьный английский)",
      features: [
        "2 раза в неделю по 60 или 90 минут",
        "100% внимания преподавателя и программа строго под ваши пробелы и темп.",
      ],
    },
  ];

  const cases = [
    {
      name: "Алина, 11 класс",
      before: "48 баллов (1 этап РТ)",
      after: "86 баллов на ЦТ",
      text: "Пришла с кашей в голове из времен и артиклей. За 8 месяцев разложили всё по полочкам, научились видеть ловушки в части B — на экзамене ни разу не запаниковала.",
    },
    {
      name: "Максим, 11 класс",
      before: "«9» в школе, 54 на РТ",
      after: "89 баллов на ЦЭ",
      text: "Хорошо говорил на английском, но терял баллы на словообразовании и предлогах. Отработали алгоритм быстрого чтения теста и уложились с запасом в 20 минут.",
    },
    {
      name: "София, 8 класс",
      before: "Оценка «6», страх уроков",
      after: "Твердая «9» за четверть",
      text: "Перестала бояться грамматики, начала сама разбираться в текстах и теперь спокойно готовится к поступлению в лицей.",
    },
  ];

  const faqItems = [
    {
      q: "Вы готовите именно к ЦТ?",
      a: "Да. Для высокого балла нужен узкий специалист: универсалы «для всех классов и возрастов» часто не знают мелких подвохов РИКЗ.",
    },
    {
      q: "По каким материалам мы будем заниматься?",
      a: "Обычных школьных учебников не хватит. Мы работаем по свежим базам РТ и проверенным материалам от экспертов ЦТ, а не по старым пособиям из интернета.",
    },
    {
      q: "Как вы следите за изменениями в ЦТ?",
      a: "Требования меняются каждый год. Я регулярно прохожу обучение у ведущих экспертов ЦТ, чтобы мои ученики готовились строго по актуальным правилам экзамена.",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "heart":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case "alert":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        );
      case "clock":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
    }
  };

  return (
    <div className="page">
      {/* Шапка */}
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="brand">
            <span className="brand__title">
              Pro ЦТ <span className="brand__accent">English</span>
            </span>
          </a>

          <nav className="nav">
            <a href="#about" className="nav__link">
              О преподавателе
            </a>
            <a href="#process" className="nav__link">
              Как строится работа
            </a>
            <a href="#directions" className="nav__link">
              Форматы
            </a>
            <a href="#method" className="nav__link">
              Методика
            </a>
            <a href="#reviews" className="nav__link">
              Отзывы
            </a>
            <a href="#faq" className="nav__link">
              Вопросы
            </a>
          </nav>

          <a href="#signup" className="btn btn--dark btn--sm">
            Пробный урок
          </a>
        </div>
      </header>

      {/* 1. Hero */}
      <section id="top" className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Почему репетитор для ЦТ — это не роскошь,{" "}
              <span className="hero__title-accent">а экономия нервов</span>
            </h1>

            <p className="hero__subtitle">
              Выпускница <strong>МГЛУ</strong>. Готовлю школьников 10–11 классов
              к ЦТ/ЦЭ без зубрежки и паники, а ученикам 5–9 классов помогаю
              уверенно освоить школьный английский. Онлайн, индивидуально и в
              мини-группах.
            </p>

            <div className="hero__actions">
              <a href="#signup" className="btn btn--primary">
                Записаться на бесплатный пробный урок
              </a>
              <a href="#about" className="btn btn--outline">
                Познакомиться с преподавателем
              </a>
            </div>

            <div className="hero__stats">
              <div className="stat-item">
                <strong>МГЛУ</strong>
                <span>Профильное высшее образование</span>
              </div>
              <div className="stat-item">
                <strong>Эксперт ЦТ</strong>
                <span>Актуальная база и ловушки теста</span>
              </div>
              <div className="stat-item">
                <strong>Без стресса</strong>
                <span>Понятный алгоритм подготовки</span>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <div className="photo-card">
              <img
                src="/src/images/tutor-1.jpg"
                alt="Репетитор по английскому языку"
                className="photo-card__img"
              />
              <div className="photo-card__caption">
                «Ваш ребенок справится. С поддержкой — точно.»
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Почему ЦТ — это не просто проверка знаний */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              Почему ЦТ — это не просто проверка знаний
            </h2>
            <p className="section-desc">
              Две главные причины, по которым даже сильные ученики теряют баллы
              на экзамене.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="info-card">
              <h3 className="info-card__title">
                В школе «9», а на тесте — растерянность
              </h3>
              <p className="info-card__text">
                Ваш ребенок может иметь девятку в школе и свободно говорить на
                английском. Но тест составлен так, чтобы ловить на нюансах.
              </p>
              <p className="info-card__text">
                Я сама учусь у ведущего эксперта ЦТ и вижу структуру теста
                изнутри: школьных знаний хватает, чтобы растеряться, но не
                хватает, чтобы обойти ловушки.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                За 1 год пройти 9 лет школы — нереально
              </h3>
              <p className="info-card__text">
                На ЦТ проверяют базу с 3 по 11 класс. Перерыть все школьные
                учебники и систематизировать этот объем самостоятельно физически
                невозможно.
              </p>
              <p className="info-card__text">
                У меня уже собрана готовая выжимка и материалы от экспертов ЦТ:
                мы не тратим время на поиск, а сразу учим только то, что
                пригодится на экзамене.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. О преподавателе */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              Учу понимать логику языка, а не зазубривать скучные таблицы
            </h2>
            <p className="section-desc">
              Меня зовут Ирина. Помогаю выпускникам подготовиться к ЦТ без
              паники, слёз и бессмысленной зубрёжки.
            </p>
          </div>

          <div className="about-grid">
            <div className="about__left">
              <div className="about-photo-wrap">
                <img
                  src="/src/images/tutor-2.jpg"
                  alt="Ирина — преподаватель английского"
                  className="about-photo"
                />
              </div>

              <div className="video-card">
                <div className="video-card__badge">
                  Видео-приветствие • 50 сек
                </div>
                <h3 className="video-card__title">
                  Познакомьтесь со мной за 1 минуту
                </h3>
                <p className="video-card__text">
                  Послушайте мое произношение, темп речи и подход к занятиям еще
                  до первого урока.
                </p>
                <div className="video-placeholder">
                  <div className="video-placeholder__play">▶</div>
                  <span>Место для видео-визитки (welcome.mp4)</span>
                </div>
              </div>
            </div>

            <div className="about__right">
              <p className="about__lead">
                Меня зовут Ирина. Помогаю выпускникам подготовиться к ЦТ без
                паники, слёз и бессмысленной зубрёжки.
              </p>

              <ul className="credentials-list">
                <li>
                  <strong>МГЛУ:</strong> глубокая база фонетики, грамматики и
                  методики преподавания иностранных языков.
                </li>
                <li>
                  <strong>Эксперт ЦТ:</strong> работаю по актуальным программам,
                  знаю все свежие изменения спецификации и типичные «капканы»
                  экзамена.
                </li>
                <li>
                  <strong>Без стресса:</strong> создаю на уроке спокойную
                  атмосферу, где ученик не боится ошибиться и задать любой
                  вопрос.
                </li>
              </ul>

              <div className="docs-block">
                <div className="docs-block__title">
                  Диплом и сертификаты (нажмите, чтобы увеличить)
                </div>
                <div className="docs-grid">
                  <button
                    type="button"
                    className="doc-thumb"
                    onClick={() =>
                      setModalImage({
                        src: "/src/images/diplom.jpg",
                        caption:
                          "Диплом МГЛУ — профильное лингвистическое образование",
                      })
                    }
                  >
                    <img src="/src/images/diplom.jpg" alt="Диплом МГЛУ" />
                    <span>Диплом МГЛУ</span>
                  </button>

                  <button
                    type="button"
                    className="doc-thumb"
                    onClick={() =>
                      setModalImage({
                        src: "/src/images/diplom1.jpg",
                        caption: "Сертификат и материалы курса подготовки к ЦТ",
                      })
                    }
                  >
                    <img src="/src/images/diplom1.jpg" alt="Сертификат ЦТ" />
                    <span>Материалы и сертификат ЦТ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Как строится наша работа */}
      <section id="process" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Как строится наша работа</h2>
            <p className="section-desc">
              Четыре принципа, которые превращают хаотичную подготовку в
              понятную систему.
            </p>
          </div>

          <div className="four-grid">
            {workSteps.map((step, index) => (
              <div key={index} className="info-card">
                <h3 className="info-card__title">{step.title}</h3>
                <p className="info-card__text">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="section-callout">
            Моя главная цель — чтобы ученик шёл на экзамен не «на удачу», а с
            чётким пониманием, что и как делать.
          </div>
        </div>
      </section>

      {/* 5. Форматы работы */}
      <section id="directions" className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Форматы работы</h2>
            <p className="section-desc">
              Выбирайте вариант подготовки к ЦЭ/ЦТ, который подходит именно вам:
            </p>
          </div>

          <div className="two-col-grid">
            {directions.map((dir, index) => (
              <div key={index} className="direction-card">
                <h3 className="direction-card__title">{dir.title}</h3>
                <ul className="check-list">
                  {dir.features.map((feat, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn btn--outline btn--full"
                  onClick={() => handleSelectDirection(dir.selectValue)}
                >
                  Выбрать формат
                </button>
              </div>
            ))}
          </div>

          <div className="section-callout">
            Перед стартом — бесплатная диагностика уровня и разбор ошибок.
          </div>
        </div>
      </section>

      {/* 6. Методика */}
      <section id="method" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">4 опоры спокойной подготовки</h2>
            <p className="section-desc">
              Как устроены уроки изнутри, чтобы снять страх неизвестности и дать
              стабильный рост.
            </p>
          </div>

          <div className="two-col-grid">
            {painPoints.map((item, idx) => (
              <div key={idx} className="method-card">
                <div className="method-card__top">
                  <div className="icon-box">{renderIcon(item.icon)}</div>
                  <div className="method-card__quote">«{item.quote}»</div>
                </div>
                <h3 className="method-card__title">{item.title}</h3>
                <p className="method-card__desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="tools-banner">
            <div className="tools-banner__info">
              <h3>Инструменты и структура каждого урока</h3>
              <p>
                Разбираем правило на жизненных примерах и сразу закрепляем на
                реальных заданиях ЦТ и интерактивных тренажерах.
              </p>
            </div>
            <div className="tools-badges">
              <span className="tool-chip">Zoom + запись сложных тем</span>
              <span className="tool-chip">Интерактивная доска</span>
              <span className="tool-chip">Карточки Quizlet для лексики</span>
              <span className="tool-chip">Destination B1 / B2</span>
              <span className="tool-chip">База тестов РИКЗ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Отзывы и кейсы */}
      <section id="reviews" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Результаты учеников и отзывы</h2>
            <p className="section-desc">
              Реальные истории роста баллов и скриншоты сообщений от родителей и
              выпускников.
            </p>
          </div>

          <div className="three-grid">
            {cases.map((item, idx) => (
              <div key={idx} className="case-card">
                <h3 className="case-card__header">{item.name}</h3>
                <div className="case-card__scores">
                  <span className="score-before">{item.before}</span>
                  <span className="score-arrow">→</span>
                  <span className="score-after">{item.after}</span>
                </div>
                <p className="case-card__text">«{item.text}»</p>
              </div>
            ))}
          </div>

          <div className="screens-section">
            <h3 className="screens-section__title">
              Скриншоты отзывов из мессенджеров
            </h3>
            <div className="three-grid">
              {[
                {
                  src: "/review-1.jpg",
                  label: "Отзыв мамы ученицы 11 класса",
                },
                {
                  src: "/review-2.jpg",
                  label: "Результаты после сдачи ЦТ",
                },
                {
                  src: "/review-3.jpg",
                  label: "Отзыв о занятиях по школьной программе",
                },
              ].map((rev, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="screen-card"
                  onClick={() =>
                    setModalImage({ src: rev.src, caption: rev.label })
                  }
                >
                  <img
                    src={rev.src}
                    alt={rev.label}
                    className="screen-card__img"
                  />
                  <span className="screen-card__caption">
                    {rev.label} (нажмите для увеличения)
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="section">
        <div className="container container--narrow">
          <div className="section-head">
            <h2 className="section-title">
              3 важных вопроса преподавателю перед началом занятий
            </h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <div className="faq-item__answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Форма записи */}
      <section id="signup" className="section section--tinted">
        <div className="container">
          <div className="signup-card">
            <h2 className="section-title">
              Запишитесь на бесплатный пробный урок
            </h2>
            <p className="section-desc">
              Проведем диагностику текущего уровня, разберем типичные ошибки в
              тесте и составим пошаговый план подготовки без стресса.
            </p>

            {isSubmitted ? (
              <div className="success-box">
                <div className="success-box__icon">✓</div>
                <h3>Заявка успешно отправлена!</h3>
                <p>
                  Спасибо, {formData.name}. Я свяжусь с вами в ближайшее время
                  по номеру {formData.phone}, чтобы подобрать удобное время для
                  пробного урока.
                </p>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя (родитель или ученик)</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Например, Елена"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон или ник в Telegram</label>
                  <input
                    id="phone"
                    type="text"
                    required
                    placeholder="+375 (__) ___ __ __ или @username"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="direction">Интересующее направление</label>
                  <select
                    id="direction"
                    value={formData.direction}
                    onChange={(e) =>
                      setFormData({ ...formData, direction: e.target.value })
                    }
                  >
                    <option>Мини-группы (подготовка к ЦТ / ЦЭ)</option>
                    <option>
                      Индивидуально — ЦТ (50 руб/час) или общий (35–40 руб)
                    </option>
                    <option>Урок-диагностика (бесплатно)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>Pro ЦТ English</strong> — подготовка к ЦТ/ЦЭ и английский
            для школьников.
          </div>
          <div>© {new Date().getFullYear()} Все права защищены.</div>
        </div>
      </footer>

      {/* Модальное окно */}
      {modalImage && (
        <div className="modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setModalImage(null)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.caption}
              className="modal-img"
            />
            <div className="modal-caption">{modalImage.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
}
