const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 3999,
        amount: 1
    },
    {
        title: 'Google pixel',
        price: 4999,
        amount: 2
    },{
        title: 'Xiaomi Redme Note 2',
        price: 5999,
        amount: 3
    },{
        title: 'Xiaomi Redme Note 6',
        price: 10999,
        amount: 4
    },
];

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
    const {amount, price} = cartItem;
    // Count Item
    total.totalItems += amount;

    // count sum
    total.cartTotal += amount * price;
    return total
}, {
    totalItems: 0,
    cartTotal: 0
})
console.log(totalItems, cartTotal);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo) => {
        const {language} = repo;
        if(language) {
            if(total[language]) {
                total[language] = total[language] + 1;
            } else {
                total[language] = 1;
            }
        }

        // OR This works the same as above
        // if(language) {
        //     total = total[language] + 1 || 1;
        // }
        return total;
    }, {});
    console.log(newData)
}
fetchRepo()