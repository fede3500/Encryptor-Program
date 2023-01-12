/* We declare our constants*/

const btnEncriptar = document.getElementById("btn-encrypt");
const btnDesencriptar = document.getElementById("btn-decrypt");

/* Responsive */
function responsiveMedia(id, mq) {
  let breakpoint = window.matchMedia(mq);
  function responsive(e) {
    if (e.matches) {
      document.getElementById(id).innerHTML = document.getElementById("img");
    } else {
      document.getElementById(id).innerHTML = "";
    }
  }
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
  
}

/*  Encrypt*/
function encrypt() {
  let mensaje = document.getElementById("input-text").value;
  let arrSalida = [];
  let mensajeSalida = "";

  if (mensaje !== "") {
    for (let i = 0; i < mensaje.length; i++) {
      arrSalida.push(mensaje[i]);
    }

    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "a") arrSalida[i] = "ai";
      if (arrSalida[i] === "e") arrSalida[i] = "enter";
      if (arrSalida[i] === "i") arrSalida[i] = "imes";
      if (arrSalida[i] === "o") arrSalida[i] = "ober";
      if (arrSalida[i] === "u") arrSalida[i] = "ufat";
    }

    for (let i = 0; i < arrSalida.length; i++) {
      mensajeSalida = mensajeSalida + arrSalida[i];
    }

    imprimirEnElDom(mensajeSalida);

    document.getElementById("input-text").value = "";
    document.getElementById("copy").addEventListener("click", function () {
      let text = document.querySelector(".text-result").textContent;

      navigator.clipboard.writeText(text).then(() => {
        console.log("copied");
      });
    });
  }
}

/*  Decrypt*/

function decrypt() {
  let mensaje = document.getElementById("input-text").value;
  let arrSalida = [];
  let mensajeSalida = "";
  if (mensaje !== "") {
    for (let i = 0; i < mensaje.length; i++) {
      arrSalida.push(mensaje[i]);
    }
    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "a") {
        arrSalida[i + 1] = "";
      }
      if (arrSalida[i] === "e") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
        arrSalida[i + 4] = "";
      }
      if (arrSalida[i] === "i") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
      if (arrSalida[i] === "o") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
      if (arrSalida[i] === "u") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
    }

    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "") continue;

      if (arrSalida[i] !== "") {
        mensajeSalida = mensajeSalida + arrSalida[i];
      }
    }

    imprimirEnElDom(mensajeSalida);

    document.getElementById("input-text").value = "";

    
      document.getElementById("copy")
      document.addEventListener("click", function () {
        let text = document.querySelector(".text-result").textContent;
        navigator.clipboard.writeText(text).then(() => {
          console.log("copied");
        });
      });
  }
}

/*  Message Print*/

function imprimirEnElDom(mensaje) {
  const outputResponse = document.querySelector(".info-output");
  outputResponse.innerHTML = `
      <div class="results">
        <div class="text-result"><textarea class="textarea_result" readonly> ${mensaje}</textarea></div>
        <button id="copy">Copiar</button>
      </div>`;
}

btnEncriptar.addEventListener("click", encrypt);
btnDesencriptar.addEventListener("click", decrypt);
