import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Row, Col } from 'antd';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Latest News Articles" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="News Papers" href="/trash" {...a11yProps(1)} />
                    <LinkTab label="Discussion groups" href="/spam" {...a11yProps(2)} />
                    <LinkTab label="Sports" href="/spam" {...a11yProps(3)} />
                    <LinkTab label="Business & Finance" href="/spam" {...a11yProps(4)} />
                    <LinkTab label="Entertainment & Leisure" href="/spam" {...a11yProps(5)} />
                    <LinkTab label="Web Sites" href="/spam" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">News room
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">Lanka Academic
                        </a></h5>
                        <h5><a href="http://www.lankapage.com/" target="_blank" rel="noopener noreferrer">Lanka Page
                        </a></h5>
                        <h5><a href="http://www.asiantribune.com/" target="_blank" rel="noopener noreferrer">Asian Tribune
                        </a></h5>
                        <h5><a href="http://www.srilankaguardian.org/" target="_blank" rel="noopener noreferrer">Srilanka Guardian
                        </a></h5>
                        <h5><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">BBC
                        </a></h5>
                        <h5><a href="https://www.news.lk/" target="_blank" rel="noopener noreferrer">Govt.News Portal
                        </a></h5>
                        <h5><a href="https://lankatruth.com/si/" target="_blank" rel="noopener noreferrer">Lanka Truth
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Go Lanka
                        </a></h5>
                        <h5><a href="http://www.lankanewspapers.com/" target="_blank" rel="noopener noreferrer">Lanka Newspappers
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Sooriyan
                        </a></h5>
                        <h5><a href="https://www.lankabusinessonline.com/" target="_blank" rel="noopener noreferrer">Lanka Bussiness
                        </a></h5></Col>
                    <Col span={6}></Col>
                </Row>


            </TabPanel>
            <TabPanel value={value} index={1}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Daily News(english)
                    </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Sunday observer
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Sunday Times
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Sunday Leader
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Lakbima
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Island
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Bottom
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Morning Leader
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Nation
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Irudina
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Lanka Deepa
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Divaina
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Silumina
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Lakbima
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Rivira
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Nawaliya
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Vidusara
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Budusarana
                        </a></h5></Col>
                    <Col span={6}></Col>
                </Row>

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">Inforlanka Forum
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">Srilanka news groups
                        </a></h5>
                        <h5><a href="http://www.lankapage.com/" target="_blank" rel="noopener noreferrer">Tamil News group
                        </a></h5>
                        </Col>
                    <Col span={6}></Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">Latest Cricket News
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">rec:sport.cricket
                        </a></h5>
                        </Col>
                    <Col span={6}></Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">South Asian Securities Markets
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">Currency Converter
                        </a></h5>
                        <h5><a href="http://www.lankapage.com/" target="_blank" rel="noopener noreferrer">Colomobo Stoct Exchange
                        </a></h5>
                       </Col>
                    <Col span={6}></Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">Sirisa FM
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">Misanthaya
                        </a></h5>
                        <h5><a href="http://www.lankapage.com/" target="_blank" rel="noopener noreferrer">Redio Ridma
                        </a></h5>
                        <h5><a href="http://www.asiantribune.com/" target="_blank" rel="noopener noreferrer">Inforlanka chatroom
                        </a></h5>
                        <h5><a href="http://www.srilankaguardian.org/" target="_blank" rel="noopener noreferrer">TNL Radio online
                        </a></h5>
                        <h5><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">Tamil Radio & TV
                        </a></h5>
                        <h5><a href="https://www.news.lk/" target="_blank" rel="noopener noreferrer">Miyuru Gee
                        </a></h5>
                        <h5><a href="https://lankatruth.com/si/" target="_blank" rel="noopener noreferrer">E-Crad
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Lankans on the web
                        </a></h5>
                        <h5><a href="http://www.lankanewspapers.com/" target="_blank" rel="noopener noreferrer">Ketapath pawra
                        </a></h5>
                        <h5><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">Crazy Lanka
                        </a></h5>
                        </Col>
                    <Col span={6}></Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><h5><a href="http://www.infolanka.com/news/" target="_blank" rel="noopener noreferrer">Govt.of Srilanka-official web Portal
                    </a></h5>
                        <h5><a href="http://www.theacademic.org/" target="_blank" rel="noopener noreferrer">Inforlanka
                        </a></h5>
                        <h5><a href="http://www.lankapage.com/" target="_blank" rel="noopener noreferrer">Lanka Web
                        </a></h5>
                        <h5><a href="http://www.asiantribune.com/" target="_blank" rel="noopener noreferrer">LAcNet
                        </a></h5>
                        <h5><a href="http://www.srilankaguardian.org/" target="_blank" rel="noopener noreferrer">Srilanka Telecom
                        </a></h5>
                        <h5><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">Embassy of Srilanka-US
                        </a></h5>
                        <h5><a href="https://www.news.lk/" target="_blank" rel="noopener noreferrer">Click map of Srilanka
                        </a></h5>
                        </Col>
                    <Col span={6}></Col>
                </Row>
            </TabPanel>
        </div>
    );
}