function calculateEnergy() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;
    const result = document.getElementById('result');

    if (age && gender && activity) {
        let energyIntake = 0;

        // Updated energy intake values based on provided data (in kcal/day)
        const rniData = {
            male: {
                13: {
                    low: 1930,
                    moderate: 2210,
                    high: 2480,
                    veryhigh: 2760
                },
                16: {
                    low: 2050,
                    moderate: 2340,
                    high: 2640,
                    veryhigh: 2930
                }
            },
            female: {
                13: {
                    low: 1580,
                    moderate: 1810,
                    high: 2040,
                    veryhigh: 2260
                },
                16: {
                    low: 1660,
                    moderate: 1890,
                    high: 2130,
                    veryhigh: 2370
                }
            }
        };

        // Get the correct energy intake from RNI data
        energyIntake = rniData[gender][age][activity];

        // Display the result
        result.textContent = `Recommended Energy Intake: ${energyIntake} kcal/day`;
    } else {
        result.textContent = 'Please fill out all fields.';
    }
}

