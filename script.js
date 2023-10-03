    function calcularPercentualGordura() {
      var somaDobras = 0;
      var idade = parseInt(document.getElementById("idade").value);
      
      // Obter os valores das dobras cutâneas
      var triceps = parseFloat(document.getElementById("triceps").value);
      var subescapular = parseFloat(document.getElementById("subescapular").value);
      var axilarMedia = parseFloat(document.getElementById("axilarMedia").value);
      var peitoral = parseFloat(document.getElementById("peitoral").value);
      var abdominal = parseFloat(document.getElementById("abdominal").value);
      var supraIliaca = parseFloat(document.getElementById("supraIliaca").value);
      var coxa = parseFloat(document.getElementById("coxa").value);

      //Obtendo a soma das dobras
      var somaDobras = triceps + subescapular + axilarMedia + peitoral + abdominal + supraIliaca + coxa;
            
      // Calcular a densidade corporal de acordo com o protocolo e o gênero
      if(protocolo.value == "SeteDobras"){
        if (genero.value == "homem") {
          var densidadeCorporal = 1.112 - (0.00043499 * somaDobras) + (0.00000055 * somaDobras * somaDobras) - (0.00028826 * idade);
        }
        else if (genero.value == "mulher") {
          var densidadeCorporal = 1.097 - (0.00046971 * somaDobras) + (0.00000056 * somaDobras * somaDobras) - (0.00012828 * idade);
        }
      }
      else if(protocolo.value == "TresDobras"){
        if (genero.value == "homem") {
          var densidadeCorporal = 1.10938 - (0.0008267 * somaDobras) + (0.0000016 * somaDobras * somaDobras) - (0.0002574 * idade);
        }
        else if (genero.value == "mulher") {
          var densidadeCorporal = 1.099421 - (0.0009929 * somaDobras) + (0.0000023 * somaDobras * somaDobras) - (0.0001392 * idade);
        }
      }

      //Calcular o percentual de gordura
      var percentualGordura = ((4.95 / densidadeCorporal) - 4.5) * 100;

      //Calcular o imc
      var imc = (peso.value/(altura.value*altura.value))

      //Composição corporal
      var gorduraTotal = (percentualGordura*peso.value)/100;
      var livreDeGordura = peso.value - gorduraTotal;
      
      // Exibir o resultado na página
      document.getElementById("resultado").innerHTML = "Percentual de Gordura: " + percentualGordura.toFixed(2) + " %";
      document.getElementById("resultadoIMC").innerHTML = "IMC: " + imc.toFixed(2);
      document.getElementById("resultadoGorduraTotal").innerHTML = "Massa de gordura: " + gorduraTotal.toFixed(2) + " Kg";
      document.getElementById("resultadoLivreDeGordura").innerHTML = "Massa  livre de gordura: " + livreDeGordura.toFixed(2) + " Kg";
    }
      //Habilitando ou desabilitando campos de acordo com o protocolo
    function qualprotocolo() {
      if(protocolo.value == "TresDobras") {
        if(genero.value == "homem") {
          triceps.disabled = true;
          triceps.value = "0";
          peitoral.disabled = false;
          subescapular.disabled = true;
          subescapular.value = "0";
          supraIliaca.disabled = true;
          supraIliaca.value = "0";
          abdominal.disabled = false;
          axilarMedia.disabled = true;
          axilarMedia.value = "0";
          coxa.disabled = false;
        }
        else {
          triceps.disabled = false;
          peitoral.disabled = true;
          peitoral.value = "0";
          subescapular.disabled = true;
          subescapular.value = "0";
          supraIliaca.disabled = false;
          abdominal.disabled = true;
          abdominal.value = "0";
          axilarMedia.disabled = true;
          axilarMedia.value = "0";
          coxa.disabled = false;
        }        
      }
      else if(protocolo.value == "SeteDobras") {
          triceps.disabled = false;
          triceps.value = "0";
          peitoral.disabled = false;
          peitoral.value = "0";
          subescapular.disabled = false;
          subescapular.value = "0";
          supraIliaca.disabled = false;
          supraIliaca.value = "0";
          abdominal.disabled = false;
          abdominal.value = "0";
          axilarMedia.disabled = false;
          axilarMedia.value = "0";
          coxa.disabled = false;
          coxa.value = "0";
      }
    }
    //Separando as funções em abas
    function mostrarAba(abaId) {
        var abas = document.getElementsByClassName("tab-content");
        for (var i = 0; i < abas.length; i++) {
          abas[i].classList.remove("active");
        }
  
        var aba = document.getElementById(abaId);
        aba.classList.add("active");
      }
    //Calcular e exibir o valor do RCQ (Razão Cintura-Quadril)
      function calcularRCQ()  {
     
      rcq = (cintura.value/quadril.value);
      document.getElementById("resultadoRCQ").innerHTML = "RCQ: " + rcq.toFixed(2);

    }