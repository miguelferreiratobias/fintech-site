let popup = document.getElementById("popup");

function abrirPopup(){
    popup.classList.add("abrir-popup");
}
function fecharPopup(){
    popup.classList.remove("abrir-popup");
}

const ctx = document.getElementById('myChart');
          
            new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['Faculdade', 'Mercado', 'Dívidas', 'Contas', 'Aluguel'],
                datasets: [{
                  label: 'Valor mensal(R$)',
                  data: [1000, 400, 900, 280, 1350],
                  borderWidth: 1
                }]
              },
              options: {}
            });

