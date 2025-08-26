$(function () {

    // =====================================
    // Website visits chart
    // =====================================
    var options = {
        series: [
            {
                name: "Site A",
                data: [25, 40, 35, 30, 25, 43, 25, 35, 30, 40, 32, 27]
            },
            {
                name: "Site B",
                data: [25, 30, 30, 40, 30, 27, 30, 45, 28, 30, 22, 43]
            },
        ],

        chart: {
            type: 'bar',
            height: 250,
            stacked: true,
            toolbar: {
                show: false
            },
            foreColor: "#adb0bb",
            fontFamily: "inherit",
        },

        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "20%",
                columnWidth: "32%",
                borderRadius: 5,
                borderRadiusApplication: "end", // 'around', 'end'
                borderRadiusWhenStacked: "all", // 'all', 'last'
            },
        },

        colors: ["var(--bs-primary)", "var(--bs-secondary)"],

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        grid: {
            borderColor: "var(--bs-border-color)",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                formatter: function (value) {
                    return value / 10 + "k";
                }
            },
        },

        xaxis: {
            type: "category",
            categories: [
                `Jan`,
                `Feb`,
                `Mar`,
                `APR`,
                `MAY`,
                `JUN`,
                `JUL`,
                `AUG`,
                `SEP`,
                `OCT`,
                `NOV`,
                `DEC`,
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    fontSize: "12px",
                },
            },
        },


        tooltip: {
            theme: "dark",
        }
    };

    var chart = new ApexCharts(document.querySelector("#website-visits"), options);
    chart.render();


    // =====================================
    // Key Insights chart
    // =====================================

    var options = {
        series: [
            { name: 'Asia', data: [38] },
            { name: 'USA', data: [20] },
            { name: 'Europe', data: [26] }
        ],
        chart: {
            type: 'bar',
            fontFamily: 'inherit',
            height: 22,
            stacked: true,
            stackType: '100%',
            toolbar: { show: false },
            sparkline: { enabled: true },
            animations: { enabled: false },
            margin: 0,
            offsetX: 0,
            offsetY: 0
        },
        colors: ["var(--bs-primary)", "var(--bs-warning)", "var(--bs-secondary)"],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%', // makes the bar thin
                borderRadius: 4
            }
        },
        stroke: {
            show: true,
            colors: "var(--bs-card-bg)",
            width: 3,
        },
        dataLabels: { enabled: false },
        xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: { show: false }
        },
        grid: {
            show: false,
            padding: { left: 0, right: 0, top: 0, bottom: 0 }
        },
        legend: { show: false },
        tooltip: {
            enabled: true,
            theme: 'dark'
        },
    };

    var chart = new ApexCharts(document.querySelector("#total-assets"), options);
    chart.render();

})