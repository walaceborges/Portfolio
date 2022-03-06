import React from "react";

function Contact() {
  return (
    <div className="w-screen md:h-full md:w-full flex flex-col py-8 md:pt-28">
      <div className="md:w-11/11 ">
        <div className="flex items-center justify-center md:px-96 -mx-3">
          <h2 className="text-xl font-semibold whitespace-nowrap pr-3 text-[#ED254E] md:text-2xl">
            Contact Me
          </h2>
          <hr className="w-48 border-separate border-gray-800 md:w-8/12"></hr>
        </div>
        <div className="flex flex-col items-center pt-10">
          <div className="text-center w-11/12 md:w-3/6 -mx-3">
            <p className="text-sm font-medium md:text-base">
              No momento estou procurando por oportunidades na area de
              desenvolvimento web, minha caixa de entrada está sempre aberta. Se
              você tem uma pergunta ou apenas quer dizer oi, vou tentar responder
              da melhor forma.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <form
            target="_blank"
            action="https://formsubmit.co/ca32b4dd6f1ba09172d64ddf5a2ade6a"
            method="POST"
            className="w-80 md:w-full max-w-2xl md:max-w-4xl"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nome
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Francis"
                  required
                />
                <p class="text-red-500 text-xs italic">
                  Por favor, preencha este campo.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Sobrenome
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Cutrim"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Messagem
                </label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
