const flights = [
    {
        airline: 'American',
        flights: 100,
        departs: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        airport: "SAN"
    },
    {
        airline: 'Southwest',
        flights: 10,
        departs: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        airport: "LAX"
    },
    {
        airline: 'United',
        flights: 80,
        departs: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        airport: "DAL"
    },
    {
        airline: 'United',
        flights: 80,
        departs: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        airport: "SEA"
    }
]

module.exports = flights