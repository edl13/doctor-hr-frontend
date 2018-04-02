import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import List, { ListItem } from 'material-ui/List';
// import { withStyles } from 'material-ui/styles';
import axios from 'axios';

const styles = {
  buttonStyle: {
    marginLeft: '10px',
  },
  HRStyle: {
    float: 'left',
    marginLeft: '30px'
  },
  timeStyle: {
    float: 'right',
    marginRight: '30px',
    color: 'gray'
  }
};

class EmailField extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      data: null
    };
    this.getData.bind(this);
    this.handleEmailChange.bind(this);
    this.setState.bind(this);
    this.populateList.bind(this);
  }

  getData = () => {
    const { email } = this.state;
    const emailURI = email.replace('@', '%40');
    const URL = `http://127.0.0.1:5000/api/heart_rate/${emailURI}`;
    axios.get(URL).then((response) => {
      this.setState({ data: response.data });
    });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  populateList = () => {
    const { data } = this.state;
    if (data == null) {
      return <ListItem key="0">No data found.</ListItem>;
    }
    const { heart_rate: hrlist } = data;
    const { heart_rate_times: times } = data;
    const list = hrlist.map((hr, i) => {
      const time = times[i];
      return (
        <ListItem key={i.toString()}>
          <div style={styles.HRStyle}>
            {`HR: ${hr}`}
          </div>
          <div style={styles.timeStyle}>
            {`Time: ${time}`}
          </div>
        </ListItem>
      );
    });
    return (list);
  }

  render() {
    return (
      <div>
        <TextField
          hintText="User Email"
          floatingLabelText="User Email"
          onChange={this.handleEmailChange}
        />
        <RaisedButton style={styles.buttonStyle} label="Submit" onClick={this.getData} />
        <List>
          {this.populateList()}
        </List>
      </div>

    );
  }
}

export default EmailField;
