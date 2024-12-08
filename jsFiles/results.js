// Event listener for the button click
document.getElementById("findBestApartment").addEventListener("click", function() {
    // Get values from the range inputs (assuming you have these inputs in the HTML)
    const school = parseInt(document.getElementById("school").value);
    const eatery = parseInt(document.getElementById("eatery").value);
    const laundry = parseInt(document.getElementById("laundry").value);
    const store = parseInt(document.getElementById("store").value);

    // Set preferences based on the range slider values
    const preferences = {
        School: school,
        Eatery: eatery,
        Laundry: laundry,
        Store: store
    };

    // Compute the best apartments based on the preferences
    const topApartments = computeBestApartments(preferences);

    // Get the results container and clear any previous results
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    // Display the results or message if no apartments are found
    if (topApartments.length > 0) {
        topApartments.forEach((apartment, index) => {
            const { apartment: name, score, distances } = apartment;
            resultsContainer.innerHTML += `
                <h3 class="text-lg font-black">${index + 1}. ${name}</h3>
                <p>Score: ${score.toFixed(3)}</p>
                <p><strong>Nearest Amenities:</strong></p>
                <ul>
                    <li>School: ${distances.School.toFixed(3)} km</li>
                    <li>Eatery: ${distances.Eatery.toFixed(3)} km</li>
                    <li>Laundry: ${distances.Laundry.toFixed(3)} km</li>
                    <li>Store: ${distances.Store.toFixed(3)} km</li>
                </ul>
            `;
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found. Please adjust your preferences and try again.</p>";
    }
});

// Graph representing all distances between locations
const graph = {
    "6 Venice Apartment": { "888 Miami Apartment": 0.032, "MSEUF": 0.435, "Juliet Store": 0.283 },
    "888 Miami Apartment": { "6 Venice Apartment": 0.032 },
    "Juliet Store": { "6 Venice Apartment": 0.283, "MSEUF": 0.646, "FJVS Laundry House": 0.033, "Kuya Jaime Tapsilogan": 0.077 },
    "Spinman Laundry Shop": { "RC Mini Mart": 0.055 },
    "Kubbos": { "RC Mini Mart": 0.039 },
    "730 Madrid Building Apartment": { "Kainan Kina Inay": 0.298 },
    "FJVS Laundry House": { "Juliet Store": 0.033, "AlfaMart": 0.168 },
    "MSEUF": { "Juliet Store": 0.646, "Albod Eatery": 0.162, "6 Venice Apartment": 0.435 },
    "Albod Eatery": { "MSEUF": 0.162, "Isaiahs Foodhub": 0.27, "QuickMart": 0.41 },
    "Isaiahs Foodhub": { "Albod Eatery": 0.27, "RC Mini Mart": 0.059 },
    "RC Mini Mart": { "Isaiahs Foodhub": 0.059, "Kubbos": 0.039, "Spinman Laundry Shop": 0.055, "Kainan Kina Inay": 0.099, "14 Geneva Apartment": 0.215 },
    "Kainan Kina Inay": { "RC Mini Mart": 0.099, "Mabulang Buhay Laundry Shop": 0.057, "730 Madrid Building Apartment": 0.298 },
    "Mabulang Buhay Laundry Shop": { "Kainan Kina Inay": 0.057 },
    "14 Geneva Apartment": { "RC Mini Mart": 0.215, "460 Harvard Apartment": 0.245, "Georelle Store": 0.036 },
    "460 Harvard Apartment": { "14 Geneva Apartment": 0.245, "Pink Mansion": 0.26 },
    "Pink Mansion": { "460 Harvard Apartment": 0.26, "Georelle Store": 0.062, "Tub Spin Laundry Services": 0.71, "Therabridge Therapy Center": 0.219, "QuickMart": 0.408 },
    "Therabridge Therapy Center": { "Pink Mansion": 0.219, "Tambiloc Compound Apartment": 0.177 },
    "Tambiloc Compound Apartment": { "Therabridge Therapy Center": 0.177, "Pink Mansion": 0.34 },
    "QuickMart": { "Pink Mansion": 0.408, "Albod Eatery": 0.41 },
    "Georelle Store": { "Pink Mansion": 0.062, "14 Geneva Apartment": 0.036 },
    "Kuya Jaime Tapsilogan": { "Juliet Store": 0.077 },
    "AlfaMart": { "FJVS Laundry House": 0.168 }
};

// List of apartments
const apartments = [
    "6 Venice Apartment", "888 Miami Apartment", "730 Madrid Building Apartment", 
    "14 Geneva Apartment", "460 Harvard Apartment", "Pink Mansion", 
    "Therabridge Therapy Center", "Tambiloc Compound Apartment"
];

// List of amenities
const amenities = {
    "School": ["MSEUF"],
    "Eatery": ["Kubbos", "Isaiahs Foodhub", "Albod Eatery", "Kuya Jaime Tapsilogan", "Kainan Kina Inay"],
    "Laundry": ["Spinman Laundry Shop", "Tub Spin Laundry Services", "FJVS Laundry House", "Mabulang Buhay Laundry Shop"],
    "Store": ["Georelle Store", "RC Mini Mart", "Juliet Store", "AlfaMart", "QuickMart"]
};

// Dijkstra's algorithm to find the shortest distance
function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    queue.push([start, 0]);

    while (queue.length > 0) {
        queue.sort((a, b) => a[1] - b[1]); // Sort by distance
        const [currentNode, currentDistance] = queue.shift();

        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        for (let neighbor in graph[currentNode]) {
            const newDistance = currentDistance + graph[currentNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                queue.push([neighbor, newDistance]);
            }
        }
    }
    return distances;
}

// Compute weighted sum based on preferences
function computeBestApartments(preferences) {
    const results = [];

    apartments.forEach(apartment => {
        const distances = dijkstra(graph, apartment);
        let totalScore = 0;
        let nearestAmenities = {};

        // Find minimum distances for each amenity category
        for (let category in preferences) {
            let minDistance = Infinity;
            let nearestAmenity = "";

            // Find nearest amenity in the current category
            for (let location of amenities[category]) {
                if (distances[location] < minDistance) {
                    minDistance = distances[location];
                    nearestAmenity = location;
                }
            }
            nearestAmenities[category] = minDistance;
            totalScore += minDistance * preferences[category];
        }

        results.push({ apartment, score: totalScore, distances: nearestAmenities });
    });

    // Sort results by score (ascending order, so best comes first)
    results.sort((a, b) => a.score - b.score);

    // Return the top 3 apartments
    return results.slice(0, 3);
}
