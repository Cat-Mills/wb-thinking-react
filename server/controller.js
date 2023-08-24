
let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalId = 5

const handlerFunctions = {

    getInvoices: (req,res) => {
        res.send(TEST_DATA)
    },

    addItem: (req,res) => {
        //get the values from req.body
        const {description} = req.body
        //create the new object to add to test data
        const newObj = {
            id: globalId,
            description: description,
            rate: 0,
            hours: 0
        }
        //push new object into test data
        TEST_DATA.push(newObj)
        //increase globalId by 1
        globalId++
        //send back the new object to the front end
        res.send(newObj)
    },

    deleteItem: (req,res) => {
        const {id} = req.params

        let filteredList = TEST_DATA.filter(el => el.id !== +id)

        TEST_DATA = filteredList

        res.send('Item deleted')

    },

    editItem: (req,res) => {
        const {id} = req.params
        const {description, rate, hours} = req.body

        let index = TEST_DATA.findIndex(el => el.id === +id)
        
        let item = TEST_DATA[index]
        
        item.description = description ?? item.description
        item.hours = +hours ?? item.hours
        item.rate = +rate ?? item.rate

        res.send(item)
    }

}

export default handlerFunctions