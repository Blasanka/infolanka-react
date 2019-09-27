import {Layout, Menu, Breadcrumb, Row} from 'antd';
import React from "react";
import Typography from "@material-ui/core/Typography";
import TabPanel from "./Tab";

const {Header, Content, Footer} = Layout;

export default class Dalyscope extends React.Component {
    render() {
        return <React.Fragment>
            <Typography variant="h1" display="block" gutterBottom  align={"center"}>
                Daly scoop
            </Typography>
            <TabPanel/>
        </React.Fragment>
    }

}