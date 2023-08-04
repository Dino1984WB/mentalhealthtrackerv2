// Get references to the 'Save' button and the slider
const saveBtn = document.getElementById('saveBtn');
const slider = document.getElementById('slider');

// Define an object to hold our graph data
let graphData = {
    labels: [], // These will be our timestamps
    datasets: [{
        label: 'Mental Health Rating',
        data: [], // These will be our ratings
        backgroundColor: 'rgba(0,0,255,0.1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2
    }]
};

// Keep a reference to the graph
let graph;

// This function is called whenever the 'Save' button is clicked
function saveData() {
    // Get the current rating from the slider and the current date/time
    const rating = slider.value;
    const now = new Date();

    // Add them to the graph data
    graphData.labels.push(moment(now).format('YYYY-MM-DD HH:mm:ss'));
    graphData.datasets[0].data.push(rating);

    // If the graph hasn't been created yet, create a new one.
    if (!graph) {
        const ctx = document.getElementById('graph').getContext('2d');
        graph = new Chart(ctx, {
            type: 'line',
            data: graphData,
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Rating'
                        }
                    }
                }
            }
        });
    } 
    // If the graph has already been created, simply update it.
    else {
        graph.update();
    }
}

// Add an event listener to the 'Save' button to call the saveData function when clicked
saveBtn.addEventListener('click', saveData);
