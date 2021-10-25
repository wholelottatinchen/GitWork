function calcTotalAmount(){
	const percDiscountEstudiante = 0.8;
    const percDiscountTrainee = 0.5;
    const percDiscountJunior = 0.15;
	const ticketPrice = 200;
	// var percToPayEstudiante = 1 - percDiscountEstudiante;
	var percToPayEstudiante = parseFloat(1 - percDiscountEstudiante).toFixed(2);
	var percToPayTrainee = parseFloat(1 - percDiscountTrainee).toFixed(2);
	var percToPayJunior = parseFloat(1 - percDiscountJunior).toFixed(2);
	var percToPay = 0;
    var totalAmount = 0;
	
	var cantTxtTickets = document.getElementById("txtCant");
    var cantTickets = parseInt(cantTxtTickets.value);
	
	var categItem = document.getElementById("cboCateg");
    var categItemIndex = categItem.selectedIndex;
	
    switch (categItemIndex) {
        case 0:
			percToPay = percToPayEstudiante;
            break;
        case 1:
			percToPay = percToPayTrainee;
            break;
        case 2:
			percToPay = percToPayJunior;
            break;
        default:
            percToPay = 0;
            break;
    }

	totalAmount = ticketPrice*cantTickets*percToPay

	document.getElementById('txtTotal').value = "Total a pagar: $" + totalAmount;	
}

function resetValues(){
	document.getElementById('txtCant').value = "";	
	document.getElementById('txtTotal').value = "Total a pagar: $" + 0;	
}
