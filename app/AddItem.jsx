var React = require('react');

var FriendsContainer = React.createClass({
    getInitialState: function(){
      return {
        name: 'Alex Rusev',
        friends: [],
      }
    },
    addFriend: function(friend){
      this.state.friends.push(friend);
      this.setState({
        friends: this.state.friends
      });
    },
    render: function(){
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <AddFriend addNew={this.addFriend} />
          <ShowList names={this.state.friends} />
        </div>
      )
    }
});

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
          <button onClick={this.handleAddNew}> Add Friend </button>
        </div>
    );
  }
});

var ShowList = React.createClass({

  render: function(){
    var listItems = this.props.names.map(function(friend){
      return (
      	<li> 
      		{friend} <button onClick={this.handleRemove}> Remove Friend </button>
      	</li>
      )
    });
    return (
        <div>
          <h3> Friends </h3>
          <ul>
            {listItems}
          </ul>
        </div>
    )
  }
});

module.exports = FriendsContainer;