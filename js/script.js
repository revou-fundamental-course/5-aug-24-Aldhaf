document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  // Validate the inputs
  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert("Harap masukkan nilai yang valid.");
    return;
  }

  // Convert height from cm to meters
  const heightM = heightCm / 100;

  // Calculate BMI
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  // Determine BMI status
  let bmiStatus = "";
  if (bmi < 18.5) {
    bmiStatus = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus = "Kelebihan berat badan";
  } else {
    bmiStatus = "Obesitas";
  }

  // Display the results
  document.getElementById("bmiValue").textContent = `BMI: ${bmi}`;
  document.getElementById("bmiStatus").textContent = `Status: ${bmiStatus}`;
});
