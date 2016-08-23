var Counter = React.createClass({
    getInitialState: function(){
        return {count: 0};
    },
    counterIncrement: function(){
        this.setState({
            count: this.state.count + 1,
        });
    },
    render: function(){
        return(
        <div className="box">
            <div className="counter">
                {this.state.count}
            </div>
            <div className="button">
                <a onClick={this.counterIncrement}>
                    Click on it!
                </a>
            </div>
        </div>
        );
    }
});
ReactDOM.render(
    <Counter/>,
    document.getElementById('container')
);



//
//
//
//
//var Counter = React.createClass({
//        getInitialState: function () {
//          return { count: 1 };
//        },
//        andleClick: function () {
//          this.setState({
//            count: this.state.count + 1,
//          });
//        },
//        render: function () {
//          return (
//            <button onClick={this.andleClick}>
//              Click me! Number of clicks: {this.state.count}
//            </button>
//          );
//        }
//      });
//      ReactDOM.render(
//        <Counter />,
//        document.getElementById('container')
//      );
