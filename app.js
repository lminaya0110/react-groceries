class App extends React.Component {

    constructor(props) {
        // super()
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        items: items,
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
)