
const createOrderCardBillTable = (billDetails) => {
    let customerName = document.getElementById('customerName').value;
	// Calculate Total Amount 
	let totalAmount = 0
	billDetails.forEach(element => {
		totalAmount = totalAmount + element.price
	})

	/* ---------------------------------------------------------------- */

	let billTable = document.createElement('table')
	let billTableHead = document.createElement('thead')
	let billTableBody = document.createElement('tbody')

	billTable.classList = 'table'

	/* ---------------------------------------------------------------- */
	// 1. Creating Heading Row
    let billHeadingRow1 = document.createElement('tr')
	let billHeadingColumn11 = document.createElement('th')
	let billHeadingColumn12 = document.createElement('th')

	billHeadingColumn11.innerText = ' Customer Name'
	billHeadingColumn12.innerText = `${customerName}`
    

	let billHeadingRow2 = document.createElement('tr')
	let billHeadingColumn21 = document.createElement('th')
	let billHeadingColumn22 = document.createElement('th')
	let billHeadingColumn23 = document.createElement('th')

	billHeadingColumn21.innerText = '#'
	billHeadingColumn22.innerText = 'Item'
	billHeadingColumn23.innerText = 'Price'
	
	billHeadingRow1.append(billHeadingColumn11, billHeadingColumn12)
	billHeadingRow2.append(billHeadingColumn21, billHeadingColumn22, billHeadingColumn23)
	billTableHead.append(billHeadingRow1)
	billTableHead.append(billHeadingRow2)

	/* ---------------------------------------------------------------- */
	// 2. Creating Item Rows
	let billTableRows = []
	for(let i = 1; i <= billDetails.length; i++){
		billTableRows.push(document.createElement('tr'))

		let billTableColumns = []
		for(let j = 0; j < 3; j++) 
			billTableColumns.push(document.createElement('td'))

		billTableColumns[0].innerText = i
		billTableColumns[1].innerText = billDetails[i - 1].item
		billTableColumns[2].innerText = `Rs${billDetails[i - 1].price.toFixed(2)}`

		billTableRows[i - 1].append(...billTableColumns)
	}

	/* ---------------------------------------------------------------- */
	// 3. Creating Total Bill Row
	let totalBillTH = document.createElement('th')
	totalBillTH.setAttribute('colspan', 2)
	totalBillTH.innerText = 'Total'
	let totalBillTD = document.createElement('td')
	totalBillTD.innerText = `Rs${totalAmount.toFixed(2)}`
	let totalBillRow = document.createElement('tr')
	totalBillRow.append(totalBillTH, totalBillTD)

	/* ---------------------------------------------------------------- */
	billTableBody.append(...billTableRows, totalBillRow)
	billTable.appendChild(billTableHead)
	billTable.appendChild(billTableBody)

	return billTable
}