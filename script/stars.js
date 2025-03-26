const API_ID = "7a4932e8-4559-4a46-bc48-082cdc35684a";
const API_SECRET = "0e9ffca22c362d1f19cccfa2f1c215a95a962d4ffa1e52aa8f705fe5f0e22a33ea8490b0ef2b9f2d294a31664717344c0162a79bb1de6e4b0175f929d88337cd1864d9cebf0cd0c4dc0bf465507e7a4f6487c9a8da7b8b1ce74bb61195d8567592094a58fd9aeeebd07ae9ab0832ae4d";
const BASE_URL = "https://api.astronomyapi.com/api/v2/studio/star-chart";

async function getStarData(message) {
    try {
        // Get user's location
        const position = await getUserLocation();
        const { latitude, longitude } = position.coords;

        // Encode API credentials in Base64
        const authString = btoa(`${API_ID}:${API_SECRET}`);

        // Make API request with Basic Authentication
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Basic ${authString}`);
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "style": "navy",
          "observer": {
            "latitude": latitude,
            "longitude": longitude,
            "date": new Date().toISOString().split('T')[0]
          },
          "view": {
            "type": "constellation",
            "parameters": {
              "constellation": message // 3 letter constellation id
            }
          }
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        const response = await fetch(`${BASE_URL}`, requestOptions);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Validate if the response contains an image
        if (data.data.imageUrl) {
          displayStarData(data);
          console.log("Showing image")
        } else {
          console.error("API response does not contain an image URL.");
        }
    } catch (error) {
        console.error("Error fetching star data:", error);
    }
}

// Function to get user's geolocation
function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// Function to get user's location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
}

// Function to display the star map image
function displayStarData(data) {
    const starMapImg = document.getElementById("star-map-img");
    

    if (!data.data.imageUrl) {
        console.error("No star map image URL found in API response.");
        return;
    }

    starMapImg.src = data.data.imageUrl;  // Usa la URL de la imagen
}

// Run function when page loads
// document.addEventListener("DOMContentLoaded", getStarData());
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnandromeda").addEventListener("click", function () {
    getStarData("and");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnTucana").addEventListener("click", function () {
    getStarData("tuc");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnOrion").addEventListener("click", function () {
    getStarData("ori");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnAntila").addEventListener("click", function () {
    getStarData("ant");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnTaurus").addEventListener("click", function () {
    getStarData("tau");
  });
});


