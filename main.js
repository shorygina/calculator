var str = '';
var counter = 0, o1 = 1, o2 = 1, oper = 0, result = 0, sg = 0;
document.getElementById('buttonAdd').disabled = true;
	document.getElementById('buttonSub').disabled = true;
	document.getElementById('buttonMult').disabled = true;
	document.getElementById('buttonDiv').disabled = true;
	document.getElementById('buttonEq').disabled = true;
			button0.onclick = function() {
				str = str + '0';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button1.onclick = function() {
				str = str + '1';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button2.onclick = function() {
				str = str + '2';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button3.onclick = function() {
				str = str + '3';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button4.onclick = function() {
				str = str + '4';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button5.onclick = function() {
				str = str + '5';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button6.onclick = function() {
				str = str + '6';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button7.onclick = function() {
				str = str + '7';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button8.onclick = function() {
				str = str + '8';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			button9.onclick = function() {
				str = str + '9';
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			buttonDiv.onclick = function() {
				findOperand();
				str = str + String.fromCharCode(247);
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 4;
			}
			buttonMult.onclick = function() {
				findOperand();
				str = str + String.fromCharCode(215);
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 3;
			}
			buttonSub.onclick = function() {
				findOperand();
				str = str + String.fromCharCode(45);
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 2;
			}
			buttonAdd.onclick = function() {
				findOperand();
				str = str + '+';
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 1;
			}
			buttonC.onclick = function() {
				counter = 0;
				sg = 0;
				oper = 0;
				str = '';
				document.getElementById('curr').innerHTML = str;
				allDisable();
			}
			buttonPercent.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = o1/100;
				document.getElementById('buttonEq').disabled = true;
				str = String(result);
				document.getElementById('curr').innerHTML = str;
				allEnable();
			}
			buttonPlusMinus.onclick = function() {
				o1 = parseFloat(str);
				if (o1 > 0) {
					str = "-" + str;
					document.getElementById('curr').innerHTML = str;
					allEnable();
					//eqPermission();
				}

				else {
					str = str.substring(1);
					document.getElementById('curr').innerHTML = str;
					allEnable();
					eqPermission();
				}
			}
			buttonPi.onclick = function() {
				/*if (parseInt(str.charAt(str.length-1)) == 0) str = str + Math.PI;
				else str = Math.PI;*/
				if (str.length != 0 && (str.charAt(str.length-1) == '0' || str.charAt(str.length-1) == '1' || str.charAt(str.length-1) == '2' || str.charAt(str.length-1) == '3' || str.charAt(str.length-1) == '4' || str.charAt(str.length-1) == '5' || str.charAt(str.length-1) == '6' || str.charAt(str.length-1) == '7' || str.charAt(str.length-1) == '8' || str.charAt(str.length-1) == '9'))
					str = Math.PI;
				else str = str + Math.PI;
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			buttonE.onclick = function() {
				if (str.length != 0 && (str.charAt(str.length-1) == '0' || str.charAt(str.length-1) == '1' || str.charAt(str.length-1) == '2' || str.charAt(str.length-1) == '3' || str.charAt(str.length-1) == '4' || str.charAt(str.length-1) == '5' || str.charAt(str.length-1) == '6' || str.charAt(str.length-1) == '7' || str.charAt(str.length-1) == '8' || str.charAt(str.length-1) == '9'))
					str = Math.E;
				else str = str + Math.E;
				document.getElementById('curr').innerHTML = str;
				allEnable();
				eqPermission();
			}
			buttonLog.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				if (o1 <= 0)
					alert('Not allowed operation!');
				else {
					result = Math.log10(o1)
					unaryOperations();
				}
			}
			buttonLn.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				if (o1 <= 0)
					alert('Not allowed operation!');
				else {
					result = Math.log(o1)
					unaryOperations();
				}
			}
			buttonEpowX.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.pow(Math.E, o1);
				unaryOperations();
			}
			buttonSin.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.sin(o1);
				unaryOperations();
			}
			buttonCos.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.cos(o1);
				unaryOperations();
			}
			buttonTan.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.tan(o1);
				unaryOperations();
			}
			buttonSinh.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.sinh(o1);
				unaryOperations();
			}
			buttonCosh.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.cosh(o1);
				unaryOperations();
			}
			buttonTanh.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.tanh(o1);
				unaryOperations();
			}
			buttonXpow2.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.pow(o1, 2);
				unaryOperations();
			}
			buttonXpow3.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.pow(o1, 3);
				unaryOperations();
			}
			buttonXpowY.onclick = function() {
				findOperand();
				str = str + '^';
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 6;
			}
			buttonSqrt2.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				if (o1 < 0)
					alert('Denied operation!');
				else {
					result = Math.sqrt(o1);
					document.getElementById('buttonEq').disabled = true;
					str = String(result);
					document.getElementById('curr').innerHTML = str;
				}
			}
			buttonSqrt3.onclick = function() {
				document.getElementById('curr').innerHTML = str;
				o1 = parseFloat(str);
				result = Math.cbrt(o1);
				unaryOperations();
			}
			buttonSqrtY.onclick = function() {
				findOperand();
				str = str + ' ';
				document.getElementById('curr').innerHTML = str;
				counter++;
				allDisable();
				oper = 7;
			}
			buttonEq.onclick = function() {
				counter = 0;
				o2 = parseFloat(str.slice(sg+1, str.length));
				if (o2 == 0 && (oper == 4 || oper == 7))
					alert('Not allowed operation!');
				else {
					switch(oper) {
						case 1:
							result = o1 + o2;
							break;
						case 2:
							result = o1 - o2;
							break;
						case 3:
							result = o1*o2;
							break;
						case 4:
							result = o1/o2;
							break;
						case 5:
							result = o1/100;
							break;
						case 6:
							result = Math.pow(o1, o2);
							break;
						case 7:
							if (o1 < 0 && o2 % 2 == 0)
								alert('Not allowed operation!');
							else
								result = anyRoot(o1, o2);
							break;
						}
					unaryOperations();
				}
			}
