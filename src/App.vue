<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { register } from 'swiper/element/bundle'
import Header from './components/Header.vue'
import { ref, onMounted, reactive } from 'vue'
import { useBlocksStore } from './stores/blocks.js'
import { vMaska } from 'maska'
register()

const blocksStore = useBlocksStore()

const swiperUI = ref()
const swiperPartnersUI = ref()
const about = ref()
const partners = ref()
const contacts = ref()
const registerBlock = ref()

const optionsMask = reactive({
  mask: '+7 (###) ###-##-##'
})

const phone = ref('+7')
const registerForm = ref()

function scrollToAbout() {
  about.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}

function scrollToPartners() {
  partners.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}

function scrollToRegister() {
  registerBlock.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}

function scrollToContacts() {
  contacts.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}

function showAnswers() {
  const answers = document.querySelector('.info-answers')
  console.log(answers)
  answers.style.height = `${answers.scrollHeight}px`
  answers.style.color = '#ebebeb'
  const arrow = document.querySelector('.info__arrow')
  console.log(arrow)
  arrow.style.transform = 'rotate(180deg)'
}

async function sendData(event) {
  event.preventDefault()

  const formSend = new FormData(registerForm.value)
  await fetch('#', {
    method: 'POST',
    body: formSend
  })
}

const swiperParams = {
  loading: 'lazy',
  spaceBetween: 20,
  freeMode: true,
  speed: 50,
  // slidesPerView: auto
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 5
    },

    480: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },

    630: {
      slidesPerView: 3
    },

    1000: {
      slidesPerView: 'auto'
    },

    1920: {
      slidesPerView: 'auto'
    }
  }
}

const swiperPartnersParams = {
  loading: 'lazy',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000
  },
  freeMode: true,
  // freeMode: true,
  // speed: 50,
  // slidesPerView: auto
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },

    480: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },

    1000: {
      slidesPerView: 6,
      spaceBetween: 40
    },

    1920: {
      slidesPerView: 'auto'
    }
  }
}

onMounted(() => {
  Object.assign(swiperUI.value, swiperParams)
  console.log(swiperUI.value)
  swiperUI.value.initialize()

  Object.assign(swiperPartnersUI.value, swiperPartnersParams)
  swiperPartnersUI.value.initialize()

  blocksStore.aboutBlock = about.value
  blocksStore.partnersBlock = partners.value
  blocksStore.contactsBlock = contacts.value
  blocksStore.registerBlock = registerBlock.value
})
</script>

