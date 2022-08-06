class App extends React.Component{
 constructor(){
  super();

   this.state = {
    searchKeyword: 'Hello',
   };
 }
 
  render() {
    return ( 
      <>
        <header>
          <h2 className="container">검색</h2>
    
        </header>
        <div class="container">
          <form>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요." 
              autoFocus 
              value={this.state.searchKeyword}
            />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
        </> 
    ); 
  }
}


ReactDOM.render(<App />, document.querySelector("#app"));

