import React, { Component } from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import PreviewRounded from "@mui/icons-material/PreviewRounded";
import SweetAlert from "react-bootstrap-sweetalert";

export default class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [
        { name: "Photo", id: 1 },
        { name: "Signature", id: 2 },
      ],
      UG: [{ name: "UG MarkSheet", id: 1 }],
      OBC: [
        { name: "Caste Certificate", id: 1 },
        { name: "Caste Validity", id: 2 },
      ],

      personalData: true,
      ugData: true,
      obcData: true,
      open: false,
    };
  }

  onSubmit = (event) => {
    // event.preventDefault();
    // event.persist();
    this.setState({ open: !this.state.open });
  };

  handleAlertCanel = () => {
    this.setState({ open: !this.state.open });
  };

  handleNext = () => {
    this.props.nextStep();
  };

  onChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.log("img data : ", e.target.result);
    };
  };

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          textAlign: "left",
          margin: "30px 18% 0 18%",
        }}
      >
        {/* Popup on Success */}
        <div>
          <SweetAlert
            success
            show={this.state.open}
            title="Documents Uploaded Successfully"
            onConfirm={this.handleAlertCanel}
            customButtons={
              <React.Fragment>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    this.handleAlertCanel();
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    this.handleNext();
                  }}
                  style={{ marginLeft: "20px" }}
                >
                  Next
                </Button>
              </React.Fragment>
            }
          ></SweetAlert>
        </div>

        <div
          style={{ fontSize: "28px", fontWeight: "700", marginBottom: "10px" }}
        >
          Documents
        </div>
        <Table>
          <TableBody>
            {/*________condition PERSONAL_____ */}
            {this.state.personalData && (
              <div>
                {this.state.personal.map((str) => (
                  <>
                    <TableRow>
                      <TableCell style={{ width: "80%", fontSize: "18px" }}>
                        {str.name}
                      </TableCell>
                      <TableCell style={{ width: "20%" }}>
                        <div>
                          <input
                            type="file"
                            name="file"
                            onChange={this.onChange}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Avatar>
                            <PreviewRounded />
                          </Avatar>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </div>
            )}
            {/*________condition UG Details_____ */}
            {this.state.ugData && (
              <div>
                {this.state.UG.map((str) => (
                  <>
                    <TableRow>
                      <TableCell style={{ width: "80%", fontSize: "18px" }}>
                        {str.name}
                      </TableCell>
                      <TableCell style={{ width: "20%" }}>
                        <div>
                          <input
                            type="file"
                            name="file"
                            onChange={this.onChange}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Avatar>
                            <PreviewRounded />
                          </Avatar>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </div>
            )}
            {/*________condition PERSONAL_____ */}
            {this.state.obcData && (
              <div>
                {this.state.OBC.map((str) => (
                  <>
                    <TableRow>
                      <TableCell style={{ width: "80%", fontSize: "18px" }}>
                        {str.name}
                      </TableCell>
                      <TableCell style={{ width: "20%" }}>
                        <div>
                          <input
                            type="file"
                            name="file"
                            onChange={this.onChange}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Avatar>
                            <PreviewRounded />
                          </Avatar>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </div>
            )}
          </TableBody>
        </Table>

        <button
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            padding: "5px",
            width: "100px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "cadetblue",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={this.onSubmit}
        >
          {" "}
          Next
        </button>
      </div>
    );
  }
}