<template>
  <div class="main-wrapper">
    <header>
      <Header />
    </header>

    <main>
      <section class="invitation">
        <div class="container">
          <div class="header_desktop">
            <div class="header-wrapper_desktop">
              <img src="./assets/svg/logo.svg" alt="logo" class="header__logo_desktop" />

              <span class="header__item_desktop" @click="scrollToAbout()">About</span>

              <span class="header__item_desktop" @click="scrollToPartners()">Partners</span>

              <span class="header__item_desktop" @click="scrollToContacts()">Contacts</span>
            </div>

            <span class="header__item-register_desktop" @click="scrollToRegister()">Register</span>
          </div>

          <div class="invitation-wrapper">
            <h1 class="invitation__title">We’re waiting for YOU to make some big changes!</h1>

            <h1 class="invitation__title_desktop">Welcome to the Coolest Event of Ever!</h1>

            <h2 class="invitation__subtitle_desktop">
              We are waiting for you to make some big changes!
            </h2>

            <button class="invitation__btn">Join Us Now!</button>
          </div>
        </div>
      </section>

      <section class="about" ref="about">
        <div class="container">
          <div class="about-wrapper">
            <div class="about-wrapper_desktop">
              <div class="about-title-wrapper">
                <h2 class="about__title">What is a NetDay?</h2>

                <ul class="about-list">
                  <li class="about-list__item">
                    NetDay is an annual event designed to inspire and empower the next generation of
                    enthusiasts.
                  </li>

                  <li class="about-list__item">
                    NetDay includes Computer Networks, Cybersecurity and Linux Administration.
                  </li>

                  <li class="about-list__item">
                    This dynamic and knowledge-intensive event spans across
                    <span class="about-list__item_decoration">2-3 days</span>.
                  </li>

                  <li class="about-list__item">
                    NetDay offers a platform for students and masters to showcase their talents and
                    passion.
                  </li>
                </ul>
              </div>

              <div class="desktop_animation_video">
                <video
                  preload="metadata"
                  autoplay
                  loop="loop"
                  playsinline
                  muted
                  class="destop_anm_video"
                  webkit-playinginline
                >
                  <source src="./assets/img/animation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <swiper-container ref="swiperUI" init="false" class="about-carousel">
              <swiper-slide class="about-carousel__item about-carousel-item">
                <h3 class="about-carousel-item__title">1<sup>st</sup> tour</h3>

                <div class="about-carousel-item-wrapper">
                  <span class="about-carousel-item__time">12.10, 14:00</span>
                  <span class="about-carousel-item__theme">Online Test</span>
                </div>
              </swiper-slide>

              <swiper-slide class="about-carousel__item about-carousel-item"
                ><h3 class="about-carousel-item__title">2<sup>nd</sup> tour</h3>
                <div class="about-carousel-item-wrapper">
                  <span class="about-carousel-item__time">26.10, 10:00</span>
                  <span class="about-carousel-item__theme">Packet Tracer Task (Offline)</span>
                </div></swiper-slide
              >

              <swiper-slide class="about-carousel__item about-carousel-item"
                ><h3 class="about-carousel-item__title">3<sup>rd</sup> tour</h3>
                <div class="about-carousel-item-wrapper">
                  <span class="about-carousel-item__time">27.10, 16:00</span>
                  <span class="about-carousel-item__theme">Quest Speech (Offline)</span>
                </div></swiper-slide
              >
            </swiper-container>

            <!-- saf  -->
            <div class="about-carousel_desktop">
              <div class="about-carousel__item_desktop about-carousel-item_desktop">
                <h3 class="about-carousel-item__title_desktop">1<sup>st</sup> tour</h3>

                <div class="about-carousel-item-wrapper_desktop">
                  <span class="about-carousel-item__time_desktop">12.10, 14:00</span>
                  <span class="about-carousel-item__theme_desktop">Online Test</span>
                </div>
              </div>

              <div class="about-carousel__item_desktop about-carousel-item_desktop">
                <h3 class="about-carousel-item__title_desktop">2nd tour</h3>
                <div class="about-carousel-item-wrapper_desktop">
                  <span class="about-carousel-item__time_desktop">26.10, 10:00</span>
                  <span class="about-carousel-item__theme_desktop"
                    >Packet Tracer Task (Offline)</span
                  >
                </div>
              </div>

              <div class="about-carousel__item_desktop about-carousel-item_desktop">
                <h3 class="about-carousel-item__title_desktop">3rd tour</h3>
                <div class="about-carousel-item-wrapper_desktop">
                  <span class="about-carousel-item__time_desktop">27.10, 16:00</span>
                  <span class="about-carousel-item__theme_desktop">Quest Speech (Offline)</span>
                </div>
              </div>
            </div>

            <div class="info">
              <div class="info-wrapper" @click="showAnswers()">
                <h3 class="info__title">Click to see more detailed info</h3>

                <img src="./assets/svg/arrow.svg" alt="arrow" class="info__arrow" />
              </div>

              <div class="info-answers">
                <ul class="info-answers-list">
                  <li class="info-answers-list__item">
                    <h4 class="info-asnwers-list__title">3 Nov - Registration Closes</h4>
                  </li>

                  <li class="info-answers-list__item">
                    <h4 class="info-asnwers-list__title">4 Nov - First Tour (Online Test)</h4>
                    <p class="info-answers-list__text">
                      The first round will be conducted in an online format and will include
                      multiple-choice, fill-in-the-blank, true or false, and similar test questions.
                    </p>
                  </li>

                  <li class="info-answers-list__item">
                    <h4 class="info-asnwers-list__title">5 - 17 Nov - Trainings (Online)</h4>
                    <p class="info-answers-list__text">
                      Participants who advance to the second round will undergo training before the
                      start of the next stage. Online guest lectures from industry experts and
                      representatives of global academies are expected. Participants will be given
                      access to the courses and platforms of the Cisco, RedHat and Fortinet
                      academies.
                    </p>
                  </li>

                  <li class="info-answers-list__item">
                    <h4 class="info-asnwers-list__title">18 Nov - Second Tour (Offline)</h4>
                    <p class="info-answers-list__text">
                      Packet Tracer Task The second round is an exciting offline segment held in the
                      state-of-the-art computer labs of SDU University. Here, participants put their
                      skills to the test by configuring and troubleshooting network systems,
                      particularly focusing on IOS.
                    </p>
                  </li>

                  <li class="info-answers-list__item">
                    <h4 class="info-asnwers-list__title">18 - 19 - Third Tour (Offline)</h4>
                    <p class="info-answers-list__text">
                      Quest and Real-life Challenges The third round is presented in the format of
                      an offline quest and offers an introduction to real-life challenges from the
                      industry, in which 10 teams of 3 participants each will take part. The
                      participants jointly develop innovative solutions and present them to the
                      experts and jury.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="awards">
        <div class="container">
          <div class="awards-wrapper">
            <h2 class="awards__title">Awards</h2>

            <ul class="awards__list awards-list">
              <li class="awards-list__item">
                <h3 class="awards-list__title">
                  2<sup class="awards-list__title_up">nd</sup> Place
                </h3>

                <ul class="awards-list__sublist awards-list-sublist">
                  <li class="awards-list-sublist__item">CCNA, NSE4 and RHCSA vouchers</li>
                </ul>
              </li>

              <li class="awards-list__item">
                <p class="awards-list__title">1<sup class="awards-list__title_up">st</sup> Place</p>

                <ul class="awards-list__sublist awards-list-sublist">
                  <li class="awards-list-sublist__item">Intership</li>
                  <li class="awards-list-sublist__item">CCNA, NSE4 and RHCSA vouchers</li>
                </ul>
              </li>

              <li class="awards-list__item">
                <h3 class="awards-list__title">
                  3<sup class="awards-list__title_up">rd</sup> Place
                </h3>

                <ul class="awards-list__sublist awards-list-sublist">
                  <li class="awards-list-sublist__item">CCNA Vouchers</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="register" ref="registerBlock">
        <div class="container">
          <div class="register-wrapper">
            <div class="register-title-wrapper">
              <h2 class="register__title">Register now</h2>

              <p class="register__text">
                and be ready to gain beneficial experience and profitable networking
              </p>

              <p class="register__admission">admission - 1500 tg</p>
            </div>

            <form
              action="#"
              method="POST"
              id="registerForm"
              class="register__form"
              name="registerForm"
              ref="registerForm"
            >
              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="name"
                required
                placeholder="Name"
                class="register__input"
              />

              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="surname"
                required
                placeholder="Surname"
                class="register__input"
              />

              <input
                type="email"
                autocomplete="off"
                form="registerForm"
                name="email"
                required
                placeholder="Email"
                class="register__input"
              />

              <input
                type="tel"
                autocomplete="off"
                form="registerForm"
                name="phoneNumber"
                required
                v-maska:[optionsMask]
                v-model="phone"
                placeholder="Phone number"
                class="register__input"
              />

              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="country"
                required
                placeholder="Select country"
                class="register__input"
              />

              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="university"
                required
                placeholder="University"
                class="register__input"
              />

              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="Major"
                required
                placeholder="Major"
                class="register__input"
              />

              <input
                type="text"
                autocomplete="off"
                form="registerForm"
                name="course"
                required
                placeholder="Course"
                class="register__input"
              />

              <button
                type="submit"
                form="registerForm"
                formmethod="POST"
                name="button"
                class="register__button"
                @click="sendData"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="partners" ref="partners">
        <div class="container">
          <div class="partners-wrapper">
            <h2 class="partners__title">Partners</h2>

            <div class="register-partners">
              <img src="./assets/svg/redhat.svg" alt="redhat" class="register-partners__item" />

              <img src="./assets/svg/cisco.svg" alt="cisco" class="register-partners__item" />

              <img src="./assets/svg/fortinet.svg" alt="fortinet" class="register-partners__item" />

              <img src="./assets/svg/sdu.svg" alt="sdu" class="register-partners__item" />

              <img src="./assets/svg/cycnet.svg" alt="cycnet" class="register-partners__item" />

              <img src="./assets/svg/jko.svg" alt="jko" class="register-partners__item" />
            </div>

            <swiper-container ref="swiperPartnersUI" init="false" class="register-carousel">
              <swiper-slide class="register-carousel__item">
                <img src="./assets/svg/redhat.svg" alt="redhat" class="register-carousel__logo" />
              </swiper-slide>

              <swiper-slide class="register-carousel__item">
                <img src="./assets/svg/cisco.svg" alt="cisco" class="register-carousel__logo" />
              </swiper-slide>

              <swiper-slide class="register-carousel__item">
                <img
                  src="./assets/svg/fortinet.svg"
                  alt="fortinet"
                  class="register-carousel__logo"
                />
              </swiper-slide>

              <swiper-slide class="register-carousel__item">
                <img src="./assets/svg/sdu.svg" alt="sdu" class="register-carousel__logo" />
              </swiper-slide>

              <swiper-slide class="register-carousel__item">
                <img src="./assets/svg/cycnet.svg" alt="cycnet" class="register-carousel__logo" />
              </swiper-slide>

              <swiper-slide class="register-carousel__item">
                <img src="./assets/svg/jko.svg" alt="jko" class="register-carousel__logo" />
              </swiper-slide>
            </swiper-container>

            <p class="register__invitation-partners">Would like to join to the list of partners?</p>
          </div>
        </div>
      </section>

      <section class="contacts" ref="contacts">
        <div class="container">
          <h2 class="contacts__title">Contacts</h2>
          <div class="contacts-wrapper">
            <div class="contacts-title-wrapper">
              <p class="contacts__text">Ready to answer all your questions</p>

              <ul class="contacts__list contacts-list">
                <li class="contacts-list__item">
                  <img
                    src="./assets/svg/mail.svg"
                    alt="email"
                    class="contacts-list__social-medias-logo"
                  />
                  <p class="contacts-list__social-medias-text">netday@sdu.edu.kz</p>
                </li>

                <li class="contacts-list__item">
                  <img
                    src="./assets/svg/telegram.svg"
                    alt="telegram"
                    class="contacts-list__social-medias-logo"
                  />
                  <p class="contacts-list__social-medias-text">@sdunetday</p>
                </li>
              </ul>
            </div>

            <div style="position: relative; overflow: hidden" class="contacts-map-wrapper">
              <a
                href="https://yandex.kz/maps/org/1606734818/?utm_medium=mapframe&utm_source=maps"
                style="color: #eee; font-size: 12px; position: absolute; top: 0px"
                >Университет им. Сулеймана Демирель</a
              ><a
                href="https://yandex.kz/maps/29458/kaskalen/category/university/184106140/?utm_medium=mapframe&utm_source=maps"
                style="color: #eee; font-size: 12px; position: absolute; top: 14px"
                >ВУЗ в Каскелене</a
              ><iframe
                src="https://yandex.kz/map-widget/v1/?ll=76.670416%2C43.207436&mode=search&oid=1606734818&ol=biz&z=17.11"
                frameborder="1"
                allowfullscreen="true"
                style="position: relative"
                class="contacts__map"
              ></iframe>
            </div>

            <span class="contacts__year">2023 CYCNET</span>
          </div>
        </div>
      </section>

      <section class="cycnet">
        <div class="container">
          <div class="cycnet-wrapper">
            <span class="cycnet__year">2023 CYCNET</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped src="./assets/css/app.css"></style>