function allEnable() {
	document.getElementById('buttonSub').disabled = false;
	document.getElementById('buttonMult').disabled = false;
	document.getElementById('buttonDiv').disabled = false;
	document.getElementById('buttonAdd').disabled = false;
	document.getElementById('buttonPercent').disabled = false;
	document.getElementById('buttonPlusMinus').disabled = false;
	document.getElementById('buttonLn').disabled = false;
	document.getElementById('buttonLog').disabled = false;
	document.getElementById('buttonEpowX').disabled = false;
	document.getElementById('buttonSin').disabled = false;
	document.getElementById('buttonCos').disabled = false;
	document.getElementById('buttonTan').disabled = false;
	document.getElementById('buttonSinh').disabled = false;
	document.getElementById('buttonCosh').disabled = false;
	document.getElementById('buttonTanh').disabled = false;
	document.getElementById('buttonXpow2').disabled = false;
	document.getElementById('buttonXpow3').disabled = false;
	document.getElementById('buttonXpowY').disabled = false;
	document.getElementById('buttonSqrt2').disabled = false;
	document.getElementById('buttonSqrt3').disabled = false;
	document.getElementById('buttonSqrtY').disabled = false;
}

function allDisable() {
	document.getElementById('buttonSub').disabled = true;
	document.getElementById('buttonMult').disabled = true;
	document.getElementById('buttonDiv').disabled = true;
	document.getElementById('buttonAdd').disabled = true;
	document.getElementById('buttonPercent').disabled = true;
	document.getElementById('buttonPlusMinus').disabled = true;
	document.getElementById('buttonLn').disabled = true;
	document.getElementById('buttonLog').disabled = true;
	document.getElementById('buttonEpowX').disabled = true;
	document.getElementById('buttonSin').disabled = true;
	document.getElementById('buttonCos').disabled = true;
	document.getElementById('buttonTan').disabled = true;
	document.getElementById('buttonSinh').disabled = true;
	document.getElementById('buttonCosh').disabled = true;
	document.getElementById('buttonTanh').disabled = true;
	document.getElementById('buttonXpow2').disabled = true;
	document.getElementById('buttonXpow3').disabled = true;
	document.getElementById('buttonXpowY').disabled = true;
	document.getElementById('buttonSqrt2').disabled = true;
	document.getElementById('buttonSqrt3').disabled = true;
	document.getElementById('buttonSqrtY').disabled = true;
}

function findOperand() {
	o1 = parseFloat(str);
	sg = str.length;
}

function eqPermission() {
	if (counter == 1) {
		allDisable();
		document.getElementById('buttonEq').disabled = false;
	}
}

function unaryOperations() {
	str = String(result);
	document.getElementById('buttonEq').disabled = true;
	document.getElementById('curr').innerHTML = str;
	allEnable();
}

function anyRoot(x, n) {
    var signum = n % 2 == 1 && x < 0;
    if(signum)
      x = -x;
    var val = Math.pow(x, 1 / n);
    return signum ? -val : val;
}