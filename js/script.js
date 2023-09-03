//Hero slider
const container = document.querySelector(".hero__container")
const swiper = new Swiper('hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

//Dropdown
const params = {
  btnClassName: "js-headline-drop-btn",
  dropClassName: "js-headline-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

//Choices
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: true,
  placeholder: true,
});

//Gallery slider
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
    },

    breakpoints: {
      1679: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1400: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 34
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 38
      },

      480: {
        slidesPerView: 2,
        slidesPerGroup: 3,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});


//Accordion
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const parametrs = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(parametrs) {
  const tabBtns = document.querySelectorAll(`.${parametrs.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${parametrs.wrap}`);
    const currentContent = wrap.querySelector(`.${parametrs.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${parametrs.content}`);

    contents.forEach((el) => {
      el.classList.remove(parametrs.active);
    });

    currentContent.classList.add(parametrs.active);
    
    tabBtns.forEach((el) => {
      el.classList.remove(parametrs.active);
    });
    
    this.classList.add(parametrs.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(parametrs);


//Events slider
const slider = document.querySelector('.events__container');
const mySwiper = new Swiper('.events__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".events__pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".events__button-prev "
  },

  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 27
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

});

//Tooltip
(() => {
  tippy('.js-tooltip-btn', {
    theme: 'theme-tooltip',
    maxWidth: 264,
  });
})();

//Project slider
const slider1 = document.querySelector('.project__container');
const mySwiper1 = new Swiper('.project__swiper', {
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row"
  },

  spaceBetween: 50,

  navigation: {
    nextEl: ".project__button-next",
    prevEl: ".project__button-prev"
  },

  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    
    480: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

});


//Mask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


//Validate
new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      },
    },
    mail: {
      required: true,
      email: true,
    },
  },

  messages: {

    name: {
    required: 'Вы не ввели имя',
    minLength: 'Используйте минимум 2 символа',
    maxLength: 'Используйте не более 10 символов'
    },

    mail: 'Вы не ввели e-mail',

    tel: {
      required: 'Вы не ввели телефон',
      function: 'Нужно указать номера телефона',
    },

  },
});

//Map
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector("#map");
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.758591698878604, 37.6140144387809],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );
  
  if (window.matchMedia("(max-width: 1920px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");
  
  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  const myPlacemark = new ymaps.Placemark(
    [55.758591698878604, 37.6140144387809],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/point.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -40]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

//Modal
const galleryBtns = document.querySelectorAll('.gallery-btn');
const modalOverlay = document.querySelector('.modal');
const modal = document.querySelectorAll('.modal__container');
const modalClose = document.querySelectorAll('.modal__button');


galleryBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-modal-btn');
    document.body.classList.add('disable-scroll');
    document.querySelector(`[data-modal="${path}"]`).classList.add('modals--visible');
    modalOverlay.classList.add('modal--visible');
  });
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modal.forEach((el) => {
      el.classList.remove('modals--visible');
    });

    modalOverlay.classList.remove('modal--visible');
    document.body.classList.remove('disable-scroll');
  }
});

modalClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    modal.forEach((el) => {
      el.classList.remove('modals--visible');
    });
    modalOverlay.classList.remove('modal--visible');
    document.body.classList.remove('disable-scroll');
  });
});

let fixBlocks = document.querySelectorAll('.fix-block');

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.classList.add('disable--scroll');
  fixBlocks.forEach((el) => {
    el.stile.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
  document.body.classList.remove('disable--scroll');
  fixBlocks.forEach((el) => {
    el.stile.paddingRight = '0px';
  });
  document.body.style.paddingRight = '0px';
};

//Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

//Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('list__nav--active');

    document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('list__nav--active');

    document.body.classList.remove('stop-scroll');

  });
});

//Search
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });
  
  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });
  
  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });
  
  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});