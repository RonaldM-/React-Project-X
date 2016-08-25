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
            <div className="box col-lg-12">
                <div className="counter col-lg-12 text-center">
                    {this.state.count}
                </div>
                <div className="button col-lg-12 text-center">
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
    document.getElementById('centerbox')
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
