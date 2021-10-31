const txtInt1 = document.querySelector(".txtInt1");
const txtInt2 = document.querySelector(".txtInt2");
const dlgOp = document.querySelector(".dlgOp");
const button = document.querySelector("button");
const lbl = document.querySelector("label");
button.onclick = () => {
	if (txtInt1.value.trim() === "" || txtInt2.value.trim() === "") {
		alert("please enter a value");
	}
          // this looks worse than my self portrait i drew in Pre-K
     if(dlgOp.value === '+'){
          let sum = Number(txtInt1.value) + Number(txtInt2.value);
          alert(sum)
     }else if (dlgOp.value === '-'){
          let difference = Number(txtInt1.value) - Number(txtInt2.value);
          alert(difference)
     }else if(dlgOp.value === '*'){
          let product = Number(txtInt1.value) * Number(txtInt2.value);
          alert(product)
     }else{
          let division = Number(txtInt1.value) / Number(txtInt2.value);
          alert(division)
     }
};
