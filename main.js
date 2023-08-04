const saveBtn = document.getElementById('saveBtn');
const slider = document.getElementById('slider');
let graphData = {
    labels: [],
    datasets: [{
        label: 'Mental Health Rating',
        data: [],
        backgroundColor: 'rgba(0,0,255,0.1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2
    }]
};
let graph;

function saveData() {
    const rating = slider.value;
    const now = new Date();

    graphData.labels.push(now.toISOString());
    graphData.datasets[0].data.push(rating);

    if (!graph) {
        const ctx = document.getElementById('graph').getContext('2d');
        graph = new Chart(ctx, {
            type: 'line',
            data: graphData,
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }]
                }
            }
        });
    } else {
        graph.update();
    }
}

saveBtn.addEventListener('click', saveData);
