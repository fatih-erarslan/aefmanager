var data = {
    labels: ["Emotional Well Being", "Interpersonal Relationships", "Social Inclusion", "Personal Development","Self Determination", "Physical Well Being", "Material Well Being", "Rights"],
    datasets: [
        {
            label: "Quality of Life Domains",
            backgroundColor: "rgba(68,181,238,0.2)",
            borderColor: "rgba(68,181,238,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [10, 9, 8, 7, 6, 5, 4, 3]
        },
      {
            label: "Quality of Life Domains",
            backgroundColor: "rgba(68,181,238,0.2)",
            borderColor: "rgba(68,181,238,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [1, 2, 3, 4, 5, 6, 7, 8]
        },
      {
            label: "Quality of Life Domains",
            backgroundColor: "rgba(68,181,238,0.2)",
            borderColor: "rgba(68,181,238,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [10, 10, 2, 8, 7, 9, 9, 5]
        }
    ]
};

var ctx = document.getElementById("radarChart");

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      scale: {
        ticks: {
            beginAtZero: true
        }
      }
    }
});
