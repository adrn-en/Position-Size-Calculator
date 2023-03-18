const margin = document.getElementById('margin'),
	leverage = document.getElementById('leverage'),
	takeprofit = document.getElementById('tp'),
	stoploss = document.getElementById('sl'),
	capital_risk = document.getElementById('risk'),
	inputs = document.querySelectorAll('input'),
	risk_per_trade = document.getElementById('riskPerTrade'),
	profit = document.getElementById('profit'),
	loss = document.getElementById('loss'),
	realized_profit = document.getElementById('realizedprofit'),
	positionsize = document.getElementById('positionsize'),
	resetBtn = document.getElementById('reset'),
	output = document.querySelectorAll('.output')

const numOnly = (e) => {
	var charCode = e.which ? e.which : e.keyCode
	if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
		e.preventDefault()
	}
}

const calculate = () => {
	/* 
           profit =  pos size * tp
           loss = pos size * sl
           risk per trad = margin * capitalrisk
            realizepnl =  profit - loss
            pos size = margin * leverage
    */
	const rpt = parseInt(margin.value * (capital_risk.value / 100))
	const posize = parseInt(margin.value * leverage.value)
	const posizeValue = positionsize.innerText.replace('$', '')
	const total_profit = parseInt(posizeValue * (takeprofit.value / 100))
	const total_loss = parseInt(posizeValue * (stoploss.value / 100))
	const total_pnl = parseInt(total_profit - total_loss)
	risk_per_trade.innerText = `$${rpt || 0}.00`
	positionsize.innerText = `$${posize || 0}.00`
	profit.innerText = `$${total_profit || 0}.00`
	loss.innerText = `$${total_loss || 0}.00`
	realized_profit.innerText = `$${total_pnl || 0}.00`
}

inputs.forEach((input) => {
	input.addEventListener('input', calculate)
})

resetBtn.addEventListener('click', () => {
	inputs.forEach((input) => {
		input.value = ''
	})
	output.forEach((res) => {
		res.innerText = '$0.00'
	})
})

