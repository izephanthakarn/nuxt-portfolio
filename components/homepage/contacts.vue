<template>
  <div class="w-full flex justify-center items-center overflow-hidden py-0 lg:py-8">
    <div class="container px-5 flex flex-col justify-center items-center">
      <div class="title">
        <h1 class="head mx-auto">Contact me</h1>
      </div>
      <div class="w-full text-default lg:flex lg:space-x-12">
        <!-- Contact info -->
        <div class="w-full mt-4">
          <h1 class="subheader text-base font-semibold">Get in touch</h1>
          <p class="con-detail font-medium">You can contact me in many ways, e-mail, linkedin or facebook. If you want
            to contact
            me urgently I
            recommend you to contact me via phone number.</p>
          <div class="lg:space-y-0.5 lg:mt-4">
            <div class="con-email flex">
              <i class="uil uil-envelope text-highlight text-5xl mr-4"></i>
              <div class="flex flex-col justify-center items-start -mt-2">
                <h1 class="text-highlight text-base font-semibold">Email</h1>
                <h1 class="text-tiny font-medium">khumphai_ph@hotmail.com</h1>
              </div>
            </div>
            <div class="con-phone flex -mt-3">
              <i class="uil uil-phone text-highlight text-5xl mr-4"></i>
              <div class="flex flex-col justify-center items-start -mt-2">
                <h1 class="text-highlight text-base font-semibold">Phone</h1>
                <h1 class="text-tiny font-medium">+66 98 340 5579</h1>
              </div>
            </div>
            <div class="con-linked flex -mt-3">
              <i class="uil uil-linkedin text-highlight text-5xl mr-4"></i>
              <div class="flex flex-col justify-center items-start -mt-2">
                <h1 class="text-highlight text-base font-semibold">LinkedIn</h1>
                <h1 class="text-tiny font-medium">Phanthakarn Khumphai</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="lg:w-full lg:mt-4">
          <h1 class="subheader text-base font-semibold mb-1">Message me</h1>
          <form class="w-full" @submit.prevent="send">
            <div class="sm:flex sm:space-x-4">
              <div class="con-input1 sm:w-full">
                <label class="font-medium ml-2" for="name">Name</label>
                <input id="name" type="text" v-model="name" />
              </div>
              <div class="con-input2 sm:w-full">
                <label class="font-medium ml-2" for="email">Email</label>
                <input id="email" type="email" v-model="email" />
              </div>
            </div>
            <div class="con-input3">
              <label class="font-medium ml-2" for="subject">Subject</label>
              <input id="subject" type="text" v-model="subject" />
            </div>
            <div class="con-input4">
              <label class="font-medium ml-2" for="message">Message</label>
              <textarea id="message" v-model="message" />
            </div>

            <div class="send-button button-bg">
              <button type="submit">
                <div class="i-animation">
                  <i class="fas fa-paper-plane"></i>
                </div>
                <span>
                  Send
                </span>
              </button>
            </div>
          </form>

          <div class="modal pt-2 sm:pt-4 pb-12" :class="{'active':modal}" id="modal">
            <div class="flex justify-end mr-4">
              <i class="uil uil-x cursor-pointer text-xl" @click="isclose"></i>
            </div>
            <div class="flex flex-col px-4 sm:px-12 ">
              <i class="uil uil-check-circle text-highlight text-9xl sm:text-10xl mx-auto -mt-6"></i>
              <h1 class="text-xl font-semibold mx-auto -mt-8">Success</h1>
              <h2 class="text-lg whitespace-nowrap font-medium">Your message has been sent!</h2>
            </div>
          </div>
          <div class="overlay" :class="{'active':modal}" @click="isclose"></div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'mailtrap'
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      subject: '',
      modal: false
    }

  },
  methods: {
    isopen() {
      this.modal = true
    },
    isclose() {
      this.name = ""
      this.email = ""
      this.subject = ""
      this.message = ""
      this.modal = false
    },
    send() {
      // const { MailtrapClient } = require("mailtrap");

      // const TOKEN = "8190d83191bcfad14b28545a265a5482";
      // const ENDPOINT = "https://send.api.mailtrap.io/";

      // const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

      // const sender = {
      //   email: "mailtrap@izephanthakarn.dev",
      //   name: "Mailtrap Test",
      // };
      // const recipients = [
      //   {
      //     email: "izephanthakarn@hotmail.com",
      //   }
      // ];

      // client
      //   .send({
      //     from: sender,
      //     to: recipients,
      //     subject: "You are awesome!",
      //     text: "Congrats for sending test email with Mailtrap!",
      //     category: "Integration Test",
      //   })
      //   .then(console.log, console.error);

      // this.$mail.send({
      //   from: this.email,
      //   subject: this.subject,
      //   text: 'Hi my name is ' + this.name + "\n" + this.message,
      // })
      this.modal = true
    }
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: .2s ease-in-out;
  border: 2px solid var(--timeline-line);
  border-radius: 20px;
  z-index: 60;
  background-color: var(--color-neg);
}

.modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.overlay {
  position: fixed;
  opacity: 0;
  transition: .2s ease-in-out;
  z-index: 59;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

.head::after {
  content: "get in touch";
}

input,
textarea {
  background: var(--bg-secondary);
  box-shadow: 2px 2px 6px var(--color-shadow);
  border-radius: 20px;
  width: 100%;
  margin-bottom: 15px;
  outline: none;
  transition: all .1s;
  padding: 10px 15px;
  overflow: hidden;
}

/* input:hover,textarea:hover{
  border: 1px solid #aaa;
} */
input:focus,
textarea:focus {
  outline: solid 2px var(--color-shadow-m);
}

input {
  height: 40px;
}

textarea {
  height: 60px;
  resize: none;
}

.button-bg {
  width: 90px;
  padding: 3px 0;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-items: center;
  background: var(--first-color);
}

.button-bg button {
  width: 84px;
  /* margin-bottom: 3px; */
  border-radius: 10px;
  padding: 2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-secondary);
}

.button-bg button span {
  display: block;
  margin-left: 5px;
  transition: all 0.3s;
}

.button-bg button i {
  transform-origin: center center;
  margin-right: 0.4rem;
  transition: 0.3s;
}

.button-bg button:hover .i-animation {
  animation: fly-1 0.3s;
}

.button-bg button:hover i {
  transform: translateX(20px) rotate(45deg) scale(1);
}


.button-bg button:hover span {
  transform: translateX(50px);
}

@media (min-width:1280px) {
  .modal {
    border: 3px solid var(--timeline-line);
  }
}
</style>