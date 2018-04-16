//Creamos el objeto.
var Calculadora = {

	//Metodo para inicializar las otras funciones.
	init: function() {
		this.funcionesTeclado();
		this.formatoBotones();
		this.limpiarDisplay();
	},
	// Tecla presionada reduzca su tamaño
	formatoBotones: function() {
		document.getElementById('0').addEventListener('mousedown', function() {
			document.getElementById('0').setAttribute("style", "transform: scale(0.95, 0.95)")
		});

		document.getElementById('0').addEventListener('mouseout', function() {
			document.getElementById('0').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('1').addEventListener('mousedown', function() {
			document.getElementById('1').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('1').addEventListener('mouseout', function() {
			document.getElementById('1').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('2').addEventListener('mousedown', function() {
			document.getElementById('2').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('2').addEventListener('mouseout', function() {
			document.getElementById('2').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('3').addEventListener('mousedown', function() {
			document.getElementById('3').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('3').addEventListener('mouseout', function() {
			document.getElementById('3').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('4').addEventListener('mousedown', function() {
			document.getElementById('4').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('4').addEventListener('mouseout', function() {
			document.getElementById('4').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('5').addEventListener('mousedown', function() {
			document.getElementById('5').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('5').addEventListener('mouseout', function() {
			document.getElementById('5').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('6').addEventListener('mousedown', function() {
			document.getElementById('6').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('6').addEventListener('mouseout', function() {
			document.getElementById('6').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('7').addEventListener('mousedown', function() {
			document.getElementById('7').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('7').addEventListener('mouseout', function() {
			document.getElementById('7').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('8').addEventListener('mousedown', function() {
			document.getElementById('8').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('8').addEventListener('mouseout', function() {
			document.getElementById('8').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('9').addEventListener('mousedown', function() {
			document.getElementById('9').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('9').addEventListener('mouseout', function() {
			document.getElementById('9').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('on').addEventListener('mousedown', function() {
			document.getElementById('on').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('on').addEventListener('mouseout', function() {
			document.getElementById('on').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('mas').addEventListener('mousedown', function() {
			document.getElementById('mas').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('mas').addEventListener('mouseout', function() {
			document.getElementById('mas').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('menos').addEventListener('mousedown', function() {
			document.getElementById('menos').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('menos').addEventListener('mouseout', function() {
			document.getElementById('menos').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('por').addEventListener('mousedown', function() {
			document.getElementById('por').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('por').addEventListener('mouseout', function() {
			document.getElementById('por').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('dividido').addEventListener('mousedown', function() {
			document.getElementById('dividido').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('dividido').addEventListener('mouseout', function() {
			document.getElementById('dividido').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('punto').addEventListener('mousedown', function() {
			document.getElementById('punto').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('punto').addEventListener('mouseout', function() {
			document.getElementById('punto').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('igual').addEventListener('mousedown', function() {
			document.getElementById('igual').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('igual').addEventListener('mouseout', function() {
			document.getElementById('igual').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('sign').addEventListener('mousedown', function() {
			document.getElementById('sign').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('sign').addEventListener('mouseout', function() {
			document.getElementById('sign').setAttribute("style", "transform: scale(1,1)")
		});

		document.getElementById('raiz').addEventListener('mousedown', function() {
			document.getElementById('raiz').setAttribute("style", "transform: scale(0.95,0.95)")
		});

		document.getElementById('raiz').addEventListener('mouseout', function() {
			document.getElementById('raiz').setAttribute("style", "transform: scale(1,1)")
		});
	},

	//Funciones del teclado.
	funcionesTeclado: function() {

		var self = this;
		document.getElementById('0').addEventListener('click', function() {
			self.agregarValor(0);
		});

		document.getElementById('1').addEventListener('click', function() {
			self.agregarValor(1);
		});

		document.getElementById('2').addEventListener('click', function() {
			self.agregarValor(2);
		});

		document.getElementById('3').addEventListener('click', function() {
			self.agregarValor(3);
		});

		document.getElementById('4').addEventListener('click', function() {
			self.agregarValor(4);
		});

		document.getElementById('5').addEventListener('click', function() {
			self.agregarValor(5);
		});

		document.getElementById('6').addEventListener('click', function() {
			self.agregarValor(6);
		});

		document.getElementById('7').addEventListener('click', function() {
			self.agregarValor(7);
		});

		document.getElementById('8').addEventListener('click', function() {
			self.agregarValor(8);
		});

		document.getElementById('9').addEventListener('click', function() {
			self.agregarValor(9);
		});

		document.getElementById('punto').addEventListener('click', function() {
			self.agregarPunto();
		});

		document.getElementById('sign').addEventListener('click', function() {
			self.agregarSigno();
		});

		document.getElementById('mas').addEventListener('click', function() {
			self.operador('+');
		});

		document.getElementById('menos').addEventListener('click', function() {
			self.operador('-');
		});

		document.getElementById('por').addEventListener('click', function() {
			self.operador('*');
		});

		document.getElementById('dividido').addEventListener('click', function() {
			self.operador('/');
		});

		document.getElementById('igual').addEventListener('click', function() {
			self.calcular();
		});

	},

	// Agregar valor al display
	agregarValor: function(valor) {
		elemento = document.getElementById('display');
		if (sessionStorage.result == 1) {
			elemento.innerHTML = valor;
			sessionStorage.result = 0;
		} else {
			if (elemento.innerHTML == '0') {
				elemento.innerHTML = valor;
			} else {
				var displayNew = elemento.innerHTML + valor;
				var displayOptimo = this.numeroDigitos(displayNew);
				elemento.innerHTML = displayOptimo;
			}
		}

	},

	// valida que se muestren 8 numeros en display
	numeroDigitos: function(valor) {
		var valor = String(valor);
		return valor.substring(0, 8);
	},

	soloUnPunto: function(elpunto) {
		var elpunto = new String(elpunto);
		return elpunto.substring(0,1);
	},
	// Agregar el punto.
	agregarPunto: function(addPunto) {
		var display = document.getElementById('display');
			if (display.textContent == '0') {
				display.textContent = display.textContent + '.';
			} else if (display.textContent.indexOf('.') == -1) {
					display.textContent = display.textContent + '.';
			} else {
					display.textContent;
			}
	},

	//Signo +/-
	agregarSigno: function() {
		var signo = document.getElementById('display');
		if (signo.textContent == 0) {
			signo.textContent = signo.textContent;
		} else if (signo.textContent.indexOf('-') != -1) {
				signo.textContent = signo.textContent.substring(1);
		} else {
			signo.textContent = '-' + signo.textContent
		}
	},

	// Tipo de operación
	operador: function(op) {
		operacion = 0;
		display = document.getElementById('display');
		if (op.indexOf('*') > -1) {operacion = 1;};
		if (op.indexOf('/') > -1) {operacion = 2;};
		if (op.indexOf('+') > -1) {operacion = 3;};
		if (op.indexOf('-') > -1) {operacion = 4;};

		memoria = display.textContent;
		display.textContent = "";
	},

	//Realizar la operación
	calcular: function() {
		display = document.getElementById('display');
		if (operacion == 1) {display.textContent = eval(memoria) * eval(display.textContent); };
		if (operacion == 2) {display.textContent = (eval(memoria) / eval(display.textContent)).toFixed(3); };
		if (operacion == 3) {display.textContent = eval(memoria) + eval(display.textContent); };
		if (operacion == 4) {display.textContent = eval(memoria) - eval(display.textContent); };

		operacion = 0;
		memoria = "0";

	},

	// Limpiar Display
	limpiarDisplay: function() {
		document.getElementById('on').addEventListener('click', function() {
			document.getElementById('display').innerHTML = "0";
			memoria = "";
			operacion = "";
			display.textContent = 0;
		});
	},

}

Calculadora.init();