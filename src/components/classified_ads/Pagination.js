import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
 
const theme = createMuiTheme();
 
class AdsPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }
 
  handleClick(offset) {
    this.setState({ offset });
  }
 
  render() {
    const styles = {
        backgroundColor: '#ffffff',
        width: `44%`,
        margin: '0 auto'
    };
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          style={styles}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </MuiThemeProvider>
    );
  }
}

export default AdsPagination;