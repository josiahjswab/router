# Portal

This is code that was refactored out of the final app but deemed interesting enough to keep a record of it:


## Effective Refactoring comment habit:
#### While transforming this app from class components into functional 
for the greater purpose of implementing hooks. It was necessary to take time to comment out all the class constructor logic as a reference for implmenting the hooks in their place. Below is such an example of a bit of code that was dependant on the class constructor state commented out and then superceded by the new `toggle` hook object.
```
<button 
    className='button' 
    onClick={/**() => {
        this.state.toggleSaved ? 
        this.setState({toggleSaved: false}) : 
        this.setState({toggleSaved: true}) 
    }*/ toggle}
>
    toggle 
</button>
```

This example shows the same refactoring concept as ⬆ but it is changing a class method() into an arrow function const component.
```
// getSearch() {
//     axios.get(`https://api.jikan.moe/v3/search/anime?q=%${this.state.searchInput}&page=1`)
//         .then(res => this.setState({ searchData: res.data.results}, () => console.log(this.state.searchData)))
//         .catch(err => console.log('Error triggered in App.js at getSearch().' + err));
// }
const getSearch = () => {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=%${searchInput}&page=1`)
        .then(res => setSearchData( res.data.results ))
        .catch(err => console.log('Error triggered in App.js at getSearch().' + err));
};
```
