class App extends React.Component{
 constructor(){
  super();

   this.state = {
    searchKeyword: 'Hello',
   };
 }

 handleChangeInput(event){
  // this.state.searchKeyword = event.target.value;
  // this.forceUpdate();

  // setState를 생성해서 사용해라
  this.setState({
    searchKeyword: event.target.value
  });
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
              onChange={event => this.handleChangeInput(event)}
            />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
        </> 
    ); 
  }
  }


ReactDOM.render(<App />, document.querySelector("#app"));

