document.getElementById('root').innerHTML = `
  <div style='font-family: sans-serif; padding: 20px; max-width: 400px; margin: auto;'>
    <h2>Job Quote Calculator</h2>
    <label>Labor Rate:
      <select id='rate'>
        <option value='60'>$60/hr</option>
        <option value='80' selected>$80/hr</option>
        <option value='120'>$120/hr (Emergency)</option>
      </select>
    </label><br><br>

    <label>Hours Worked: <input id='hours' type='number' /></label><br><br>
    <label>Material Cost ($): <input id='materials' type='number' /></label><br><br>
    <label>Notes:<br><textarea id='notes' rows='3' style='width: 100%'></textarea></label><br><br>
    <label>Upload Photo: <input id='photo' type='file' /></label><br><br>

    <button onclick='calc()'>Calculate Quote</button>
    <h3 id='result'></h3>
  </div>
`;

function calc() {
  const rate = parseFloat(document.getElementById('rate').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const materials = parseFloat(document.getElementById('materials').value);
  const total = (rate * hours) + (materials * 1.3);
  document.getElementById('result').innerText = 'Total Quote: $' + total.toFixed(2);
}
